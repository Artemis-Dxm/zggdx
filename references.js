// 经典文献互证参考数据

const CLASSICS_REFERENCES = {
    // 论语
    "论语": {
        "仁": [
            { chapter: "学而", content: "孝弟也者，其为仁之本与", line: "学而1.2" },
            { chapter: "里仁", content: "里仁为美", line: "里仁4.1" },
            { chapter: "里仁", content: "仁者安仁", line: "里仁4.2" },
            { chapter: "雍也", content: "回也，其心三月不违仁", line: "雍也6.7" },
            { chapter: "雍也", content: "己欲立而立人，己欲达而达人", line: "雍也6.30" },
            { chapter: "述而", content: "志于道，据于德，依于仁，游于艺", line: "述而7.6" },
            { chapter: "颜渊", content: "克己复礼为仁", line: "颜渊12.1" },
            { chapter: "颜渊", content: "仁者爱人", line: "颜渊12.22" },
            { chapter: "卫灵公", content: "己所不欲，勿施于人", line: "卫灵公15.24" },
            { chapter: "阳货", content: "性相近也，习相远也", line: "阳货17.2" }
        ],
        "孝": [
            { chapter: "学而", content: "孝弟也者，其为仁之本与", line: "学而1.2" },
            { chapter: "为政", content: "孟懿子问孝。子曰：'无违。'", line: "为政2.5" },
            { chapter: "为政", content: "今之孝者，是谓能养。至于犬马，皆能有养；不敬，何以别乎？", line: "为政2.7" },
            { chapter: "里仁", content: "事父母几谏，见志不从，又敬不违，劳而不怨", line: "里仁4.18" },
            { chapter: "先进", content: "孝哉，闵子骞！", line: "先进11.5" }
        ],
        "礼": [
            { chapter: "学而", content: "礼之用，和为贵", line: "学而1.12" },
            { chapter: "八佾", content: "人而不仁，如礼何？", line: "八佾3.3" },
            { chapter: "八佾", content: "君子无所争，必也射乎！揖让而升，下而饮，其争也君子。", line: "八佾3.7" },
            { chapter: "为政", content: "道之以德，齐之以礼，有耻且格", line: "为政2.3" }
        ],
        "君子": [
            { chapter: "学而", content: "人不知而不愠，不亦君子乎？", line: "学而1.1" },
            { chapter: "里仁", content: "君子无终食之间违仁", line: "里仁4.5" },
            { chapter: "述而", content: "君子坦荡荡，小人长戚戚", line: "述而7.37" },
            { chapter: "卫灵公", content: "君子求诸己，小人求诸人", line: "卫灵公15.21" }
        ],
        "义": [
            { chapter: "里仁", content: "君子喻于义，小人喻于利", line: "里仁4.16" },
            { chapter: "卫灵公", content: "见利思义", line: "卫灵公4.1" }
        ],
        "学": [
            { chapter: "学而", content: "学而时习之，不亦说乎", line: "学而1.1" },
            { chapter: "为政", content: "温故而知新，可以为师矣", line: "为政2.11" },
            { chapter: "述而", content: "学而不厌，诲人不倦", line: "述而7.2" },
            { chapter: "阳货", content: "性相近也，习相远也", line: "阳货17.2" }
        ],
        "中庸": [
            { chapter: "雍也", content: "中庸之为德也，其至矣乎！", line: "雍也6.29" },
            { chapter: "先进", content: "过犹不及", line: "先进11.16" }
        ],
        "信": [
            { chapter: "学而", content: "与朋友交而不信乎？", line: "学而1.4" },
            { chapter: "为政", content: "人而无信，不知其可也", line: "为政2.22" },
            { chapter: "卫灵公", content: "言忠信，行笃敬", line: "卫灵公15.6" }
        ],
        "政": [
            { chapter: "为政", content: "为政以德，譬如北辰，居其所而众星共之", line: "为政2.1" },
            { chapter: "颜渊", content: "政者，正也", line: "颜渊12.14" }
        ],
        "乐": [
            { chapter: "八佾", content: "子谓《韶》尽美矣，又尽善也", line: "八佾3.25" },
            { chapter: "阳货", content: "乐云乐云，钟鼓云乎哉？", line: "阳货17.11" }
        ]
    },
    
    // 孟子
    "孟子": {
        "性善": [
            { chapter: "告子上", content: "人性之善也，犹水之就下也", line: "告子上6.2" },
            { chapter: "公孙丑上", content: "无恻隐之心，非人也；无羞恶之心，非人也", line: "公孙丑上3.6" },
            { chapter: "尽心上", content: "尽其心者，知其性也", line: "尽心上13.1" }
        ],
        "性恶": [
            { chapter: "滕文公上", content: "孟子道性善，言必称尧舜", line: "滕文公上5.1" },
            { chapter: "告子上", content: "生之谓性", line: "告子上6.3" },
            { chapter: "告子上", content: "食色，性也", line: "告子上6.4" }
        ],
        "仁政": [
            { chapter: "梁惠王上", content: "王何必曰利？亦有仁义而已矣", line: "梁惠王上1.1" },
            { chapter: "梁惠王上", content: "七十者衣帛食肉，黎民不饥不寒", line: "梁惠王上1.3" },
            { chapter: "离娄上", content: "徒善不足以为政，徒法不能以自行", line: "离娄上7.1" }
        ],
        "民本": [
            { chapter: "尽心下", content: "民为贵，社稷次之，君为轻", line: "尽心下14.14" },
            { chapter: "梁惠王下", content: "乐民之乐者，民亦乐其乐", line: "梁惠王下2.4" }
        ],
        "义利": [
            { chapter: "梁惠王上", content: "王何必曰利？亦有仁义而已矣", line: "梁惠王上1.1" },
            { chapter: "告子上", content: "舍生而取义者也", line: "告子上6.10" }
        ],
        "养气": [
            { chapter: "公孙丑上", content: "我善养吾浩然之气", line: "公孙丑上3.2" },
            { chapter: "公孙丑上", content: "其为气也，配义与道", line: "公孙丑上3.2" }
        ]
    },
    
    // 礼记
    "礼记": {
        "礼": [
            { chapter: "曲礼上", content: "道德仁义，非礼不成", line: "曲礼上1.3" },
            { chapter: "礼运", content: "夫礼之初，始诸饮食", line: "礼运9.1" },
            { chapter: "礼器", content: "礼也者，犹体也", line: "礼器10.1" }
        ],
        "中庸": [
            { chapter: "中庸", content: "天命之谓性，率性之谓道，修道之谓教", line: "中庸1.1" },
            { chapter: "中庸", content: "中也者，天下之大本也；和也者，天下之达道也", line: "中庸1.12" },
            { chapter: "中庸", content: "君子之中庸也，君子而时中", line: "中庸2.1" }
        ],
        "孝": [
            { chapter: "曲礼上", content: "夫为人子者，出必告，反必面", line: "曲礼上1.7" },
            { chapter: "内则", content: "父母有过，下气怡色，柔声以谏", line: "内则12.2" },
            { chapter: "祭义", content: "孝子之祭也，致斋三日", line: "祭义24.1" }
        ],
        "大同": [
            { chapter: "礼运", content: "大道之行也，天下为公", line: "礼运9.1" },
            { chapter: "礼运", content: "选贤与能，讲信修睦", line: "礼运9.1" }
        ],
        "性情": [
            { chapter: "礼运", content: "人情者，圣王之田也", line: "礼运9.9" },
            { chapter: "乐记", content: "乐者，通伦理者也", line: "乐记19.1" }
        ]
    },
    
    // 周易
    "周易": {
        "易": [
            { chapter: "系辞上", content: "易与天地准，故能弥纶天地之道", line: "系辞上10.1" },
            { chapter: "系辞上", content: "易有太极，是生两仪", line: "系辞上11.1" },
            { chapter: "系辞下", content: "易穷则变，变则通，通则久", line: "系辞下12.1" }
        ],
        "乾": [
            { chapter: "乾", content: "大哉乾元，万物资始", line: "乾1.1" },
            { chapter: "乾", content: "天行健，君子以自强不息", line: "乾1.2" },
            { chapter: "文言", content: "元者，善之长也", line: "文言2.1" }
        ],
        "坤": [
            { chapter: "坤", content: "地势坤，君子以厚德载物", line: "坤2.2" },
            { chapter: "文言", content: "坤至柔而动也刚", line: "文言2.4" }
        ],
        "阴阳": [
            { chapter: "系辞上", content: "一阴一阳之谓道", line: "系辞上5.1" },
            { chapter: "说卦", content: "立天之道曰阴与阳", line: "说卦15.1" }
        ],
        "变化": [
            { chapter: "系辞上", content: "变化者，进退之象也", line: "系辞上6.1" },
            { chapter: "系辞下", content: "变化者，进退之象也；刚柔者，昼夜之象也", line: "系辞下6.1" }
        ]
    },
    
    // 尚书
    "尚书": {
        "德": [
            { chapter: "皋陶谟", content: "慎厥身，修思永", line: "皋陶谟2.3" },
            { chapter: "大禹谟", content: "人心惟危，道心惟微，惟精惟一，允执厥中", line: "大禹谟3.4" },
            { chapter: "康诰", content: "克明德慎罚", line: "康诰7.1" }
        ],
        "天命": [
            { chapter: "召诰", content: "皇天上帝，改厥元子", line: "召诰13.1" },
            { chapter: "咸有一德", content: "天难谌，命靡常", line: "咸有一德14.1" },
            { chapter: "泰誓上", content: "天视自我民视，天听自我民听", line: "泰誓上11.1" }
        ],
        "尧舜": [
            { chapter: "尧典", content: "昔在帝尧，聪明文思，光宅天下", line: "尧典1.1" },
            { chapter: "舜典", content: "曰若稽古帝舜，曰重华协于帝", line: "舜典2.1" },
            { chapter: "大禹谟", content: "人心惟危，道心惟微", line: "大禹谟3.4" }
        ],
        "洪范": [
            { chapter: "洪范", content: "五行：一曰水，二曰火，三曰木，四曰金，五曰土", line: "洪范5.1" },
            { chapter: "洪范", content: "敛时五福，用敷锡厥庶民", line: "洪范5.10" }
        ]
    },
    
    // 诗经
    "诗经": {
        "风雅颂": [
            { chapter: "周南", content: "关关雎鸠，在河之洲", line: "周南1.1" },
            { chapter: "小雅", content: "呦呦鹿鸣，食野之苹", line: "小雅6.1" },
            { chapter: "颂", content: "於穆清庙，肃雍显相", line: "颂·清庙1.1" }
        ],
        "思无邪": [
            { chapter: "鲁颂", content: "思无邪，思马斯徂", line: "鲁颂·駉25.1" },
            { chapter: "关雎", content: "关关雎鸠，在河之洲。窈窕淑女，君子好逑", line: "周南1.1" }
        ],
        "兴": [
            { chapter: "关雎", content: "关关雎鸠，在河之洲", line: "周南1.1" },
            { chapter: "蒹葭", content: "蒹葭苍苍，白露为霜", line: "秦风10.1" }
        ]
    }
};

