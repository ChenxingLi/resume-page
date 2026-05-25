const NEWS_DATA = {
  highlights: [
    {
      dual: true,
      articles: [
        {
          source: { en: 'Liberation Daily', zh: '解放日报' },
          date: '2024.06.15',
          title: {
            en: '"Yao Class" Team in Shanghai Builds World-Class Blockchain — What Did Andrew Yao Bring Them?',
            zh: '"姚班"团队在上海打造世界级区块链，姚期智给他们带来了什么？'
          },
          url: 'https://www.shanghai.gov.cn/nw4411/20240615/84e7fb7a126343c8a085ec00ff347bad.html',
          excerpt: {
            en: '...<strong>Li Chenxing</strong> studied the paper Long Fan mentioned and concluded: the theoretical design was flawed. Based on feedback from security analysis, <strong>Li Chenxing</strong> completed two successive revisions of the graph-based blockchain consensus protocol and finalized it. ... "TreeGraph embodies years of effort from Professor Yao\'s team. We will make this project succeed and see it deployed around the world." — <strong>Li Chenxing</strong>',
            zh: '...<strong>李辰星</strong>随后深入研读龙凡提到的那篇论文并作出判断：该论文的理论设计有缺陷。<strong>李辰星</strong>根据安全性分析过程中的反馈，接连完成了对图式区块链共识协议两个版本的修改并使之最终定稿。..."树图凝聚着姚先生团队多年的心血，我们会做好这个项目，让它在世界上更多的地方落地应用。" ——<strong>李辰星</strong>'
          },
          reposts: [
            { name: { en: 'Shanghai S&T Commission', zh: '上海科技委' }, url: 'https://stcsm.sh.gov.cn/xwzx/mtjj/20240617/8b0b486045da45e2a8f57bf8236659de.html' },
          ]
        },
        {
          source: { en: "People's Daily (Overseas Edition)", zh: '人民日报海外版' },
          date: '2024.06.24',
          title: {
            en: 'TreeGraph: A World-Class Public Chain Built by Tsinghua "Yao Class"',
            zh: '树图：清华"姚班"团队打造的世界级公链'
          },
          url: 'http://paper.people.com.cn/rmrbhwb/html/2024-06/24/content_26065224.htm',
          excerpt: {
            en: '...<strong>Li Chenxing</strong> was among the students involved. He pursued his doctorate under Andrew Yao, focusing on blockchain. <strong>Li Chenxing</strong> studied the paper and determined its theoretical design was flawed. ... <strong>Li Chenxing</strong> completed his doctoral dissertation based on the TreeGraph project and successfully defended it.',
            zh: '...<strong>李辰星</strong>是当时参与交流的学生之一。他跟随姚期智攻读博士学位，研究方向就是区块链。<strong>李辰星</strong>随后深入研读龙凡提到的那篇论文并作出判断：该论文的理论设计有缺陷。...<strong>李辰星</strong>基于树图区块链项目完成博士论文并顺利通过答辩。'
          },
          reposts: [
            { name: { en: 'Tsinghua University', zh: '清华大学' }, url: 'https://www.tsinghua.edu.cn/info/1182/112399.htm' },
            { name: { en: 'People.cn', zh: '人民网' }, url: 'http://finance.people.com.cn/n1/2024/0624/c1004-40262372.html' },
          ]
        }
      ],
      related: [
        { name: { en: 'Xinmin Evening News', zh: '新民晚报' }, title: { en: 'From "Yao Class" Classmates to Innovation Partners', zh: '从"姚班"同学到创新同仁' }, url: 'https://mp.weixin.qq.com/s/xRBLu6liwEQSg4ZPrgyYiw' },
        { name: { en: 'Shanghai Xuhui', zh: '上海徐汇公众号' }, title: { en: 'A World-Class Public Chain at Xuhui Waterfront', zh: '在徐汇滨江有一个世界级公链' }, url: 'https://mp.weixin.qq.com/s/HfIxbzU6WoLQaeWLIHI2Lw' },
      ]
    }
  ],

  talks: {
    expanded: [
      {
        source: { en: 'Shanghai Xuhui', zh: '上海徐汇公众号' },
        date: '2025.07',
        title: {
          en: 'Conflux TreeGraph Tech & Ecosystem Conference — "Trust Through Technology, Openness to the World"',
          zh: 'Conflux树图技术与生态发展大会即将启幕'
        },
        url: 'https://mp.weixin.qq.com/s/ufVpd1hc7C31yRO_g4ItZg',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Bringing the Largest Smart Contract Ecosystem into the "Dual-10K Era"', zh: '将最大的智能合约生态带入"双万时代"' },
          venue: { en: 'Conflux TreeGraph Conference', zh: '树图技术大会' }
        },
        excerpt: {
          en: '..."Technology Driving Change" keynote session (14:00–17:00). Speaker: <strong>Li Chenxing</strong>, Ph.D., Core Scientist, Shanghai TreeGraph Blockchain Research Institute. Topic: Bringing the Largest Smart Contract Ecosystem into the "Dual-10K Era"...',
          zh: '..."技术驱动变革"主题演讲环节（14:00—17:00）。主讲人：<strong>李辰星</strong> 博士，上海树图区块链研究院核心科学家。主题：将最大的智能合约生态带入"双万时代"...'
        },
        reposts: [],
        related: [
          { name: { en: 'Liberation Daily', zh: '解放日报' }, title: { en: 'China’s blockchain breakthrough: TreeGraph 3.0 — a global Web3 “digital expressway”', zh: '中国区块链新突破：树图公链3.0来了，打造全球Web3"数字高速公路"' }, url: 'https://web.shobserver.com/wx/detail.do?id=950546' },
          { name: { en: 'Xuhui District Gov.', zh: '徐汇区政府' }, title: null, url: 'http://www.xuhui.gov.cn/xwzx_zwxx/20250722/560579.html', isRepost: true },
          { name: { en: 'CNR News', zh: '央广网' }, title: { en: 'TreeGraph Tech & Ecosystem Conference Held in Shanghai', zh: '树图技术与生态发展大会在沪举办' }, url: 'https://www.cnr.cn/shanghai/tt/20250722/t20250722_527277058.shtml' },
          { name: { en: 'China News Service', zh: '中新社' }, title: { en: 'Conflux TreeGraph Conference Held in Shanghai', zh: 'Conflux树图技术与生态发展大会在沪举办' }, url: 'https://www.sh.chinanews.com.cn/kjjy/2025-07-20/138156.shtml' },
          { name: { en: 'Wenhui Daily', zh: '文汇报' }, title: { en: 'China blockchain breakthrough: TreeGraph 3.0', zh: '中国区块链新突破：树图公链3.0来了' }, url: 'http://www.why.com.cn/wx/article/2025/07/22/17531534031217959875.html' },
        ]
      },
      {
        source: { en: 'CNR News', zh: '央广网' },
        date: '2024.03',
        title: {
          en: 'Fostering New Productive Forces — "Web3 Data Resource Value Internet" Forum Held in Shanghai',
          zh: '培育发展新质生产力 "Web3数据资源的价值互联网"论坛在沪举办'
        },
        url: 'https://www.cnr.cn/shanghai/tt/20240325/t20240325_526638596.shtml',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Data Value Platform Built on High-Performance Public Blockchain', zh: '高性能公链构建的数据价值平台' },
          venue: { en: 'Global Developers Conference Web3 Forum', zh: '全球开发者先锋大会Web3论坛' }
        },
        excerpt: {
          en: '...Scientist <strong>Li Chenxing</strong> from Shanghai TreeGraph Blockchain Research Institute delivered a keynote, emphasizing the need for personal digital identity and a blockchain-backed neutral platform in the Web3.0 era...',
          zh: '...树图区块链研究院青年科学家<strong>李辰星</strong>带来《高性能公链构建的数据价值平台》主旨演讲，强调个人数字身份和中立平台的重要性...'
        },
        reposts: [],
        related: [
          { name: { en: 'Liberation Daily', zh: '解放日报' }, title: { en: 'Accelerating Web3.0 Built on Blockchain', zh: '加紧布局以区块链为底座的Web3.0' }, url: 'https://www.shanghai.gov.cn/nw4411/20240327/95808f70db7145b88aa24fa7aa9bf0cd.html' },
          { name: { en: 'SHINE News', zh: 'SHINE News' }, title: { en: 'Personal digital identity and neutral platform matter', zh: 'Personal digital identity and neutral platform matter' }, url: 'https://www.shine.cn/biz/tech/2403257898/' },
        ]
      },
      {
        source: { en: 'China News Service', zh: '中新社上海' },
        date: '2023.09',
        title: {
          en: '"Linking the Future" at CIIF: Web 3.0 Development in Focus',
          zh: '在工博会上"链接未来" Web 3.0发展受关注'
        },
        url: 'https://www.sh.chinanews.com.cn/kjjy/2023-09-23/116413.shtml',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Building Next-Gen Internet Digital Infrastructure with High-Performance Public Blockchain', zh: '用高性能公有区块链构建下一代互联网数字底座' },
          venue: { en: '23rd CIIF "Linking the Future" Forum', zh: '中国国际工博会"链接未来"论坛' }
        },
        excerpt: {
          en: '...Scientist <strong>Li Chenxing</strong> of Shanghai TreeGraph Blockchain Research Institute explained that "ownership" means individuals owning their digital identity, data rights, and digital assets. Building a verification system and a neutral platform are two key pillars of Web3.0...',
          zh: '...上海树图区块链研究院青年科学家<strong>李辰星</strong>在"链接未来"论坛上介绍，"可拥有"的内涵是个人对数字身份、数据权益、数字资产的拥有。构建验证体系和中立平台是Web3.0的两大关键支柱...'
        },
        reposts: [],
        related: [
          { name: { en: 'CNR News', zh: '央广网' }, title: { en: 'Shanghai TreeGraph Blockchain Research Institute at CIIF', zh: '上海树图区块链研究院亮相工博会' }, url: 'https://www.cnr.cn/shanghai/qqlb/20230924/t20230924_526430988.shtml' },
          { name: { en: 'TreeGraph Blockchain', zh: '树图区块链公众号' }, title: { en: 'Why "Data Ownership" Matters So Much', zh: '为什么"数据可拥有"如此重要？' }, url: 'https://mp.weixin.qq.com/s/9YYqpFN8qGemcAX9mLvWYw' },
        ]
      },
      {
        source: { en: 'Tsinghua University (official site)', zh: '清华大学官网' },
        date: '2019.05',
        title: {
          en: 'Frontiers Dialogue #27 — Turing Laureates on Machine Learning',
          zh: '第27期巅峰对话——图灵奖得主共话机器学习'
        },
        url: 'https://www.tsinghua.edu.cn/info/1175/19087.htm',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'A Secure and Efficient Blockchain Topology', zh: '安全高效的区块链拓扑结构' },
          venue: { en: 'Top Talk', zh: '巅峰对话' }
        },
        excerpt: {
          en: '...2002 Turing Award laureate Adi Shamir joined Top Talk to discuss machine learning with 2000 Turing Award laureate and IIIS Dean Andrew Yao...2017 PhD student <strong>Li Chenxing</strong> from IIIS presented his research — a blockchain topology that simultaneously achieves both security and high efficiency. Professor Shamir affirmed the methods and results, saying the research approach was innovative and worth further exploration.',
          zh: '...2002年图灵奖获得者、密码学领域世界知名的国际学者阿迪·沙米尔（Adi Shamir）做客"巅峰对话"，与2000年图灵奖获得者、清华大学交叉信息研究院院长姚期智共话机器学习...来自清华大学交叉信息研究院的2017级博士生<strong>李辰星</strong>同学展示了自己的科研成果——一种同时可以实现安全性以及高效率的区块链拓扑结构。沙米尔教授对报告中的方法和结果表示了肯定，认为同学的研究思路很有新意并值得深入挖掘。'
        },
        reposts: [],
        related: []
      }
    ],
    folded: [
      {
        source: { en: 'PANews', zh: 'PANews' },
        date: '2026.04',
        title: {
          en: 'Industry Experts Gather: Reflections and Breakthroughs in the AI Agent Era',
          zh: '业内专家齐聚，AI Agent时代的思考与突围'
        },
        url: 'https://www.panewslab.com/zh/articles/019d6b8e-9b3c-754e-bc92-ba45a3d6e16f',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Embracing the Unpredictable AI Wave', zh: '拥抱不可预测的AI浪潮' },
          venue: { en: 'AI Agent Meetup · XuJiaHui SciTech', zh: '"别虾焦虑" AI Agent活动' }
        },
        excerpt: {
          en: '...Chief architect <strong>Li Chenxing</strong> argued that granting more autonomy to AI, rather than over-constraining it with limited human experience, is an inevitable trend. AI\'s current "lack of consideration" stems from its difficulty in capturing and retaining key contextual constraints...',
          zh: '...Conflux树图首席架构师<strong>李辰星</strong>表示，目前将更多自主权交给AI，而非以人类有限经验过度约束，是当前技术阶段的必然趋势。AI目前表现出的"欠考虑"问题，本质在于其在复杂场景中难以稳定捕捉并持续记忆关键上下文约束...'
        },
        reposts: [
          { name: { en: 'Mankun Law', zh: '曼昆品牌部' }, url: 'https://mp.weixin.qq.com/s/YtceCP8dBsC8Y3uDCrllBg' },
          { name: { en: 'Distributed Consensus Assoc.', zh: '分布式共识协会' }, url: 'https://mp.weixin.qq.com/s/baEmVdAm7Yyj7ulyqdsvQQ' },
        ],
        related: []
      },
      {
        source: { en: 'AI Gradient Space', zh: 'AI梯度空间公众号' },
        date: '2026.03',
        title: {
          en: '3.29 OpenClaw Shanghai Developers Meetup at West Bund AI Tower',
          zh: '3.29 西岸智塔OpenClaw上海开发者交流'
        },
        url: 'https://mp.weixin.qq.com/s/oWILUYZ_ztpIURlevRpCvQ',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Embracing the Unpredictable AI Wave', zh: '拥抱不可预测的AI浪潮' },
          venue: { en: 'OpenClaw Developers Meetup', zh: 'OpenClaw开发者交流' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong> (Chief Architect, Shanghai TreeGraph Blockchain Research Institute) shared insights on "Embracing the Unpredictable AI Wave," discussing the intersection of AI autonomy and decentralized infrastructure...',
          zh: '...<strong>李辰星</strong>（上海树图区块链研究院首席架构师）分享"拥抱不可预测的AI浪潮"，探讨AI自主性与去中心化基础设施的交汇...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'Shanghai Changning', zh: '上海长宁公众号' },
        date: '2025.06',
        title: {
          en: 'Man vs. Machine — 2025 "Shanghai Silicon Alley" Innovation Talk',
          zh: '人机江湖，何以闯荡——2025年度"上海硅巷"创新说开讲②'
        },
        url: 'https://mp.weixin.qq.com/s/zYnhlL5KuKFTvkkfeGxgFg',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Dancing with the Gravity of History: Innovation Principles of Blockchain', zh: '在历史的引力中起舞：区块链技术的创新法则' },
          venue: { en: '"Shanghai Silicon Alley" Innovation Talk', zh: '"上海硅巷"创新说' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong>, CTO of Shanghai TreeGraph Blockchain Research Institute, analyzed the historical dependence of technology development and its dual nature, offering new perspectives on blockchain\'s role in the "man vs. machine" landscape...',
          zh: '...<strong>李辰星</strong>以《在历史的引力中起舞：区块链技术的创新法则》为题，分享了区块链的创新方法论，分析了技术发展的历史依赖性以及这种依赖的两面性，让与会者对区块链技术在"人机江湖"中的应用前景有了新的期待...'
        },
        reposts: [],
        related: [
          { name: { en: 'Shanghai Art Museum (WeChat)', zh: '上海艺术品博物馆公众号' }, title: { en: 'Blockchain Innovation in Historical Gravity — "Shanghai Silicon Alley" Innovation Talk', zh: '历史引力中的区块链创新——2025年度"上海硅巷"创新说' }, url: 'https://mp.weixin.qq.com/s/PB0owMYMAvGZRnr9wM-vLA' },
        ]
      },
      {
        source: { en: 'NetEase', zh: '网易' },
        date: '2025.04',
        title: {
          en: '"Digital Rights: ALL IN Power Game" Forum at Fudan University',
          zh: '"数字确权：ALL IN的权力游戏"论坛活动在复旦大学新闻学院举行'
        },
        url: 'https://www.163.com/dy/article/JU5POESF0552JZSG.html',
        talk: {
          role: { en: 'Panel', zh: '圆桌' },
          name: { en: 'Digital Rights: ALL IN Power Game', zh: '数字确权：ALL IN的权力游戏' },
          venue: { en: 'Fudan University', zh: '复旦大学' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong> noted: "Once digital content leaves its original platform, copyright management transforms from an information technology problem into a legal governance challenge." He argued for "building a complete digital asset closed loop through institutional improvement and application expansion."',
          zh: '...<strong>李辰星</strong>表示："当数字内容脱离原始平台后，版权管理就从信息技术问题转变为法律治理挑战。"他主张通过"制度完善和应用扩展建立完整的数字资产闭环"...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'Shanghai S&T News', zh: '上海科技报' },
        date: '2024.12',
        title: {
          en: 'Web3 Meets AI — Experts Explore "Creative Economy" Innovation',
          zh: 'Web3与人工智能交织！专家学者共同探讨"创作经济"创新应用'
        },
        url: 'https://mp.weixin.qq.com/s/KK0lH5swgqBFOQlN9cGzwA',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'The AI-Powered Creative Era of Web3', zh: 'Web3赋能的AI创作纪元' },
          venue: { en: 'Web3 Creative Economy Forum · Caohejing', zh: 'Web3创作经济蓝海论坛' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong> shared his vision: from a long-term perspective, the digital infrastructure for the AI-powered Web3 creative era includes BSIM cards, decentralized storage, and high-performance blockchains...',
          zh: '...<strong>李辰星</strong>表示，从远景来看，Web3支持的AI创作时代的数字底座包括BSIM卡、去中心化存储、高性能区块链。AI催生新的内容创作方式，Web3可以解决可信平台缺失的问题...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'Shanghai Maritime Univ. (official site)', zh: '上海海事大学官网' },
        date: '2024.12',
        title: {
          en: 'Academic Forum: Blockchain-Based Cross-Border Logistics & International Shipping Innovation',
          zh: '学术论坛：基于区块链的跨境物流与国际航运创新模式'
        },
        url: 'https://ctc.shmtu.edu.cn/2024/1206/c8571a240832/page.htm',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'Building and Governing Decentralized Infrastructure', zh: '去中心化基础设施的构建与治理' },
          venue: { en: 'Shanghai Maritime Univ.', zh: '上海海事大学' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong>, Ph.D., graduated from Tsinghua University Yao Class, received his doctorate from IIIS in 2022. Currently heads system protocol at Shanghai TreeGraph, leads a sub-project of the National Key R&D Program...',
          zh: '...<strong>李辰星</strong>，博士，本科毕业于清华大学计算机科学实验班（姚班），2022年于清华大学交叉信息研究院获博士学位。现任上海树图区块链研究院系统协议负责人，主持国家重点研发计划子课题...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'SIDF', zh: 'SIDF上海国际设计节公众号' },
        date: '2024.11',
        title: {
          en: 'Symbiosis · Breaking Boundaries — 6th Shanghai International Design Festival',
          zh: '共生·破界｜2024年第六届上海国际设计节'
        },
        url: 'https://mp.weixin.qq.com/s/eerZ9UfVUBn3n6OpwKjBvg',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'AI-Led Content Production & Web3 from Empowerment to Native', zh: 'AI引领内容生产新方式 · Web3从赋能到原生' },
          venue: { en: 'Shanghai International Design Festival', zh: '上海国际设计节' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong> from Shanghai TreeGraph explored how AI technology leads new approaches to content production, and envisioned the stages of Web3 development from empowerment to native applications, highlighting TreeGraph\'s achievements...',
          zh: '...上海树图区块链研究院青年科学家<strong>李辰星</strong>探讨了AI技术如何引领内容生产新方式，并展望了Web3从赋能到原生的发展阶段，同时提及上海树图区块链研究院的成就...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'HKUST(GZ) FinTech', zh: '港科大广州金融科技学域公众号' },
        date: '2024.11',
        title: {
          en: 'FinTech Month: Blockchain & Decentralized Finance Conference',
          zh: '金融科技月系列学术会议：区块链与去中心化金融会议'
        },
        url: 'https://mp.weixin.qq.com/s/yWmhZ4LRyNGWDmH01ACpsw',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'Latest Advances in Conflux Blockchain Efficiency', zh: 'Conflux区块链效率最新进展' },
          venue: { en: 'HKUST(GZ) Academic Conference', zh: '港科大（广州）学术会议' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong> presented Conflux\'s latest advances in blockchain efficiency — a high-performance verifiable storage mechanism and transaction deduplication optimization in asynchronous DAG consensus algorithms...',
          zh: '...<strong>李辰星</strong>博士介绍了Conflux在区块链效率方面的最新进展——高性能的可验证存储机制和异步有向无环图共识算法中的交易去重优化设计...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'Hunan Daily', zh: '湖南日报' },
        date: '2024.10',
        title: {
          en: '"Web3-Driven Compliant Financial Innovation" Salon Held at Shanghai TreeGraph',
          zh: '"Web3驱动的合规金融创新"沙龙在上海树图区块链研究院举行'
        },
        url: 'https://www.hunantoday.cn/news/xhn/202410/20904897.html',
        talk: {
          role: { en: 'Panel', zh: '圆桌' },
          name: { en: 'The "Last Mile" of Web3 Applications', zh: 'Web3应用落地的"最后一公里"' },
          venue: { en: 'Web3 Compliant Finance Salon', zh: 'Web3合规金融创新沙龙' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong> and other panelists analyzed the key bottlenecks in Web3 application deployment both domestically and internationally, covering technology, compliance, and market promotion perspectives...',
          zh: '...上海树图区块链研究院青年科学家<strong>李辰星</strong>博士等嘉宾分别从技术、合规、市场推广等多个角度分析了当前Web3应用在国内外落地过程中面临的关键瓶颈...'
        },
        reposts: [],
        related: [
          { name: { en: 'Distributed Consensus Assoc.', zh: '分布式共识协会公众号' }, title: { en: '"Web3-Driven Compliant Financial Innovation" Salon Recap', zh: '"Web3驱动的合规金融创新"沙龙活动回顾' }, url: 'https://mp.weixin.qq.com/s/QRXEGe1cqhjwdyBOfcfpHA' },
        ]
      },
      {
        source: { en: 'Morning Star SciTech', zh: '科创启明星公众号' },
        date: '2024.04',
        title: {
          en: 'Morning Star Tea Gets a New Brew — Blockchain Technology Sparks Discussion',
          zh: '启明星下午茶再度上新 区块链技术引热议'
        },
        url: 'https://mp.weixin.qq.com/s/lf7c_a1B_akAPRqs7XaH7Q',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Blockchain Technology Overview', zh: '区块链技术' },
          venue: { en: 'Morning Star Tea · Boku Bookstore', zh: '启明星下午茶 · 博库书城' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong>, a researcher who has been deeply engaged in blockchain for over 10 years, delivered a 30-minute report covering blockchain fundamentals, technical breakthroughs, applications, and TreeGraph\'s achievements. "The essence of a blockchain system is a computer platform built by multiple participants through mutual checks and oversight, one that cannot be maliciously manipulated by any single party."',
          zh: '...深耕区块链技术领域10多年的<strong>李辰星</strong>博士在半个多小时的报告中精要介绍了区块链技术的基础理论、发展过程中的技术突破、推广应用、未来发展趋势及树图的研究应用成果。"区块链系统的本质，是由多个不同参与者通过相互制约、相互监督，建成的一个单一一方或少数几方无法恶意操纵的计算机系统平台。"'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'Zhongguancun FinTech Forum', zh: '中关村金融科技论坛公众号' },
        date: '2023.07',
        title: {
          en: '7th Financial Technology & Security Summit — Web3.0 Security Special Session',
          zh: '第七届金融科技与金融安全大会 — Web3.0安全专题峰会'
        },
        url: 'https://mp.weixin.qq.com/s/kVZC-4q11He0eJHvXo-Feg',
        talk: {
          role: { en: 'Talk', zh: '演讲' },
          name: { en: 'Efficient Verifiable Storage for Blockchain', zh: '实现高效的区块链可验证存储' },
          venue: { en: 'Financial Security Summit', zh: '金融安全大会' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong>, research expert at Shanghai TreeGraph Blockchain Research Institute, delivered a keynote on efficient verifiable storage for blockchain...',
          zh: '...上海树图区块链研究院研究专家<strong>李辰星</strong>做主题演讲《实现高效的区块链可验证存储》...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'Yao Class Seminar (official site)', zh: '姚班Seminar官网' },
        date: '2021.05',
        title: {
          en: 'Yao Class Seminar #17',
          zh: 'Yao Class Seminar #17'
        },
        url: 'https://group.iiis.tsinghua.edu.cn/~stu/seminar/events/',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'GHAST: Breaking Confirmation Delay Barrier in Nakamoto Consensus', zh: 'GHAST: Breaking Confirmation Delay Barrier in Nakamoto Consensus' },
          venue: { en: 'Yao Class Seminar', zh: '姚班Seminar' }
        },
        excerpt: {
          en: '...<strong>Li Chenxing</strong>, Yao Class \'13 alumnus and 4th-year PhD student advised by Andrew Yao, introduced a consensus protocol that breaks the confirmation delay barrier in Nakamoto consensus through adaptive block weighting. He also discussed the gap between academic research and engineering in blockchain development.',
          zh: '...<strong>李辰星</strong>是姚班2013级毕业生，现为交叉信息院四年级博士生，导师为姚期智。GHAST提出了一种新的思路，基于GHOST协议设计，突破了中本聪共识中确认时间的限制，并通过自适应地调节区块权重解决了liveness攻击问题。他还介绍了Conflux在开发过程中遇到过的问题，探讨了区块链学术研究与工程开发之间的差异。'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'The Paper', zh: '澎湃新闻' },
        date: '2020.08',
        title: {
          en: '"Blockchain + Community Governance" — CPPCC Lecture Hall Comes to Caohejing',
          zh: '"区块链+社区治理"，政协讲堂来到漕河泾街道！'
        },
        url: 'https://www.thepaper.cn/newsdetail_forward_8700317',
        talk: {
          role: { en: 'Lecture', zh: '讲座' },
          name: { en: 'Blockchain + Community Governance', zh: '区块链+社区治理' },
          venue: { en: 'CPPCC Lecture Hall · Caohejing', zh: '政协讲堂 · 漕河泾' }
        },
        excerpt: {
          en: '...The Xuhui District CPPCC Lecture Hall visited Caohejing Subdistrict to explore the application of blockchain technology in community governance, with <strong>Li Chenxing</strong> as an invited blockchain expert...',
          zh: '...徐汇区政协讲堂走进漕河泾街道，探讨区块链技术在社区治理中的应用，<strong>李辰星</strong>作为区块链技术专家受邀参与讲座与讨论...'
        },
        reposts: [],
        related: [
          { name: { en: 'TreeGraph Blockchain', zh: '树图区块链公众号' }, title: { en: 'Blockchain + Community Governance: New Approach to Neighborhood Management', zh: '区块链+社区治理 未来街道管理新途径' }, url: 'https://mp.weixin.qq.com/s/YcBZvnwh92M2GkDe_lFHpA' },
        ]
      },
      {
        source: { en: 'TreeGraph Blockchain', zh: '树图区块链公众号' },
        date: '2019.12',
        title: {
          en: 'Conflux Invited to the 3rd International Blockchain Symposium',
          zh: 'Conflux受邀参加第三届区块链国际学术研讨会'
        },
        url: 'https://mp.weixin.qq.com/s/Yt0usCbNTuHn7tV7-E2E2w',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'Exploring Enhanced Conflux Consensus Security', zh: '增强Conflux共识安全性的探索思路' },
          venue: { en: '3rd Int\'l Blockchain Symposium · Xi\'an', zh: '区块链国际学术研讨会 · 西安' }
        },
        excerpt: {
          en: '...Co-hosted by Tsinghua IIIS, Xi\'an High-Tech Zone, and Cornell University... Core algorithm engineer <strong>Li Chenxing</strong> shared his exploration of enhancing Conflux consensus security during the conference discussion session...',
          zh: '...由清华大学交叉信息研究院、西安高新区和康奈尔大学共同主办……核心算法工程师<strong>李辰星</strong>在大会讨论环节分享了如何增强Conflux共识安全性的探索思路...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'SJTU Blockchain Club', zh: '上海交大区块链协会公众号' },
        date: '2019.11',
        title: {
          en: 'Conflux Campus Tour: Blockchain Performance Improvement under DAG Structure',
          zh: 'Conflux校园行：DAG结构下的区块链性能提升'
        },
        url: 'https://mp.weixin.qq.com/s/fg7XgQH8WqYjfZXWYseXSQ',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'Blockchain Performance Improvement under DAG Structure', zh: 'DAG结构下的区块链性能提升' },
          venue: { en: 'Conflux Campus Tour · SJTU', zh: 'Conflux校园行 · 上海交大' }
        },
        excerpt: {
          en: '...SJTU Blockchain Association invited <strong>Li Chenxing</strong>, core R&D engineer from top domestic public chain project Conflux, to share on blockchain performance improvement under DAG structure...',
          zh: '...上海交通大学区块链协会邀请到国内顶级公链项目Conflux核心研发工程师——<strong>李辰星</strong>为大家分享《DAG结构下的区块链性能提升》...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'TreeGraph Blockchain', zh: '树图区块链公众号' },
        date: '2019.11',
        title: {
          en: 'Conflux Engineer Li Chenxing Gives Blockchain Training for Handan Municipal Committee',
          zh: 'Conflux核心研发工程师李辰星博士为邯郸市委及各部门讲解区块链技术'
        },
        url: 'https://mp.weixin.qq.com/s/6THaBj4vptNbGeB1PGEUlw',
        talk: {
          role: { en: 'Lecture', zh: '讲座' },
          name: { en: 'Blockchain Technology and Applications', zh: '区块链技术和应用' },
          venue: { en: 'Handan Municipal Committee', zh: '邯郸市委宣传部' }
        },
        excerpt: {
          en: '...Invited by Handan Municipal Committee, <strong>Li Chenxing</strong>, core R&D engineer at TreeGraph and PhD from Tsinghua IIIS, gave blockchain training for multiple municipal departments including the Publicity Department, Daily Press, and Broadcasting Bureau. He explained blockchain fundamentals from a popular science angle, covering decentralization, immutability, and full traceability...',
          zh: '...受邯郸市市委宣传部邀请，树图区块链研究院核心研发工程师、清华大学交叉信息院博士<strong>李辰星</strong>来到河北邯郸，为市委宣传部、市日报社、市广播电视台等市宣传文化单位就区块链技术和应用进行讲解。<strong>李辰星</strong>博士从科普角度讲述了区块链的基本结构、应用和底层技术...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
        date: '2019.05',
        title: {
          en: 'IIIS Successfully Hosts 2019 PhD Academic Forum',
          zh: '交叉信息院成功举办2019年博士生学术论坛'
        },
        url: 'https://iiis.tsinghua.edu.cn/info/1018/2048.htm',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'Conflux: Near-Optimal Throughput and Confirmation for Public Blockchains', zh: 'Conflux: 实现近似最优吞吐率与确认时间的公链系统' },
          venue: { en: 'IIIS PhD Academic Forum', zh: '博士生学术论坛' }
        },
        excerpt: {
          en: '...2017 PhD student <strong>Li Chenxing</strong> presented "Conflux: A Public Blockchain System Achieving Near-Optimal Throughput and Confirmation Time," covering blockchain overview, security and efficiency requirements, and consensus mechanism design...',
          zh: '...2017级博士生<strong>李辰星</strong>的学术分享主题为"Conflux: 实现近似最优吞吐率与确认时间的公链系统"，他就区块链概述、安全与效率的需求、共识机制设计等几方面进行了分享...'
        },
        reposts: [],
        related: []
      },
      {
        source: { en: 'Ever Chain', zh: '链动活动精选公众号' },
        date: '2019.04',
        title: {
          en: 'Event: Prof. Xu Wei on Computer Science in FinTech',
          zh: '活动报名 | 清华大学徐葳教授：金融科技中的计算机科学'
        },
        url: 'https://mp.weixin.qq.com/s/KkCH1qpnYkYbYCfvAszgxg',
        talk: {
          role: { en: 'Academic', zh: '学术报告' },
          name: { en: 'Scaling Nakamoto Consensus to Thousands of TPS', zh: 'Scaling Nakamoto Consensus to Thousands of TPS' },
          venue: { en: 'Nanjing Turing AI Institute', zh: '南京图灵人工智能研究院' }
        },
        excerpt: {
          en: '...Speaker: <strong>Li Chenxing</strong>. "We present Conflux, a fast, scalable and decentralized blockchain system that achieves thousands of transactions per second by optimistically processing concurrent blocks without discarding any as forks."',
          zh: '...讲座嘉宾：<strong>李辰星</strong>。讲座题目：Scaling Nakamoto Consensus to Thousands of Transactions per Second。We present Conflux, a fast, scalable and decentralized blockchain system that achieves thousands of transactions per second by optimistically processing concurrent blocks without discarding any as forks.'
        },
        reposts: [],
        related: []
      }
    ]
  },

  coverage: [
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2019.04',
      pinned: true,
      title: {
        en: "Professor Yao's Classroom: Nurturing the World's Best Undergraduates",
        zh: '姚期智先生的课堂：用心培养世界上最好的本科生'
      },
      url: 'https://iiis.tsinghua.edu.cn/info/1018/2088.htm',
      excerpt: {
        en: '...Teaching assistant <strong>Li Chenxing</strong> told the reporter that this course has no designated textbooks, no related exercises on the market — all content is designed by Professor Yao himself, and all homework and exam problems are written by him personally. "Professor Yao assigns a lot of homework, and the problems are sometimes very challenging." As a TA, <strong>Li Chenxing</strong> spent two to three hours grading a single problem.',
        zh: '...姚期智先生助教<strong>李辰星</strong>告诉记者，这门课既没有指定任何教材，市面上也没有相关习题，课上的内容都是姚先生自主设计的，所有的作业题和考试题也都是姚先生自己出。"姚先生留的作业量很大，题目有时候很有挑战性。"作为助教，<strong>李辰星</strong>批改一道题就要用上两三个小时。'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'Liberation Daily', zh: '解放日报' },
      date: '2024.03',
      title: {
        en: 'Accelerating Web3.0 Built on Blockchain',
        zh: '加紧布局以区块链为底座的Web3.0'
      },
      url: 'https://www.shanghai.gov.cn/nw4411/20240327/95808f70db7145b88aa24fa7aa9bf0cd.html',
      excerpt: {
        en: '..."Digital identity, personal data sovereignty — this is our vision for the next-generation internet," said <strong>Li Chenxing</strong>, scientist at Shanghai TreeGraph Blockchain Research Institute...',
        zh: '..."数字身份、个人数据主权，是我们对下一代互联网的愿景。"上海树图区块链研究院青年科学家<strong>李辰星</strong>说...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'TreeGraph Blockchain', zh: '树图区块链公众号' },
      date: '2023.03',
      title: {
        en: 'Polaris Program — Blockchain Lab · Tsinghua Special Session',
        zh: '北斗计划｜区块链实践课·清华大学专场'
      },
      url: 'https://mp.weixin.qq.com/s/zJd7n1Bd-PfHqJiyTO7QUA',
      excerpt: {
        en: '...<strong>Li Chenxing</strong> taught cryptography theory, covering elliptic curve theory, Bitcoin public/private key generation, and multi-signature cryptographic principles...',
        zh: '...<strong>李辰星</strong>教授密码学理论，涵盖椭圆曲线理论、比特币公私钥生成、多签名密码学原理...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'China Youth Daily', zh: '中国青年报' },
      date: '2022.06',
      title: {
        en: 'Digital Collectibles Go Viral — How Should Young People Respond?',
        zh: '数字藏品火出圈年轻人如何接招'
      },
      url: 'https://zqb1.cyol.com/html/2022-06/07/nw.D110000zgqnb_20220607_1-04.htm',
      excerpt: {
        en: '...<strong>Li Chenxing</strong>, Tsinghua Yao Class \'13 & IIIS PhD \'17: "The collectibles market has always existed — from antiques to stamps to blind boxes. Its display and circulation does not depend on any specific company." He explained that blockchain gives digital collectibles platform independence, transparent traceability, and low-barrier circulation...',
        zh: '...<strong>李辰星</strong>，清华大学姚期智实验班2013级本科生、交叉信息研究院2017级博士生：收藏品市场是一直存在的，从古董到集邮，再到近年来很火的盲盒。"它的展示和流通，不依附于特定的企业"。区块链技术赋予数字藏品平台独立性、透明可追溯性和开放低门槛...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'China News Service', zh: '中国新闻网' },
      date: '2020.08',
      title: {
        en: 'Prof. Long Fan Leads Core Team at Shanghai Science Festival "Science Red Carpet"',
        zh: '龙凡教授率核心团队现身上海科技节"科学红毯秀"'
      },
      url: 'https://www.chinanews.com.cn/it/2020/08-26/9274650.shtml',
      excerpt: {
        en: '...Conflux founder Prof. Long Fan, CTO Wu Ming, R&D Director Yang Guang, co-founder Zhou Dong, and algorithm engineer <strong>Li Chenxing</strong> walked the "Science Red Carpet" as representatives of sci-tech innovation enterprises, alongside over 20 renowned scientists...',
        zh: '...Conflux创始人龙凡教授、CTO伍鸣博士、研发总监杨光博士、联合创始人周冬博士和算法工程师<strong>李辰星</strong>博士作为科技创新企业代表，同其他20余位著名科学家一起，走上了科技节的"科学红毯秀"...'
      },
      reposts: [
        { name: { en: 'TreeGraph Blockchain', zh: '树图区块链' }, url: 'https://mp.weixin.qq.com/s/Toxv5VCSa3RbgLYtwwKsqw' },
      ],
      related: []
    },
    {
      source: { en: 'Xiaojing Observation', zh: '筱静观察' },
      date: '2019.06',
      title: {
        en: 'Blockchain Entrepreneurship Stories of Tsinghua Elites | Xiaojing Observation',
        zh: '清华学霸的区块链创业故事 | 筱静观察'
      },
      url: 'https://blog.csdn.net/xiaojingguancha/article/details/92631181',
      excerpt: {
        en: '...Xiaojing Observation invited three Tsinghua entrepreneurs... Conflux founding member <strong>Li Chenxing</strong>, currently a PhD student at Tsinghua IIIS, working on blockchain infrastructure research...',
        zh: '...《筱静观察》邀请到了三位来自清华的创业者……Conflux创始成员<strong>李辰星</strong>，目前是清华大学研究院的博士生，做区块链基础设施相关方面的研究...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'NetEase (via ChainNews)', zh: '网易（转链闻）' },
      date: '2019.04',
      title: {
        en: 'Conflux Profiles — Li Chenxing: I Am a Magician of the Math World',
        zh: 'Conflux人物志-李辰星：我是数学世界的魔法师'
      },
      url: null,
      excerpt: {
        en: '..."Geek" on Wikipedia means "intellectually brilliant, loves to tinker but not very social." By that standard, young <strong>Li Chenxing</strong> is absolutely Conflux\'s number-one geek. When asked about hobbies, his immediate answer was "solving math problems."...',
        zh: '..."Geek极客"在维基百科上的释义为"意指智力超群，善于钻研但不爱社交"。如果以这个标准来看，那么年轻的<strong>李辰星</strong>绝对算得上是Conflux的头号极客了。当我问到他有什么爱好时，他脱口而出的答案居然是"做题"...'
      },
      reposts: [],
      related: []
    }
  ],

  campus: [
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2019.09',
      title: {
        en: 'IIIS Holds 2019 Fall Opening Ceremony',
        zh: '清华大学交叉信息院举办2019年秋季开学典礼'
      },
      url: 'https://iiis.tsinghua.edu.cn/info/1018/2061.htm',
      excerpt: {
        en: '...<strong>Li Chenxing</strong> (Class of 2017 PhD) represented IIIS current students in his speech. He noted that research is the exploration of the unknown, and that computer science is never merely an extension of any competition subject, urging freshmen to broaden their horizons...',
        zh: '...交叉研17级<strong>李辰星</strong>代表交叉信息院在校生发言。他指出，科研就是对未知事物的探索，计算机科学从来不是某一科竞赛的延伸，希望新生们消除对未来课程的顾虑...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'IIIS, Tsinghua (WeChat)', zh: '清华交叉信息院公众号' },
      date: '~2019',
      title: {
        en: 'IIIS PhD Summer Social Practice Report',
        zh: '交叉信息院博士生暑期社会实践总结'
      },
      url: 'https://mp.weixin.qq.com/s/acgBEh957Gab7SpSSzKQzQ',
      excerpt: {
        en: '...<strong>Li Chenxing</strong>, 3rd-year PhD student from Andrew Yao\'s group, worked at Jining Customs using data mining to build risk alerts for customs declarations. He fitted gradient descent decision trees to two years of declaration data and built a Chrome extension to display predictions in the customs query system...',
        zh: '...<strong>李辰星</strong>是交叉信息院三年级直博生，来自姚期智教授研究组。他在济宁海关利用两年的报关单数据，通过梯度下降决策树拟合报关单单价，实现了对大蒜类制品报关单的风险预警，并从零学习编写Chrome插件将预测结果部署到海关查询系统中...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2017.12',
      title: {
        en: 'IIIS Holds 4th Yao Class Student Representatives Assembly',
        zh: '交叉信息院举办第四届姚班团总支、学生代表联席会'
      },
      url: 'https://iiis.tsinghua.edu.cn/xysh/xshddt/13.htm',
      excerpt: {
        en: '...The 3rd Assembly, led by president <strong>Li Chenxing</strong>, successfully organized the Arts Carnival, Spring Outing, Freshmen Team Training, Freshmen Ball, and other major events, while assisting IIIS faculty in building the summer program...',
        zh: '...第三届姚班联席会在主席<strong>李辰星</strong>同学的领导下，圆满完成了文艺嘉年华、春季素拓、新生团队训练、新生舞会等各项主要活动，同时协助交叉信息院老师组建了暑期项目...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2017.09',
      title: {
        en: 'IIIS Holds 2017 Opening Ceremony',
        zh: '交叉信息院举办2017年开学典礼'
      },
      url: 'https://iiis.tsinghua.edu.cn/info/1018/2156.htm',
      excerpt: {
        en: '...Graduate student representative <strong>Li Chenxing</strong> (Class of 2017 PhD) shared his thoughts on embracing graduate life, expressing hope that...',
        zh: '...交叉研17班研究生新生代表<strong>李辰星</strong>同学分享了他迎接研究生生涯的感想...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'CS Dept, Tsinghua (official site)', zh: '清华计算机系官网' },
      date: '2017.05',
      title: {
        en: '32nd Congress of Communist Youth League, CS Department, Tsinghua University',
        zh: '共青团清华大学计算机科学与技术系第三十二次代表大会举行'
      },
      url: 'https://www.cs.tsinghua.edu.cn/info/1058/1088.htm',
      excerpt: {
        en: '...Delegates elected 9 committee members for the 32nd Committee of the Communist Youth League CS Department, in stroke order: Ding Ming, Ma Weizhi, <strong>Li Chenxing</strong>, Li Xiaohan, Wu Zhijing, Zhang Haotian, Guo Zhi...',
        zh: '...代表们投票选举产生了共青团清华大学计算机科学与技术系第三十二届委员会委员9名，按姓氏笔画排序依次为：丁铭、马为之、<strong>李辰星</strong>、李晓涵、吴之璟、张浩天、郭志...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2016.11',
      title: {
        en: 'IIIS Holds 3rd Yao Class Student Representatives Assembly',
        zh: '交叉信息院召开第三届姚班团总支-学生代表联席会'
      },
      url: 'https://iiis.tsinghua.edu.cn/info/1018/2161.htm',
      excerpt: {
        en: '...CS Class 30 <strong>Li Chenxing</strong> delivered his presidential campaign presentation. After voting, delegates unanimously approved the new leadership. <strong>Li Chenxing</strong> delivered the inaugural speech on behalf of the new presidium...',
        zh: '...计科30班<strong>李辰星</strong>做主席竞选展示……经过投票和计票环节，参会代表全票通过新一届姚班联席会主席团提名人选。<strong>李辰星</strong>同学代表姚班联席会新一届主席团发表就职演讲...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2015.10',
      title: {
        en: '2nd Yao Class Student Representatives Assembly Convened',
        zh: '第二届姚班团总支、学生代表联席大会召开'
      },
      url: 'https://iiis.tsinghua.edu.cn/info/1018/2203.htm',
      excerpt: {
        en: '...<strong>Li Chenxing</strong> and Bao Yelun from CS Class 40 each delivered campaign presentations. Through student representative voting, Zhao Jinshu was elected president, while <strong>Li Chenxing</strong> and Bao Yelun were elected executive vice presidents...',
        zh: '...<strong>李辰星</strong>、计科40班鲍业伦分别做了精彩的竞选展示。最终，经过姚班学生代表的票选，赵锦煦当选第二届联席会主席，<strong>李辰星</strong>和鲍业伦分别当选常务副主席...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2015.07',
      title: {
        en: 'IIIS 2015 Graduation Ceremony & Yao Class Exchange',
        zh: '交叉信息院举办2015年毕业典礼暨"创新其时·逐梦其华"姚班主题交流会'
      },
      url: 'https://iiis.tsinghua.edu.cn/info/1018/2231.htm',
      excerpt: {
        en: '...Outstanding class advisor Yin Zhangqi presented awards to IIIS Outstanding Student Leaders for 2014-2015 (left to right: Lei Zhixian, Zhang Yangkun, Wang Gerui; right to left: Zhao Hangcheng, Su Yuhan, Cai Qingpeng, <strong>Li Chenxing</strong>)...',
        zh: '...优秀班主任尹璋琦老师为2014-2015学年交叉信息院优秀学生干部颁奖（左起：雷志贤、张阳坤、王戈锐；右起：赵航程、苏宇晗、蔡庆芃、<strong>李辰星</strong>）...'
      },
      reposts: [],
      related: []
    },
    {
      source: { en: 'IIIS, Tsinghua (official site)', zh: '清华交叉信息院官网' },
      date: '2013.10',
      title: {
        en: 'IIIS Holds 2013 Yao Class Freshmen Orientation',
        zh: '交叉信息院举办2013年姚班新生导引项目启动仪式'
      },
      url: 'https://iiis.tsinghua.edu.cn/info/1018/2299.htm',
      excerpt: {
        en: '...CS Class 30 freshman representative <strong>Li Chenxing</strong> spoke about gradually adapting to campus life, and expressed determination to make the most of Yao Class\'s excellent resources and live a full university experience...',
        zh: '...计科30班新生代表<strong>李辰星</strong>同学讲述了大家对园子里生活逐步适应的心态，并决心要好好利用姚班的优秀资源，积极并充实地度过大学时光...'
      },
      reposts: [],
      related: []
    }
  ]
};
