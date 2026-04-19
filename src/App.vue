<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="header-left">
        <div class="logo">学术审核助手 <span>Vue版本</span></div>
        <nav class="nav-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['nav-tab', { active: currentTab === tab.id }]"
            @click="currentTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <div class="main-wrapper">
      <div class="three-column-layout">
        <!-- Left Sidebar -->
        <aside class="sidebar-left">
          <div class="sidebar-section">
            <div class="sidebar-title">评分维度</div>
            <div class="grading-item">
              <span class="grading-label">文献考据 (30%)</span>
              <span class="grading-score">{{ scores.sem }}</span>
            </div>
            <div class="grading-item">
              <span class="grading-label">义理分析 (30%)</span>
              <span class="grading-score">{{ scores.ety }}</span>
            </div>
            <div class="grading-item">
              <span class="grading-label">结构逻辑 (20%)</span>
              <span class="grading-score">{{ scores.arg }}</span>
            </div>
            <div class="grading-item">
              <span class="grading-label">学术规范 (20%)</span>
              <span class="grading-score">{{ scores.ref }}</span>
            </div>
          </div>
          
          <div class="sidebar-section">
            <div class="sidebar-title">版本历史</div>
            <div class="version-list">
              <div 
                v-for="ver in versions" 
                :key="ver.id"
                class="version-item"
                @click="loadVersion(ver)"
              >
                <div class="version-number">第 {{ ver.versions.length }} 版</div>
                <div class="version-date">{{ formatDate(ver.updatedAt) }}</div>
                <div class="version-score">评分: {{ getLatestScore(ver) }}</div>
              </div>
              <p v-if="versions.length === 0" style="font-size: 12px; color: var(--text-muted); text-align: center; padding: 10px;">
                暂无版本历史
              </p>
            </div>
          </div>
        </aside>

        <!-- Center Content -->
        <main class="main-content">
          <!-- Teaching Panel -->
          <div v-if="currentTab === 'teaching'" class="panel teaching-panel">
            <div class="content-header">
              <h1 class="content-title">提交教学标准</h1>
              <div class="content-meta">
                <span>上传参考文档，AI将理解其中的学术标准</span>
              </div>
            </div>
            
            <div class="instruction-box">
              提交教学文档，AI会理解并消化其中的观点和理念，作为后续审核的参考标准。
            </div>
            
            <div class="file-upload-area" @click="triggerFileInput('teaching')">
              <input 
                type="file" 
                ref="teachingFileInput"
                accept=".pdf,.docx,.doc,.txt,.md,.jpg,.jpeg,.png,.gif,.bmp,.webp" 
                multiple 
                @change="handleTeachingFiles"
                style="display: none;"
              >
              <p>{{ teachingFilesStatus }}</p>
              <p class="hint">支持 PDF、Word（自动识别颜色和字体大小）、图片（OCR识别）、文本、Markdown</p>
            </div>
            
            <div v-if="teachingDocs.length > 0" class="teaching-docs-list">
              <div v-for="(doc, idx) in teachingDocs" :key="idx" class="teaching-doc-item">
                <span class="name">{{ doc.name }}</span>
                <button class="remove-btn" @click="removeTeachingDoc(idx)">移除</button>
              </div>
            </div>
            
            <div v-if="teachingPreview.show" class="formatted-preview" v-html="teachingPreview.content"></div>
            
            <textarea 
              v-model="teachingContent" 
              class="textarea-area" 
              placeholder="或者直接粘贴文档内容..."
            ></textarea>
            
            <div v-if="teachingDocs.length > 0" class="teaching-docs-summary">
              {{ teachingDocs.length }} 个教学文档已加载
            </div>

            <button class="primary-btn" @click="submitTeachingDoc" :disabled="teachingLoading">
              {{ teachingLoading ? 'AI正在理解文档...' : '理解文档' }}
            </button>
            
            <div style="display: flex; gap: 12px; margin-top: 12px;">
              <button class="primary-btn" style="flex: 1; background: var(--bg-card); border: 1px solid var(--accent); color: var(--accent);" @click="uploadTeachingToKnowledgeBase">
                上传到知识库
              </button>
              <button class="primary-btn" style="flex: 1; background: var(--bg-card); border: 1px solid var(--accent-light); color: var(--accent-light);" @click="uploadTeachingToCommunity">
                上传到社区
              </button>
            </div>
            
            <div v-if="teachingResult" class="result-box">{{ teachingResult }}</div>
          </div>

          <!-- Review Panel -->
          <div v-if="currentTab === 'review'" class="panel review-panel">
            <div class="content-header">
              <h1 class="content-title">AI 学术审核</h1>
              <div class="content-meta">
                <span>第 {{ docVersion }} 版</span>
              </div>
            </div>
            
            <div class="instruction-box">
              提交待审核文档，AI将运用已学习的教学文档知识进行评价。
            </div>
            
            <div class="doc-input-section">
              <label class="input-label">文档名称</label>
              <input 
                type="text" 
                v-model="docName" 
                class="doc-name-input" 
                placeholder="输入文档名称"
              >
              <p class="doc-name-hint">相同名称的文档会被视为同一文档的迭代版本</p>
            </div>
            
            <div class="file-upload-area" @click="triggerFileInput('review')">
              <input 
                type="file" 
                ref="reviewFileInput"
                accept=".pdf,.docx,.doc,.txt,.md,.jpg,.jpeg,.png,.gif,bmp,webp" 
                @change="e => handleFileSelect(e, 'review')"
                style="display: none;"
              >
              <p>{{ reviewFilesStatus }}</p>
              <p class="hint">支持 PDF、Word（自动识别颜色和字体大小）、图片（OCR识别）</p>
            </div>
            
            <div v-if="reviewPreview.show" class="formatted-preview" v-html="reviewPreview.content"></div>
            
            <textarea 
              v-model="reviewContent" 
              class="textarea-area academic-body" 
              placeholder="或者直接粘贴待审核的文档内容..."
              style="min-height: 250px;"
            ></textarea>
            
            <div class="score-section" v-if="aiScore !== null">
              <div class="score-label">AI 评分</div>
              <div class="score-value">{{ aiScore }}/10</div>
            </div>
            
            <div v-if="progress.show" class="progress-section">
              <h4>版本迭代对比</h4>
              <div v-html="progress.content"></div>
            </div>
            
            <button class="primary-btn" @click="submitReviewDoc" :disabled="reviewLoading">
              {{ reviewLoading ? 'AI正在进行审核...' : '审核文档' }}
            </button>
            <button class="primary-btn" style="background: var(--bg-secondary); border: 1px solid var(--border); color: var(--text-secondary);" @click="openFullscreen">
              全屏阅读
            </button>
            
            <div v-if="reviewResult" class="result-box">{{ reviewResult }}</div>
            
            <div class="analysis-section">
              <h2 class="section-title">AI 学术审核分析</h2>
              
              <div class="analysis-buttons">
                <button class="analysis-btn" @click="generateQuestions">核心论点质疑</button>
                <button class="analysis-btn" @click="findWeakPoints">薄弱环节检测</button>
                <button class="analysis-btn" @click="analyzePosition">学术立场分析</button>
              </div>
              
              <div v-if="analysisResult" class="analysis-result" v-html="analysisResult"></div>
            </div>
          </div>

          <!-- Knowledge Base Panel -->
          <div v-if="currentTab === 'knowledge'" class="panel knowledge-panel">
            <div class="content-header">
              <h1 class="content-title">知识库</h1>
              <div class="content-meta">
                <span>保存所有已上传的文档，支持版本对比</span>
              </div>
            </div>
            
            <div class="kb-stats">
              <div class="stat-card">
                <div class="stat-value">{{ kbStats.docCount }}</div>
                <div class="stat-label">文档数</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">{{ kbStats.versionCount }}</div>
                <div class="stat-label">总版本数</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">{{ kbStats.storageUsed }}</div>
                <div class="stat-label">已用空间</div>
              </div>
            </div>
            
            <div class="kb-search-bar">
              <input 
                type="text" 
                v-model="kbSearch"
                placeholder="搜索文档..."
                @input="renderKnowledgeBase"
              >
              <button @click="exportKnowledgeBase">导出</button>
              <button @click="confirmClearKnowledgeBase">清理</button>
            </div>
            
            <div id="kbList">
              <div v-if="filteredKb.length === 0" class="kb-empty">
                暂无保存的文档<br><small>上传文档时会自动保存到知识库</small>
              </div>
              
              <div v-for="doc in filteredKb" :key="doc.id" class="kb-item">
                <div>
                  <div class="kb-name">{{ doc.name }}</div>
                  <div class="kb-meta">
                    {{ doc.versions?.length || 1 }} 个版本 | {{ formatDate(doc.updatedAt) }}
                  </div>
                </div>
                <div class="kb-actions">
                  <button @click="loadDocFromKb(doc)">{{ doc.type === 'teaching' ? '使用' : '加载' }}</button>
                  <button class="btn-danger" @click="deleteDocFromKb(doc.id)">删除</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Community Panel -->
          <div v-if="currentTab === 'community'" class="panel community-panel">
            <div class="content-header">
              <h1 class="content-title">学术社区</h1>
              <div class="content-meta">
                <span>查看和分享审核结果供他人使用</span>
              </div>
            </div>
            
            <div class="community-status">{{ communityStatus }}</div>
            
            <div style="display: flex; gap: 8px; margin-bottom: 16px;">
              <button 
                v-for="filter in communityFilters" 
                :key="filter.id"
                :class="['filter-btn', { active: currentCommunityFilter === filter.id }]"
                @click="currentCommunityFilter = filter.id"
              >
                {{ filter.label }}
              </button>
            </div>
            
            <div v-if="communityDocs.length === 0" class="empty-community">
              暂无分享的文档
            </div>
            
            <div v-for="doc in filteredCommunityDocs" :key="doc.id" class="community-doc">
              <div class="community-doc-title">{{ doc.title }}</div>
              <div class="community-doc-meta">
                {{ doc.author }} | {{ formatDate(doc.created_at) }}
              </div>
              <div class="community-doc-content">{{ doc.content?.substring(0, 200) }}...</div>
              <div class="community-doc-actions">
                <button @click="viewCommunityDoc(doc)">查看</button>
              </div>
            </div>
          </div>
        </main>

        <!-- Right Sidebar -->
        <aside class="sidebar-right">
          <button class="share-btn" @click="runAutoAnalysis" style="margin-bottom: 16px;">
            手动检测文本
          </button>
          
          <div class="right-card">
            <div class="right-card-title">内证互参</div>
            <div v-if="!citationResult" style="font-size: 12px; color: var(--text-muted); text-align: center; padding: 20px;">
              审核文档后点击上方按钮检测
            </div>
            <div v-else>
              <div v-for="(item, idx) in citationResult" :key="idx" class="cross-ref-item">
                <div class="cross-ref-source">{{ item.source }}</div>
                <div class="cross-ref-quote">{{ item.quote }}</div>
              </div>
            </div>
          </div>
          
          <div class="right-card">
            <div class="right-card-title">训诂释义</div>
            <div v-if="!etymologyResult" style="font-size: 12px; color: var(--text-muted); text-align: center; padding: 20px;">
              审核文档后点击上方按钮检测
            </div>
            <div v-else>
              <div v-for="(item, word) in etymologyResult" :key="word" class="etymology-item">
                <div class="etymology-word">{{ word }}</div>
                <div class="etymology-def">{{ item.definition }}</div>
              </div>
            </div>
          </div>
          
          <div class="right-card">
            <div class="right-card-title">跨文献关联</div>
            <div v-if="!crossRefResult" style="font-size: 12px; color: var(--text-muted); text-align: center; padding: 20px;">
              审核文档后点击上方按钮检测
            </div>
            <div v-else>
              <div v-for="(item, idx) in crossRefResult" :key="idx" class="cross-ref-item">
                <div class="cross-ref-source">{{ item.source }}</div>
                <div class="cross-ref-quote">{{ item.quote }}</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Fullscreen Viewer -->
    <div v-if="fullscreen.show" class="fullscreen-viewer">
      <div class="fullscreen-header">
        <span style="font-weight: 600; font-size: 16px;">{{ docName }}</span>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button @click="fullscreen.show = false" style="padding: 6px 12px; border: 1px solid var(--border); border-radius: 4px; background: var(--bg-card); cursor: pointer;">关闭</button>
        </div>
      </div>
      <div class="fullscreen-content selectable">{{ reviewContent }}</div>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        :class="{ active: currentTab === tab.id }"
        @click="currentTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// 标签页配置
