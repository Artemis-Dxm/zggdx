// Cloudflare Worker 代码
// 部署方法：
// 1. 访问 https://workers.cloudflare.com 注册/登录
// 2. 创建新Worker，粘贴此代码
// 3. 把你的智谱AI API Key 填入下方的 API_KEY
// 4. 部署后得到 URL，填入 index.html 中的 API_BASE

const API_KEY = 'your-zhipu-api-key-here';

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    try {
      const body = await request.json();
      const { content, action, teaching_summary, previous_version } = body;

      let systemPrompt, userPrompt;

      if (action === 'review') {
        if (previous_version) {
          systemPrompt = `你是一个教学文档审核专家，同时擅长版本对比分析。

【参考标准 - 教学文档核心要点】
${teaching_summary}

【历史版本摘要】
该文档已有 ${previous_version.versionCount || '多'} 个版本。
上一版本评分: ${previous_version.score || '未评分'}
上一版本审核意见: ${previous_version.review || '无'}

请对待审核的文档进行审核，并重点进行版本对比分析：
1. 与参考标准的符合程度
2. 与上一版本的对比分析：进步了多少？哪些地方改好了？哪些地方仍需改进？
3. 给出具体的改进建议
4. 最终评分（1-10分）

【重要】请在回复的最后用以下格式：
最终评分：X分
与上版本相比：进步↑/退步↓/持平→
`;
          userPrompt = `请审核以下文档，这是新版本：\n\n${content}`;
        } else {
          systemPrompt = `你是一个教学文档审核专家。请根据已学习的教学文档（参考标准），审核待审核的文档。

【参考标准 - 教学文档核心要点】
${teaching_summary}

请对待审核的文档进行详细评价，包括：
1. 与参考标准的符合程度
2. 优点和亮点
3. 需要改进的地方
4. 总体评价

重要：请在审核意见的最后，用"最终评分：X分"格式给出你的评分（1-10分）。`;
          userPrompt = `请审核以下文档：\n\n${content}`;
        }
      } else if (action === 'question_gen') {
        systemPrompt = `你是一位严格的学术评审专家，擅长从不同学术立场对论文进行质疑。请仔细阅读论文，针对其核心论点，模拟最有可能被同行专家质疑的问题。

要求：
1. 找出论文的3-5个核心论点或结论
2. 针对每个核心论点，生成1-2个尖锐的质疑问题
3. 质疑要基于真实的学术争议，而非吹毛求疵
4. 格式：先引用论文原文，再提出质疑，最后给出可能的回应方向

请用以下JSON格式返回：
{
  "questions": [
    {
      "thesis": "论文中的核心论点原文引用",
      "question": "质疑问题",
      "possible_response": "可能的回应方向"
    }
  ]
}`;
        userPrompt = `请对以下论文进行预设质疑生成：\n\n${content}`;
      } else if (action === 'weakness_check') {
        systemPrompt = `你是一位严格的学术编辑，擅长发现论文中"断言多、证据少"的薄弱环节。

请仔细阅读论文，找出以下类型的薄弱语句：
1. 未经充分论证的结论性断言
2. 引用资料未加分析就作为证据使用
3. 逻辑推导过程不完整
4. 与权威观点相悖但未作充分回应
5. 使用模糊表述回避关键问题

要求：
- 标注具体的句子（用引号引用）
- 指出为何这是薄弱环节
- 提供具体的改进建议

请用以下JSON格式返回：
{
  "weak_points": [
    {
      "sentence": "薄弱语句原文",
      "reason": "为何薄弱",
      "suggestion": "改进建议"
    }
  ]
}`;
        userPrompt = `请检测以下论文的薄弱环节：\n\n${content}`;
      } else if (action === 'position_analysis') {
        systemPrompt = `你是一位学术史专家，擅长分析论文作者在学术史中的立场。

请分析论文的学术立场，包括但不限于：
1. 对前人研究成果的态度（继承、批判、超越）
2. 方法论取向（实证、诠释、批判等）
3. 核心概念的使用和理解
4. 参考文献的倾向性
5. 与当前学术主流的关系

请用以下JSON格式返回分析结果：
{
  "positions": [
    {
      "axis_name": "坐标轴名称（如：信古-疑古）",
      "left_label": "左端立场",
      "right_label": "右端立场",
      "marker_position": 30,
      "marker_label": "论文立场",
      "evidence": "判断依据",
      "warning": "警示（如有）"
    }
  ]
}`;
        userPrompt = `请分析以下论文的学术立场：\n\n${content}`;
      } else {
        systemPrompt = '你是一个教学文档分析助手。请仔细阅读用户提供的教学文档，理解其中的教育理念、教学方法和核心观点。然后用简洁的语言总结出该文档的核心要点，以便后续用于审核其他文档的参考。';
        userPrompt = '请理解以下教学文档并总结核心要点：\n\n' + content;
      }

      const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
          model: 'glm-4-flash',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ]
        })
      });

      const result = await response.json();
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};
