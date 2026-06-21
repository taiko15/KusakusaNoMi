const RAW_BANKS = {
  1: `
一|いち
二|に
三|さん
四|よん
五|ご
六|ろく
七|なな
八|はち
九|きゅう
十|じゅう
百|ひゃく
千|せん
日|ひ
月|つき
火|ひ
水|みず
木|き
金|きん
土|つち
山|やま
川|かわ
田|た
空|そら
雨|あめ
天|てん
気|き
人|ひと
男|おとこ
女|おんな
子|こ
父|ちち
母|はは
兄|あに
先|さき
生|せい
学|がく
校|こう
本|ほん
文|ぶん
字|じ
名|な
音|おと
耳|みみ
目|め
口|くち
手|て
足|あし
力|ちから
犬|いぬ
虫|むし
花|はな
草|くさ
竹|たけ
林|はやし
森|もり
石|いし
王|おう
玉|たま
円|えん
町|まち
村|むら
車|くるま
糸|いと
貝|かい
赤|あか
青|あお
白|しろ
正|ただしい
早|はやい
大|おおきい
小|ちいさい
上|うえ
下|した
左|ひだり
右|みぎ
中|なか
休|やすむ
入|はいる
出|でる
立|たつ
夕|ゆう
一年|いちねん
二月|にがつ
三日|みっか
四月|しがつ
五日|いつか
六日|むいか
七日|なのか
八日|ようか
九日|ここのか
十日|とおか
山川|やまかわ
田中|たなか
大人|おとな
子犬|こいぬ
花火|はなび
空気|くうき
学校|がっこう
先生|せんせい
名前|なまえ
正月|しょうがつ
`,
  2: `
引く|ひく
羽|はね
雲|くも
園|えん
遠い|とおい
何|なに
科|か
夏|なつ
家|いえ
歌|うた
画|が
回る|まわる
会う|あう
海|うみ
絵|え
外|そと
角|かど
楽しい|たのしい
活気|かっき
間|あいだ
丸|まる
岩|いわ
顔|かお
汽車|きしゃ
記す|しるす
帰る|かえる
弓|ゆみ
牛|うし
魚|さかな
京|きょう
強い|つよい
教える|おしえる
近い|ちかい
形|かたち
計る|はかる
元気|げんき
言う|いう
原|はら
戸|と
古い|ふるい
午後|ごご
語る|かたる
工場|こうじょう
公園|こうえん
広い|ひろい
交わる|まじわる
光|ひかり
考える|かんがえる
行く|いく
高い|たかい
黄|き
合う|あう
谷|たに
国|くに
黒|くろ
今|いま
才|さい
細い|ほそい
作る|つくる
算数|さんすう
止まる|とまる
市|し
矢|や
姉|あね
思う|おもう
紙|かみ
寺|てら
自分|じぶん
時|とき
室|しつ
社|しゃ
弱い|よわい
首|くび
秋|あき
週|しゅう
春|はる
書く|かく
少ない|すくない
場|ば
色|いろ
食べる|たべる
心|こころ
新しい|あたらしい
親|おや
図|ず
数|かず
西|にし
声|こえ
星|ほし
晴れ|はれ
切る|きる
雪|ゆき
船|ふね
線|せん
前|まえ
組|くみ
走る|はしる
多い|おおい
太い|ふとい
体|からだ
台|だい
地図|ちず
池|いけ
知る|しる
茶|ちゃ
昼|ひる
長い|ながい
鳥|とり
朝|あさ
直す|なおす
通る|とおる
弟|おとうと
店|みせ
点|てん
電気|でんき
刀|かたな
冬|ふゆ
当たる|あたる
東|ひがし
答え|こたえ
頭|あたま
同じ|おなじ
道|みち
読書|どくしょ
内|うち
南|みなみ
肉|にく
馬|うま
売る|うる
買う|かう
麦|むぎ
半分|はんぶん
番|ばん
父母|ふぼ
風|かぜ
分かる|わかる
聞く|きく
米|こめ
歩く|あるく
母校|ぼこう
方|ほう
北|きた
毎日|まいにち
妹|いもうと
万|まん
明るい|あかるい
鳴く|なく
毛|け
門|もん
夜|よる
野原|のはら
友だち|ともだち
用|よう
曜|よう
来る|くる
里|さと
理科|りか
話す|はなす
`,
  3: `
悪い|わるい
安い|やすい
暗い|くらい
医者|いしゃ
委員|いいん
意見|いけん
育つ|そだつ
員数|いんずう
院長|いんちょう
飲む|のむ
運ぶ|はこぶ
泳ぐ|およぐ
駅|えき
央|おう
横|よこ
屋根|やね
温かい|あたたかい
化ける|ばける
荷物|にもつ
界|かい
開く|ひらく
階段|かいだん
寒い|さむい
感想|かんそう
漢字|かんじ
館|かん
岸|きし
起きる|おきる
期日|きじつ
客|きゃく
究める|きわめる
急ぐ|いそぐ
級|きゅう
宮|みや
球|たま
去る|さる
橋|はし
業|ぎょう
曲がる|まがる
局|きょく
銀|ぎん
区|く
苦い|にがい
具|ぐ
君|きみ
係|かかり
軽い|かるい
血|ち
決める|きめる
研ぐ|とぐ
県|けん
庫|こ
湖|みずうみ
向く|むく
幸せ|しあわせ
港|みなと
号|ごう
根|ね
祭り|まつり
皿|さら
仕える|つかえる
死ぬ|しぬ
使う|つかう
始まる|はじまる
指|ゆび
歯|は
詩|し
次|つぎ
事|こと
持つ|もつ
式|しき
実る|みのる
写す|うつす
者|もの
主|ぬし
守る|まもる
取る|とる
酒|さけ
受ける|うける
州|しゅう
拾う|ひろう
終わる|おわる
習う|ならう
集まる|あつまる
住む|すむ
重い|おもい
宿|やど
所|ところ
暑い|あつい
助ける|たすける
昭和|しょうわ
消す|けす
商店|しょうてん
章|しょう
勝つ|かつ
乗る|のる
植える|うえる
申す|もうす
身|み
神|かみ
真|まこと
深い|ふかい
進む|すすむ
世|よ
整える|ととのえる
昔|むかし
全て|すべて
相手|あいて
送る|おくる
想う|おもう
息|いき
速い|はやい
族|ぞく
他|ほか
打つ|うつ
対|たい
待つ|まつ
代わる|かわる
第|だい
題|だい
炭|すみ
短い|みじかい
談話|だんわ
着る|きる
注ぐ|そそぐ
柱|はしら
丁|ちょう
帳面|ちょうめん
調べる|しらべる
追う|おう
定める|さだめる
庭|にわ
笛|ふえ
鉄|てつ
転ぶ|ころぶ
都|みやこ
度|ど
投げる|なげる
豆|まめ
島|しま
湯|ゆ
登る|のぼる
等しい|ひとしい
動く|うごく
童話|どうわ
農家|のうか
波|なみ
配る|くばる
倍|ばい
箱|はこ
畑|はたけ
発つ|たつ
反る|そる
坂|さか
板|いた
皮|かわ
悲しい|かなしい
美しい|うつくしい
鼻|はな
筆|ふで
氷|こおり
表|おもて
秒|びょう
病気|びょうき
品物|しなもの
負ける|まける
部屋|へや
服|ふく
福|ふく
物|もの
平ら|たいら
返す|かえす
勉強|べんきょう
放す|はなす
味|あじ
命|いのち
面|めん
問う|とう
役|やく
薬|くすり
由|ゆ
油|あぶら
有る|ある
遊ぶ|あそぶ
予め|あらかじめ
羊|ひつじ
洋服|ようふく
葉|は
陽|よう
様子|ようす
落ちる|おちる
流れる|ながれる
旅|たび
両方|りょうほう
緑|みどり
礼|れい
列|れつ
練習|れんしゅう
路|みち
和|わ
`,
  4: `
愛|あい
案内|あんない
以後|いご
衣服|いふく
位|くらい
囲む|かこむ
胃|い
印|しるし
英語|えいご
栄える|さかえる
塩|しお
億|おく
加える|くわえる
果たす|はたす
貨物|かもつ
課題|かだい
芽|め
改める|あらためる
械|かい
害|がい
街|まち
各自|かくじ
覚える|おぼえる
完了|かんりょう
官|かん
管|くだ
関所|せきしょ
観る|みる
願う|ねがう
希|き
季節|きせつ
紀行|きこう
喜ぶ|よろこぶ
旗|はた
器|うつわ
機械|きかい
議会|ぎかい
求める|もとめる
泣く|なく
救う|すくう
給食|きゅうしょく
挙げる|あげる
漁|りょう
共に|ともに
協力|きょうりょく
鏡|かがみ
競う|きそう
極める|きわめる
訓|くん
軍|ぐん
郡|ぐん
径|けい
型|かた
景色|けしき
芸|げい
欠ける|かける
結ぶ|むすぶ
建てる|たてる
健やか|すこやか
験|けん
固い|かたい
功|こう
好む|このむ
候|こう
航海|こうかい
康|こう
告げる|つげる
差す|さす
菜|な
最も|もっとも
材木|ざいもく
昨年|さくねん
札|さつ
刷る|する
察する|さっする
参る|まいる
産む|うむ
散る|ちる
残る|のこる
氏名|しめい
司会|しかい
試す|ためす
児童|じどう
治る|なおる
辞書|じしょ
失う|うしなう
借りる|かりる
種|たね
周り|まわり
祝う|いわう
順番|じゅんばん
初め|はじめ
松|まつ
笑う|わらう
唱える|となえる
焼く|やく
照らす|てらす
賞|しょう
臣|しん
信じる|しんじる
成る|なる
省く|はぶく
清い|きよい
静か|しずか
席|せき
積む|つむ
折る|おる
節|ふし
説く|とく
浅い|あさい
戦う|たたかう
選ぶ|えらぶ
然る|しかる
争う|あらそう
倉|くら
巣|す
束|たば
側|がわ
続く|つづく
卒業|そつぎょう
孫|まご
帯|おび
隊|たい
達する|たっする
単に|たんに
置く|おく
仲間|なかま
兆|ちょう
低い|ひくい
底|そこ
停まる|とまる
的|まと
典|てん
伝える|つたえる
徒|と
努める|つとめる
灯|ひ
働く|はたらく
特に|とくに
得る|える
毒|どく
熱い|あつい
念じる|ねんじる
敗れる|やぶれる
梅|うめ
博物館|はくぶつかん
飯|めし
飛ぶ|とぶ
費やす|ついやす
必ず|かならず
票|ひょう
標|しるし
不安|ふあん
夫|おっと
付く|つく
府|ふ
副|ふく
粉|こな
兵|へい
別れる|わかれる
辺り|あたり
変わる|かわる
便り|たより
包む|つつむ
法|ほう
望む|のぞむ
牧場|ぼくじょう
末|すえ
満ちる|みちる
未だ|まだ
脈|みゃく
民|たみ
無い|ない
約束|やくそく
勇ましい|いさましい
要る|いる
養う|やしなう
浴びる|あびる
利く|きく
陸|りく
良い|よい
料|りょう
量る|はかる
輪|わ
類|るい
令|れい
冷たい|つめたい
例|れい
歴史|れきし
連れる|つれる
老いる|おいる
労る|いたわる
録音|ろくおん
`,
  5: `
圧力|あつりょく
移る|うつる
因る|よる
永い|ながい
営む|いとなむ
衛生|えいせい
易しい|やさしい
益|えき
液体|えきたい
演じる|えんじる
応える|こたえる
往復|おうふく
桜|さくら
恩|おん
可決|かけつ
仮に|かりに
価値|かち
河川|かせん
過ぎる|すぎる
賀正|がしょう
快い|こころよい
解く|とく
格別|かくべつ
確か|たしか
額|ひたい
刊行|かんこう
幹|みき
慣れる|なれる
眼|め
基づく|もとづく
寄る|よる
規則|きそく
技|わざ
義理|ぎり
逆|さか
久しい|ひさしい
旧友|きゅうゆう
居る|いる
許す|ゆるす
境|さかい
均す|ならす
禁じる|きんじる
句|く
群れ|むれ
経る|へる
潔い|いさぎよい
件|けん
券|けん
険しい|けわしい
検べる|しらべる
限る|かぎる
現れる|あらわれる
減る|へる
故郷|こきょう
個人|こじん
護る|まもる
効く|きく
厚い|あつい
耕す|たがやす
鉱山|こうざん
構える|かまえる
興る|おこる
講堂|こうどう
混じる|まじる
査定|さてい
再び|ふたたび
災い|わざわい
妻|つま
採る|とる
際|きわ
在る|ある
財産|ざいさん
罪|つみ
雑誌|ざっし
酸っぱい|すっぱい
賛成|さんせい
支える|ささえる
志|こころざし
枝|えだ
師|し
資本|しほん
飼う|かう
示す|しめす
似る|にる
識る|しる
質|しつ
舎|しゃ
謝る|あやまる
授ける|さずける
修める|おさめる
述べる|のべる
術|じゅつ
準じる|じゅんじる
序|じょ
招く|まねく
承る|うけたまわる
証す|あかす
条|じょう
状|じょう
常に|つねに
情け|なさけ
織る|おる
職|しょく
制する|せいする
性|せい
政|せい
勢い|いきおい
精|せい
製品|せいひん
税|ぜい
責める|せめる
績|せき
接ぐ|つぐ
設ける|もうける
絶える|たえる
祖父|そふ
素|もと
総じて|そうじて
造る|つくる
像|ぞう
増える|ふえる
則る|のっとる
測る|はかる
属する|ぞくする
率いる|ひきいる
損なう|そこなう
退く|しりぞく
貸す|かす
態度|たいど
団体|だんたい
断つ|たつ
築く|きずく
貯める|ためる
張る|はる
提げる|さげる
程|ほど
適する|てきする
敵|てき
統べる|すべる
銅|どう
導く|みちびく
徳|とく
独り|ひとり
任せる|まかせる
燃える|もえる
能|のう
破る|やぶる
犯す|おかす
判る|わかる
版|はん
比べる|くらべる
肥える|こえる
非ず|あらず
備える|そなえる
俵|たわら
評判|ひょうばん
貧しい|まずしい
布|ぬの
婦人|ふじん
武士|ぶし
復習|ふくしゅう
複雑|ふくざつ
仏|ほとけ
編む|あむ
弁当|べんとう
保つ|たもつ
墓|はか
報いる|むくいる
豊か|ゆたか
防ぐ|ふせぐ
貿易|ぼうえき
暴れる|あばれる
務める|つとめる
夢|ゆめ
迷う|まよう
綿|わた
輸送|ゆそう
余る|あまる
預ける|あずける
容れる|いれる
略す|りゃくす
留まる|とまる
領地|りょうち
`,
  6: `
異なる|ことなる
遺す|のこす
域|いき
宇宙|うちゅう
映る|うつる
延びる|のびる
沿う|そう
我|われ
灰|はい
拡げる|ひろげる
革|かわ
閣|かく
割る|わる
株|かぶ
干す|ほす
巻く|まく
看る|みる
簡単|かんたん
危ない|あぶない
机|つくえ
揮う|ふるう
貴い|とうとい
疑う|うたがう
吸う|すう
供える|そなえる
胸|むね
郷|さと
勤める|つとめる
筋|すじ
系|けい
敬う|うやまう
警察|けいさつ
劇|げき
激しい|はげしい
穴|あな
絹|きぬ
権利|けんり
憲法|けんぽう
源|みなもと
厳しい|きびしい
己|おのれ
呼ぶ|よぶ
誤る|あやまる
后|きさき
孝行|こうこう
皇|こう
紅|べに
鋼|はがね
降る|ふる
刻む|きざむ
穀物|こくもつ
骨|ほね
困る|こまる
砂|すな
座る|すわる
済む|すむ
裁く|さばく
策|さく
冊子|さっし
蚕|かいこ
至る|いたる
私|わたし
姿|すがた
視る|みる
詞|し
誌|し
磁石|じしゃく
射る|いる
捨てる|すてる
尺|しゃく
若い|わかい
樹木|じゅもく
収める|おさめる
宗教|しゅうきょう
就く|つく
衆|しゅう
従う|したがう
縦|たて
縮む|ちぢむ
熟す|じゅくす
純粋|じゅんすい
処理|しょり
署名|しょめい
諸国|しょこく
除く|のぞく
将来|しょうらい
傷|きず
障子|しょうじ
城|しろ
蒸す|むす
針|はり
仁|じん
垂れる|たれる
推す|おす
寸法|すんぽう
盛る|もる
聖なる|せいなる
誠|まこと
宣言|せんげん
専ら|もっぱら
泉|いずみ
洗う|あらう
染める|そめる
善い|よい
奏でる|かなでる
窓|まど
創る|つくる
装う|よそおう
層|そう
操る|あやつる
蔵|くら
臓器|ぞうき
存じる|ぞんじる
尊い|とうとい
退ける|しりぞける
宅|たく
担ぐ|かつぐ
探す|さがす
誕生|たんじょう
段|だん
暖かい|あたたかい
値|ね
宙|ちゅう
忠実|ちゅうじつ
著す|あらわす
庁|ちょう
頂く|いただく
潮|しお
賃金|ちんぎん
痛い|いたい
展覧|てんらん
討つ|うつ
党|とう
糖|とう
届く|とどく
難しい|むずかしい
乳|ちち
認める|みとめる
納める|おさめる
脳|のう
派|は
拝む|おがむ
背|せ
肺|はい
俳句|はいく
班|はん
晩|ばん
否|いな
批判|ひはん
秘める|ひめる
腹|はら
奮う|ふるう
並ぶ|ならぶ
陛下|へいか
閉じる|とじる
片方|かたほう
補う|おぎなう
暮れる|くれる
宝|たから
訪ねる|たずねる
亡くなる|なくなる
忘れる|わすれる
棒|ぼう
枚|まい
幕|まく
密か|ひそか
盟友|めいゆう
模様|もよう
訳す|やくす
郵便|ゆうびん
優しい|やさしい
幼い|おさない
欲しい|ほしい
翌日|よくじつ
乱れる|みだれる
卵|たまご
覧る|みる
裏|うら
律|りつ
臨む|のぞむ
朗らか|ほがらか
論じる|ろんじる
`,
};