// 核心词训诂表（基于《说文解字》）
const EXEGESIS_DATA = {
    "仁": {
        shuowen: "仁，亲也。从人从二。",
        duanzhu: "人也，亲也。见其与我也。",
        benyi: "亲爱，两人相亲",
        yinshenyi: ["恩惠", "果仁"],
        qinmu: "《礼记·檀弓》：仁者静",
        warning: "先秦'仁'字多指德行完备，非仅'仁爱'一义"
    },
    "义": {
        shuowen: "义，己之威仪也。从我羊。",
        duanzhu: "己之威仪者，谓容仪也。",
        benyi: "宜也，裁制事物使合宜",
        yinshenyi: ["合宜的行为", "意义", "正义"],
        qinmu: "《论语》：君子喻于义",
        warning: "'义'有'宜'义和'仪'义之分，需据语境判断"
    },
    "礼": {
        shuowen: "礼，履也。所以事神致福也。从示从豊。",
        duanzhu: "礼之名起于事神，引申为凡礼仪之称。",
        benyi: "履也，祭祀敬神之事",
        yinshenyi: ["礼仪", "礼节", "礼貌"],
        qinmu: "《论语》：礼之用，和为贵",
        warning: "早期'礼'字与祭祀密切相关，后引申为社会规范"
    },
    "信": {
        shuowen: "信，诚也。从人从言，会意。",
        duanzhu: "人言则无不信者，故从人言。",
        benyi: "诚实，不欺诈",
        yinshenyi: ["符信（凭证）", "信使", "确实", "使者"],
        qinmu: "《说文》段注：'信'字从人言，取人言皆实之意",
        warning: "先秦'信'字尚有'符信'、'信使'等义，不可仅释为'诚信'"
    },
    "孝": {
        shuowen: "孝，善事父母者。从老省，从子。",
        duanzhu: "子承老也，善父母曰孝。",
        benyi: "善事父母",
        yinshenyi: ["孝敬", "孝顺"],
        qinmu: "《论语》：孝弟也者，其为仁之本与",
        warning: "'孝'在先秦不仅是道德要求，更与政治秩序相关"
    },
    "德": {
        shuowen: "德，升也。从彳㥁声。",
        duanzhu: "德者，得也。得其心得。",
        benyi: "得也，使己心有所得",
        yinshenyi: ["道德", "品德", "恩德"],
        qinmu: "《左传》：德，国家之基也",
        warning: "早期'德'字重在内心所得，后渐与'道德'义混用"
    },
    "道": {
        shuowen: "道，所行道也。从辵从首。",
        duanzhu: "道者，阴阳交达之理。",
        benyi: "道路，引申为道理、规律",
        yinshenyi: ["道路", "方法", "道理", "学说"],
        qinmu: "《论语》：朝闻道，夕死可矣",
        warning: "'道'含义极广，需辨明是道路之道还是义理之道"
    },
    "性": {
        shuowen: "性，人之阳气性善者也。从心、生。",
        duanzhu: "性字从心，生声，人生而具备之心即性。",
        benyi: "天生之质，人所禀受",
        yinshenyi: ["性质", "性格", "生命"],
        qinmu: "《孟子》：人性之善也",
        warning: "孟荀对'性'理解不同，需辨明学派立场"
    },
    "心": {
        shuowen: "心，人心，土藏，在身之中。",
        duanzhu: "心在身之中，如土在中央。",
        benyi: "心脏，古人以为思维器官",
        yinshenyi: ["心思", "心意", "中心"],
        qinmu: "《孟子》：心之官则思",
        warning: "先秦'心'为思维器官，非仅指情感"
    },
    "教": {
        shuowen: "教，上所施，下所效也。从攴从孝。",
        duanzhu: "上施下效，率教者之谓教。",
        benyi: "教导，效仿",
        yinshenyi: ["教育", "教化", "宗教"],
        qinmu: "《论语》：子以四教：文、行、忠、信",
        warning: "'教'字兼含施教者与受教者双方"
    },
    "学": {
        shuowen: "学，觉悟也。从教从冂。",
        duanzhu: "学然后知不足，知不足然后能自反。",
        benyi: "觉悟，学习",
        yinshenyi: ["学习", "学问", "学校"],
        qinmu: "《论语》：学而时习之",
        warning: "'学'兼有'教'义，与'教'互为表里"
    },
    "文": {
        shuowen: "文，错画也。象交文。",
        duanzhu: "文者，造画也。有文采之意。",
        benyi: "纹理，交错的花纹",
        yinshenyi: ["文字", "文章", "文化", "文饰"],
        qinmu: "《论语》：郁郁乎文哉",
        warning: "'文'可指文字、文章，亦可与'质'相对"
    },
    "王": {
        shuowen: "王，天下所归往也。董仲舒曰：'古之造文者，三画而连其中谓之王。'",
        duanzhu: "三画者，天地人也。参通之者王也。",
        benyi: "天下归往之人，天子",
        yinshenyi: ["君王", "首领"],
        qinmu: "《白虎通》：王者，皇也",
        warning: "'王'字构字义有'三才贯通'之说"
    },
    "天": {
        shuowen: "天，颠也。至高无上，从一大。",
        duanzhu: "天者，颠也。颠者，人之顶也。",
        benyi: "头顶，引申为上天",
        yinshenyi: ["天空", "上天", "天命"],
        qinmu: "《论语》：获罪于天，无所祷也",
        warning: "先秦'天'有主宰之天、义理之天、自然之天等不同含义"
    },
    "命": {
        shuowen: "命，使也。从口从令。",
        duanzhu: "命者，令也。令者，发号施令。",
        benyi: "命令，号令",
        yinshenyi: ["生命", "命运", "使命"],
        qinmu: "《论语》：五十而知天命",
        warning: "'命'与'令'同源，后分化为命令与命运二义"
    },
    "阴": {
        shuowen: "阴，闇也。水之南、山之北为阴。",
        duanzhu: "阴者，暗也。山北水南，日所不及。",
        benyi: "暗处，水之南、山之北",
        yinshenyi: ["阴阳之阴", "阴性", "阴私"],
        qinmu: "《老子》：万物负阴而抱阳",
        warning: "'阴阳'为哲学范畴时指两种相反相成的力量"
    },
    "阳": {
        shuowen: "阳，高明也。从阜昜声。",
        duanzhu: "阳者，明也。山北水南，日所不及。",
        benyi: "明亮处，水之北、山之南",
        yinshenyi: ["阴阳之阳", "阳性", "阳光"],
        qinmu: "《说文》：阳，高明也",
        warning: "'阴阳'指日光向背，后发展为哲学概念"
    },
    "易": {
        shuowen: "易，蜥易，蝘蜓，守宫也。秘书说：'日月为易。'",
        duanzhu: "易者，象形。秘书以为日月之义。",
        benyi: "蜥蜴（本义），又为变化、简易之意",
        yinshenyi: ["变化", "容易", "交易"],
        qinmu: "《易传》：易与天地准",
        warning: "'易'有'变易'、'不易'、'简易'三义"
    },
    "诚": {
        shuowen: "诚，信也。从言成声。",
        duanzhu: "诚者，实也。真心实意。",
        benyi: "真心实意，不虚伪",
        yinshenyi: ["诚实", "确实", "真诚"],
        qinmu: "《中庸》：诚者，天之道也",
        warning: "'诚'与'信'义近，但'诚'更重内心状态"
    },
    "敬": {
        shuowen: "敬，肃也。从攴苟声。",
        duanzhu: "敬者，肃也。肃者，持事振敬也。",
        benyi: "严肃，谨慎",
        yinshenyi: ["尊敬", "恭敬", "谨慎"],
        qinmu: "《论语》：修己以敬",
        warning: "'敬'字兼含内心虔诚与外在仪容"
    },
    "和": {
        shuowen: "和，相应也。从口禾声。",
        duanzhu: "和者，调也。调适众声。",
        benyi: "相应，调和",
        yinshenyi: ["和谐", "和平", "和顺"],
        qinmu: "《论语》：和为贵",
        warning: "'和'非无原则之和，有'和而不同'之说"
    },
    "中": {
        shuowen: "中，内也。从口丨，上下通。",
        duanzhu: "中者，正也。内者，在其间。",
        benyi: "内里，中间",
        yinshenyi: ["中间", "中等", "中庸"],
        qinmu: "《中庸》：中也者，天下之大本也",
        warning: "'中'可指方位，亦可为'中庸'之哲学概念"
    },
    "庸": {
        shuowen: "庸，用也。从庚从用。",
        duanzhu: "庸者，用也。用中为常。",
        benyi: "用，使用",
        yinshenyi: ["平常", "庸常", "功劳"],
        qinmu: "《中庸》：中庸之为德也",
        warning: "'庸'非贬义，乃'平常之道'之意"
    },
    "孝悌": {
        shuowen: "孝，善事父母者。",
        duanzhu: "父母其顺矣乎！",
        benyi: "善事父母",
        yinshenyi: ["孝敬", "孝顺"],
        qinmu: "《论语》：其为人也孝弟",
        warning: "'孝弟'为'仁之本'，需重视二者关系"
    }
};