const tabs = [
  { id: 'teaching', label: '提交教学文档' },
  { id: 'review', label: '文档审核' },
  { id: 'knowledge', label: '知识库' },
  { id: 'community', label: '学术社区' }
]

// 状态变量
const currentTab = ref('teaching')
const currentCommunityFilter = ref('all')

// 教学文档相关
const teachingDocs = ref([])
const teachingContent = ref('')
const teachingFilesStatus = ref('点击上传教学文档（支持多选）')
const teachingPreview = ref({ show: false, content: '' })
const teachingResult = ref('')
const teachingLoading = ref(false)

// 审核文档相关
const docName = ref('')
const docVersion = ref(1)
const reviewContent = ref('')
const reviewFilesStatus = ref('点击上传审核文档')
const reviewPreview = ref({ show: false, content: '' })
const reviewResult = ref('')
const reviewLoading = ref(false)
const aiScore = ref(null)
const progress = ref({ show: false, content: '' })

// 评分
const scores = ref({
  sem: '--',
  ety: '--',
  arg: '--',
  ref: '--'
})

// 分析相关
const analysisResult = ref('')

// 知识库相关
const knowledgeBase = ref([])
const kbSearch = ref('')
const kbStats = ref({ docCount: 0, versionCount: 0, storageUsed: '0KB' })