const SUPPLEMENTAL_BANKS = {
  1: `
一人|ひとり
二人|ふたり
三人|さんにん
四人|よにん
五人|ごにん
六人|ろくにん
七人|しちにん
八人|はちにん
九人|きゅうにん
十人|じゅうにん
一日|ついたち
二日|ふつか
十一日|じゅういちにち
十二日|じゅうににち
二十日|はつか
一月|いちがつ
五月|ごがつ
六月|ろくがつ
七月|しちがつ
八月|はちがつ
九月|くがつ
十月|じゅうがつ
十一月|じゅういちがつ
十二月|じゅうにがつ
一百|いっぴゃく
二百|にひゃく
三百|さんびゃく
五百|ごひゃく
一千|いっせん
二千|にせん
三千|さんぜん
火山|かざん
水田|すいでん
田んぼ|たんぼ
木立|こだち
金山|きんざん
土手|どて
山道|やまみち
青空|あおぞら
夕空|ゆうぞら
雨空|あまぞら
大雨|おおあめ
小雨|こさめ
赤い花|あかいはな
青い空|あおいそら
白い花|しろいはな
天上|てんじょう
天女|てんにょ
天の川|あまのがわ
男子|だんし
女子|じょし
男の子|おとこのこ
女の子|おんなのこ
父の日|ちちのひ
母の日|ははのひ
父母|ふぼ
兄さん|にいさん
学生|がくせい
学年|がくねん
入学|にゅうがく
学校名|がっこうめい
校名|こうめい
文字|もじ
本文|ほんぶん
本名|ほんみょう
耳元|みみもと
目上|めうえ
目下|めした
口元|くちもと
入口|いりぐち
出口|でぐち
手本|てほん
足音|あしおと
力もち|ちからもち
白い犬|しろいいぬ
虫とり|むしとり
花見|はなみ
花びら|はなびら
草花|くさばな
竹林|ちくりん
森林|しんりん
石山|いしやま
王子|おうじ
王女|おうじょ
玉入れ|たまいれ
円い|まるい
町中|まちなか
村人|むらびと
車中|しゃちゅう
糸口|いとぐち
貝がら|かいがら
赤白|あかしろ
青白|あおじろ
正しい字|ただしいじ
早口|はやくち
大小|だいしょう
上下|じょうげ
左右|さゆう
休み時間|やすみじかん
`,
  2: `
春風|はるかぜ
夏休み|なつやすみ
秋風|あきかぜ
冬休み|ふゆやすみ
朝日|あさひ
昼休み|ひるやすみ
夜空|よぞら
晴天|せいてん
雪国|ゆきぐに
海辺|うみべ
公園前|こうえんまえ
店先|みせさき
広場|ひろば
市場|いちば
工場見学|こうじょうけんがく
電車|でんしゃ
汽船|きせん
船長|せんちょう
国語|こくご
計算|けいさん
図工|ずこう
音楽|おんがく
体育|たいいく
教室|きょうしつ
校長|こうちょう
日記|にっき
作文|さくぶん
読点|とうてん
会話|かいわ
思考|しこう
遠足|えんそく
近道|ちかみち
通学|つうがく
帰国|きこく
歩道|ほどう
走者|そうしゃ
強風|きょうふう
弱火|よわび
毎朝|まいあさ
暗い|くらい
新年|しんねん
古本|ふるほん
`,
  3: ``,
  4: `
関係|かんけい
選挙|せんきょ
産業|さんぎょう
連続|れんぞく
伝達|でんたつ
健康|けんこう
自然|しぜん
`,
  5: `
移動|いどう
応援|おうえん
確認|かくにん
技術|ぎじゅつ
経営|けいえい
検査|けんさ
限界|げんかい
現状|げんじょう
構造|こうぞう
講演|こうえん
国際|こくさい
資源|しげん
支援|しえん
条件|じょうけん
責任|せきにん
設計|せっけい
測定|そくてい
`,
  6: `
映像|えいぞう
沿岸|えんがん
拡張|かくちょう
閣議|かくぎ
簡潔|かんけつ
危険|きけん
供給|きょうきゅう
勤労|きんろう
警戒|けいかい
厳格|げんかく
呼吸|こきゅう
誤解|ごかい
視野|しや
就職|しゅうしょく
推論|すいろん
創造|そうぞう
探検|たんけん
展覧会|てんらんかい
`,
};