// 跨文献主题互参索引
const CROSS_REFERENCES = {
    "仁": {
        book: "论仁",
        references: [
            { book: "论语", chapter: "颜渊", content: "颜渊问仁。子曰：'克己复礼为仁。'" },
            { book: "论语", chapter: "颜渊", content: "仲弓问仁。子曰：'己所不欲，勿施于人。'" },
            { book: "论语", chapter: "卫灵公", content: "子贡问曰：'有一言而可以终身行之者乎？'子曰：'其恕乎！己所不欲，勿施于人。'" },
            { book: "论语", chapter: "雍也", content: "子贡曰：'如有博施于民而能济众，何如？可谓仁乎？'子曰：'何事于仁，必也圣乎！'" },
            { book: "孟子", chapter: "离娄下", content: "君子以仁存心，以礼存心" },
            { book: "礼记", chapter: "中庸", content: "仁者人也，亲亲为大" }
        ],
        suggestion: "建议综合《论语》《孟子》《礼记》论'仁'的各章，注意孔子、孟子对'仁'的阐发有何异同"
    },
    "孝": {
        book: "论孝",
        references: [
            { book: "论语", chapter: "学而", content: "孝弟也者，其为仁之本与" },
            { book: "论语", chapter: "为政", content: "孟懿子问孝。子曰：'无违。'" },
            { book: "论语", chapter: "为政", content: "今之孝者，是谓能养。至于犬马，皆能有养；不敬，何以别乎？" },
            { book: "孟子", chapter: "离娄上", content: "不顺乎亲，不可以为子" },
            { book: "礼记", chapter: "祭义", content: "孝子之有深爱者，必有和气" },
            { book: "孝经", chapter: "开宗明义", content: "夫孝，德之本也，教之所由生也" }
        ],
        suggestion: "《论语》《孟子》《礼记》《孝经》皆论孝，宜注意儒家孝道从'敬'到'养'、从个体到政治的多重维度"
    },
    "性善": {
        book: "论性善",
        references: [
            { book: "孟子", chapter: "告子上", content: "人性之善也，犹水之就下也" },
            { book: "孟子", chapter: "公孙丑上", content: "无恻隐之心，非人也；无羞恶之心，非人也" },
            { book: "孟子", chapter: "尽心上", content: "尽其心者，知其性也" },
            { book: "孟子", chapter: "滕文公上", content: "孟子道性善，言必称尧舜" },
            { book: "荀子", chapter: "性恶", content: "人之性恶，其善者伪也" },
            { book: "礼记", chapter: "中庸", content: "天命之谓性" }
        ],
        suggestion: "孟荀同论人性却结论相反，宜比较二者对'性'的定义和'善'的标准有何不同"
    },
    "性恶": {
        book: "论性恶",
        references: [
            { book: "荀子", chapter: "性恶", content: "人之性恶，其善者伪也" },
            { book: "荀子", chapter: "性恶", content: "今人之性，生而有好利焉" },
            { book: "孟子", chapter: "告子上", content: "告子曰：'性无善无不善也。'" },
            { book: "韩非子", chapter: "初见秦", content: "人性者，利害之心也" }
        ],
        suggestion: "'性恶论'为荀子一派的主张，与孟子'性善论'形成鲜明对照，宜注意二者立论目的之差异"
    },
    "礼": {
        book: "论礼",
        references: [
            { book: "论语", chapter: "学而", content: "礼之用，和为贵" },
            { book: "论语", chapter: "八佾", content: "人而不仁，如礼何？" },
            { book: "荀子", chapter: "礼论", content: "礼者，养也" },
            { book: "礼记", chapter: "礼运", content: "夫礼之初，始诸饮食" },
            { book: "礼记", chapter: "曲礼上", content: "道德仁义，非礼不成" }
        ],
        suggestion: "儒法皆论礼但侧重不同，儒家重礼之本义，法家重礼之规范功能"
    },
    "中庸": {
        book: "论中庸",
        references: [
            { book: "论语", chapter: "雍也", content: "中庸之为德也，其至矣乎！" },
            { book: "论语", chapter: "先进", content: "过犹不及" },
            { book: "礼记", chapter: "中庸", content: "天命之谓性，率性之谓道，修道之谓教" },
            { book: "礼记", chapter: "中庸", content: "中也者，天下之大本也；和也者，天下之达道也" },
            { book: "礼记", chapter: "中庸", content: "君子之中庸也，君子而时中" }
        ],
        suggestion: "《论语》仅一提'中庸'，详论在《礼记·中庸》篇，朱熹据此分出独立篇章"
    },
    "天命": {
        book: "论天命",
        references: [
            { book: "论语", chapter: "为政", content: "五十而知天命" },
            { book: "尚书", chapter: "泰誓上", content: "天视自我民视，天听自我民听" },
            { book: "尚书", chapter: "召诰", content: "皇天上帝，改厥元子" },
            { book: "礼记", chapter: "中庸", content: "天命之谓性" },
            { book: "左传", chapter: "宣公三年", content: "天命不僭" }
        ],
        suggestion: "'天命'观念经历从宗教性向义理性的转变，孔子'知天命'具有人文精神"
    },
    "大同": {
        book: "论大同",
        references: [
            { book: "礼记", chapter: "礼运", content: "大道之行也，天下为公" },
            { book: "礼记", chapter: "礼运", content: "选贤与能，讲信修睦" },
            { book: "礼记", chapter: "礼运", content: "故人不独亲其亲，不独子其子" },
            { book: "礼记", chapter: "礼运", content: "是谓大同" },
            { book: "孟子", chapter: "梁惠王上", content: "老吾老以及人之老，幼吾幼以及人之幼" }
        ],
        suggestion: "'大同'为儒家理想社会蓝图，与'小康'相对，近代常被与西方乌托邦思想比较"
    },
    "阴阳": {
        book: "论阴阳",
        references: [
            { book: "周易", chapter: "系辞上", content: "一阴一阳之谓道" },
            { book: "周易", chapter: "说卦", content: "立天之道曰阴与阳" },
            { book: "老子", chapter: "42章", content: "万物负阴而抱阳" },
            { book: "国语", chapter: "周语", content: "阳伏而不能出，阴迫而不能蒸" }
        ],
        suggestion: "'阴阳'原为天文历法概念，渐发展为宇宙生成论的重要范畴"
    },
    "道": {
        book: "论道",
        references: [
            { book: "论语", chapter: "里仁", content: "子曰：'参乎！吾道一以贯之。'" },
            { book: "论语", chapter: "卫灵公", content: "子在川上曰：'逝者如斯夫！不舍昼夜。'" },
            { book: "老子", chapter: "1章", content: "道可道，非常道" },
            { book: "老子", chapter: "25章", content: "人法地，地法天，天法道，道法自然" },
            { book: "周易", chapter: "系辞下", content: "易穷则变，变则通，通则久" }
        ],
        suggestion: "儒道皆论'道'但内涵迥异：儒家之道重人伦，道家之道重自然"
    },
    "德": {
        book: "论德",
        references: [
            { book: "尚书", chapter: "皋陶谟", content: "慎厥身，修思永" },
            { book: "尚书", chapter: "康诰", content: "克明德慎罚" },
            { book: "论语", chapter: "为政", content: "为政以德，譬如北辰" },
            { book: "左传", chapter: "僖公二十四年", content: "德，国家之基也" },
            { book: "礼记", chapter: "大学", content: "大学之道，在明明德" }
        ],
        suggestion: "'德'字从'得'，原指有所得于心，后指品德，与'道'相配"
    },
    "义利": {
        book: "论义利",
        references: [
            { book: "论语", chapter: "里仁", content: "君子喻于义，小人喻于利" },
            { book: "论语", chapter: "卫灵公", content: "见利思义" },
            { book: "孟子", chapter: "梁惠王上", content: "王何必曰利？亦有仁义而已矣" },
            { book: "孟子", chapter: "告子上", content: "舍生而取义者也" },
            { book: "荀子", chapter: "荣辱", content: "先义而后利者荣，先利而后义者辱" }
        ],
        suggestion: "儒法对'义利'态度不同：儒家重义轻利，法家以利为驱"
    },
    "和同": {
        book: "论和同",
        references: [
            { book: "论语", chapter: "子路", content: "君子和而不同，小人同而不和" },
            { book: "左传", chapter: "昭公二十年", content: "和如羹焉，水火醯醢盐梅" },
            { book: "国语", chapter: "郑语", content: "夫和实生物，同则不继" },
            { book: "礼记", chapter: "中庸", content: "发而皆中节，谓之和" }
        ],
        suggestion: "'和而不同'为儒家处理差异的重要原则，区别于无原则的'同'"
    },
    "忠恕": {
        book: "论忠恕",
        references: [
            { book: "论语", chapter: "里仁", content: "子曰：'参乎！吾道一以贯之。'曾子曰：'唯。'" },
            { book: "论语", chapter: "卫灵公", content: "子贡问曰：'有一言而可以终身行之者乎？'子曰：'其恕乎！'" },
            { book: "论语", chapter: "学而", content: "为人谋而不忠乎？与朋友交而不信乎？" },
            { book: "礼记", chapter: "中庸", content: "忠恕违道不远" }
        ],
        suggestion: "'忠恕'是理解孔子'一以贯之'之道的关键，朱熹以'尽己'释忠'推己'释恕"
    },
    "正名": {
        book: "论正名",
        references: [
            { book: "论语", chapter: "子路", content: "名不正则言不顺，言不顺则事不成" },
            { book: "论语", chapter: "颜渊", content: "君君，臣臣，父父，子子" },
            { book: "荀子", chapter: "正名", content: "名定而实辨" },
            { book: "尹文子", chapter: "大道上", content: "名者，名形者也" }
        ],
        suggestion: "'正名'为儒家政治哲学的核心命题，涉及名实关系与社会秩序"
    },
    "王霸": {
        book: "论王霸",
        references: [
            { book: "孟子", chapter: "公孙丑上", content: "以德行仁者王，以力假仁者霸" },
            { book: "孟子", chapter: "梁惠王上", content: "养生丧死无憾，王道之始也" },
            { book: "荀子", chapter: "仲尼", content: "仲尼之门，五尺之竖子，言羞称乎五伯" },
            { book: "公羊传", chapter: "僖公四年", content: "南夷与北狄交，中国不绝若线" }
        ],
        suggestion: "'王霸之辨'是儒家政治思想的重要区分，孟子尊王贱霸"
    },
    "法先王": {
        book: "论法先王",
        references: [
            { book: "孟子", chapter: "梁惠王上", content: "孟子道性善，言必称尧舜" },
            { book: "荀子", chapter: "非十二子", content: "略法先王而不知其统" },
            { book: "韩非子", chapter: "五蠹", content: "今欲以先王之政，治当世之民" },
            { book: "商君书", chapter: "开塞", content: "上世亲亲而爱私，中世上贤而说仁，下世贵贵而尊官" }
        ],
        suggestion: "儒家'法先王'与法家'法后王'形成对立，反映不同的历史观"
    },
    "修身": {
        book: "论修身",
        references: [
            { book: "论语", chapter: "宪问", content: "修己以敬，修己以安人，修己以安百姓" },
            { book: "礼记", chapter: "大学", content: "大学之道，在明明德，在亲民，在止于至善" },
            { book: "礼记", chapter: "大学", content: "自天子以至于庶人，壹是皆以修身为本" },
            { book: "荀子", chapter: "劝学", content: "君子博学而日参省乎己，则知明而行无过矣" },
            { book: "孟子", chapter: "尽心上", content: "古之人，得志，泽加于民" }
        ],
        suggestion: "'修身'为儒学入手处，由内而外，层层扩展"
    }
};