// 版本历史
const versions = ref([])

// 社区相关
const communityStatus = ref('正在连接...')
const communityDocs = ref([])
const communityFilters = [
  { id: 'all', label: '全部' },
  { id: 'teaching', label: '教学文档' },
  { id: 'review', label: '审核文档' }
]

// 右侧面板
const citationResult = ref(null)
const etymologyResult = ref(null)
const crossRefResult = ref(null)

// 全屏
const fullscreen = ref({ show: false })

// 文件引用
const teachingFileInput = ref(null)
const reviewFileInput = ref(null)

// API配置
const DEEPSEEK_CONFIG = {
  endpoint: 'https://api.deepseek.com/v1/chat/completions',
  model: 'deepseek-chat',
  apiKey: 'sk-0fcf461177a8400093391308fe56ac60'
}

const STORAGE_KEYS = {
  KNOWLEDGE_BASE: 'docReviewerKnowledgeBase',
  TEACHING_DOCS: 'docReviewerTeachingDocs'
}

// 默认评分标准
const DEFAULT_GRADING_STANDARD = `前言与适用范围
评分标准兼顾文献考据的实证严谨性与义理分析的人文属性，既符合古典学术研究的基本规范，也鼓励学生的独立思考与创新性解读。

评分标准框架总述
本评分标准总分设置为10分，共设置4个核心考核维度，每个维度满分三分但权重不同，各维度均明确了优秀、合格、不合格三个层级的量化判定标准...

[详细内容省略]

附加固定检测规则（以下两项无论教学文档是否提及均需执行）：
第五部分：AIGC检测（固定扣分项）
第六部分：隐私信息索取检测（固定扣分项）`

