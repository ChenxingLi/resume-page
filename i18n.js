// Chinese translations for resume
// Keys match data-i18n attributes in index.html
const translations = {
  zh: {
    // Nav
    'nav.name': '李辰星',
    'nav.exp': '工作经历',
    'nav.edu': '教育背景',
    'nav.pub': '学术论文',
    'nav.proj': '科研项目',
    'nav.code': '开源',
    'nav.lang': 'EN',

    // Hero
    'hero.bio1': '我是<a href="https://confluxnetwork.org" target="_blank" rel="noopener">上海树图区块链研究院（Conflux）</a>的研究科学家，自 2018 年起作为创始成员和核心开发者参与项目建设。我在<a href="https://www.tsinghua.edu.cn" target="_blank" rel="noopener">清华大学</a>获得博士学位，导师为<a href="https://iiis.tsinghua.edu.cn/yao/" target="_blank" rel="noopener">姚期智</a>教授。',
    'hero.bio2': '我的研究方向是区块链系统的安全性与性能优化，特别关注共识协议、认证存储以及密码学原语在去中心化系统中的应用。我负责设计 Conflux 区块链的核心功能，参与了 PoW/PoS 混合共识、异构虚拟机互操作、链上治理等关键技术的研发。',
    'hero.role': '研究科学家<br>Conflux / 树图区块链研究院',

    // Experience
    'exp.title': '工作经历',
    'exp.role': '研究科学家 &amp; 核心开发者',
    'exp.date': '2018年7月 — 至今',
    'exp.org': '上海树图区块链研究院（Conflux）',
    'exp.desc': '创始员工与核心系统开发者。负责树图区块链的算法研究、协议设计、模块优化与系统开发。',
    'exp.tag1': '树图共识',
    'exp.tag2': 'PoW/PoS 混合共识',
    'exp.tag3': '双空间机制',
    'exp.tag4': 'HEMVM 互操作',
    'exp.tag5': '以太坊兼容',

    // Education
    'edu.title': '教育背景',
    'edu.phd': '清华大学 计算机科学与技术 博士',
    'edu.phd.date': '2017 — 2022',
    'edu.phd.detail': '导师：姚期智教授（2000 年图灵奖得主）。博士论文：<em>《安全高性能区块链的协议与算法》</em>。',
    'edu.bs': '清华大学 计算机科学与技术（计算机科学实验班） 学士',
    'edu.bs.date': '2013 — 2017',
    'edu.bs.detail': '姚班——由图灵奖得主姚期智教授创办的计算机科学精英班。',

    // Publications
    'pub.title': '学术论文',
    'pub.count': '在 OSDI、OOPSLA、USENIX ATC、SoCC 等会议发表 11 篇论文',
    'pub.toggle.show': '显示更早的 4 篇论文',
    'pub.toggle.hide': '收起',

    // Projects
    'proj.title': '科研项目',
    'proj.1.title': '超大规模区块链关键技术与系统研发',
    'proj.1.date': '2023 — 2026',
    'proj.1.source': '国家重点研发计划',
    'proj.1.role': '课题负责人',
    'proj.2.title': '抗量子公链原型系统设计与实现',
    'proj.2.date': '2023 — 2025',
    'proj.2.source': '上海市"科技创新行动计划"',
    'proj.2.role': '课题负责人',
    'proj.3.title': '分布式可信数据存储关键技术',
    'proj.3.date': '2021 — 2024',
    'proj.3.source': '上海市人工智能科技支撑专项',
    'proj.3.role': '课题骨干',

    // Open Source
    'oss.title': '开源贡献',
    'oss.conflux.desc': 'Conflux 区块链核心节点实现。集成了树图共识、ShRec 交易中继、PoW/PoS 混合共识与双空间执行层。',
    'oss.bench.desc': 'LVMT 论文（OSDI 2023）的实现与模块化基准测试。支持灵活组合 KV 后端、认证存储协议和测试负载。',

    // Footer
    'footer.info': '李辰星 · <a href="mailto:lylcx2007@gmail.com">lylcx2007@gmail.com</a> · 上海',
    'footer.updated': '最后更新：2026年4月',
  }
};

// Cache English originals on first switch
const originals = {};

function setLang(lang) {
  const root = document.documentElement;
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

  if (lang === 'zh') {
    document.body.classList.add('lang-zh');
  } else {
    document.body.classList.remove('lang-zh');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'zh' && translations.zh[key]) {
      if (!originals[key]) originals[key] = el.innerHTML;
      el.innerHTML = translations.zh[key];
    } else if (lang === 'en' && originals[key]) {
      el.innerHTML = originals[key];
    }
  });

  // Handle pub-toggle dynamic text
  updatePubToggleText(lang);

  localStorage.setItem('lang', lang);
}

function updatePubToggleText(lang) {
  const pubList = document.querySelector('.pub-list');
  const toggleText = document.querySelector('.pub-toggle-text');
  if (!pubList || !toggleText) return;

  const expanded = pubList.classList.contains('expanded');
  if (lang === 'zh') {
    toggleText.textContent = expanded
      ? translations.zh['pub.toggle.hide']
      : translations.zh['pub.toggle.show'];
  } else {
    toggleText.textContent = expanded ? 'Show fewer' : 'Show 4 earlier papers';
  }
}

function getCurrentLang() {
  return document.documentElement.getAttribute('data-lang') || 'en';
}

// Detect initial language: localStorage > navigator.language > default en
function detectLang() {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  return browserLang.startsWith('zh') ? 'zh' : 'en';
}

// Initialize
(function initI18n() {
  // Language toggle click handler
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const current = getCurrentLang();
      setLang(current === 'en' ? 'zh' : 'en');
      // Close mobile nav if open
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) navLinks.classList.remove('open');
    });
  }

  // Patch pub-toggle to be language-aware
  const pubToggle = document.querySelector('.pub-toggle');
  const pubList = document.querySelector('.pub-list');
  if (pubToggle && pubList) {
    // Remove existing listener by cloning
    const newToggle = pubToggle.cloneNode(true);
    pubToggle.parentNode.replaceChild(newToggle, pubToggle);

    newToggle.addEventListener('click', () => {
      const expanded = pubList.classList.toggle('expanded');
      newToggle.setAttribute('aria-expanded', expanded);
      const lang = getCurrentLang();
      const toggleText = newToggle.querySelector('.pub-toggle-text');
      if (lang === 'zh') {
        toggleText.textContent = expanded
          ? translations.zh['pub.toggle.hide']
          : translations.zh['pub.toggle.show'];
      } else {
        toggleText.textContent = expanded ? 'Show fewer' : 'Show 4 earlier papers';
      }
    });
  }

  // Set initial language
  const initialLang = detectLang();
  if (initialLang === 'zh') {
    setLang('zh');
  }
})();