const TOTAL_QUESTIONS = 10;
const CUSTOM_BANK_KEY = "kanji-custom-bank-v1";
const WRONG_HISTORY_KEY = "kanji-wrong-history-v1";
const CRAB_COLLECTION_KEY = "kanji-crab-collection-v1";
const CRAB_IMAGES = [
  "アカイシガニ.jpg",
  "アカイソガニ.jpg",
  "アカテガニ.jpg",
  "アカマンジュウガニ.jpg",
  "アカモンガニ.jpg",
  "アサヒガニ.jpg",
  "アシナガツノガニ.jpg",
  "アミメノコギリガザミ.jpg",
  "アメリカイチョウガニ（ダンジネスクラブ）.jpg",
  "イガグリガニ.jpg",
  "イシガニ.jpg",
  "イソガニ.jpg",
  "イソクズガニ.jpg",
  "イボガザミ.jpg",
  "イボテオオホモラ.jpg",
  "インドエンコウガニ.jpg",
  "ウスハオウギガニモドキ.jpg",
  "ウデナガヒシガニ.jpg",
  "ウモレオウギガニ.jpg",
  "ウロコオウギガニ.jpg",
  "エダツノガニ.jpg",
  "エンコウガニ.jpg",
  "オウギガニ.jpg",
  "オオアカホシサンゴガニ.jpg",
  "オオエンコウガニ（マルズワイガニ）.jpg",
  "オオカイカムリ.jpg",
  "オオタマオウギガニ.jpg",
  "オオホモラ.jpg",
  "オカガニ.jpg",
  "オガサワラクロベンケイガニ.jpg",
  "オキナワハクセンシオマネキ.jpg",
  "オーストラリアンキングクラブ.jpg",
  "オーストラリアンスノークラブ.jpg",
  "オーストンガニ.jpg",
  "カイカムリ.jpg",
  "カルイシガニ.jpg",
  "ガザミ.jpg",
  "キメンガニ.jpg",
  "キンセンガニ.jpg",
  "キンチャクガニ.jpg",
  "クマドリオウギガニ（ヤクジャマガニ）.jpg",
  "クリガニ.jpg",
  "クロベンケイガニ.jpg",
  "ケアシガニ.jpg",
  "ケガニ.jpg",
  "ケンナシコブシガニ.jpg",
  "コツノガニ.jpg",
  "コツノキンセンモドキ.jpg",
  "コブケアシガニ.jpg",
  "ゴカクイボオウギガニ.jpg",
  "サガミモガニ.jpg",
  "サナダミズヒキガニ.jpg",
  "サメハダヘイケガニ.jpg",
  "サワガニ.jpg",
  "シオマネキ.jpg",
  "シマイシガニ.jpg",
  "ショウジンガニ.jpg",
  "ジャノメガザミ.jpg",
  "スベスベマンジュウガニ.jpg",
  "ズワイガニ.jpg",
  "タイワンガザミ.jpg",
  "タカアシガニ.jpg",
  "タカノケフサイソガニ.jpg",
  "タスマニアオオガニ.jpg",
  "タラバガニ.jpg",
  "ツノガニ.jpg",
  "ツノハリセンボン.jpg",
  "ツブエゾイバラガニ.jpg",
  "テナガコブシ.jpg",
  "トウヨウホモラ.jpg",
  "トゲアシガニ.jpg",
  "トゲノコギリガザミ.jpg",
  "トラフカラッパ.jpg",
  "ドロイシガニ.jpg",
  "ナキエンコウガニ.jpg",
  "ナキガザミ.jpg",
  "ナマコマルガザミ.jpg",
  "ノコギリイッカクガニ（アロークラブ）.jpg",
  "ノコギリガザミ.jpg",
  "ノコギリガニ.jpg",
  "ハナサキガニ.jpg",
  "ハリツノガニ.jpg",
  "バンパイアクラブ.jpg",
  "ヒシガニ.jpg",
  "ヒメシオマネキ.jpg",
  "ヒラアシクモガニ.jpg",
  "ヒライソガニ.jpg",
  "ヒラコウカイカムリ.jpg",
  "ヒラツメガニ.jpg",
  "ヘイケガニ.jpg",
  "ヘリトリマンジュウガニ.jpg",
  "ベニシオマネキ.jpg",
  "ベニズワイガニ.jpg",
  "ベニホシマンジュウガニ.jpg",
  "ベンケイガニ.jpg",
  "ホシマンジュウガニ.jpg",
  "ホソウデヒシガニ.jpg",
  "マルソデカラッパ.jpg",
  "マルミヘイケガニ.jpg",
  "ミツハキンセンガニ.jpg",
  "ミナミオカガニ.jpg",
  "ムラサキサワガニ.jpg",
  "メガネカラッパ.jpg",
  "メナガガザミ.jpg",
  "メンコヒシガニ.jpg",
  "モクズガニ.jpg",
  "モクズショイ.jpg",
  "モクズセオイ.jpg",
  "ヤマトオサガニ.jpg",
  "ヤマトカラッパ.jpg",
  "ユウモンガニ.jpg",
  "ユノハナガニ.jpg",
  "ヨコツノコブシ.jpg",
  "ヨツメコブシ.jpg",
  "ワタリイシガニ.jpg",
];
const state = {
  grade: 1,
  queue: [],
  index: 0,
  locked: false,
};