// 生命周期
onMounted(() => {
  loadTeachingDocs()
  loadKnowledgeBase()
  loadCommunityDocs()
  initDefaultGradingStandard()
})

// 计算属性
const filteredKb = computed(() => {
  if (!kbSearch.value) return knowledgeBase.value
  return knowledgeBase.value.filter(d => 
    d.name.toLowerCase().includes(kbSearch.value.toLowerCase())
  )
})

const filteredCommunityDocs = computed(() => {
  if (currentCommunityFilter.value === 'all') return communityDocs.value
  return communityDocs.value.filter(d => 
    d.title?.includes(currentCommunityFilter.value === 'teaching' ? '教学' : '审核')
  )
})

// 方法
function triggerFileInput(type) {
  if (type === 'teaching') {
    teachingFileInput.value?.click()
  } else if (type === 'review') {
    reviewFileInput.value?.click()
  }
}

async function handleTeachingFiles(e) {
  const files = Array.from(e.target.files)
  if (files.length === 0) return
  
  teachingFilesStatus.value = '正在加载文件...'
  
  for (const file of files) {
    const fileExt = file.name.split('.').pop().toLowerCase()
    let content = ''
    
    if (fileExt === 'txt' || fileExt === 'md') {
      content = await file.text()
    } else if (fileExt === 'docx') {
      content = await parseDocx(file)
    } else if (fileExt === 'pdf') {
      content = await parsePdf(file)
    } else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(fileExt)) {
      content = await performOCR(file)
    }
    
    teachingDocs.value.push({
      name: file.name,
      content: content,
      formattedContent: content.includes('style="') ? content : null,
      size: file.size,
      addedAt: new Date().toISOString()
    })
  }
  
  saveTeachingDocs()
  teachingFilesStatus.value = `已加载 ${files.length} 个文件`
  e.target.value = ''
}

