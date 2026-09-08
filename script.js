(() => {
  "use strict";

  const root = document.documentElement;
  const main = document.querySelector("#main");
  ["#home", ".signal-strip", "#journey", "#credentials", "#about", "#projects", "#research", "#contact"].forEach((selector) => {
    const section = document.querySelector(selector);
    if (section) main.appendChild(section);
  });

  const translations = {
    zh: {
      skip: "跳到主要内容", navAbout: "关于", navResearch: "实验台", navProjects: "项目", navJourney: "简历", navContact: "联系我", quickNav: "快捷导航",
      availability: "开放学术交流与研究合作", hello: "你好，我是", name: "依尔怕尼·依马木", heroRole: "物流工程与管理硕士研究生",
      heroLead: "探索深度强化学习与多智能体系统，如何在不确定环境中改善供应链决策、降低损耗并平衡供需。", viewWork: "查看项目", viewCv: "查看简历", downloadCv: "下载简历 PDF", location: "中国 · 合肥",
      statSchools: "所高校经历", statRepos: "个公开仓库", statCerts: "项技能证书", statFocus: "让算法回应真实运营问题",
      aboutTitle: "责任感、学习力<br /><em>与团队协作。</em>", aboutLead: "我能够快速适应新的工作环境和责任要求，善于沟通、学习和解决问题，并重视与团队共同完成目标。",
      researchProfile: "自我评价", researchQuestion: "用可靠的执行、持续的学习和清晰的沟通，把任务真正推进到结果。", researchAnswer: "熟悉产品供应、国际贸易与物流实务，具备良好的计算机和英语能力；面对新的问题，能够快速理解业务并主动寻找解决方案。",
      now: "现在", hfut: "合肥工业大学", hfutDegree: "硕士研究生 · 物流工程与管理", toolkit: "工具箱", language: "语言", cetScore: "大学英语六级", languageDesc: "可在学习、研究与日常交流中使用英语。",
      researchTitle: "研究兴趣与实验台", researchLead: "简历与项目之后，用交互方式展示我的供应链研究方向。", labTitle: "供应链策略实验台", labStatus: "实时模拟", volatility: "需求波动", perishability: "易腐程度", coordination: "多智能体协同", low: "低", medium: "中等", high: "高", labNote: "点击不同水平，观察策略对服务水平、损耗率和系统稳定性的示意影响。", baseline: "基准策略", adaptive: "自适应策略", serviceLevel: "服务水平", wasteRate: "损耗率", stability: "系统稳定性", policyAdvice: "建议采用协同补货与动态安全库存策略。", topic1: "深度强化学习", topic1Desc: "面向随机环境的序贯决策、多目标优化与仿真驱动策略学习。",
      topic2: "多智能体系统", topic2Desc: "研究供应链节点间的协同、竞争、信息共享与分布式决策。", topic3: "易腐品供应链", topic3Desc: "关注库存控制、损耗降低、需求预测和不确定条件下的供需平衡。",
      projectsTitle: "精选项目", allRepos: "全部仓库", paperDesc: "学术论文 PDF 智能重命名工具。融合文档元数据、DOI、Crossref、arXiv 与 BibTeX 信息，提供可自定义规则的图形化整理流程。", sourceCode: "查看源代码",
      packingDesc: "围绕同尺寸矩形装入大矩形的二维装箱问题，探索递归分区算法、几何约束与结果可视化。", exploreProject: "探索项目", supplyProject: "随机供应链智能决策", supplyDesc: "聚焦易腐品库存与供需平衡，探索强化学习、多智能体协作和仿真框架在真实运营问题中的应用。", discuss: "交流研究方向",
      journeyTitle: "个人<br /><em>简历</em>", journeyLead: "按照教育背景、实习经历和校园经历，完整呈现我的学习与实践轨迹。", present: "至今", education: "教育", experience: "经历", internship: "实习", educationBackground: "教育背景", internshipExperience: "实习经历", campusExperience: "校园经历", erpProject: "ERP 沙盘模拟", erpDesc: "在多人企业运营模拟中负责采购工作，管理原料订单、仓库库存并确定原料提前期。", ecommerceProject: "电子商务模拟", ecommerceDesc: "参与“疆心比心新疆特产”店铺运营，并在长风平台仿真配送、运输和采购流程。", studentRole: "学生工作", studentRoleDesc: "担任体育委员和辅导员助理，组织体育活动、读书分享会、红色基地参访与迎新晚会。", socialPractice: "社会实践", socialPracticeDesc: "2019 年 9 月参加无偿献血，献全血 200 mL。",
      hfutDesc: "学习库存管理、物流系统规划与设计、系统建模与仿真、系统工程和管理研究方法。", sangye: "上海桑野纺织有限公司", tradeRole: "外贸业务员", tradeDesc: "跟进外贸订单与客户询盘，统计出货数据、核对单据并协同内部环节推进履约，积累供需匹配和交期管理经验。",
      shou: "上海海洋大学", shouDegree: "本科 · 物流管理", shouDesc: "系统学习供应链管理、运营管理、国际物流、物流系统设计与优化、ERP 与商务分析。", hufang: "上海沪防建筑设计有限公司喀什分公司", opsRole: "运营助理", opsDesc: "协助经营服务、客户诉求处理、报表检查及经营数据统计，支持日常文档与事务管理。",
      credentialsTitle: "技能证书", credentialsLead: "技术能力、业务理解与沟通协作的组合。", technical: "技术与分析", certifications: "证书", cert1: "CSCMP 供应链管理师", cert2: "计算机二级 Python", cert3: "Power BI 商业智能数据可视化", cert4: "大学英语六级 CET-6", cert5: "普通话二级甲等",
      contactTitle: "一起研究真实世界的<br /><em>复杂问题。</em>", contactLead: "欢迎就 AI 驱动的供应链韧性、易腐品损耗控制、强化学习与运筹优化等方向交流。", sendEmail: "发送邮件", copy: "复制", copied: "邮箱已复制", backTop: "回到顶部 ↑", commandPlaceholder: "搜索页面或操作…", commandTitle: "快速前往", move: "选择", enter: "打开"
    },
    en: {
      skip: "Skip to main content", navAbout: "About", navResearch: "Lab", navProjects: "Projects", navJourney: "CV", navContact: "Contact", quickNav: "Quick nav",
      availability: "Open to academic exchange & collaboration", hello: "Hi, I am", name: "Yierpani Yimamu", heroRole: "MEng Student in Logistics Engineering & Management",
      heroLead: "Exploring how deep reinforcement learning and multi-agent systems can improve supply-chain decisions, reduce waste, and balance supply with demand under uncertainty.", viewWork: "View projects", viewCv: "View CV", downloadCv: "Download CV PDF", location: "Hefei · China",
      statSchools: "universities", statRepos: "public repositories", statCerts: "certifications", statFocus: "Algorithms grounded in real operations",
      aboutTitle: "Responsibility, learning<br /><em>and teamwork.</em>", aboutLead: "I adapt quickly to new responsibilities, communicate clearly, learn continuously, solve problems, and value working with others toward shared goals.",
      researchProfile: "SELF ASSESSMENT", researchQuestion: "Turn responsibilities into results through reliable execution, continuous learning, and clear communication.", researchAnswer: "I understand product supply, international trade, and logistics practice, with solid computing and English skills. I learn new business contexts quickly and actively seek practical solutions.",
      now: "NOW", hfut: "Hefei University of Technology", hfutDegree: "Master's Student · Logistics Engineering & Management", toolkit: "TOOLKIT", language: "LANGUAGE", cetScore: "CET-6 English", languageDesc: "Working proficiency for study, research, and everyday communication.",
      researchTitle: "Research Interests & Lab", researchLead: "After the CV and projects, this interactive section presents my supply-chain research direction.", labTitle: "Supply Chain Decision Lab", labStatus: "LIVE SIMULATION", volatility: "Demand volatility", perishability: "Perishability", coordination: "Multi-agent coordination", low: "Low", medium: "Medium", high: "High", labNote: "Select a level to explore its illustrative effect on service level, waste, and system stability.", baseline: "Baseline", adaptive: "Adaptive policy", serviceLevel: "Service level", wasteRate: "Waste rate", stability: "System stability", policyAdvice: "Recommended: coordinated replenishment with dynamic safety stock.", topic1: "Deep Reinforcement Learning", topic1Desc: "Sequential decisions, multi-objective optimization, and simulation-driven policy learning under uncertainty.",
      topic2: "Multi-Agent Systems", topic2Desc: "Coordination, competition, information sharing, and distributed decisions across supply-chain nodes.", topic3: "Perishable Supply Chains", topic3Desc: "Inventory control, waste reduction, demand forecasting, and supply-demand balance under uncertainty.",
      projectsTitle: "Selected work", allRepos: "All repositories", paperDesc: "An intelligent PDF renaming tool for academic papers. It combines embedded metadata, DOI, Crossref, arXiv, and BibTeX data in a customizable GUI workflow.", sourceCode: "View source",
      packingDesc: "A study of packing equal rectangles into a larger rectangle through recursive partitioning, geometric constraints, and result visualization.", exploreProject: "Explore project", supplyProject: "Intelligent Decisions for Stochastic Supply Chains", supplyDesc: "Researching how reinforcement learning, multi-agent coordination, and simulation can address perishable inventory and supply-demand balance.", discuss: "Discuss the research",
      journeyTitle: "Curriculum<br /><em>Vitae</em>", journeyLead: "My education, internships, and campus experience are presented in the same sequence as the source CV.", present: "Present", education: "Education", experience: "Experience", internship: "Internship", educationBackground: "Education", internshipExperience: "Internship Experience", campusExperience: "Campus Experience", erpProject: "ERP Sand-table Simulation", erpDesc: "Managed procurement, material orders, warehouse inventory, and raw-material lead times in a team-based business simulation.", ecommerceProject: "E-commerce Simulation", ecommerceDesc: "Helped operate the Xinjiang specialty shop and simulated distribution, transport, and procurement on the Changfeng platform.", studentRole: "Student Leadership", studentRoleDesc: "Served as sports representative and counselor assistant, organizing sports events, reading sessions, site visits, and welcome programs.", socialPractice: "Community Service", socialPracticeDesc: "Donated 200 mL of whole blood in September 2019.",
      hfutDesc: "Coursework in inventory management, logistics systems planning, modeling and simulation, systems engineering, and management research methods.", sangye: "Shanghai Sangye Textile Co., Ltd.", tradeRole: "Foreign Trade Specialist", tradeDesc: "Managed order follow-up and client inquiries, tracked shipment data, verified documents, and coordinated fulfillment across internal teams.",
      shou: "Shanghai Ocean University", shouDegree: "Undergraduate · Logistics Management", shouDesc: "Studied supply-chain management, operations, international logistics, logistics system optimization, ERP, and business analysis.", hufang: "Shanghai Hufang Architectural Design, Kashgar Branch", opsRole: "Operations Assistant", opsDesc: "Supported client services, issue handling, report checks, operating-data summaries, and document administration.",
      credentialsTitle: "Skills & Certificates", credentialsLead: "Technical skill, business context, and collaborative execution.", technical: "TECH & ANALYTICS", certifications: "CERTIFICATIONS", cert1: "CSCMP Supply Chain Management", cert2: "NCRE Level 2 - Python", cert3: "Power BI Business Intelligence", cert4: "College English Test Band 6", cert5: "Mandarin Proficiency Level 2-A",
      contactTitle: "Let’s work on complex<br /><em>real-world problems.</em>", contactLead: "Open to conversations about AI-driven supply-chain resilience, perishable-goods waste reduction, reinforcement learning, and operations research.", sendEmail: "Send an email", copy: "Copy", copied: "Email copied", backTop: "Back to top ↑", commandPlaceholder: "Search pages or actions…", commandTitle: "QUICK NAVIGATION", move: "move", enter: "open"
    }
  };

  let language = localStorage.getItem("cv-language") || "zh";
  const setLanguage = (lang) => {
    language = lang;
    root.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[lang][element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = translations[lang][element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = translations[lang][element.dataset.i18nPlaceholder];
      if (value) element.placeholder = value;
    });
    document.querySelectorAll("[data-svg-zh]").forEach((element) => {
      element.textContent = lang === "zh" ? element.dataset.svgZh : element.dataset.svgEn;
    });
    document.querySelector("#lang-toggle").textContent = lang === "zh" ? "EN" : "中";
    document.title = lang === "zh" ? "依尔怕尼·依马木 · Supply Chain × AI" : "Yierpani Yimamu · Supply Chain × AI";
    localStorage.setItem("cv-language", lang);
  };

  document.querySelector("#lang-toggle").addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));
  setLanguage(language);

  root.dataset.theme = localStorage.getItem("cv-theme") || "dark";
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("cv-theme", root.dataset.theme);
  });

  const header = document.querySelector("#site-header");
  const progress = document.querySelector("#scroll-progress");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    let active = "";
    sections.forEach((section) => { if (section.offsetTop - 160 <= y) active = `#${section.id}`; });
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === active));
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuButton = document.querySelector("#menu-toggle");
  const navPanel = document.querySelector("#nav-panel");
  menuButton.addEventListener("click", () => {
    const open = !navPanel.classList.contains("open");
    navPanel.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });
  navPanel.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navPanel.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.11, rootMargin: "0px 0px -45px" });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const emailButton = document.querySelector("#email-copy");
  const toast = document.querySelector("#toast");
  emailButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailButton.dataset.email);
      toast.classList.add("visible");
      window.setTimeout(() => toast.classList.remove("visible"), 1800);
    } catch {
      window.location.href = `mailto:${emailButton.dataset.email}`;
    }
  });

  document.querySelector("#year").textContent = new Date().getFullYear();

  const labState = { volatility: 50, perishability: 50, coordination: 80 };
  const labTabs = [...document.querySelectorAll(".param-tabs button")];
  const labCanvas = document.querySelector("#lab-chart");
  const labContext = labCanvas.getContext("2d");
  const updateLab = () => {
    const { volatility, perishability, coordination } = labState;
    const service = Math.max(68, Math.min(98, 88 - volatility * .12 - perishability * .04 + coordination * .19));
    const waste = Math.max(3.2, Math.min(27, 8 + perishability * .18 + volatility * .05 - coordination * .17));
    const stability = Math.max(45, Math.min(98, 73 - volatility * .25 - perishability * .06 + coordination * .36));
    document.querySelector("#service-result").textContent = `${service.toFixed(1)}%`;
    document.querySelector("#waste-result").textContent = `${waste.toFixed(1)}%`;
    document.querySelector("#stability-result").textContent = Math.round(stability);
    document.querySelector("#service-delta").textContent = `+${Math.max(2.1, coordination * .12 - volatility * .025).toFixed(1)}%`;
    document.querySelector("#waste-delta").textContent = `-${Math.max(1.2, coordination * .09 - perishability * .018).toFixed(1)}%`;

    const width = labCanvas.width;
    const height = labCanvas.height;
    const pad = 28;
    labContext.clearRect(0, 0, width, height);
    labContext.strokeStyle = "rgba(145,164,155,.16)";
    labContext.lineWidth = 1;
    for (let y = pad; y < height - pad; y += 48) {
      labContext.beginPath(); labContext.moveTo(pad, y); labContext.lineTo(width - pad, y); labContext.stroke();
    }
    const base = Array.from({ length: 18 }, (_, i) => 53 + Math.sin(i * .9) * (12 + volatility * .12) + (i % 3) * 3);
    const adaptive = Array.from({ length: 18 }, (_, i) => 58 + Math.sin(i * .72) * (9 + volatility * .035) + coordination * .13 - perishability * .04);
    const draw = (values, color, glow = false) => {
      labContext.save(); labContext.beginPath();
      values.forEach((value, i) => {
        const x = pad + i * ((width - pad * 2) / (values.length - 1));
        const y = height - pad - value * 2.75;
        i ? labContext.lineTo(x, y) : labContext.moveTo(x, y);
      });
      labContext.strokeStyle = color; labContext.lineWidth = glow ? 3 : 2; labContext.shadowColor = glow ? color : "transparent"; labContext.shadowBlur = glow ? 10 : 0; labContext.stroke(); labContext.restore();
    };
    draw(base, "rgba(145,164,155,.65)");
    draw(adaptive, "#8cffbd", true);
  };
  labTabs.forEach((button) => button.addEventListener("click", () => {
    const group = button.closest(".param-group");
    const parameter = group.dataset.param;
    group.querySelectorAll("button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    labState[parameter] = Number(button.dataset.value);
    const output = document.querySelector(`#${parameter}-value`);
    output.dataset.i18n = button.dataset.level;
    output.textContent = button.textContent;
    updateLab();
  }));
  updateLab();

  const commandOverlay = document.querySelector("#command-overlay");
  const commandInput = document.querySelector("#command-input");
  const commandButtons = [...document.querySelectorAll("#command-list button")];
  let commandIndex = 0;
  const selectCommand = (index) => {
    const visible = commandButtons.filter((button) => !button.hidden);
    if (!visible.length) return;
    commandIndex = (index + visible.length) % visible.length;
    visible.forEach((button, i) => button.classList.toggle("selected", i === commandIndex));
    visible[commandIndex].scrollIntoView({ block: "nearest" });
  };
  const openCommands = () => {
    commandOverlay.classList.add("open"); commandOverlay.setAttribute("aria-hidden", "false"); commandInput.value = "";
    commandButtons.forEach((button) => { button.hidden = false; }); selectCommand(0); window.setTimeout(() => commandInput.focus(), 80);
  };
  const closeCommands = () => { commandOverlay.classList.remove("open"); commandOverlay.setAttribute("aria-hidden", "true"); };
  const runCommand = (button) => { closeCommands(); document.querySelector(button.dataset.target)?.scrollIntoView({ behavior: "smooth" }); };
  document.querySelector("#command-open").addEventListener("click", openCommands);
  commandOverlay.addEventListener("click", (event) => { if (event.target === commandOverlay) closeCommands(); });
  commandButtons.forEach((button) => button.addEventListener("click", () => runCommand(button)));
  commandInput.addEventListener("input", () => {
    const query = commandInput.value.trim().toLowerCase();
    commandButtons.forEach((button) => { button.hidden = !`${button.dataset.command} ${button.textContent}`.toLowerCase().includes(query); });
    selectCommand(0);
  });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault(); commandOverlay.classList.contains("open") ? closeCommands() : openCommands();
    }
    if (!commandOverlay.classList.contains("open")) return;
    if (event.key === "Escape") closeCommands();
    if (event.key === "ArrowDown") { event.preventDefault(); selectCommand(commandIndex + 1); }
    if (event.key === "ArrowUp") { event.preventDefault(); selectCommand(commandIndex - 1); }
    if (event.key === "Enter") {
      const visible = commandButtons.filter((button) => !button.hidden);
      if (visible[commandIndex]) runCommand(visible[commandIndex]);
    }
  });

  fetch("https://api.github.com/users/errpan/repos?per_page=100&sort=updated")
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("GitHub API unavailable")))
    .then((repositories) => {
      document.querySelector("#repo-count").textContent = String(repositories.length).padStart(2, "0");
      const paper = repositories.find((repo) => repo.name === "PapperRenamer-PDF-");
      if (paper) document.querySelector("#paper-stars").textContent = paper.stargazers_count;
    })
    .catch(() => {});

  if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".tilt-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `rotateX(${-y * 3.5}deg) rotateY(${x * 4}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave", () => { card.style.transform = ""; });
    });
  }

  const canvas = document.querySelector("#network-canvas");
  const context = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let nodes = [];
  let pointer = { x: -1000, y: -1000 };
  const resizeCanvas = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    const count = Math.max(30, Math.floor(rect.width / 28));
    nodes = Array.from({ length: count }, () => ({ x: Math.random() * rect.width, y: Math.random() * rect.height, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.5 + .6 }));
  };
  const drawNetwork = () => {
    const rect = canvas.getBoundingClientRect();
    context.clearRect(0, 0, rect.width, rect.height);
    nodes.forEach((node, index) => {
      node.x += node.vx; node.y += node.vy;
      if (node.x < 0 || node.x > rect.width) node.vx *= -1;
      if (node.y < 0 || node.y > rect.height) node.vy *= -1;
      const pd = Math.hypot(node.x - pointer.x, node.y - pointer.y);
      if (pd < 130) { node.x += (node.x - pointer.x) * .002; node.y += (node.y - pointer.y) * .002; }
      context.beginPath(); context.arc(node.x, node.y, node.r, 0, Math.PI * 2); context.fillStyle = "rgba(140,255,189,.52)"; context.fill();
      for (let j = index + 1; j < nodes.length; j += 1) {
        const other = nodes[j]; const distance = Math.hypot(node.x - other.x, node.y - other.y);
        if (distance < 115) { context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(other.x, other.y); context.strokeStyle = `rgba(140,255,189,${(1 - distance / 115) * .12})`; context.stroke(); }
      }
    });
    requestAnimationFrame(drawNetwork);
  };
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pointermove", (event) => { pointer = { x: event.clientX, y: event.clientY }; }, { passive: true });
  resizeCanvas();
  if (!reducedMotion) drawNetwork();
})();