const baseBanks = Object.fromEntries(
  Object.entries(RAW_BANKS).map(([grade, raw]) => [
    grade,
    parseBank(`${raw}\n${SUPPLEMENTAL_BANKS[grade] || ""}`, Number(grade)),
  ])
);
const customBanks = loadCustomBanks();
const banks = buildBanks();

const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const resultScreen = document.querySelector("#result-screen");
const gradeGrid = document.querySelector("#grade-grid");
const kanjiText = document.querySelector("#kanji-text");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const gradeLabel = document.querySelector("#grade-label");
const celebration = document.querySelector("#celebration");
const addForm = document.querySelector("#add-form");
const customGrade = document.querySelector("#custom-grade");
const customKanji = document.querySelector("#custom-kanji");
const customReading = document.querySelector("#custom-reading");
const addMessage = document.querySelector("#add-message");
const historyList = document.querySelector("#history-list");
const collectionGrid = document.querySelector("#collection-grid");
const collectionCount = document.querySelector("#collection-count");
const rewardCard = document.querySelector("#reward-card");
const AudioContextClass = window.AudioContext || window.webkitAudioContext;
let audioContext;
let bgmTimer;
let bgmStep = 0;

function getAudioContext() {
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(frequency, start, duration, type, volume) {
  const context = getAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function startBgm() {
  const context = getAudioContext();
  if (!context || bgmTimer) return;

  const melody = [392, 494, 587, 494, 440, 523, 659, 523];
  bgmTimer = window.setInterval(() => {
    const now = context.currentTime;
    playTone(melody[bgmStep % melody.length], now, 0.2, "sine", 0.075);
    playTone(melody[(bgmStep + 2) % melody.length] / 2, now, 0.24, "triangle", 0.04);
    bgmStep += 1;
  }, 430);
}

function playCorrectSound() {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  playTone(880, now, 0.15, "sine", 0.28);
  playTone(1175, now + 0.12, 0.22, "sine", 0.32);
}

function playWrongSound() {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  playTone(180, now, 0.22, "sawtooth", 0.26);
  playTone(130, now + 0.18, 0.28, "sawtooth", 0.24);
}

function playFanfare() {
  const context = getAudioContext();
  if (!context) return;
  const now = context.currentTime;
  [523, 659, 784, 1047, 784, 1047, 1319].forEach((frequency, index) => {
    playTone(frequency, now + index * 0.13, 0.22, "triangle", 0.3);
  });
}

function parseBank(raw, grade) {
  const entries = raw
    .trim()
    .split("\n")
    .map((line, index) => {
      const [text, reading] = line.split("|").map((part) => part.trim());
      return { id: `${grade}-${index + 1}`, text, reading };
    });
  return entries.slice(0, 200);
}

function buildBanks() {
  return Object.fromEntries(
    Object.entries(baseBanks).map(([grade, items]) => [grade, [...items, ...customBanks[grade]]])
  );
}

function loadCustomBanks() {
  const emptyBanks = Object.fromEntries([1, 2, 3, 4, 5, 6].map((grade) => [grade, []]));
  try {
    const saved = JSON.parse(localStorage.getItem(CUSTOM_BANK_KEY) || "{}");
    Object.keys(emptyBanks).forEach((grade) => {
      emptyBanks[grade] = Array.isArray(saved[grade]) ? saved[grade] : [];
    });
  } catch {
    return emptyBanks;
  }
  return emptyBanks;
}

function saveCustomBanks() {
  localStorage.setItem(CUSTOM_BANK_KEY, JSON.stringify(customBanks));
}

function loadWrongHistory() {
  try {
    return JSON.parse(localStorage.getItem(WRONG_HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveWrongHistory(history) {
  localStorage.setItem(WRONG_HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
}

function loadCrabCollection() {
  try {
    const saved = JSON.parse(localStorage.getItem(CRAB_COLLECTION_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((name) => CRAB_IMAGES.includes(name)) : [];
  } catch {
    return [];
  }
}

function saveCrabCollection(collection) {
  localStorage.setItem(CRAB_COLLECTION_KEY, JSON.stringify([...new Set(collection)]));
}

function crabName(fileName) {
  return fileName.replace(/\.jpg$/i, "");
}

function crabPath(fileName) {
  return `./picts/${encodeURIComponent(fileName)}`;
}

function awardCrab() {
  const collection = loadCrabCollection();
  const owned = new Set(collection);
  const available = CRAB_IMAGES.filter((fileName) => !owned.has(fileName));
  const won = available.length > 0 ? sample(available, 1)[0] : sample(CRAB_IMAGES, 1)[0];

  if (!owned.has(won)) {
    collection.unshift(won);
    saveCrabCollection(collection);
  }

  renderCollection();
  return {
    fileName: won,
    isNew: !owned.has(won),
  };
}

function refreshBanks() {
  const nextBanks = buildBanks();
  Object.keys(banks).forEach((grade) => {
    banks[grade] = nextBanks[grade];
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function show(screen) {
  [startScreen, gameScreen, resultScreen].forEach((element) => element.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function startGame(grade) {
  startBgm();
  state.grade = grade;
  state.queue = sample(banks[grade], TOTAL_QUESTIONS);
  state.index = 0;
  state.locked = false;
  gradeLabel.textContent = `${grade}年`;
  show(gameScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = state.queue[state.index];
  state.locked = false;
  feedback.textContent = "";
  kanjiText.textContent = question.text;
  progressLabel.textContent = `${state.index + 1} / ${TOTAL_QUESTIONS}`;
  progressBar.style.width = `${((state.index + 1) / TOTAL_QUESTIONS) * 100}%`;

  const wrongChoices = sample(
    banks[state.grade].map((item) => item.reading).filter((reading) => reading !== question.reading),
    3
  );
  const options = shuffle([question.reading, ...wrongChoices]);

  choices.replaceChildren(
    ...options.map((option) => {
      const button = document.createElement("button");
      button.className = "choice-button";
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => answer(option, button));
      return button;
    })
  );
}

function answer(reading, button) {
  if (state.locked) return;
  const question = state.queue[state.index];
  const isCorrect = reading === question.reading;

  if (!isCorrect) {
    playWrongSound();
    button.classList.add("wrong");
    feedback.textContent = "ブッブー！もう一度！";
    recordWrongAnswer(question, reading);
    return;
  }

  state.locked = true;
  playCorrectSound();
  button.classList.add("correct");
  feedback.textContent = "ピンポン！正解！";

  window.setTimeout(() => {
    state.index += 1;
    if (state.index >= TOTAL_QUESTIONS) {
      const reward = awardCrab();
      show(resultScreen);
      celebrate(reward);
      return;
    }
    renderQuestion();
  }, 650);
}

function celebrate(reward) {
  playFanfare();
  renderReward(reward);
  celebration.replaceChildren();
  const colors = ["#f43f5e", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#14b8a6"];
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 80; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.85}s`;
    piece.style.animationDuration = `${1.6 + Math.random() * 1.25}s`;
    fragment.append(piece);
  }

  celebration.append(fragment);
}

function renderReward(reward) {
  rewardCard.replaceChildren();
  const title = document.createElement("div");
  title.className = "reward-copy";
  title.textContent = reward.isNew
    ? `新しいカニをゲット！ ${crabName(reward.fileName)}`
    : `全種類コンプリート済み！ 今回は ${crabName(reward.fileName)}`;

  const image = document.createElement("img");
  image.src = crabPath(reward.fileName);
  image.alt = crabName(reward.fileName);

  rewardCard.append(image, title);
}

function addCustomQuestion(event) {
  event.preventDefault();
  const grade = customGrade.value;
  const text = customKanji.value.trim();
  const reading = customReading.value.trim();

  if (!text || !reading) {
    addMessage.textContent = "漢字と読みを入力してください。";
    return;
  }

  const exists = banks[grade].some((item) => item.text === text && item.reading === reading);
  if (exists) {
    addMessage.textContent = "同じ問題はすでに登録されています。";
    return;
  }

  customBanks[grade].push({
    id: `custom-${grade}-${Date.now()}`,
    text,
    reading,
    custom: true,
  });
  saveCustomBanks();
  refreshBanks();
  addForm.reset();
  customGrade.value = grade;
  addMessage.textContent = `${grade}年生に「${text}」を追加しました。`;
}

function recordWrongAnswer(question, selectedReading) {
  const history = loadWrongHistory();
  const now = new Date();
  history.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    grade: state.grade,
    text: question.text,
    reading: question.reading,
    selectedReading,
    date: now.toLocaleString("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  saveWrongHistory(history);
  renderWrongHistory();
}

function renderWrongHistory() {
  const history = loadWrongHistory();
  if (history.length === 0) {
    historyList.innerHTML = '<p class="empty-history">まだ間違い履歴はありません。</p>';
    return;
  }

  historyList.replaceChildren(
    ...history.slice(0, 20).map((item) => {
      const row = document.createElement("div");
      row.className = "history-item";

      const grade = document.createElement("div");
      grade.className = "history-grade";
      grade.textContent = `${item.grade}年`;

      const main = document.createElement("div");
      main.className = "history-main";
      const text = document.createElement("strong");
      text.textContent = item.text;
      main.append(
        text,
        ` / 正解: ${item.reading}`,
        document.createElement("br"),
        `選んだ読み: ${item.selectedReading} ・ ${item.date}`
      );

      row.append(grade, main);
      return row;
    })
  );
}

function renderCollection() {
  const collection = loadCrabCollection();
  collectionCount.textContent = `${collection.length} / ${CRAB_IMAGES.length}`;

  if (collection.length === 0) {
    collectionGrid.innerHTML = '<p class="empty-collection">10問クリアすると、ここにカニが集まります。</p>';
    return;
  }

  collectionGrid.replaceChildren(
    ...collection.map((fileName) => {
      const card = document.createElement("div");
      card.className = "crab-card";

      const image = document.createElement("img");
      image.src = crabPath(fileName);
      image.alt = crabName(fileName);

      const name = document.createElement("div");
      name.className = "crab-name";
      name.textContent = crabName(fileName);

      card.append(image, name);
      return card;
    })
  );
}

function renderGrades() {
  const fragment = document.createDocumentFragment();
  for (let grade = 1; grade <= 6; grade += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "grade-button";
    button.textContent = `${grade}年生`;
    button.setAttribute("aria-label", `${grade}年生の問題を始める`);
    button.addEventListener("click", () => startGame(grade));
    fragment.append(button);
  }
  gradeGrid.append(fragment);
}

document.querySelector("#back-button").addEventListener("click", () => show(startScreen));
document.querySelector("#retry-button").addEventListener("click", () => startGame(state.grade));
document.querySelector("#change-grade-button").addEventListener("click", () => show(startScreen));
document.querySelector("#clear-history-button").addEventListener("click", () => {
  saveWrongHistory([]);
  renderWrongHistory();
});
document.querySelector("#clear-collection-button").addEventListener("click", () => {
  saveCrabCollection([]);
  renderCollection();
});
addForm.addEventListener("submit", addCustomQuestion);

renderGrades();
renderWrongHistory();
renderCollection();