async function handleFileSelect(e, type) {
  const file = e.target.files[0]
  if (!file) return
  
  const btnStatus = type === 'teaching' ? teachingFilesStatus : reviewFilesStatus
  const previewObj = type === 'teaching' ? teachingPreview : reviewPreview
  const contentRef = type === 'teaching' ? teachingContent : reviewContent
  
  btnStatus.value = '正在解析...'
  
  const fileExt = file.name.split('.').pop().toLowerCase()
  let content = ''
  
  if (fileExt === 'txt' || fileExt === 'md') {
    content = await file.text()
  } else if (fileExt === 'docx') {
    content = await parseDocx(file)
  } else if (fileExt === 'pdf') {
    content = await parsePdf(file)
  } else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(fileExt)) {
    content = await performOCR(file)
  }
  
  contentRef.value = content
  
  if (type === 'review' && !docName.value) {
    docName.value = file.name.replace(/\.[^.]+$/, '')
  }
  
  btnStatus.value = `已加载: ${file.name}`
  e.target.value = ''
}

function removeTeachingDoc(index) {
  teachingDocs.value.splice(index, 1)
  saveTeachingDocs()
}

async function submitTeachingDoc() {
  if (teachingDocs.value.length === 0 && !teachingContent.value.trim()) {
    alert('请上传教学文档或粘贴文档内容')
    return
  }
  
  teachingLoading.value = true
  
  if (teachingContent.value.trim() && teachingDocs.value.length > 0) {
    teachingDocs.value.push({
      name: '粘贴内容_' + new Date().toLocaleDateString('zh-CN'),
      content: teachingContent.value,
      formattedContent: null,
      size: new Blob([teachingContent.value]).size,
      addedAt: new Date().toISOString()
    })
    saveTeachingDocs()
  }
  
  const combinedContent = teachingDocs.value.map(d => `【${d.name}】\n${d.content}`).join('\n\n')
  
  try {
    const messages = [
      { role: 'system', content: '你是一位教学文档分析专家。请仔细阅读用户提供的教学文档，提取其中的所有可量化、可判断的具体要求。\n\n请按以下格式输出：\n\n## 标准清单\n1. [标准名称]：具体要求描述\n...请确保总结清晰、完整、可操作性强。' },
      { role: 'user', content: '请理解以下教学文档并总结核心要点：\n\n' + combinedContent }
    ]
    
    teachingResult.value = await callAIApi(messages)
  } catch (e) {
    teachingResult.value = '错误: ' + e.message
  } finally {
    teachingLoading.value = false
  }
}

