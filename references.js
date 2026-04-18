const CLASSICS_REFERENCES = [
    {
        "classic_title": "论语",
        "chapter": "学而",
        "verse": "1",
        "scripture_content": "子曰：'学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'学了，然后按一定的时间去实习它，不也高兴吗？有志同道合的人从远方来，不也快乐吗？人家不了解我，我却不怨恨，不也是君子吗？'",
        "note": "⑴时习——按一定的时间实习。⑵说——同悦，高兴。⑶愠——怨恨。"
    },
    {
        "classic_title": "论语",
        "chapter": "学而",
        "verse": "2",
        "scripture_content": "有子曰：'其为人也孝弟，而好犯上者，鲜矣；不好犯上，而好作乱者，未之有也。君子务本，本立而道生。孝弟也者，其为仁之本与！'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "有子说：'他的为人，孝顺爹娘，顺从兄长，而喜欢触犯上级，这种人是很少的；不喜欢触犯上级，而喜欢造反，这种人是没有的。君子专心致力于根本工作，根本建立了，治国做人的原则就会产生。孝顺爹娘，顺从兄长，这就是仁的根本啊！'",
        "note": "⑴有子——孔子学生，姓有，名若。⑵孝弟——善事父母为孝，善事兄长为弟。⑶鲜矣——很少啊。"
    },
    {
        "classic_title": "论语",
        "chapter": "学而",
        "verse": "4",
        "scripture_content": "曾子曰：'吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "曾子说：'我每天多次反省自己：为别人办事是否尽心竭力了呢？同朋友交往是否诚实了呢？老师传授给我的学业是否复习了呢？'",
        "note": "⑴曾子——孔子学生，名参，字子舆。⑵三省——多次反省。⑶传不习乎——老师传授的学业是否复习了。"
    },
    {
        "classic_title": "论语",
        "chapter": "学而",
        "verse": "12",
        "scripture_content": "有子曰：'礼之用，和为贵。先王之道，斯为美；小大由之。有所不行，知和而和，不以礼节之，亦不可行也。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "有子说：'礼的应用，以和谐为贵。以前君王的治国方法，可贵的地方就在这里；大事小事都照着做。有的时候就行不通了，如果只是为和谐而求和谐，不用礼来节制它，也是行不通的。'",
        "note": "⑴礼之用，和为贵——礼的应用，以和谐为贵。⑵斯为美——以这为美。⑶不以礼节之——不用礼来节制。"
    },
    {
        "classic_title": "论语",
        "chapter": "为政",
        "verse": "1",
        "scripture_content": "子曰：'为政以德，譬如北辰，居其所而众星共之。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'用道德来治理国政，自己便会像北极星一样，居于一定的位置，而别的星辰都围绕着它。'",
        "note": "⑴为政以德——用道德治理国政。⑵北辰——北极星。⑶共——同拱，环绕。"
    },
    {
        "classic_title": "论语",
        "chapter": "为政",
        "verse": "3",
        "scripture_content": "子曰：'道之以政，齐之以刑，民免而无耻；道之以德，齐之以礼，有耻且格。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'用政法来诱导他们，用刑罚来整顿他们，人民只是暂时地免于罪过，却没有羞耻之心。如果用道德来诱导他们，用礼教来整顿他们，人民不但有羞耻之心，而且能够人心归附。'",
        "note": "⑴道之以政——用政法诱导人民。⑵齐之以刑——用刑罚来整齐人民。⑶有耻且格——有羞耻心而且归附。"
    },
    {
        "classic_title": "论语",
        "chapter": "为政",
        "verse": "5",
        "scripture_content": "孟懿子问孝。子曰：'无违。'樊迟御，子告之曰：'孟孙问孝于我，我对曰，无违。'樊迟曰：'何谓也？'子曰：'生，事之以礼；死，葬之以礼，祭之以礼。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孟懿子问什么是孝。孔子说：'不要违背礼节。'后来樊迟替孔子驾车，孔子便告诉他说：'孟孙问我什么是孝，我答应他不要违背礼节。'樊迟说：'这是什么意思？'孔子说：'父母活着，按照礼节侍奉他们；死了，按照礼节埋葬他们，按照礼节祭祀他们。'",
        "note": "⑴孟懿子——鲁国大夫。⑵无违——不要违背礼节。⑶事之以礼——用礼来侍奉父母。"
    },
    {
        "classic_title": "论语",
        "chapter": "为政",
        "verse": "7",
        "scripture_content": "子游问孝。子曰：'今之孝者，是谓能养。至于犬马，皆能有养；不敬，何以别乎？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "子游问什么是孝。孔子说：'现在的孝子，说能养活父母就行了。然而对于狗和马，也能喂养；如果不恭敬，那养活父母和喂养狗马有什么区别呢？'",
        "note": "⑴子游——孔子学生，姓言，名偃，字子游。⑵能养——能养活父母。⑶敬——恭敬。"
    },
    {
        "classic_title": "论语",
        "chapter": "为政",
        "verse": "11",
        "scripture_content": "子曰：'温故而知新，可以为师矣。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'温习旧知识，而能在其中获得新的体会，这样就可以做老师了。'",
        "note": "⑴温故——温习旧知识。⑵知新——获得新的体会。"
    },
    {
        "classic_title": "论语",
        "chapter": "为政",
        "verse": "22",
        "scripture_content": "子曰：'人而无信，不知其可也。大车无輗，小车无軏，其何以行之哉？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'一个人不讲信用，不知道他可以干什么。就像大车没有輗，小车没有軏，它怎么能够行走呢？'",
        "note": "⑴人而无信——人而不讲信用。⑵輗、軏——车辕与横木相连接的关键部件。"
    },
    {
        "classic_title": "论语",
        "chapter": "八佾",
        "verse": "3",
        "scripture_content": "林放问礼之本。子曰：'大哉问！礼，与其奢也，宁俭；丧，与其易也，宁戚。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "林放问什么是礼的根本。孔子说：'你问得很重要！礼，与其奢侈铺张，宁可朴素俭约；丧事，与其仪式周全，宁可悲伤哀痛。'",
        "note": "⑴林放——鲁国人。⑵大哉问——问得好。⑶与其易也，宁戚——与其仪式周全，宁可内心悲哀。"
    },
    {
        "classic_title": "论语",
        "chapter": "八佾",
        "verse": "7",
        "scripture_content": "子曰：'君子无所争。必也射乎！揖让而升，下而饮。其争也君子。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'君子没有什么可争的事情。如果有所争，一定是比箭吧，[但是当射箭的时候，]相互作揖然后登堂；[射箭完毕，]走下堂来，然后[作揖]喝酒。那一种竞赛是很有礼貌的。'",
        "note": "⑴射——古代射礼。登堂而射，射后计算谁中靶多，中靶少的被罚饮酒。"
    },
    {
        "classic_title": "论语",
        "chapter": "八佾",
        "verse": "25",
        "scripture_content": "子谓《韶》：'尽美矣，又尽善也。'谓《武》：'尽美矣，未尽善也。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子评论《韶》乐说：'美极了，又好极了。'评论《武》乐说：'美极了，却还不够好。'",
        "note": "⑴韶——舜时的音乐。⑵武——周武王时的音乐。⑶尽美尽善——内容和形式都达到完美。"
    },
    {
        "classic_title": "论语",
        "chapter": "里仁",
        "verse": "1",
        "scripture_content": "子曰：'里仁为美。择不处仁，焉得知？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'跟有仁德的人住在一起，才是好的。如果你选择的住处不是跟有仁德的人在一起，怎么能算聪明呢？'",
        "note": "⑴里仁——居住在仁者所居之里。一说以仁为里，犹言'处于仁的境界'。"
    },
    {
        "classic_title": "论语",
        "chapter": "里仁",
        "verse": "2",
        "scripture_content": "子曰：'不仁者不可以久处约，不可以长处乐。仁者安仁，知者利仁。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'没有仁德的人不能长期过穷困的生活，也不能长期过安乐的生活。有仁德的人安于仁，聪明的人利用仁。'",
        "note": "⑴约——贫困。⑵安仁——安于仁道。⑶利仁——认识到仁对他有利而实行它。"
    },
    {
        "classic_title": "论语",
        "chapter": "里仁",
        "verse": "5",
        "scripture_content": "子曰：'君子欲讷于言而敏于行。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'君子说话要谨慎迟钝，工作要勤劳敏捷。'",
        "note": "⑴讷——说话谨慎迟钝。⑵敏——勤劳敏捷。"
    },
    {
        "classic_title": "论语",
        "chapter": "里仁",
        "verse": "16",
        "scripture_content": "子曰：'君子喻于义，小人喻于利。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'君子懂得的是义，小人懂得的是利。'",
        "note": "⑴喻——明白，懂得。⑵义——合宜的道德、行为或道理。⑶利——利益。"
    },
    {
        "classic_title": "论语",
        "chapter": "里仁",
        "verse": "18",
        "scripture_content": "子曰：'事父母几谏，见志不从，又敬不违，劳而不怨。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'侍奉父母，如果他们有什么不对的地方，要委婉地劝说。看到自己的意见没有被听从，仍然要恭恭敬敬地不违背他们，虽然忧愁，但不怨恨。'",
        "note": "⑴几谏——委婉地劝谏。⑵见志不从——意见不被采纳。⑶劳而不怨——忧愁但不怨恨。"
    },
    {
        "classic_title": "论语",
        "chapter": "雍也",
        "verse": "7",
        "scripture_content": "子曰：'回也，其心三月不违仁，其余则日月至焉而已矣。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'颜回呀，他的心长期不离开仁德，别的学生只是短时间偶然想到罢了。'",
        "note": "⑴回——颜回，孔子最得意的学生。⑵三月——泛指较长的时间。⑶日至——每天或有的一天。"
    },
    {
        "classic_title": "论语",
        "chapter": "雍也",
        "verse": "29",
        "scripture_content": "子曰：'中庸之为德也，其至矣乎！民鲜久矣。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'中庸这种道德，该是最高的了！人们已经长久地缺乏它了。'",
        "note": "⑴中庸——折中、适度、不偏不倚。⑵至矣乎——最高的了。⑶民鲜久矣——人民长久缺乏它。"
    },
    {
        "classic_title": "论语",
        "chapter": "雍也",
        "verse": "30",
        "scripture_content": "子贡曰：'如有博施于民而能济众，何如？可谓仁乎？'子曰：'何事于仁，必也圣乎！尧、舜其犹病诸！夫仁者，己欲立而立人，己欲达而达人。能近取譬，可谓仁之方也已。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "子贡说：'如果有人能广泛地给人民好处而能救济众人，怎么样？可以说是仁了吗？'孔子说：'哪里仅是仁！那一定是圣了！尧舜恐怕都难以做到呢！说到仁，就是自己想站起来，便帮助别人一同站起来；自己想开拓发展，便帮助别人一同开拓发展。能就近选取例子来做，可说是实行仁的方法了。'",
        "note": "⑴博施——广泛地施与。⑵济众——救济众人。⑶病诸——以此为病。⑷能近取譬——能就近以己为例，推己及人。"
    },
    {
        "classic_title": "论语",
        "chapter": "述而",
        "verse": "2",
        "scripture_content": "子曰：'默而识之，学而不厌，诲人不倦，何有于我哉？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'把所见所闻默默记住，勤奋学习而不满足，教导别人而不疲倦，这对我有什么困难呢？'",
        "note": "⑴默而识之——默默记住。⑵学而不厌——学习不满足。⑶诲人不倦——教导别人不疲倦。"
    },
    {
        "classic_title": "论语",
        "chapter": "述而",
        "verse": "6",
        "scripture_content": "子曰：'志于道，据于德，依于仁，游于艺。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'目标在'道'，根据在'德'，依靠在'仁'，游憩于礼、乐、射、御、书、数六艺之中。'",
        "note": "⑴道——指正确的政治路线和思想体系。⑵德——指内心的情感和思想。⑶仁——指仁爱。⑷艺——六艺：礼、乐、射、御、书、数。"
    },
    {
        "classic_title": "论语",
        "chapter": "述而",
        "verse": "37",
        "scripture_content": "子曰：'君子坦荡荡，小人长戚戚。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'君子的心地平坦宽广，小人却经常局促忧愁。'",
        "note": "⑴坦荡荡——心地平坦宽广。⑵长戚戚——经常忧愁不安。"
    },
    {
        "classic_title": "论语",
        "chapter": "先进",
        "verse": "5",
        "scripture_content": "子曰：'孝哉，闵子骞！人不间于其父母昆弟之言。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'闵子骞真是孝顺呀！别人对于他爹娘兄弟称赞他的话都没有异议。'",
        "note": "⑴闵子骞——孔子学生，姓闵，名损，字子骞。⑵人不间于其父母昆弟之言——别人对他父母兄弟的话没有异议。"
    },
    {
        "classic_title": "论语",
        "chapter": "先进",
        "verse": "16",
        "scripture_content": "子贡问：'师与商也孰贤？'子曰：'师也过，商也不及。'曰：'然则师愈与？'子曰：'过犹不及。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "子贡问道：'颛孙师和卜商谁强？'孔子说：'颛孙师过头了，卜商不够。'子贡说：'那么颛孙师强一些吗？'孔子说：'过头和不够同样不好。'",
        "note": "⑴师——颛孙师，字子张。⑵商——卜商，字子夏。⑶过犹不及——过头和不够同样不好。"
    },
    {
        "classic_title": "论语",
        "chapter": "颜渊",
        "verse": "1",
        "scripture_content": "颜渊问仁。子曰：'克己复礼为仁。一日克己复礼，天下归仁焉。为仁由己，而由人乎哉？'颜渊曰：'请问其目。'子曰：'非礼勿视，非礼勿听，非礼勿言，非礼勿动。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "颜渊问仁。孔子说：'克制自己，使言语和行动都符合礼，这就是仁。一旦这样做了，天下的人都会称许你是仁人。实行仁德在于自己，难道在于别人吗？'颜渊说：'请问实行仁的条目。'孔子说：'不合于礼的不要看，不合于礼的不要听，不合于礼的不要说，不合于礼的不要做。'",
        "note": "⑴克己复礼——克制自己，使自己的行为回复到礼的要求。⑵归仁——称许为仁。⑶由己——靠自己。"
    },
    {
        "classic_title": "论语",
        "chapter": "颜渊",
        "verse": "22",
        "scripture_content": "樊迟问仁。子曰：'爱人。'问知。子曰：'知人。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "樊迟问什么是仁。孔子说：'爱护人。'问什么是智。孔子说：'了解人。'",
        "note": "⑴樊迟——孔子学生，名须，字子迟。⑵爱人——仁就是爱别人。⑶知人——智就是能识别他人。"
    },
    {
        "classic_title": "论语",
        "chapter": "子路",
        "verse": "21",
        "scripture_content": "子曰：'君子和而不同，小人同而不和。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'君子讲究和谐而不同流合污，小人同流合污而不讲和谐。'",
        "note": "⑴和而不同——讲究和谐但不盲从附和。⑵同而不和——盲目附和而不讲原则。"
    },
    {
        "classic_title": "论语",
        "chapter": "宪问",
        "verse": "14",
        "scripture_content": "子路问君子。子曰：'修己以敬。'曰：'如斯而已乎？'曰：'修己以安人。'曰：'如斯而已乎？'曰：'修己以安百姓。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "子路问怎样才算是君子。孔子说：'修养自己以保持严肃恭敬的态度。'子路说：'这样就够了吗？'孔子说：'修养自己使上层人物安心。'子路说：'这样就够了吗？'孔子说：'修养自己使百姓得到安乐。'",
        "note": "⑴修己以敬——修养自己，保持恭敬。⑵安人——使上层人物安心。⑶安百姓——使百姓得到安乐。"
    },
    {
        "classic_title": "论语",
        "chapter": "卫灵公",
        "verse": "6",
        "scripture_content": "子张问行。子曰：'言忠信，行笃敬，虽蛮貊之邦，行矣。言不忠信，行不笃敬，虽州里，行乎哉？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "子张问怎样才能行得通。孔子说：'言语忠诚老实，行为敦厚恭敬，即使到了别的部族国家，也行得通。言语欺诈虚伪，行为轻薄奢侈，即使在本乡本土，能行得通吗？'",
        "note": "⑴言忠信——言语忠诚老实。⑵行笃敬——行为敦厚恭敬。⑶蛮貊——古代对南方和北方少数民族的称呼。"
    },
    {
        "classic_title": "论语",
        "chapter": "卫灵公",
        "verse": "21",
        "scripture_content": "子曰：'君子求诸己，小人求诸人。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'君子要求自己，小人要求别人。'",
        "note": "⑴求诸己——要求自己。⑵求诸人——要求别人。"
    },
    {
        "classic_title": "论语",
        "chapter": "卫灵公",
        "verse": "24",
        "scripture_content": "子贡问曰：'有一言而可以终身行之者乎？'子曰：'其恕乎！己所不欲，勿施于人。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "子贡问道：'有一个字可以终身奉行的吗？'孔子说：'大概是'恕'吧！自己所不想要的，就不要加给别人。'",
        "note": "⑴一言——一个字。⑵恕——己所不欲，勿施于人。⑶终身行之——可以用来终身实行。"
    },
    {
        "classic_title": "论语",
        "chapter": "季氏",
        "verse": "2",
        "scripture_content": "子曰：'性相近也，习相远也。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'人的本性是相近的，由于习染不同便相远了。'",
        "note": "⑴性——本性。⑵习——习染，指环境和教育的影响。⑶相远——距离远了。"
    },
    {
        "classic_title": "论语",
        "chapter": "阳货",
        "verse": "11",
        "scripture_content": "子曰：'礼云礼云，玉帛云乎哉？乐云乐云，钟鼓云乎哉？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'礼呀礼呀，只是说的玉帛之类的礼器吗？乐呀乐呀，只是说的钟鼓之类的乐器吗？'",
        "note": "⑴玉帛——祭祀时用的玉器和丝织品。⑵钟鼓——演奏音乐用的乐器。"
    },
    {
        "classic_title": "论语",
        "chapter": "子张",
        "verse": "12",
        "scripture_content": "子曰：'见利思义，见危授命，久要不忘平生之言，亦可以为成人矣。'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "孔子说：'看见利益就想到义，遇到危险愿意献出生命，长久困顿的时候不忘记平日的诺言，这也就可以算作完人了。'",
        "note": "⑴见利思义——见到利益想到义。⑵见危授命——遇到危险愿意献出生命。⑶久要不忘平生之言——长期处于困顿不忘记平日的诺言。"
    },
    {
        "classic_title": "论语",
        "chapter": "颜渊",
        "verse": "14",
        "scripture_content": "齐景公问政于孔子。孔子对曰：'君君，臣臣，父父，子子。'公曰：'善哉！信如君不君，臣不臣，父不父，子不子，虽有粟，吾得而食诸？'",
        "commentator": "杨伯峻",
        "commentary_title": "论语译注",
        "dynasty": "现代",
        "translation": "齐景公问孔子如何治理国家。孔子答道：'君要像君，臣要像臣，父亲要像父亲，儿子要像儿子。'景公说：'说得好呀！如果君不像君，臣不像臣，父不像父，子不像子，即使有粮食，我能够吃得着吗？'",
        "note": "⑴君君，臣臣，父父，子子——君要尽君道，臣要尽臣道，父要尽父道，子要尽子道。⑵信如——确实如此。"
    },
    {
        "classic_title": "孟子",
        "chapter": "梁惠王上",
        "verse": "1",
        "scripture_content": "孟子见梁惠王。王曰：'叟！不远千里而来，亦将有以利吾国乎？'孟子对曰：'王何必曰利？亦有仁义而已矣。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子去见梁惠王。梁惠王说：'老先生！您不以千里为远来到这里，一定有什么对我的国家有利的高见吧？'孟子回答说：'大王为什么一定要说利呢？只要有仁义就行了。'",
        "note": "⑴梁惠王——魏国国君。⑵仁义——仁爱和正义。"
    },
    {
        "classic_title": "孟子",
        "chapter": "梁惠王上",
        "verse": "3",
        "scripture_content": "梁惠王曰：'寡人之于国也，尽心焉耳矣。河内凶，则移其民于河东，移其粟于河内；河东凶亦然。察邻国之政，莫如寡人之用心者。邻国之民不加少，寡人之民不加多，何也？'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "梁惠王说：'我对于国家，真是费尽心力了。河内遭到饥荒，我便把那里的百姓迁移到河东，把河东的粮食运到河内；河东遇到饥荒也是这样。看看邻国的政治，没有像我这样尽心的。可是邻国的百姓没有减少，我的百姓没有增多，这是什么缘故呢？'",
        "note": "⑴河内、河东——魏国地名。⑵凶——遭受灾荒。⑶尽心——费尽心力。"
    },
    {
        "classic_title": "孟子",
        "chapter": "梁惠王上",
        "verse": "7",
        "scripture_content": "孟子曰：'老吾老，以及人之老；幼吾幼，以及人之幼；天下可运于掌。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'尊敬我的长辈，从而推广到尊敬别人的长辈；爱护我的儿女，从而推广到爱护别人的儿女；治理天下就像在手掌里转动东西一样容易。'",
        "note": "⑴老吾老——尊敬我的长辈。⑵幼吾幼——爱护我的儿女。⑶运于掌——在手掌里转动东西。"
    },
    {
        "classic_title": "孟子",
        "chapter": "滕文公上",
        "verse": "1",
        "scripture_content": "滕文公为世子，将之楚，过宋而见孟子。孟子道性善，言必称尧舜。",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "滕文公做太子的时候，要到楚国去，经过宋国时拜访了孟子。孟子讲人性善良，言必称颂尧舜。",
        "note": "⑴世子——太子。⑵道性善——讲人性善良。"
    },
    {
        "classic_title": "孟子",
        "chapter": "公孙丑上",
        "verse": "2",
        "scripture_content": "孟子曰：'人皆有不忍人之心。先王有不忍人之心，斯有不忍人之政矣；以不忍人之心，行不忍人之政，治天下可运之掌上。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'每个人都有怜爱别人的心。古代帝王因为有怜爱别人的心，于是才有怜爱别人的政事；用怜爱别人的心，实行怜爱别人的政事，治理天下就像在手掌里转动东西一样容易。'",
        "note": "⑴不忍人之心——怜爱别人的心。⑵不忍人之政——怜爱别人的政治措施。"
    },
    {
        "classic_title": "孟子",
        "chapter": "公孙丑上",
        "verse": "3",
        "scripture_content": "孟子曰：'无恻隐之心，非人也；无羞恶之心，非人也；无辞让之心，非人也；无是非之心，非人也。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'没有同情心的，不是人；没有羞耻心的，不是人；没有谦让心的，不是人；没有是非心的，不是人。'",
        "note": "⑴恻隐之心——同情心。⑵羞恶之心——羞耻心。⑶辞让之心——谦让心。⑷是非之心——明辨是非的心。"
    },
    {
        "classic_title": "孟子",
        "chapter": "公孙丑上",
        "verse": "6",
        "scripture_content": "孟子曰：'以德行仁者王，以力假仁者霸。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'用道德来实行仁政的可以称王，用武力来假借仁义的可以称霸。'",
        "note": "⑴以德行仁——用道德来实行仁政。⑵以力假仁——用武力假借仁义。"
    },
    {
        "classic_title": "孟子",
        "chapter": "离娄上",
        "verse": "1",
        "scripture_content": "孟子曰：'离娄之明，公输子之巧，不以规矩，不能成方员；师旷之聪，不以六律，不能正五音；尧舜之道，不以仁政，不能平治天下。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'即使有离娄的目力，公输般的技巧，如果不用圆规和曲尺，也不能画出方形和圆形；即使有师旷的听力，如果不用六律，也不能校正五音；即使有尧舜的大道，如果不行仁政，也不能使天下太平。'",
        "note": "⑴离娄——古代视力很强的人。⑵公输子——即鲁班，古代巧匠。⑶师旷——古代音乐家。⑷六律——古代音乐标准。"
    },
    {
        "classic_title": "孟子",
        "chapter": "离娄上",
        "verse": "12",
        "scripture_content": "孟子曰：'有不虞之誉，有求全之毁。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'有意料不到的赞誉，也有吹毛求疵的毁谤。'",
        "note": "⑴不虞之誉——预料不到的赞誉。⑵求全之毁——苛求完美而致的毁谤。"
    },
    {
        "classic_title": "孟子",
        "chapter": "离娄下",
        "verse": "19",
        "scripture_content": "孟子曰：'君子以仁存心，以礼存心。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'君子用仁来存心，用礼来存心。'",
        "note": "⑴以仁存心——用仁来存心。⑵以礼存心——用礼来存心。"
    },
    {
        "classic_title": "孟子",
        "chapter": "告子上",
        "verse": "2",
        "scripture_content": "告子曰：'人性之善也，犹水之就下也。人无有不善，水无有不下。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "告子说：'人性的善良，就像水往低处流一样。人的本性没有不善良的，水没有不往低处流的。'",
        "note": "⑴人性之善——人的本性是善良的。⑵就下——流向低处。"
    },
    {
        "classic_title": "孟子",
        "chapter": "告子上",
        "verse": "3",
        "scripture_content": "告子曰：'性无善无不善也。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "告子说：'人的本性没有善良也没有不善良。'",
        "note": "⑴告子——战国时人，主张性无善无不善。"
    },
    {
        "classic_title": "孟子",
        "chapter": "告子上",
        "verse": "4",
        "scripture_content": "告子曰：'食色，性也。仁，内也，非外也；义，外也，非内也。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "告子说：'饮食男女，是人的本性。仁是内在的东西，不是外在的东西；义是外在的东西，不是内在的东西。'",
        "note": "⑴食色——饮食和男女。⑵仁内义外——仁是内在的，义是外在的。"
    },
    {
        "classic_title": "孟子",
        "chapter": "告子上",
        "verse": "10",
        "scripture_content": "孟子曰：'鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。生，亦我所欲也；义，亦我所欲也。二者不可得兼，舍生而取义者也。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'鱼是我想要的东西，熊掌也是我想要的东西，如果两样不能同时得到，我便舍去鱼而要熊掌。生命是我想要的，大义也是我想要的，如果两者不能同时得到，我便舍去生命而选取大义。'",
        "note": "⑴舍生取义——舍弃生命而选取大义。⑵二者不可得兼——两样不能同时得到。"
    },
    {
        "classic_title": "孟子",
        "chapter": "告子上",
        "verse": "6",
        "scripture_content": "孟子曰：'恻隐之心，人皆有之；羞恶之心，人皆有之；恭敬之心，人皆有之；是非之心，人皆有之。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'同情心，每个人都有；羞耻心，每个人都有；恭敬心，每个人都有；是非心，每个人都有。'",
        "note": "⑴恻隐之心——同情心。⑵羞恶之心——羞耻心。⑶恭敬之心——恭敬心。⑷是非之心——是非心。"
    },
    {
        "classic_title": "孟子",
        "chapter": "尽心上",
        "verse": "1",
        "scripture_content": "孟子曰：'尽其心者，知其性也。知其性，则知天矣。存其心，养其性，所以事天也。夭寿不贰，修身以俟之，所以立命也。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'充分扩张善良的本心，这就是懂得了人的本性。懂得了人的本性，就懂得天命了。保持人的本心，培养人的本性，这就是对待天命的方法。短命和长寿都不改变态度，修养身心来等待天命，这就是安身立命的方法。'",
        "note": "⑴尽其心——充分发挥本心。⑵知其性——懂得人的本性。⑶知天——懂得天命。⑷立命——安身立命。"
    },
    {
        "classic_title": "孟子",
        "chapter": "尽心上",
        "verse": "13",
        "scripture_content": "孟子曰：'万物皆备于我矣。反身而诚，乐莫大焉。强恕而行，求仁莫近焉。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'万事万物的道理我都具备了。反躬自问，自己是忠诚踏实的，便没有比这更大的快乐了。努力按恕道办事，追求仁德没有比这更近的了。'",
        "note": "⑴万物皆备于我——万事万物的道理我都具备了。⑵反身而诚——反躬自问自己是忠诚踏实的。⑶强恕而行——努力按恕道办事。"
    },
    {
        "classic_title": "孟子",
        "chapter": "告子下",
        "verse": "2",
        "scripture_content": "孟子曰：'故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。'",
        "commentator": "杨伯峻",
        "commentary_title": "孟子译注",
        "dynasty": "现代",
        "translation": "孟子说：'所以天要把重大任务降到这个人身上，一定要先使他的心志苦恼，使他的筋骨劳累，使他的身体饥饿，使他身受穷困之苦，所做的事总不如意，用来动摇他的心志，坚韧他的性情，增加他过去所没有的能力。'",
        "note": "⑴降大任——降下重大任务。⑵苦其心志——使心志苦恼。⑶动心忍性——动摇心志，坚韧性情。"
    },
    {
        "classic_title": "礼记",
        "chapter": "曲礼上",
        "verse": "3",
        "scripture_content": "道德仁义，非礼不成。教训正俗，非礼不备。分争辨讼，非礼不决。君臣上下，父子兄弟，非礼不定。宦学事师，非礼不亲。班朝治军，莅官行法，非礼威严不行。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "道德仁义，没有礼便不能成就。教训人民使风俗归于正道，没有礼便不能完备。分辨争执诉讼，没有礼便不能决定。君臣上下，父子兄弟，没有礼便不能安定。学习和做官去侍奉老师，没有礼便不能亲密。朝廷的位次，军队的治理，就职任事，执行法令，没有礼便没有威严可言。",
        "note": "⑴道德仁义——道德仁义四项。⑵非礼不成——没有礼便不能成就。"
    },
    {
        "classic_title": "礼记",
        "chapter": "曲礼上",
        "verse": "7",
        "scripture_content": "夫为人子者，出必告，反必面，所游必有常，所习必有业。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "做儿子的，出门必须告诉父母，回来也必须当面禀报。出游必须有一定的地方，学习必须有固定的学业。",
        "note": "⑴出必告——出门必须告诉父母。⑵反必面——回来必须当面禀报。"
    },
    {
        "classic_title": "礼记",
        "chapter": "礼运",
        "verse": "1",
        "scripture_content": "夫礼之初，始诸饮食。其燔黍捭豚，污尊而抔饮，蒉桴而土鼓，犹若可以致其敬于鬼神。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "礼的起始，最初是从饮食开始的。当时人们烧熟小米，撕开小猪在地上挖个坑作为酒壶，用手掬酒来喝，堆土作为鼓槌，堆土作为鼓，这样做还是可以向鬼神表示敬意的。",
        "note": "⑴礼之初，始诸饮食——礼的起始是从饮食开始的。⑵燔黍捭豚——烧熟小米，撕开小猪。⑶污尊而抔饮——挖坑为壶，用手掬酒。"
    },
    {
        "classic_title": "礼记",
        "chapter": "礼运",
        "verse": "1",
        "scripture_content": "大道之行也，天下为公。选贤与能，讲信修睦。故人不独亲其亲，不独子其子，使老有所终，壮有所用，幼有所长，矜寡孤独废疾者，皆有所养。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "大道实行的时代，天下是公共的。人们选举贤能和有才能的人，讲求信用，建立和睦关系。所以人们不只是敬奉自己的父母，不只是抚养自己的孩子，而是使老年人能够安享天年，壮年人能够发挥才能，幼年人能够健康成长，鳏寡孤独和残废有病的人，都能得到赡养。",
        "note": "⑴天下为公——天下是公共的。⑵选贤与能——选举贤能和有才能的人。⑶矜寡孤独——老而无妻、老而无夫、幼而无父、老而无子。"
    },
    {
        "classic_title": "礼记",
        "chapter": "礼运",
        "verse": "9",
        "scripture_content": "人情者，圣王之田也。修礼以耕之，陈义以种之，讲学以耨之，本仁以聚之，播乐以安之。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "人的情感欲望，是圣王耕种的田地。用礼义来耕耘它，用讲学来锄草它，用仁爱来聚集它，用音乐来安定它。",
        "note": "⑴人情——人的情感欲望。⑵圣王之田——圣王耕种的田地，比喻教化的对象。"
    },
    {
        "classic_title": "礼记",
        "chapter": "礼器",
        "verse": "1",
        "scripture_content": "礼也者，犹体也。体不备，君子谓之不成人。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "礼就好比人的身体。身体器官不完备，君子称这为不成其为人。",
        "note": "⑴礼也者，犹体也——礼就像人的身体。⑵不备——不完备。"
    },
    {
        "classic_title": "礼记",
        "chapter": "内则",
        "verse": "2",
        "scripture_content": "父母有过，下气怡色，柔声以谏。谏若不入，起敬起孝，说则复谏。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "父母有了过错，要和颜悦色、轻声细语地规劝。如果不听从，便更加恭敬孝顺，等父母高兴时再继续规劝。",
        "note": "⑴下气怡色——和颜悦色。⑵柔声以谏——轻声细语地规劝。⑶起敬起孝——更加恭敬孝顺。"
    },
    {
        "classic_title": "礼记",
        "chapter": "祭义",
        "verse": "1",
        "scripture_content": "孝子之有深爱者，必有和气；有和气者，必有愉色；有愉色者，必有婉容。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "孝子如果有深厚的爱，心中必然有和气；有和气的人，脸上必然有愉快的表情；有愉快表情的人，必然有柔和的容貌。",
        "note": "⑴深爱——深厚的爱。⑵和气——平和的气象。⑶愉色——愉快的表情。⑷婉容——柔和的容貌。"
    },
    {
        "classic_title": "礼记",
        "chapter": "中庸",
        "verse": "1",
        "scripture_content": "天命之谓性，率性之谓道，修道之谓教。道也者，不可须臾离也，可离非道也。",
        "commentator": "朱熹",
        "commentary_title": "四书章句集注",
        "dynasty": "宋",
        "translation": "天的赋予叫做性，顺着本性行事叫做道，修明并推广道叫做教。道，是片刻不能离开的，能够离开的就不是道。",
        "note": "⑴天命之谓性——天的赋予叫做性。⑵率性之谓道——顺着本性行事叫做道。⑶修道之谓教——修明并推广道叫做教。"
    },
    {
        "classic_title": "礼记",
        "chapter": "中庸",
        "verse": "12",
        "scripture_content": "中也者，天下之大本也；和也者，天下之达道也。致中和，天地位焉，万物育焉。",
        "commentator": "朱熹",
        "commentary_title": "四书章句集注",
        "dynasty": "宋",
        "translation": "中是天下的根本，和是天下的通途。达到中和的境界，天地便各在其位，万物便生长发育了。",
        "note": "⑴大本——根本。⑵达道——通途。⑶致中和——达到中和的境界。"
    },
    {
        "classic_title": "礼记",
        "chapter": "中庸",
        "verse": "1",
        "scripture_content": "君子之中庸也，君子而时中。",
        "commentator": "朱熹",
        "commentary_title": "四书章句集注",
        "dynasty": "宋",
        "translation": "君子的中庸，是因为君子能够随时居于中道。",
        "note": "⑴时中——随时居于中道。"
    },
    {
        "classic_title": "礼记",
        "chapter": "大学",
        "verse": "1",
        "scripture_content": "大学之道，在明明德，在亲民，在止于至善。",
        "commentator": "朱熹",
        "commentary_title": "四书章句集注",
        "dynasty": "宋",
        "translation": "大学的道理，在于彰显光明的品德，在于使人们革除旧习达到新的境界，在于使人们达到最完善的境界。",
        "note": "⑴明明德——彰显光明的品德。⑵亲民——使人们革除旧习。⑶止于至善——达到最完善的境界。"
    },
    {
        "classic_title": "礼记",
        "chapter": "乐记",
        "verse": "1",
        "scripture_content": "乐者，通伦理者也。是故知声而不知音者，禽兽是也；知音而不知乐者，众庶是也。唯君子为能知乐。",
        "commentator": "杨伯峻",
        "commentary_title": "礼记译注",
        "dynasty": "现代",
        "translation": "音乐是沟通伦理的。因此只知道声音而不知道音乐的，是禽兽；知道音乐而不知道乐的，是普通百姓。只有君子才能懂得乐。",
        "note": "⑴通伦理——沟通伦理。⑵知声不知音——只知道声音而不知道音乐。"
    },
    {
        "classic_title": "周易",
        "chapter": "系辞上",
        "verse": "5",
        "scripture_content": "一阴一阳之谓道。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "一阴一阳的交替变化就叫做道。",
        "note": "⑴一阴一阳——阴阳交替变化。⑵之谓道——就叫做道。"
    },
    {
        "classic_title": "周易",
        "chapter": "系辞上",
        "verse": "6",
        "scripture_content": "变化者，进退之象也。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "变化是事物行进和退止的象征。",
        "note": "⑴变化——变化。⑵进退之象——行进和退止的象征。"
    },
    {
        "classic_title": "周易",
        "chapter": "系辞上",
        "verse": "10",
        "scripture_content": "易与天地准，故能弥纶天地之道。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "《易经》与天地齐等，所以能普遍包括天地间的道理。",
        "note": "⑴与天地准——与天地齐等。⑵弥纶——普遍包括。"
    },
    {
        "classic_title": "周易",
        "chapter": "系辞上",
        "verse": "11",
        "scripture_content": "易有太极，是生两仪，两仪生四象，四象生八卦。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "《易经》有太极，由此产生天地两仪，两仪产生四象，四象产生八卦。",
        "note": "⑴太极——宇宙原始混沌之气。⑵两仪——天地或阴阳。⑶四象——少阳、老阳、少阴、老阴。⑷八卦——乾、坤、震、巽、坎、离、艮、兑。"
    },
    {
        "classic_title": "周易",
        "chapter": "系辞下",
        "verse": "1",
        "scripture_content": "易穷则变，变则通，通则久。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "《易经》的道理是：事物到了尽头就要发生变化，变化就能通达，通达就能长久。",
        "note": "⑴穷则变——到了尽头就要发生变化。⑵变则通——变化就能通达。⑶通则久——通达就能长久。"
    },
    {
        "classic_title": "周易",
        "chapter": "系辞下",
        "verse": "6",
        "scripture_content": "变化者，进退之象也；刚柔者，昼夜之象也。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "变化是事物行进和退止的象征；刚柔是白天和黑夜的象征。",
        "note": "⑴变化——事物的发展变化。⑵刚柔——刚健和柔顺。⑶昼夜——白天和黑夜。"
    },
    {
        "classic_title": "周易",
        "chapter": "乾",
        "verse": "1",
        "scripture_content": "大哉乾元，万物资始，乃统天。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "伟大啊，乾的元始！万物依赖它而开始存在，它于是统率着天。",
        "note": "⑴乾元——乾的元始。⑵万物资始——万物依赖它而开始存在。⑶统天——统率天。"
    },
    {
        "classic_title": "周易",
        "chapter": "乾",
        "verse": "2",
        "scripture_content": "天行健，君子以自强不息。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "天的运行刚健不息，君子因此不停息地自我奋发图强。",
        "note": "⑴天行健——天的运行刚健。⑵自强不息——自己奋发图强而不停息。"
    },
    {
        "classic_title": "周易",
        "chapter": "文言",
        "verse": "1",
        "scripture_content": "元者，善之长也。亨者，嘉之会也。利者，义之和也。贞者，事之干也。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "元是善的首位，亨是美的集合，利是义的和谐，贞是事的根本。",
        "note": "⑴元者，善之长也——元是善的首位。⑵亨者，嘉之会也——亨是美的集合。⑶利者，义之和也——利是义的和谐。⑷贞者，事之干也——贞是事的根本。"
    },
    {
        "classic_title": "周易",
        "chapter": "坤",
        "verse": "2",
        "scripture_content": "地势坤，君子以厚德载物。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "地的形势是顺承天的，君子因此用厚重的德行来承载万物。",
        "note": "⑴地势坤——地的形势顺承天。⑵厚德载物——用厚重的德行来承载万物。"
    },
    {
        "classic_title": "周易",
        "chapter": "文言",
        "verse": "4",
        "scripture_content": "坤至柔而动也刚，至静而德方。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "坤最为柔顺，但活动起来却很刚健；最为静止，但德行却流布四方。",
        "note": "⑴至柔——最为柔顺。⑵动也刚——活动起来却很刚健。⑶至静——最为静止。"
    },
    {
        "classic_title": "周易",
        "chapter": "说卦",
        "verse": "15",
        "scripture_content": "立天之道曰阴与阳。",
        "commentator": "朱熹",
        "commentary_title": "周易本义",
        "dynasty": "宋",
        "translation": "确立天的道叫做阴和阳。",
        "note": "⑴立天之道——确立天的道。⑵曰阴与阳——叫做阴和阳。"
    },
    {
        "classic_title": "尚书",
        "chapter": "皋陶谟",
        "verse": "3",
        "scripture_content": "慎厥身，修思永。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "谨慎地修养自身，思考长久之道。",
        "note": "⑴慎厥身——谨慎地修养自身。⑵修思永——思考长久之道。"
    },
    {
        "classic_title": "尚书",
        "chapter": "大禹谟",
        "verse": "3",
        "scripture_content": "人心惟危，道心惟微，惟精惟一，允执厥中。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "人心是危险难安的，道心是幽微难明的，只有精心一意，真诚地坚持中道。",
        "note": "⑴人心惟危——人心危险难安。⑵道心惟微——道心幽微难明。⑶惟精惟一——精心一意。⑷允执厥中——真诚地坚持中道。"
    },
    {
        "classic_title": "尚书",
        "chapter": "大禹谟",
        "verse": "4",
        "scripture_content": "人心惟危，道心惟微。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "人心是危险难安的，道心是幽微难明的。",
        "note": "⑴人心惟危——人心危险难安。⑵道心惟微——道心幽微难明。"
    },
    {
        "classic_title": "尚书",
        "chapter": "康诰",
        "verse": "1",
        "scripture_content": "克明德慎罚。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "能够彰明德行，谨慎地使用刑罚。",
        "note": "⑴克明德——能够彰明德行。⑵慎罚——谨慎地使用刑罚。"
    },
    {
        "classic_title": "尚书",
        "chapter": "召诰",
        "verse": "13",
        "scripture_content": "皇天上帝，改厥元子。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "伟大的上天上帝，更改了天下的大君。",
        "note": "⑴皇天上帝——伟大的上天上帝。⑵改厥元子——更改了天下的大君。"
    },
    {
        "classic_title": "尚书",
        "chapter": "咸有一德",
        "verse": "14",
        "scripture_content": "天难谌，命靡常。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "上天是难以相信的，命运是没有常定的。",
        "note": "⑴天难谌——上天难以相信。⑵命靡常——命运没有常定。"
    },
    {
        "classic_title": "尚书",
        "chapter": "泰誓上",
        "verse": "11",
        "scripture_content": "天视自我民视，天听自我民听。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "上天的所见来自于人民所见，上天的所闻来自于人民所闻。",
        "note": "⑴天视自我民视——上天的所见来自于人民所见。⑵天听自我民听——上天的所闻来自于人民所闻。"
    },
    {
        "classic_title": "尚书",
        "chapter": "尧典",
        "verse": "1",
        "scripture_content": "昔在帝尧，聪明文思，光宅天下。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "从前帝尧，耳聪目明，文思敏捷，光辉普照天下。",
        "note": "⑴帝尧——传说中的古代帝王。⑵聪明文思——耳聪目明，文思敏捷。⑶光宅天下——光辉普照天下。"
    },
    {
        "classic_title": "尚书",
        "chapter": "舜典",
        "verse": "1",
        "scripture_content": "曰若稽古帝舜，曰重华协于帝。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "考查古代的帝舜，他的光华与帝尧相合。",
        "note": "⑴曰若稽古——考查古代。⑵重华——指舜的美德如花光华。⑶协于帝——与帝尧相合。"
    },
    {
        "classic_title": "尚书",
        "chapter": "洪范",
        "verse": "1",
        "scripture_content": "五行：一曰水，二曰火，三曰木，四曰金，五曰土。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "五行：第一叫水，第二叫火，第三叫木，第四叫金，第五叫土。",
        "note": "⑴五行——水、火、木、金、土五种基本元素。⑵一曰水——第一叫水。"
    },
    {
        "classic_title": "尚书",
        "chapter": "洪范",
        "verse": "10",
        "scripture_content": "敛时五福，用敷锡厥庶民。",
        "commentator": "顾颉刚",
        "commentary_title": "尚书校释译论",
        "dynasty": "现代",
        "translation": "收集这五福，用来普遍地赐予庶民。",
        "note": "⑴敛时五福——收集这五福。⑵用敷锡厥庶民——用来普遍地赐予庶民。"
    },
    {
        "classic_title": "诗经",
        "chapter": "周南",
        "verse": "1",
        "scripture_content": "关关雎鸠，在河之洲。窈窕淑女，君子好逑。",
        "commentator": "周振甫",
        "commentary_title": "诗经译注",
        "dynasty": "现代",
        "translation": "雎鸠鸟关关和唱，在河心小小的洲上。好姑娘苗条又美丽，确是君子好配偶。",
        "note": "⑴关关——鸟鸣声。⑵雎鸠——水鸟。⑶窈窕——容貌美好。⑷淑女——善良的女子。⑸好逑——好配偶。"
    },
    {
        "classic_title": "诗经",
        "chapter": "小雅",
        "verse": "6",
        "scripture_content": "呦呦鹿鸣，食野之苹。我有嘉宾，鼓瑟吹笙。",
        "commentator": "周振甫",
        "commentary_title": "诗经译注",
        "dynasty": "现代",
        "translation": "群鹿呦呦鸣叫，在原野上吃着苹草。我有贵客到来，弹瑟吹笙来欢迎。",
        "note": "⑴呦呦——鹿鸣声。⑵苹——植物名。⑶嘉宾——贵客。"
    },
    {
        "classic_title": "诗经",
        "chapter": "清庙",
        "verse": "1",
        "scripture_content": "於穆清庙，肃雍显相。济济多士，秉文之德。",
        "commentator": "周振甫",
        "commentary_title": "诗经译注",
        "dynasty": "现代",
        "translation": "啊，清静的宗庙多么庄严，恭敬而和顺的助祭者仪容端庄。众多的官吏，都遵循着文王的德行。",
        "note": "⑴於穆——赞叹词，美好庄严肃穆。⑵清庙——清静的宗庙。⑶肃雍——恭敬而和顺。⑷济济——众多。⑸秉文之德——遵循文王的德行。"
    },
    {
        "classic_title": "诗经",
        "chapter": "鲁颂·駉",
        "verse": "25",
        "scripture_content": "思无邪，思马斯徂。",
        "commentator": "周振甫",
        "commentary_title": "诗经译注",
        "dynasty": "现代",
        "translation": "思想纯正，马儿就这样向前奔跑。",
        "note": "⑴思无邪——思想纯正。⑵马斯徂——马儿向前跑。"
    },
    {
        "classic_title": "诗经",
        "chapter": "秦风",
        "verse": "10",
        "scripture_content": "蒹葭苍苍，白露为霜。所谓伊人，在水一方。",
        "commentator": "周振甫",
        "commentary_title": "诗经译注",
        "dynasty": "现代",
        "translation": "芦苇苍青一片，露水凝成了霜。我所怀念的人，就在河水的那一边。",
        "note": "⑴蒹葭——芦苇。⑵苍苍——青苍色。⑶白露为霜——露水凝成霜。⑷伊人——那人。"
    },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "大学之道",
    "translation": "大学的宗旨",
    "note_zheng": "",
    "note_kong": "案郑《目录》云：“名曰《大学》者，以其记博学，可以为政也。此于《别录》属《通论》。”此《大学》之篇，论学成之事，能治其国，章明其德于天下，却本明德所由，先从诚意为始。",
    "note_zhu": "大，旧音泰，今读如字。子程子曰：“大学，孔氏之遗书，而初学入德之门也。”于今可见古人为学次第者，独赖此篇之存，而论、孟次之。学者必由是而学焉，则庶乎其不差矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "在明明德",
    "translation": "在于彰显自身光明的德行",
    "note_zheng": "谓显明其至德也。",
    "note_kong": "在于章明己之光明之德。谓身有明德，而更章显之，此其一也。",
    "note_zhu": "明，明之也。明德者，人之所得乎天，而虚灵不昧，以具众理而应万事者也。但为气禀所拘，人欲所蔽，则有时而昏；然其本体之明，则有未尝息者。故学者当因其所发而遂明之，以复其初也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "在亲民",
    "translation": "在于亲爱民众",
    "note_kong": "在于亲爱于民，是其二也。",
    "note_zhu": "程子曰：“亲，当作新。”新者，革其旧之谓也，言既自明其明德，又当推以及人，使之亦有以去其旧染之污也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "在止于至善",
    "translation": "在于使言行达到并停留在至善的境界",
    "note_zheng": "止，犹自处也。",
    "note_kong": "在止处于至善之行，此其三也。言大学之道，在于此三事矣。",
    "note_zhu": "止者，必至于是而不迁之意。至善，则事理当然之极也。言明明德、新民，皆当至于至善之地而不迁。盖必其有以尽夫天理之极，而无一毫人欲之私也。此三者，大学之纲领也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "知止而后有定",
    "translation": "知道应止于至善，然后才能有坚定的志向",
    "note_kong": "更覆说“止于至善”之事。既知“止于至善”，而后心能有定，不有差贰也。",
    "note_zhu": "止者，所当止之地，即至善之所在也。知之，则志有定向。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "定而后能静",
    "translation": "志向坚定，然后才能内心宁静",
    "note_kong": "心定无欲改，能静不躁求也。",
    "note_zhu": "静，谓心不妄动。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "静而后能安",
    "translation": "内心宁静，然后才能处位安稳",
    "note_kong": "以静故情性安和也。",
    "note_zhu": "安，谓所处而安。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "安而后能虑",
    "translation": "处位安稳，然后才能思虑周详",
    "note_kong": "情既安和，能思虑于事也。",
    "note_zhu": "虑，谓处事精详。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "虑而后能得",
    "translation": "思虑周详，然后才能有所收获",
    "note_zheng": "得，谓得事之宜也。",
    "note_kong": "既能思虑，然后于事得安也。",
    "note_zhu": "得，谓得其所止。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "物有本末",
    "translation": "万物有根本和末节",
    "note_kong": "若于事得宜，而天下万物有本有末，经营百事有终有始也。",
    "note_zhu": "明德为本，新民为末。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "事有终始",
    "translation": "万事有终结和开始",
    "note_kong": "同上",
    "note_zhu": "知止为始，能得为终。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "知所先后",
    "translation": "知道什么该先、什么该后",
    "note_kong": "既能如此，天下百事万物，皆识知其先后也。",
    "note_zhu": "本始所先，末终所后。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "则近道矣",
    "translation": "就接近大学之道了",
    "note_kong": "若能行此诸事，则附近于大道矣。",
    "note_zhu": "此结上文两节之意。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "古之欲明明德于天下者",
    "translation": "古代想要彰显光明德行于天下的人",
    "note_kong": "前章言大学之道在明德、亲民、止善，覆说止善之事既毕，故此经明明德之理。",
    "note_zhu": "明明德于天下者，使天下之人皆有以明其明德也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "先治其国",
    "translation": "先要治理好自己的国家",
    "note_kong": "此以积学能为明德盛极之事，以渐到。今本其初，故言欲章明己之明德，使遍于天下者，先须能治其国。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "欲治其国者",
    "translation": "要治理好国家"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "先齐其家",
    "translation": "先要整治好自己的家庭",
    "note_kong": "言若欲齐家，先须修身也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "欲齐其家者",
    "translation": "要整治好家庭"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "先修其身",
    "translation": "先要修养好自身",
    "note_kong": "同上"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "欲修其身者",
    "translation": "要修养好自身"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "先正其心",
    "translation": "先要端正自己的内心",
    "note_kong": "言若欲修身，必先正其心也。",
    "note_zhu": "心者，身之所主也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "欲正其心者",
    "translation": "要端正内心"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "先诚其意",
    "translation": "先要使自己的意念真诚",
    "note_kong": "总包万虑谓之为心，情所意念谓之意。若欲正其心使无倾邪，必须先至诚，在于忆念也。若能诚实其意，则心不倾邪也。",
    "note_zhu": "诚，实也。意者，心之所发也。实其心之所发，欲其一于善而无自欺也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "欲诚其意者",
    "translation": "要使意念真诚"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "先致其知",
    "translation": "先要获得真知",
    "note_kong": "言欲精诚其己意，先须招致其所知之事，言初始必须学习，然后乃能有所知晓其成败。",
    "note_zhu": "致，推极也。知，犹识也。推极吾之知识，欲其所知无不尽也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "致知在格物",
    "translation": "获得真知在于推究事物的原理",
    "note_zheng": "知，谓知善恶吉凶之所终始也。格，来也。物，犹事也。其知于善深则来善物，其知于恶深则来恶物，言事缘人所好来也。此“致”或为“至”。",
    "note_kong": "言若能学习招致所知。格，来也。己有所知，则能在于来物。若知善深则来善物，知恶深则来恶物。言善恶之来缘人所好也。",
    "note_zhu": "格，至也。物，犹事也。穷至事物之理，欲其极处无不到也。此八者，大学之条目也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "物格而后知至",
    "translation": "推究了事物原理，然后真知才能达到极致",
    "note_kong": "物既来，则知其善恶所至。善事来，则知其至于善；若恶事来，则知其至于恶。既能知至，则行善不行恶也。",
    "note_zhu": "物格者，物理之极处无不到也。知至者，吾心之所知无不尽也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "知至而后意诚",
    "translation": "真知达到极致，然后意念才能真诚",
    "note_kong": "既能知至，则意念精诚也。",
    "note_zhu": "知既尽，则意可得而实矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "意诚而后心正",
    "translation": "意念真诚，然后内心才能端正",
    "note_kong": "意能精诚，故能心正也。",
    "note_zhu": "意既实，则心可得而正矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "心正而后身修",
    "translation": "内心端正，然后自身才能修养好",
    "note_zhu": "修身以上，明明德之事也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "身修而后家齐",
    "translation": "自身修养好，然后家庭才能整治好",
    "note_zhu": "齐家以下，新民之事也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "家齐而后国治",
    "translation": "家庭整治好，然后国家才能治理好"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "国治而后天下平",
    "translation": "国家治理好，然后天下才能太平",
    "note_kong": "则上“明明德于天下”，是以自天子至庶人皆然也。",
    "note_zhu": "物格知至，则知所止矣。意诚以下，则皆得所止之序也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "自天子以至于庶人",
    "translation": "从天子到平民百姓"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "壹是皆以修身为本",
    "translation": "一律都应以修养自身为根本",
    "note_zheng": "壹是，专行是也。",
    "note_kong": "言上从天子，下至庶人，贵贱虽异，所行此者专一，以修身为本。",
    "note_zhu": "壹是，一切也。正心以上，皆所以修身也。齐家以下，则举此而措之耳。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "其本乱而末治者否矣",
    "translation": "根本乱了而末节能治理好，这是不可能的",
    "note_kong": "本乱，谓身不修也。末治，谓国家治也。言己身既不修，而望家国治者否矣。",
    "note_zhu": "本，谓身也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "其所厚者薄",
    "translation": "该重视的却轻视"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "而其所薄者厚",
    "translation": "该轻视的却重视"
  },
  {
    "classic_title": "礼记",
    "chapter": "经一章",
    "scripture_content": "未之有也",
    "translation": "这样却想把事情办好，是从未有过的",
    "note_kong": "譬若与人交接，应须敦厚以加于人。今所厚之处，乃以轻薄。己既与彼轻薄，欲望所薄之处以厚重报己，未有此事也。",
    "note_zhu": "此两节结上文两节之意。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第一章",
    "scripture_content": "克明德",
    "translation": "能够彰显光明德行",
    "note_zheng": "皆自明明德也。克，能也。",
    "note_kong": "此一经广明意诚则能明己之德。周公封康叔而作《康诰》，戒康叔能明用有德。此《记》之意，言周公戒康叔以自明其德，与《尚书》异也。",
    "note_zhu": "康诰，周书。克，能也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第一章",
    "scripture_content": "顾諟天之明命",
    "translation": "要念念不忘上天赋予的光明使命",
    "note_zheng": "顾，念也。諟，犹正也。",
    "note_kong": "顾，念也。諟，正也。伊尹戒大甲云：尔为君，当顾念奉正天之显明之命，不邪僻也。",
    "note_zhu": "大甲，商书。顾，谓常目在之也。諟，犹此也，或曰审也。天之明命，即天之所以与我，而我之所以为德者也。常目在之，则无时不明矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第一章",
    "scripture_content": "克明峻德",
    "translation": "能够彰显崇高的德行",
    "note_zheng": "峻，大也。",
    "note_kong": "《帝典》，谓《尧典》之篇。峻，大也。言尧能自明大德也。",
    "note_zhu": "峻，书作俊。帝典，尧典，虞书。峻，大也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第一章",
    "scripture_content": "皆自明也",
    "translation": "这些都是说要自己彰显光明德行",
    "note_zheng": "皆自明明德也。",
    "note_kong": "此经所云《康诰》、《大甲》、《帝典》等之文，皆是人君自明其德也。",
    "note_zhu": "结所引书，皆言自明己德之意。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第二章",
    "scripture_content": "苟日新",
    "translation": "如果一天能够自新",
    "note_zheng": "盘铭，刻戒于盘也。",
    "note_kong": "汤沐浴之盘而刻铭为戒。苟，诚也，诚使道德日益新也。",
    "note_zhu": "盘，沐浴之盘也。铭，名其器以自警之辞也。苟，诚也。汤以人之洗濯其心以去恶，如沐浴其身以去垢。故铭其盘，言诚能一日有以涤其旧染之污而自新，则当因其已新者，而日日新之，又日新之，不可略有间断也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第二章",
    "scripture_content": "日日新",
    "translation": "就应天天自新",
    "note_kong": "言非唯一日之新，当使日日益新。",
    "note_zhu": "同上"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第二章",
    "scripture_content": "又日新",
    "translation": "每日不断自新",
    "note_kong": "言非唯日日益新，又须恒常日新。",
    "note_zhu": "同上"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第二章",
    "scripture_content": "作新民",
    "translation": "激励民众振作自新",
    "note_kong": "成王既伐管叔、蔡叔，以殷余民封康叔。诰言殷人化纣恶俗，使之变改为新人。",
    "note_zhu": "鼓之舞之之谓作，言振起其自新之民也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第二章",
    "scripture_content": "周虽旧邦",
    "translation": "周朝虽是古老邦国"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第二章",
    "scripture_content": "其命惟新",
    "translation": "所受天命却是新的",
    "note_kong": "此《大雅·文王》之篇。其诗之本意，言周虽旧是诸侯之邦，其受天之命，唯为天子而更新也。",
    "note_zhu": "诗大雅文王之篇。言周国虽旧，至于文王，能新其德以及于民，而始受天命也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第二章",
    "scripture_content": "君子无所不用其极",
    "translation": "所以君子无处不竭尽心力以求至善",
    "note_zheng": "极，犹尽也。",
    "note_kong": "极，尽也。言君子欲日新其德，无处不用其心尽力也。",
    "note_zhu": "自新新民，皆欲止于至善也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "邦畿千里",
    "translation": "京城方圆千里"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "惟民所止",
    "translation": "是民众安居的地方",
    "note_kong": "此《商颂·玄鸟》之篇，言殷之邦畿方千里，唯人所居止。",
    "note_zhu": "诗商颂玄鸟之篇。邦畿，王者之都也。止，居也，言物各有所当止之处也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "缗蛮黄鸟",
    "translation": "那鸣叫的黄鸟"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "止于丘隅",
    "translation": "栖息在山丘的一角",
    "note_zheng": "于止，于鸟之所止也。就而观之，知其所止，知鸟择岑蔚安闲而止处之耳，言人亦当择礼义乐土而自止处也。",
    "note_kong": "此《诗·小雅·缗蛮》之篇，刺幽王之诗。言缗蛮然微小之黄鸟，止在于岑蔚丘隅之处，得其所止。",
    "note_zhu": "诗小雅绵蛮之篇。缗蛮，鸟声。丘隅，岑蔚之处。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "于止",
    "translation": "对于栖息的地方"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "知其所止",
    "translation": "鸟都知道该停在哪里"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "可以人而不如鸟乎",
    "translation": "难道人反而不如鸟吗",
    "note_zheng": "《论语》曰：“里仁为美。择不处仁，焉得知？”",
    "note_kong": "孔子见其诗文而论之云：是观于鸟之所止，则人亦知其所止。岂可以人不择止处，不如鸟乎？",
    "note_zhu": "子曰以下，孔子说诗之辞。言人当知所当止之处也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "穆穆文王",
    "translation": "端庄深沉的文王啊"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "于缉熙敬止",
    "translation": "他的光明德行持续不断，恭敬地安守其位",
    "note_zheng": "缉熙，光明也。此美文王之德光明，敬其所以自止处。",
    "note_kong": "此《大雅·文王》之篇，美文王之诗。缉熙，谓光明也。文王之德，缉熙光明，又能敬其所止，以自居处也。",
    "note_zhu": "诗文王之篇。穆穆，深远之意。于，叹美辞。缉，继续也。熙，光明也。敬止，言其无不敬而安所止也。引此而言圣人之止，无非至善。五者乃其目之大者也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "为人君止于仁",
    "translation": "做君主的止于仁爱"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "为人臣止于敬",
    "translation": "做臣子的止于恭敬"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "为人子止于孝",
    "translation": "做子女的止于孝顺"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "为人父止于慈",
    "translation": "做父母的止于慈爱"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "与国人交止于信",
    "translation": "与国人交往止于诚信"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "瞻彼淇澳",
    "translation": "看那淇水弯曲处"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "菉竹猗猗",
    "translation": "绿竹多么茂盛",
    "note_zheng": "“菉竹猗猗”，喻美盛。",
    "note_kong": "此《诗·卫风·淇奥》之篇，卫人美武公之德也。视彼淇水之隈曲之内，生此菉之与竹，猗猗然而茂盛，以淇水浸润故也。",
    "note_zhu": "诗卫风淇澳之篇。淇，水名。澳，隈也。猗猗，美盛貌。兴也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "有斐君子",
    "translation": "有位文采斐然的君子",
    "note_zheng": "斐，有文章貌也。",
    "note_kong": "有斐然文章之君子，学问之益矣。",
    "note_zhu": "斐，文貌。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "如切如磋",
    "translation": "如同切制骨器一样钻研学问，如同磋磨象牙一样修养自身",
    "note_zheng": "道犹言也。",
    "note_kong": "如骨之切，如象之磋，又能自修也。",
    "note_zhu": "切以刀锯，琢以椎凿，皆裁物使成形质也。磋以镴锡，磨以沙石，皆治物使其滑泽也。治骨角者，既切而复磋之。治玉石者，既琢而复磨之。皆言其治之有绪，而益致其精也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "如琢如磨",
    "translation": "如同雕琢美玉一样磨砺品格，如同打磨石头一样打磨心性",
    "note_zheng": "同上",
    "note_kong": "如玉之琢，如石之磨也。",
    "note_zhu": "同上"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "瑟兮僩兮",
    "translation": "他庄重而威严",
    "note_zheng": "恂，字或作“峻”，读如严峻之“峻”，言其容貌严栗也。",
    "note_kong": "瑟然颜色矜庄，僩然性行宽大。",
    "note_zhu": "瑟，严密之貌。僩，武毅之貌。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "赫兮喧兮",
    "translation": "他显赫而光明",
    "note_kong": "赫然颜色盛美，喧然威仪宣著。",
    "note_zhu": "赫喧，宣著盛大之貌。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "有斐君子",
    "translation": "这位文采斐然的君子"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "终不可諠兮",
    "translation": "让人永远无法忘记",
    "note_zheng": "諠，忘也。",
    "note_kong": "斐然文章之君子，民皆爱念之，终久不可忘也。",
    "note_zhu": "諠，忘也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "如切如磋者",
    "translation": "“如切如磋”说的是"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "道学也",
    "translation": "学问的精进",
    "note_zheng": "道犹言也。",
    "note_kong": "论道其学矣。言初习谓之学。",
    "note_zhu": "学，谓讲习讨论之事。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "如琢如磨者",
    "translation": "“如琢如磨”说的是"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "自修也",
    "translation": "品德的自我修炼",
    "note_kong": "谓自修饰矣。重习谓之修。",
    "note_zhu": "自修者，省察克治之功。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "瑟兮僩兮者",
    "translation": "“瑟兮僩兮”说的是"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "恂栗也",
    "translation": "内心恭敬严谨",
    "note_zheng": "恂，字或作“峻”，读如严峻之“峻”，言其容貌严栗也。",
    "note_kong": "恂，读为“峻”，言颜色严峻战栗也。",
    "note_zhu": "恂栗，战惧也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "赫兮喧兮者",
    "translation": "“赫兮喧兮”说的是"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "威仪也",
    "translation": "外在仪容威严光明",
    "note_kong": "",
    "note_zhu": "威，可畏也。仪，可像也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "有斐君子",
    "translation": "“有斐君子”"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "终不可諠兮者",
    "translation": "“终不可諠兮”说的是"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "道盛德至善",
    "translation": "德行达到至善"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "民之不能忘也",
    "translation": "民众无法忘记他",
    "note_zheng": "民不能忘，以其意诚而德著也。",
    "note_kong": "论道武公盛德至极美善，人之爱念，不能忘也。",
    "note_zhu": "引诗而释之，以明明明德者之止于至善。道学自修，言其所以得之之由。恂栗、威仪，言其德容表里之盛。卒乃指其实而叹美之也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "于戏前王不忘",
    "translation": "啊，前代的君王令人难忘",
    "note_zheng": "圣人既有亲贤之德，其政又有乐利于民。君子小人，各有以思之。",
    "note_kong": "此《周颂·烈文》之篇也，美武王之诗。以文王、武王意诚于天下，故诗人叹美之，云此前世之王，其德不可忘也。",
    "note_zhu": "诗周颂烈文之篇。于戏，叹辞。前王，谓文、武也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "君子贤其贤而亲其亲",
    "translation": "后世的君子贤人敬重前王所敬重的贤人、亲近前王所亲近的亲族",
    "note_kong": "言后世贵重之。言君子皆美此前王能贤其贤人而亲其族亲也。",
    "note_zhu": "君子，谓其后贤后王。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "小人乐其乐而利其利",
    "translation": "后世的百姓享受前王所创造的安乐、获得前王所给予的利益",
    "note_kong": "言后世卑贱小人，美此前王能爱乐其所乐，能利益其人之所利。",
    "note_zhu": "小人，谓后民也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第三章",
    "scripture_content": "此以没世不忘也",
    "translation": "因此前王虽已去世，人们却永不忘记",
    "note_kong": "由前王意能精诚，垂于后世，故君子小人皆所美念。以此之故，终没于世，其德不忘也。",
    "note_zhu": "此言前王所以新民者止于至善，能使天下后世无一物不得其所，所以既没世而人思慕之，愈久而不忘也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第四章",
    "scripture_content": "听讼",
    "translation": "审理诉讼"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第四章",
    "scripture_content": "吾犹人也",
    "translation": "我和别人差不多",
    "note_kong": "孔子称断狱犹如常人，无以异也。言吾与常人同也。",
    "note_zhu": "犹人，不异于人也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第四章",
    "scripture_content": "必也使无讼乎",
    "translation": "一定要让诉讼根本不发生才好",
    "note_kong": "必也使无理之人不敢争讼也。",
    "note_zhu": "引夫子之言，而言圣人能使无实之人不敢尽其虚诞之辞。盖我之明德既明，自然有以畏服民之心志，故讼不待听而自无也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第四章",
    "scripture_content": "无情者不得尽其辞",
    "translation": "让隐瞒实情的人不敢尽情编造谎言",
    "note_zheng": "情，犹实也。无实者多虚诞之辞。",
    "note_kong": "情，实也。言无实情虚诞之人无道理者，不得尽竭其虚伪之辞也。",
    "note_zhu": "情，实也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第四章",
    "scripture_content": "大畏民志",
    "translation": "使民众内心深深敬畏",
    "note_zheng": "本，谓诚其意也。",
    "note_kong": "大能畏胁民人之志。言人有虚诞之志者，皆畏惧不敢讼。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第四章",
    "scripture_content": "此谓知本",
    "translation": "这就叫做知道根本",
    "note_zheng": "本，谓诚其意也。",
    "note_kong": "此从上“所谓诚意”以下言此“大畏民志”以上，皆是诚意之事。意为行本，既精诚其意，是晓知其本。",
    "note_zhu": "观于此言，可以知本末之先后矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第五章",
    "scripture_content": "此谓知本",
    "translation": "这就叫做知道根本",
    "note_zhu": "程子曰：“衍文也。”"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第五章",
    "scripture_content": "此谓知之至也",
    "translation": "这就叫做认知的最高境界",
    "note_zhu": "此句之上别有阙文，此特其结语耳。右传之五章，盖释格物、致知之义，而今亡矣。间尝窃取程子之意以补之曰：“所谓致知在格物者，言欲致吾之知，在即物而穷其理也。盖人心之灵莫不有知，而天下之物莫不有理，惟于理有未穷，故其知有不尽也。是以大学始教，必使学者即凡天下之物，莫不因其已知之理而益穷之，以求至乎其极。至于用力之久，而一旦豁然贯通焉，则众物之表里精粗无不到，而吾心之全体大用无不明矣。此谓物格，此谓知之至也。”"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "所谓诚其意者",
    "translation": "所谓使意念真诚",
    "note_zhu": "诚其意者，自修之首也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "毋自欺也",
    "translation": "就是不要自己欺骗自己",
    "note_kong": "言欲精诚其意，无自欺诳于身。言于身必须诚实也。",
    "note_zhu": "毋者，禁止之辞。自欺云者，知为善以去恶，而心之所发有未实也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "如恶恶臭",
    "translation": "要像厌恶腐臭的气味一样厌恶恶行",
    "note_kong": "谓见此恶事，人嫌恶之，如人嫌臭秽之气。心实嫌之，口不可道矣。",
    "note_zhu": "恶恶臭，如好好色，皆务决去，而求必得之，以自快足于己，不可徒苟且以殉外而为人也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "如好好色",
    "translation": "要像喜爱美丽的容貌一样喜爱善行",
    "note_kong": "谓见此善事而爱好之，如似人好色。心实好之，口不可道矣。",
    "note_zhu": "同上"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "此之谓自谦",
    "translation": "这就叫做自我满足、心安理得",
    "note_zheng": "谦，读为慊，慊之言厌也。厌，读为黡，黡，闭藏貌也。",
    "note_kong": "谦，读如“慊”。慊然，安静之貌。心虽好恶而口不言，应自然安静也。",
    "note_zhu": "谦读为慊，苦劫反。谦，快也，足也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "故君子必慎其独也",
    "translation": "所以君子在独处时一定要谨慎",
    "note_zhu": "独者，人所不知而己所独知之地也。言欲自修者知为善以去其恶，则当实用其力，而禁止其自欺。然其实与不实，盖有他人所不及知而己独知之者，故必谨之于此以审其几焉。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "小人闲居为不善",
    "translation": "小人独处时做不好的事",
    "note_zhu": "闲居，独处也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "无所不至",
    "translation": "无所不为"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "见君子而后厌然",
    "translation": "见到君子后就躲躲闪闪",
    "note_zhu": "厌然，消沮闭藏之貌。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "掩其不善",
    "translation": "遮掩自己的不善"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "而著其善",
    "translation": "而显露自己的善",
    "note_zhu": "此言小人阴为不善，而阳欲掩之，则是非不知善之当为与恶之当去也；但不能实用其力以至此耳。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "人之视己",
    "translation": "别人看自己"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "如见其肺肝然",
    "translation": "就像能看见肺和肝一样清楚",
    "note_kong": "言小人为恶，外人视之，昭然明察矣，如见肺肝。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "则何益矣",
    "translation": "这样做又有什么益处呢",
    "note_kong": "虽暂时掩藏，言何益矣？",
    "note_zhu": "然欲掩其恶而卒不可掩，欲诈为善而卒不可诈，则亦何益之有哉！"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "此谓诚于中",
    "translation": "这就叫做内心有真实的意念"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "形于外",
    "translation": "就会显露在外表",
    "note_kong": "言此小人既怀诚实恶事于中心，必形见于外，不可掩藏。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "故君子必慎其独也",
    "translation": "所以君子在独处时一定要谨慎",
    "note_zhu": "此君子所以重以为戒，而必谨其独也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "十目所视",
    "translation": "十只眼睛看着"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "十手所指",
    "translation": "十只手指指着"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "其严乎",
    "translation": "这是多么严厉啊",
    "note_zheng": "严乎，言可畏敬也。",
    "note_kong": "既视者及指者皆众，其所畏敬，可严惮乎！",
    "note_zhu": "引此以明上文之意。言虽幽独之中，而其善恶之不可掩如此。可畏之甚也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "富润屋",
    "translation": "财富能装饰房屋",
    "note_zhu": "言富则能润屋矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "德润身",
    "translation": "德行能滋润身心",
    "note_zhu": "德则能润身矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "心广体胖",
    "translation": "心胸宽广则身体安泰舒坦",
    "note_zheng": "胖，犹大也。三者，言有实于内，显见于外。",
    "note_kong": "言内心宽广，则外体胖大。言为之于中，必形见于外也。",
    "note_zhu": "胖，安舒也。故心无愧怍，则广大宽平，而体常舒泰，德之润身者然也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第六章",
    "scripture_content": "故君子必诚其意",
    "translation": "所以君子一定要使自己的意念真诚",
    "note_kong": "以有内见于外，必须精诚其意在内，心不可虚也。",
    "note_zhu": "盖善之实于中而形于外者如此，故又言此以结之。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "身有所忿懥",
    "translation": "如果内心有所愤怒",
    "note_zheng": "懥，怒貌也，或作懫，或为疐。",
    "note_zhu": "程子曰：“身有之身当作心。”忿懥，怒也。盖是四者，皆心之用，而人所不能无者。然一有之而不能察，则欲动情胜，而其用之所行，或不能不失其正矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "有所恐惧",
    "translation": "有所恐惧"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "有所好乐",
    "translation": "有所偏好喜乐"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "有所忧患",
    "translation": "有所忧患顾虑"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "则不得其正",
    "translation": "就不能保持中正"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "心不在焉",
    "translation": "心思不在这里",
    "note_zhu": "心有不存，则无以检其身，是以君子必察乎此而敬以直之，然后此心常存而身无不修也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "视而不见",
    "translation": "看了却像没看见"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "听而不闻",
    "translation": "听了却像没听见"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "食而不知其味",
    "translation": "吃了却尝不出味道",
    "note_kong": "此言修身之本，必在正心。若心之不正，身亦不修。若心之不在，视、听与食不觉知也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第七章",
    "scripture_content": "此谓修身在正其心",
    "translation": "这就叫做修养自身在于端正内心"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "人之其所亲爱而辟焉",
    "translation": "人们对于自己所亲近喜爱的人往往有偏袒",
    "note_zheng": "之，适也。譬，犹喻也。言适彼而以心度之，曰：吾何以亲爱此人，非以其有德美与？反以喻己，则身修与否，可自知也。",
    "note_kong": "之，犹适也。设我适彼人，见彼有德，则为我所亲爱，当反自譬喻于我也。",
    "note_zhu": "人，谓众人。之，犹于也。辟，犹偏也。五者，在人本有当然之则；然常人之情惟其所向而不加审焉，则必陷于一偏而身不修矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "之其所贱恶而辟焉",
    "translation": "对于自己所鄙视厌恶的人往往有偏见",
    "note_kong": "我往之彼，而贱恶彼人者，必是彼人无德故也。亦当回以譬我，我若无德，则人亦贱恶我也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "之其所畏敬而辟焉",
    "translation": "对于自己所畏惧尊敬的人往往有偏颇",
    "note_kong": "我往之彼，而畏敬彼人，必是彼人庄严故也。亦回其譬我，我亦当庄敬，则人亦必畏敬我。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "之其所哀矜而辟焉",
    "translation": "对于自己所哀伤怜悯的人往往有偏爱",
    "note_kong": "我往之彼，而哀矜彼人，必是彼人有慈善柔弱之德故也。亦回譬我，我有慈善而或柔弱，则亦为人所哀矜也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "之其所敖惰而辟焉",
    "translation": "对于自己所傲慢怠慢的人往往有偏执",
    "note_kong": "我往之彼，而敖惰彼人，必是彼人邪僻故也。亦回譬我，我若邪僻，则人亦敖惰于我也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "故好而知其恶",
    "translation": "所以喜欢一个人又能知道他的缺点"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "恶而知其美者",
    "translation": "厌恶一个人又能知道他的优点"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "天下鲜矣",
    "translation": "天下这样的人是很少的",
    "note_zheng": "鲜，罕也。",
    "note_kong": "鲜，少也。人心多偏。若心爱好之，而多不知其恶；若嫌恶之，而多不知其美。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "人莫知其子之恶",
    "translation": "没有人会知道自己孩子的缺点",
    "note_zheng": "人莫知其子之恶，犹爱而不察。",
    "note_kong": "言人之爱子，其意至甚，子虽有恶，不自觉知，犹好而不知其恶也。",
    "note_zhu": "溺爱者不明。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "莫知其苗之硕",
    "translation": "没有人会满足于自己禾苗的茁壮",
    "note_zheng": "硕，大也。",
    "note_kong": "农夫种田，恒欲其盛，苗虽硕大，犹嫌其恶，以贪心过甚，故不知其苗之硕。",
    "note_zhu": "贪得者无厌，是则偏之为害，而家之所以不齐也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第八章",
    "scripture_content": "此谓身不修不可以齐其家",
    "translation": "这就叫做自身修养不好，就无法整治好家庭",
    "note_kong": "此不知子恶、不知苗硕之人，不修其身，身既不修，不能以己譬人，故不可以齐整其家。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "其家不可教而能教人者",
    "translation": "连自己家里的人都教育不好，却能教育好国人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "无之",
    "translation": "这是不可能的"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "故君子不出家而成教于国",
    "translation": "所以君子不用走出家门，就能把教化推广到全国",
    "note_zhu": "身修，则家可教矣；孝、弟、慈，所以修身而教于家者也；然而国之所以事君事长使众之道不外乎此。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "孝者",
    "translation": "孝顺父母"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "所以事君也",
    "translation": "同样可以用来侍奉君主"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "弟者",
    "translation": "尊敬兄长"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "所以事长也",
    "translation": "同样可以用来侍奉长辈"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "慈者",
    "translation": "慈爱子女"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "所以使众也",
    "translation": "同样可以用来治理民众"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "如保赤子",
    "translation": "爱护民众如同爱护初生的婴儿",
    "note_zheng": "养子者，推心为之，而中于赤子之嗜欲也。",
    "note_kong": "此成王命康叔之辞。赤子，谓心所爱之子。言治民之时，如保爱赤子。",
    "note_zhu": "此引书而释之，又明立教之本不假强为，在识其端而推广之耳。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "心诚求之",
    "translation": "内心真诚地去体会民众的需要"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "虽不中",
    "translation": "即使不能完全切中"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "不远矣",
    "translation": "也相差不远了",
    "note_kong": "言爱此赤子，内心精诚，求赤子之嗜欲，虽不能正中其所欲，去其所嗜欲其不甚远。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "未有学养子而后嫁者也",
    "translation": "世上没有哪个女子是先学会养育孩子然后再出嫁的",
    "note_kong": "言母之养子，自然而爱，非由学习而来。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "一家仁",
    "translation": "君主一家讲求仁爱"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "一国兴仁",
    "translation": "一国就会兴起仁爱之风"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "一家让",
    "translation": "一家讲求礼让"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "一国兴让",
    "translation": "一国就会兴起礼让之风"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "一人贪戾",
    "translation": "君主一人贪婪暴戾",
    "note_zheng": "“戾”之言“利”也。",
    "note_zhu": "一人，谓君也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "一国作乱",
    "translation": "一国就会随之动乱",
    "note_kong": "谓人君一人贪戾恶事，则一国学之作乱。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "其机如此",
    "translation": "事情的关键就是这样",
    "note_zheng": "机，发动所由也。",
    "note_kong": "机，谓关机也。动于近，成于远。善恶之事，亦发于身而及于一国也。",
    "note_zhu": "机，发动所由也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "此谓一言偾事",
    "translation": "这就叫做一句话可以败坏大事",
    "note_zheng": "偾，犹覆败也。",
    "note_kong": "偾，犹覆败也。谓人君一言覆败其事，谓恶言也。",
    "note_zhu": "偾，覆败也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "一人定国",
    "translation": "一个人可以安定国家",
    "note_kong": "谓由人君一人能定其国，谓善政也。",
    "note_zhu": "此言教成于国之效。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "尧舜率天下以仁",
    "translation": "尧舜用仁道领导天下"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "而民从之",
    "translation": "民众就跟随他们行仁"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "桀纣率天下以暴",
    "translation": "桀纣用暴虐领导天下"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "而民从之",
    "translation": "民众就跟随他们作恶"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "其所令反其所好",
    "translation": "君主发布的命令如果与自己的行为喜好相反"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "而民不从",
    "translation": "民众就不会听从",
    "note_kong": "令，谓君所号令之事。若各随其行之所好，则人从之。其所好者是恶，所令者是善，则所令之事反其所好，虽欲以令禁人，人不从也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "是故君子有诸己而后求诸人",
    "translation": "所以君子必须自己先有善行，然后才能要求别人行善",
    "note_zheng": "有于己，谓有仁让也。",
    "note_kong": "诸，于也。谓君子有善行于己，而后可以求于人使行善行也。",
    "note_zhu": "有善于己，然后可以责人之善。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "无诸己而后非诸人",
    "translation": "自己先没有恶行，然后才能纠正别人的恶行",
    "note_zheng": "无于己，谓无贪戾也。",
    "note_kong": "谓无恶行于己，而后可以非责于人为恶行也。",
    "note_zhu": "无恶于己，然后可以正人之恶。皆推己以及人，所谓恕也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "所藏乎身不恕",
    "translation": "自己心中存着的不是推己及人的恕道"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "而能喻诸人者",
    "translation": "却想去开导别人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "未之有也",
    "translation": "那是从来不会有的",
    "note_kong": "谓所藏积于身既不恕实，而能晓喻于人使从己者，未之有也。",
    "note_zhu": "喻，晓也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "桃之夭夭",
    "translation": "桃花开得娇艳",
    "note_zheng": "夭夭、蓁蓁，美盛貌。",
    "note_kong": "此《周南·桃夭》之篇。言桃之夭夭少壮。",
    "note_zhu": "诗周南桃夭之篇。夭夭，少好貌。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "其叶蓁蓁",
    "translation": "桃叶长得茂盛",
    "note_zheng": "同上",
    "note_kong": "其叶蓁蓁茂盛，喻妇人形体少壮、颜色茂盛之时。",
    "note_zhu": "蓁蓁，美盛貌。兴也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "之子于归",
    "translation": "这位女子出嫁了",
    "note_zheng": "“之子”者，是子也。",
    "note_kong": "之子者，是子也。归，嫁也。",
    "note_zhu": "之子，犹言是子，此指女子之嫁者而言也。妇人谓嫁曰归。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "宜其家人",
    "translation": "一定能使家庭和睦",
    "note_kong": "宜可以为夫家之人。",
    "note_zhu": "宜，犹善也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "宜其家人",
    "translation": "能让家庭和睦"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "而后可以教国人",
    "translation": "然后才能教化国人",
    "note_kong": "言人既家得宜，则可以教国人也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "宜兄宜弟",
    "translation": "兄弟之间和睦相处",
    "note_kong": "此《小雅·蓼萧》之篇，美成王之诗。此《记》之意，“宜兄宜弟”，谓自与兄弟相善相宜也。",
    "note_zhu": "诗小雅蓼萧篇。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "宜兄宜弟",
    "translation": "兄弟能够和睦"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "而后可以教国人",
    "translation": "然后才能教化国人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "其仪不忒",
    "translation": "仪态举止没有差错",
    "note_kong": "此《曹风·鸤鸠》之篇。忒，差也。",
    "note_zhu": "诗曹风鸤鸠篇。忒，差也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "正是四国",
    "translation": "可以匡正四方之国",
    "note_kong": "正，长也。言在位之君子，威仪不有差忒，可以正长是四方之国。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "其为父子兄弟足法",
    "translation": "自己作为父子兄弟都足以成为榜样"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第九章",
    "scripture_content": "而后民法之也",
    "translation": "然后民众才会效法他",
    "note_kong": "谓其修德于家，在室家之内，使父子兄弟足可方法，而后民皆法之也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "上老老而民兴孝",
    "translation": "在上位的人尊敬老人，民众就会兴起孝敬之风",
    "note_zheng": "老老、长长，谓尊老敬长也。",
    "note_zhu": "老老，所谓老吾老也。兴，谓有所感发而兴起也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "上长长而民兴弟",
    "translation": "在上位的人敬重长辈，民众就会兴起敬长之风"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "上恤孤而民不倍",
    "translation": "在上位的人体恤孤儿，民众就不会背弃道义",
    "note_zheng": "恤，忧也。民不倍，不相倍弃也。",
    "note_kong": "孤弱之子，人所遗弃，在上君长，若能忧恤孤弱不遗，则下民学之，不相弃倍也。",
    "note_zhu": "孤者，幼而无父之称。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "是以君子有絜矩之道也",
    "translation": "所以君子有以身作则、推己及人的絜矩之道",
    "note_zheng": "絜，犹结也，挈也。矩，法也。君子有挈法之道，谓常执而行之，动作不失之。",
    "note_kong": "絜，犹结也。矩，法也。言君子有执结持矩法之道，动而无失，以此加物，物皆从之也。",
    "note_zhu": "絜，度也。矩，所以为方也。言此三者，上行下效，捷于影响。是以君子必当因其所同，推以度物，使彼我之间各得分愿，则上下四旁均齐方正，而天下平矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "所恶于上",
    "translation": "厌恶上级对待你的方式"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "毋以使下",
    "translation": "就不要用同样的方式对待下属"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "所恶于下",
    "translation": "厌恶下属对待你的方式"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "毋以事上",
    "translation": "就不要用同样的方式侍奉上级"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "所恶于前",
    "translation": "厌恶前面的人对待你的方式"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "毋以先后",
    "translation": "就不要用同样的方式对待后面的人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "所恶于后",
    "translation": "厌恶后面的人对待你的方式"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "毋以从前",
    "translation": "就不要用同样的方式对待前面的人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "所恶于右",
    "translation": "厌恶右边的人对待你的方式"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "毋以交于左",
    "translation": "就不要用同样的方式对待左边的人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "所恶于左",
    "translation": "厌恶左边的人对待你的方式"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "毋以交于右",
    "translation": "就不要用同样的方式对待右边的人",
    "note_zheng": "絜矩之道，善持其所有，以恕于人耳。治国之要尽于此。",
    "note_kong": "此以下皆是絜矩之道也。",
    "note_zhu": "此覆解上文絜矩二字之义。如不欲上之无礼于我，则必以此度下之心，而亦不敢以此无礼使之。不欲下之不忠于我，则必以此度上之心，而亦不敢以此不忠事之。至于前后左右，无不皆然，则身之所处，彼此如一，而无不方矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "此之谓絜矩之道",
    "translation": "这就叫做絜矩之道"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "乐只君子",
    "translation": "和乐的君子",
    "note_zheng": "言治民之道无他，取于己而已。",
    "note_kong": "此《小雅·南山有台》之篇，美成王之诗也。只，辞也。",
    "note_zhu": "诗小雅南山有台之篇。只，语助辞。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "民之父母",
    "translation": "是民众的父母",
    "note_kong": "言能以己化民，从民所欲，则可为民父母矣。",
    "note_zhu": "言能絜矩而以民心为己心，则是爱民如子，而民爱之如父母矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "民之所好好之",
    "translation": "民众所喜欢的，君子就喜欢",
    "note_kong": "谓善政恩惠，是民之愿好，己亦好之，以施于民。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "民之所恶恶之",
    "translation": "民众所厌恶的，君子就厌恶",
    "note_kong": "谓苛政重赋，是人之所恶，己亦恶之而不行也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "节彼南山",
    "translation": "那座高峻的南山",
    "note_zhu": "诗小雅节南山之篇。节，截然高大貌。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "维石岩岩",
    "translation": "岩石层层叠叠"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "赫赫师尹",
    "translation": "权势显赫的太师尹氏",
    "note_zheng": "师尹，天子之大臣，为政者也。",
    "note_kong": "赫赫，显盛貌。是大师与人为则者。",
    "note_zhu": "师尹，周太师尹氏也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "民具尔瞻",
    "translation": "民众都仰望着你",
    "note_zheng": "言民皆视其所行而则之。",
    "note_kong": "具，俱也。尔，汝也。在下之民，俱于汝而瞻视之。",
    "note_zhu": "具，俱也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "有国者不可以不慎",
    "translation": "治理国家的人不可以不谨慎",
    "note_kong": "有国，谓天子、诸侯。言民皆视上所行而则之，可不慎其德乎？",
    "note_zhu": "言在上者人所瞻仰，不可不谨。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "辟则为天下僇矣",
    "translation": "若行为偏邪，就会被天下人所诛讨",
    "note_zheng": "邪辟失道，则有大刑。",
    "note_kong": "僇，谓刑僇也。君若邪辟，则为天下之民共所诛讨。",
    "note_zhu": "辟，偏也。若不能絜矩而好恶徇于一己之偏，则身弑国亡，为天下之大戮矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "殷之未丧师",
    "translation": "殷朝在未丧失民心时",
    "note_zheng": "师，众也。",
    "note_zhu": "诗文王篇。师，众也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "克配上帝",
    "translation": "德行还能配得上天帝",
    "note_zheng": "克，能也。",
    "note_kong": "克，能也。师，众也。言殷自纣父帝乙之前，未丧师众之时，所行政教，皆能配上天而行也。",
    "note_zhu": "配，对也。配上帝，言其为天下君，而对乎上帝也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "仪监于殷",
    "translation": "应当以殷朝为借鉴",
    "note_zheng": "监视殷时之事。",
    "note_kong": "仪，宜也。监，视也。今成王宜监视于殷之存亡。",
    "note_zhu": "监，视也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "峻命不易",
    "translation": "知道保有天命很不容易",
    "note_zheng": "峻，大也。天之大命，持之诚不易也。",
    "note_kong": "峻，大也。奉此天之大命，诚为不易，言其难也。",
    "note_zhu": "峻，大也。不易，言难保也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "道得众则得国",
    "translation": "得民心就能得国家",
    "note_zheng": "道，犹言也。",
    "note_kong": "道，犹言也。言帝乙以上得众则得国。",
    "note_zhu": "道，言也。引诗而言此，以结上文两节之意。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "失众则失国",
    "translation": "失民心就会失国家",
    "note_kong": "言殷纣失众则失国也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "有德此有人",
    "translation": "有了德行，才能得到民众拥护",
    "note_kong": "有德之人，人之所附从。",
    "note_zhu": "有人，谓得众。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "有人此有土",
    "translation": "有了民众拥护，才能保有土地",
    "note_kong": "有人则境土宽大。",
    "note_zhu": "有土，谓得国。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "有土此有财",
    "translation": "有了土地，才能产生财富",
    "note_kong": "有土则生植万物，故有财也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "有财此有用",
    "translation": "有了财富，才能供给国家用度",
    "note_kong": "有财丰，以此而有供国用也。",
    "note_zhu": "有国则不患无财用矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "德者本也",
    "translation": "德行是根本",
    "note_kong": "德能致财，财由德有，故德为本。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "财者末也",
    "translation": "财富是末节",
    "note_kong": "财为末也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "外本内末",
    "translation": "如果本末倒置，疏远德行而亲近财富"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "争民施夺",
    "translation": "就会与民争利、施行掠夺",
    "note_zheng": "施夺，施其劫夺之情也。",
    "note_kong": "外，疏也。内，亲也。君若亲财而疏德，则争利之人皆施劫夺之情也。",
    "note_zhu": "人君以德为外，以财为内，则是争斗其民，而施之以劫夺之教也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "财聚则民散",
    "translation": "财富聚敛在上，民心就会离散",
    "note_kong": "事不两兴，财由民立。君若重财而轻民，则民散也。",
    "note_zhu": "外本内末故财聚，争民施夺故民散。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "财散则民聚",
    "translation": "财富分散给民，民心就会凝聚",
    "note_kong": "若散财而赒恤于民，则民咸归聚也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "言悖而出者",
    "translation": "言语若违背道理说出"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "亦悖而入",
    "translation": "也会被用违背道理的话回敬",
    "note_zheng": "悖，犹逆也。言君有逆命，则民有逆辞也。",
    "note_kong": "若人君政教之言，悖逆人心而出行者，则民悖逆君上而入以报答也。",
    "note_zhu": "悖，逆也。此以言之出入，明货之出入也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "货悖而入者",
    "translation": "财富若违背道义聚敛而来"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "亦悖而出",
    "translation": "也会以违背道义的方式散失出去",
    "note_zheng": "上贪于利，则下人侵畔。《老子》曰：“多藏必厚亡。”",
    "note_kong": "若人君厚敛财货，悖逆民心而入积聚者，不能久，财亦悖逆君心而散出也。",
    "note_zhu": "同上"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "惟命不于常",
    "translation": "天命不是永恒不变的",
    "note_zheng": "于，于也。天命不于常，言不专祐一家也。",
    "note_kong": "谓天之命不于是常住在一家也。道善则得之，不善则失之。",
    "note_zhu": "道，言也。因上文引文王诗之意而申言之，其丁宁反覆之意益深切矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "道善则得之",
    "translation": "治国之道善良就能保有天命"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "不善则失之矣",
    "translation": "不善良就会失去"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "楚国无以为宝",
    "translation": "楚国没有什么宝贝"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "惟善以为宝",
    "translation": "只把善人当作宝贝",
    "note_zheng": "《楚书》，楚昭王时书也。言以善人为宝。",
    "note_kong": "案《楚语》：楚昭王使王孙圉聘于晋，赵简子问楚之白珩犹在乎？王孙圉对曰：未尝为宝。楚之所宝者曰观射父。",
    "note_zhu": "楚书，楚语。言不宝金玉而宝善人也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "亡人无以为宝",
    "translation": "流亡的人没有什么宝贝"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "仁亲以为宝",
    "translation": "只把仁爱亲情当作宝贝",
    "note_zheng": "舅犯，晋文公之舅狐偃也。亡人，谓文公也，时避骊姬之谗，亡在翟。",
    "note_kong": "此舅犯劝重耳之辞。于时重耳逃亡在翟，对秦使云：奔亡之人，无以货财为宝，唯亲爱仁道以为宝也。",
    "note_zhu": "舅犯，晋文公舅狐偃。仁，爱也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "若有一个臣",
    "translation": "如果有这样一位耿介的臣子",
    "note_zheng": "《秦誓》，《尚书》篇名也。",
    "note_kong": "《秦誓》，《尚书》篇名。秦穆公伐郑，为晋败于殽，还誓群臣而作此篇。",
    "note_zhu": "秦誓，周书。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "断断兮无他技",
    "translation": "诚朴专一，没有别的技能",
    "note_zheng": "断断，诚一之貌也。他技，异端之技也。",
    "note_kong": "若有一耿介之臣，断断然诚实专一谨悫。",
    "note_zhu": "断断，诚一之貌。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "其心休休焉",
    "translation": "但心胸宽广"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "其如有容焉",
    "translation": "有容人之量",
    "note_kong": "惟其心休休然宽容，形貌似有包容。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "人之有技",
    "translation": "看到别人有才能"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "若己有之",
    "translation": "就像自己有一样高兴",
    "note_zheng": "有技，才艺之技也。若己有之，不啻若自其口出，皆乐人有善之甚也。",
    "note_kong": "云见人有技艺，欲得亲爱之，如己自有也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "人之彦圣",
    "translation": "看到别人品德高尚、智慧通达",
    "note_zheng": "美士为彦。",
    "note_zhu": "彦，美士也。圣，通明也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "其心好之",
    "translation": "从心底里喜欢"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "不啻若自其口出",
    "translation": "不只是口头上称赞",
    "note_kong": "其心中爱好，不啻如自其口出。心爱此彦圣之美，多于口说。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "寔能容之",
    "translation": "真心实意地接纳他们",
    "note_kong": "寔，是也。若能好贤如此，是能有所包容。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "以能保我子孙黎民",
    "translation": "用这样的人保护我的子孙百姓",
    "note_zheng": "黎，众也。",
    "note_kong": "则我国家得安，保我后世子孙。",
    "note_zhu": ""
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "尚亦有利哉",
    "translation": "是多么有利啊",
    "note_zheng": "尚，庶几也。",
    "note_kong": "尚，庶几也。非直子孙安，其下众人皆庶几亦望有利益哉也。",
    "note_zhu": "尚，庶几也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "人之有技",
    "translation": "如果别人有才能"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "媢嫉以恶之",
    "translation": "就嫉妒厌恶",
    "note_zheng": "媢，妒也。",
    "note_kong": "见人有技艺，则掩藏媢妒，疾以憎恶之也。",
    "note_zhu": "媢，忌也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "人之彦圣",
    "translation": "别人品德高尚、智慧通达"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "而违之俾不通",
    "translation": "就压制排挤、使其不被重用",
    "note_zheng": "违，犹戾也。俾，使也。佛戾贤人所高，使功不通于君也。",
    "note_kong": "见他人之彦圣，而违戾抑退之。俾，使也。使其善功不通达于君。",
    "note_zhu": "违，拂戾也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "寔不能容",
    "translation": "这种人毫无容人之心"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "以不能保我子孙黎民",
    "translation": "用这样的人绝不能保护我的子孙百姓"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "亦曰殆哉",
    "translation": "国家就危险了",
    "note_zheng": "殆，危也。",
    "note_kong": "若此蔽贤之人，是不能容纳，家国将亡，不能保我子孙；非唯如此，众人亦曰殆危哉。",
    "note_zhu": "殆，危也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "唯仁人放流之",
    "translation": "只有仁德的人，才会把这种嫉贤妒能的人流放",
    "note_zheng": "放去恶人媢嫉之类者，独仁人能之。",
    "note_zhu": "迸，读为屏，古字通用。迸，犹逐也。言有此媢疾之人，妨贤而病国，则仁人必深恶而痛绝之。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "迸诸四夷",
    "translation": "驱逐到边远蛮荒之地"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "不与同中国",
    "translation": "不让他们与贤德之人同住中原",
    "note_kong": "言唯仁人之君能放流此蔽善之人，使迸远在四夷，不与同在中国。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "此谓唯仁人为能爱人",
    "translation": "这就叫做只有仁德之人才真正懂得喜爱善人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "能恶人",
    "translation": "憎恶恶人",
    "note_kong": "既放此蔽贤之人远在四夷，是仁人能爱善人，恶不善之人。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "见贤而不能举",
    "translation": "发现了贤才却不能举荐"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "举而不能先",
    "translation": "举荐了却不能让他处在自己前面"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "命也",
    "translation": "这是怠慢",
    "note_zheng": "命，读为“慢”，声之误也。举贤而不能使君以先己，是轻慢于举人也。",
    "note_kong": "此谓凡庸小人，见此贤人而不能举进于君；假设举之，又不能使在其己之先，是为慢也。",
    "note_zhu": "命，郑氏云“当作慢。”程子云：“当作怠。”未详孰是。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "见不善而不能退",
    "translation": "发现了不善的人却不能辞退"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "退而不能远",
    "translation": "辞退了却不能把他放逐到远方"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "过也",
    "translation": "这是过错",
    "note_kong": "此谓小人见不善之人而不能抑退之，假令抑退之，而不能使远退之。过者，言是愆过之人也。",
    "note_zhu": "若此者，知所爱恶矣，而未能尽爱恶之道，盖君子而未仁者也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "好人之所恶",
    "translation": "喜欢众人所厌恶的"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "恶人之所好",
    "translation": "厌恶众人所喜欢的"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "是谓拂人之性",
    "translation": "这就叫做违背人的本性",
    "note_zheng": "拂，犹佹也。",
    "note_kong": "人，谓君子。君子所恶者，凶恶之事，今乃爱好凶恶；君子所好，仁义善道，今乃恶此仁义善道。是谓拂戾善人之性。",
    "note_zhu": "拂，逆也。好善而恶恶，人之性也；至于拂人之性，则不仁之甚者也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "菑必逮夫身",
    "translation": "灾祸必定会降临到身上",
    "note_zheng": "逮，及也。",
    "note_kong": "逮，及也。如此，菑必及夫身矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "君子有大道",
    "translation": "君子有一条根本的大道",
    "note_zheng": "道，行所由。",
    "note_kong": "大道，谓所由行孝悌仁义之大道也。",
    "note_zhu": "君子，以位言之。道，谓居其位而修己治人之术。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "必忠信以得之",
    "translation": "必须靠忠诚信实才能得到",
    "note_zhu": "发己自尽为忠，循物无违谓信。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "骄泰以失之",
    "translation": "而一旦骄傲放纵就会失去",
    "note_zhu": "骄者矜高，泰者侈肆。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "生财有大道",
    "translation": "创造财富也有根本的大道"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "生之者众",
    "translation": "生产的人多",
    "note_kong": "谓为农桑多也。",
    "note_zhu": "吕氏曰：“国无游民，则生者众矣。”"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "食之者寡",
    "translation": "消费的人少",
    "note_kong": "谓减省无用之费也。",
    "note_zhu": "吕氏曰：“朝无幸位，则食者寡矣。”"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "为之者疾",
    "translation": "劳作的人勤快",
    "note_kong": "谓百姓急营农桑事业也。",
    "note_zhu": "吕氏曰：“不夺农时，则为之疾矣。”"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "用之者舒",
    "translation": "使用的人节省",
    "note_kong": "谓君上缓于营造费用也。",
    "note_zhu": "吕氏曰：“量入为出，则用之舒矣。”"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "则财恒足矣",
    "translation": "这样财富就会经常充足",
    "note_zheng": "是不务禄不肖，而勉民以农也。",
    "note_kong": "言人君能如此，则国用恒足。",
    "note_zhu": "愚按：此因有土有财而言，以明足国之道在乎务本而节用。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "仁者以财发身",
    "translation": "仁德的人运用财富来发展自身德行",
    "note_zheng": "发，起也。言仁人有财，则务于施与以起身，成其令名。",
    "note_kong": "谓仁德之君，以财散施，发起身之令名也。",
    "note_zhu": "发，犹起也。仁者散财以得民。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "不仁者以身发财",
    "translation": "不仁的人耗尽心力去聚敛财富",
    "note_zheng": "不仁之人有身，贪于聚敛以起财，务成富。",
    "note_kong": "言不仁之人，唯在吝啬，务于积聚，劳役其身，发起其财。",
    "note_zhu": "不仁者亡身以殖货。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "未有上好仁而下不好义者也",
    "translation": "从来没有在上位的人喜好仁德，而在下位的人却不喜好道义的",
    "note_zheng": "言君行仁道，则其臣必义。",
    "note_kong": "言在上人君好以仁道接下，其下感君仁恩，无有不爱好于义。",
    "note_zhu": "上好仁以爱其下，则下好义以忠其上。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "未有好义其事不终者也",
    "translation": "从来没有喜好道义的人，做事情会半途而废的",
    "note_zheng": "以义举事无不成者。",
    "note_kong": "言臣下悉皆好义，百事尽能终成。",
    "note_zhu": "所以事必有终。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "未有府库财非其财者也",
    "translation": "从来没有这样的君主，府库里的财物最终不是归他所有的",
    "note_zheng": "其为诚然，如己府库之财为己有也。",
    "note_kong": "君若行仁，民必报义，义必终事，譬如人君有府库之财，必还为所用也。",
    "note_zhu": "府库之财无悖出之患也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "畜马乘不察于鸡豚",
    "translation": "家里能养得起四匹马拉车的士大夫，就不该再去计较养鸡养猪的小利",
    "note_zheng": "畜马乘，谓以士初试为大夫也。",
    "note_kong": "言察于鸡豚之所利，为畜养马乘，士初试为大夫，不窥察于鸡豚之小利。",
    "note_zhu": "孟献子，鲁之贤大夫仲孙蔑也。畜马乘，士初试为大夫者也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "伐冰之家不畜牛羊",
    "translation": "丧祭能用冰的卿大夫之家，就不该再畜养牛羊来牟利",
    "note_zheng": "伐冰之家，卿、大夫以上，丧、祭用冰。",
    "note_kong": "谓卿大夫丧祭用冰，不畜牛羊为财利。以食禄，不与人争利也。",
    "note_zhu": "伐冰之家，卿大夫以上，丧祭用冰者也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "百乘之家不畜聚敛之臣",
    "translation": "拥有百辆兵车的诸侯之家，就不该再养着搜刮民财的家臣",
    "note_zheng": "百乘之家，有采地者也。",
    "note_kong": "百乘，谓卿大夫有采地者也。言卿大夫之家不畜聚敛之臣。",
    "note_zhu": "百乘之家，有采地者也。君子宁亡己之财，而不忍伤民之力。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "与其有聚敛之臣",
    "translation": "与其有搜刮民财的家臣"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "宁有盗臣",
    "translation": "宁可有盗窃府库的家臣",
    "note_zheng": "盗臣损财耳，聚敛之臣乃损义。",
    "note_kong": "以盗臣但害财，聚敛之臣则害义也。",
    "note_zhu": "同上"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "此谓国不以利为利",
    "translation": "这就是说，治理国家不应以私利为利"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "以义为利也",
    "translation": "而应以道义为利",
    "note_kong": "言若能如上所谓，是国家之利，但以义事为国家利也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "长国家而务财用者",
    "translation": "执掌国家却一心聚敛财富的"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "必自小人矣",
    "translation": "必定是从任用小人开始的",
    "note_zheng": "言务聚财为己用者，必忘义，是小人所为也。",
    "note_kong": "言为人君长于国家，而务积聚财以为己用者，必自为小人之行也。",
    "note_zhu": "自，由也，言由小人导之也。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "彼为善之",
    "translation": "君主想要施行善政",
    "note_zheng": "彼，君也。君将欲以仁义善其政。",
    "note_kong": "彼，谓君也。君欲为仁义之道，善其政教。",
    "note_zhu": "此句上下，疑有阙文误字。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "小人之使为国家",
    "translation": "却让小人来治理国家"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "菑害并至",
    "translation": "天灾人祸就会一起降临",
    "note_kong": "言君欲为善，反令小人使为治国家之事，毒害于下，故菑害患难则并皆来至。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "虽有善者",
    "translation": "即使有贤能的人"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "亦无如之何矣",
    "translation": "也没有办法挽救了",
    "note_zheng": "虽云有善，不能救之，以其恶之已著也。",
    "note_kong": "既使小人治国，其君虽有善政，亦无能奈此患难之何。",
    "note_zhu": "此一节，深明以利为利之害，而重言以结之，其丁宁之意切矣。"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "此谓国不以利为利",
    "translation": "这就叫做治理国家不应以私利为利"
  },
  {
    "classic_title": "礼记",
    "chapter": "传第十章",
    "scripture_content": "以义为利也",
    "translation": "而应以道义为利"
  }
];

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

const CROSS_REFERENCES = [];