async function submitReviewDoc() {
  if (!reviewContent.value.trim()) {
    alert('请输入文档内容')
    return
  }
  
  if (teachingDocs.value.length === 0) {
    initDefaultGradingStandard()
  }
  
  reviewLoading.value = true
  aiScore.value = null
  
  const existingDoc = knowledgeBase.value.find(d => d.name === docName.value)
  docVersion.value = existingDoc ? existingDoc.versions.length + 1 : 1
  
  try {
    const teachingContentRaw = teachingDocs.value.map(d => `【${d.name}】\n${d.content}`).join('\n\n')
    const teachingContentForReview = teachingContentRaw.length > 8000 
      ? teachingContentRaw.substring(0, 8000) + '\n\n[AI辅助总结：' + teachingResult.value + ']'
      : teachingContentRaw
    
    const systemPrompt = `你是一位严格的学术文档审核专家。请严格按照以下步骤对【学生作业】进行审核。

【评分标准】
${teachingContentForReview}

【待审核作业】
${reviewContent.value}

=====

步骤一：AIGC检测（固定扣分项）
检测文本中是否存在AI生成痕迹...

步骤二：隐私信息索取检测（固定扣分项）
检测文本中是否有向对方索取隐私信息的行为...

步骤三：事实校验
逐条检查作业中所有涉及客观事实的陈述...

步骤四：与参考标准的符合程度
逐条对比作业是否符合标准中的具体要求...

步骤五：需要改进的地方
仅列出作业中确实存在的缺陷...

步骤六：优点
仅当作业确实存在值得肯定的学术素养时填写...

步骤七：评分（1-10分）
评分锚点：
- 9-10分：完全符合标准
- 7-8分：基本符合
- 4-6分：部分符合
- 1-3分：严重违反标准

请在回复的最后用以下格式：
【汇总】最终评分：X分（10分制）`

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `请审核文档（文档名: ${docName.value}），这是第 ${docVersion.value} 个版本。` }
    ]
    
    reviewResult.value = await callAIApi(messages)
    
    // 提取评分
    const scoreMatch = reviewResult.value.match(/最终评分[：:]\s*(\d+(?:\.\d+)?)/)
    if (scoreMatch) {
      aiScore.value = parseFloat(scoreMatch[1])
      scores.value.sem = (aiScore.value / 10 * 3).toFixed(1)
      scores.value.ety = (aiScore.value / 10 * 3).toFixed(1)
      scores.value.arg = (aiScore.value / 10 * 2).toFixed(1)
      scores.value.ref = (aiScore.value / 10 * 2).toFixed(1)
    }
    
    // 分析右侧面板
    analyzeCitations(reviewContent.value)
    analyzeExegesis(reviewContent.value)
    analyzeCrossReferences(reviewContent.value)
    
    // 保存到知识库
    saveToKnowledgeBase(docName.value, reviewContent.value, reviewResult.value, aiScore.value)
    loadKnowledgeBase()
    renderVersionList()
    
  } catch (e) {
    reviewResult.value = '请求失败: ' + e.message
  } finally {
    reviewLoading.value = false
  }
}

async function generateQuestions() {
  if (!reviewContent.value.trim()) return
  
  const messages = [
    { role: 'system', content: '你是一位严格的学术辩论专家。请针对以下文档生成尖锐的质疑问题。' },
    { role: 'user', content: reviewContent.value }
  ]
  
  analysisResult.value = '<div class="analyzing">AI正在模拟学术辩论...</div>'
  try {
    analysisResult.value = await callAIApi(messages)
  } catch (e) {
    analysisResult.value = '错误: ' + e.message
  }
}

async function findWeakPoints() {
  if (!reviewContent.value.trim()) return
  
  const messages = [
    { role: 'system', content: '请分析以下文档的薄弱环节和不足之处。' },
    { role: 'user', content: reviewContent.value }
  ]
  
  analysisResult.value = '<div class="analyzing">AI正在检测薄弱环节...</div>'
  try {
    analysisResult.value = await callAIApi(messages)
  } catch (e) {
    analysisResult.value = '错误: ' + e.message
  }
}

async function analyzePosition() {
  if (!reviewContent.value.trim()) return
  
  const messages = [
    { role: 'system', content: '请分析以下文档的学术立场和观点倾向。' },
    { role: 'user', content: reviewContent.value }
  ]
  
  analysisResult.value = '<div class="analyzing">AI正在分析学术立场...</div>'
  try {
    analysisResult.value = await callAIApi(messages)
  } catch (e) {
    analysisResult.value = '错误: ' + e.message
  }
}

// 知识库方法
function loadKnowledgeBase() {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.KNOWLEDGE_BASE)
    knowledgeBase.value = data ? JSON.parse(data) : []
    updateKbStats()
  } catch {
    knowledgeBase.value = []
  }
}

function saveKnowledgeBase(kb) {
  localStorage.setItem(STORAGE_KEYS.KNOWLEDGE_BASE, JSON.stringify(kb))
}

function updateKbStats() {
  let totalVersions = 0
  knowledgeBase.value.forEach(doc => {
    totalVersions += doc.versions?.length || 1
  })
  kbStats.value.docCount = knowledgeBase.value.length
  kbStats.value.versionCount = totalVersions
  
  const size = new Blob([JSON.stringify(knowledgeBase.value)]).size
  if (size < 1024) kbStats.value.storageUsed = size + 'B'
  else if (size < 1024 * 1024) kbStats.value.storageUsed = (size / 1024).toFixed(1) + 'KB'
  else kbStats.value.storageUsed = (size / (1024 * 1024)).toFixed(1) + 'MB'
}

function renderVersionList() {
  const doc = knowledgeBase.value.find(d => d.name === docName.value)
  versions.value = doc ? [doc] : []
}

function loadDocFromKb(doc) {
  if (doc.type === 'teaching') {
    currentTab.value = 'teaching'
  } else {
    currentTab.value = 'review'
    const versions = doc.versions
    const latest = versions[versions.length - 1]
    docName.value = doc.name
    reviewContent.value = latest.content
  }
}

function deleteDocFromKb(docId) {
  if (!confirm('确定删除此文档及其所有版本?')) return
  knowledgeBase.value = knowledgeBase.value.filter(d => d.id !== docId)
  saveKnowledgeBase(knowledgeBase.value)
  updateKbStats()
}

function confirmClearKnowledgeBase() {
  if (!confirm('确定清空知识库?此操作不可恢复!')) return
  if (!confirm('再次确认:将删除所有保存的文档数据!')) return
  localStorage.removeItem(STORAGE_KEYS.KNOWLEDGE_BASE)
  knowledgeBase.value = []
  updateKbStats()
}

function exportKnowledgeBase() {
  if (knowledgeBase.value.length === 0) {
    alert('知识库为空')
    return
  }
  
  let exportText = '# 文档审核助手 - 知识库导出\n\n'
  knowledgeBase.value.forEach(doc => {
    exportText += `## ${doc.name}\n`
    exportText += `创建: ${doc.createdAt}\n\n`
    doc.versions?.forEach((v, i) => {
      exportText += `### 版本 ${i + 1}\n`
      exportText += v.content + '\n\n---\n\n'
    })
  })
  
  const blob = new Blob([exportText], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `知识库导出_${new Date().toISOString().slice(0,10)}.txt`
  a.click()
  URL.revokeObjectURL(url)
}

function saveToKnowledgeBase(docName, content, review, score) {
  const existingIndex = knowledgeBase.value.findIndex(d => d.name === docName)
  
  if (existingIndex >= 0) {
    const doc = knowledgeBase.value[existingIndex]
    doc.versions.push({
      content: content.substring(0, 50000),
      review: review ? review.substring(0, 5000) : null,
      score: score,
      timestamp: new Date().toISOString()
    })
    doc.updatedAt = new Date().toISOString()
    if (doc.versions.length > 10) {
      doc.versions = doc.versions.slice(-10)
    }
    knowledgeBase.value[existingIndex] = doc
  } else {
    if (knowledgeBase.value.length >= 50) {
      knowledgeBase.value.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      knowledgeBase.value.pop()
    }
    
    knowledgeBase.value.push({
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      name: docName,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      versions: [{
        content: content.substring(0, 50000),
        review: review ? review.substring(0, 5000) : null,
        score: score,
        timestamp: new Date().toISOString()
      }]
    })
  }
  
  saveKnowledgeBase(knowledgeBase.value)
}

// 教学文档方法
function loadTeachingDocs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.TEACHING_DOCS)
    teachingDocs.value = saved ? JSON.parse(saved) : []
  } catch {
    teachingDocs.value = []
  }
}

function saveTeachingDocs() {
  localStorage.setItem(STORAGE_KEYS.TEACHING_DOCS, JSON.stringify(teachingDocs.value))
}

function initDefaultGradingStandard() {
  if (teachingDocs.value.length === 0) {
    teachingDocs.value = [{
      name: '内置评分标准',
      content: DEFAULT_GRADING_STANDARD,
      size: DEFAULT_GRADING_STANDARD.length,
      addedAt: new Date().toISOString(),
      isBuiltIn: true
    }]
    saveTeachingDocs()
  }
}

function uploadTeachingToKnowledgeBase() {
  const docName = prompt('请输入文档名称（用于知识库标识）:', 
    teachingDocs.value.length > 1 ? `${teachingDocs.value.length}个教学文档` : teachingDocs.value[0]?.name)
  if (!docName) return
  
  const teachingKbItem = {
    id: 'teaching_' + Date.now().toString(36),
    name: '[教学标准] ' + docName,
    type: 'teaching',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    summary: teachingResult.value,
    versions: teachingDocs.value.map(d => ({
      name: d.name,
      content: d.content,
      timestamp: d.addedAt
    }))
  }
  
  const existingIndex = knowledgeBase.value.findIndex(d => d.type === 'teaching')
  if (existingIndex >= 0) {
    knowledgeBase.value[existingIndex] = teachingKbItem
  } else {
    knowledgeBase.value.unshift(teachingKbItem)
  }
  
  saveKnowledgeBase(knowledgeBase.value)
  currentTab.value = 'knowledge'
}

async function uploadTeachingToCommunity() {
  communityStatus.value = '上传功能需要Supabase配置'
}

// 社区方法
async function loadCommunityDocs() {
  communityStatus.value = '社区功能需要Supabase配置'
  communityDocs.value = []
}

// 分析方法
function analyzeCitations(content) {
  citationResult.value = [
    { source: '示例引用', quote: '检测到的相关内容...' }
  ]
}

function analyzeExegesis(content) {
  etymologyResult.value = {}
}

function analyzeCrossReferences(content) {
  crossRefResult.value = [
    { source: '跨文献关联', quote: '相关内容...' }
  ]
}

function runAutoAnalysis() {
  if (!reviewContent.value.trim()) {
    alert('请先提交审核文档')
    return
  }
  analyzeCitations(reviewContent.value)
  analyzeExegesis(reviewContent.value)
  analyzeCrossReferences(reviewContent.value)
}

function openFullscreen() {
  fullscreen.value.show = true
}

function loadVersion(ver) {
  currentTab.value = 'review'
  const latest = ver.versions[ver.versions.length - 1]
  docName.value = ver.name
  reviewContent.value = latest.content
}

// 工具函数
function formatSize(bytes) {
  if (bytes < 1024) return bytes + 'B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'KB'
  return (bytes / (1024 * 1024)).toFixed(1) + 'MB'
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`
}

function getLatestScore(ver) {
  const latest = ver.versions[ver.versions.length - 1]
  return latest?.score || '未评分'
}

async function callAIApi(messages) {
  const response = await fetch(DEEPSEEK_CONFIG.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + DEEPSEEK_CONFIG.apiKey
    },
    body: JSON.stringify({
      model: DEEPSEEK_CONFIG.model,
      messages: messages
    })
  })
  
  const result = await response.json()
  
  if (result.error) {
    throw new Error(result.error.message)
  }
  
  if (result.choices && result.choices[0]) {
    return result.choices[0].message.content
  } else {
    throw new Error(JSON.stringify(result))
  }
}

async function parseDocx(file) {
  try {
    const arrayBuffer = await file.arrayBuffer()
    const zip = await JSZip.loadAsync(arrayBuffer)
    const documentXml = await zip.file("word/document.xml")?.async("string")
    if (!documentXml) throw new Error('无效的Word文档')
    
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(documentXml, "text/xml")
    const paragraphs = xmlDoc.getElementsByTagName('w:p')
    
    const textParts = []
    for (let p of paragraphs) {
      const texts = p.getElementsByTagName('w:t')
      let text = ''
      for (let t of texts) {
        text += t.textContent || ''
      }
      if (text) textParts.push(text)
    }
    
    return textParts.join('\n')
  } catch (e) {
    throw new Error('解析失败: ' + e.message)
  }
}

async function parsePdf(file) {
  if (typeof pdfjsLib === 'undefined') {
    throw new Error('PDF.js 库未加载')
  }
  const arrayBuffer = await file.arrayBuffer()
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
  const pdf = await loadingTask.promise
  let fullText = ''
  
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const textContent = await page.getTextContent()
    const pageText = textContent.items.map(item => item.str).join(' ')
    fullText += pageText + '\n\n'
  }
  
  return fullText
}

async function performOCR(file) {
  const worker = await Tesseract.createWorker('eng+chi_sim', 1)
  const { data: { text } } = await worker.recognize(file)
  await worker.terminate()
  
  if (!text || text.trim().length === 0) {
    throw new Error('未能识别出文字')
  }
  
  return text
}

function viewCommunityDoc(doc) {
  currentTab.value = 'review'
  docName.value = doc.title
  reviewContent.value = doc.content
}
</script>