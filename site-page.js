const sitePages = {
  home: {
    th: "หน้าแรก",
    en: "Home",
    titleTh: "ฮีตเตอร์อุตสาหกรรมและระบบควบคุม | Heatworks",
    titleEn: "Industrial Heating & Control | Heatworks",
  },
  products: {
    th: "สินค้า",
    en: "Products",
    titleTh: "สินค้าอุตสาหกรรม | Heatworks",
    titleEn: "Industrial Products | Heatworks",
  },
  projects: {
    th: "ผลงาน",
    en: "Projects",
    titleTh: "ผลงานระบบความร้อน | Heatworks",
    titleEn: "Heating System Projects | Heatworks",
  },
  articles: {
    th: "บทความ",
    en: "Articles",
    titleTh: "บทความและความรู้ | Heatworks",
    titleEn: "Articles & Insights | Heatworks",
  },
  about: {
    th: "เกี่ยวกับเรา",
    en: "About",
    titleTh: "เกี่ยวกับเรา | Heatworks",
    titleEn: "About | Heatworks",
  },
  contact: {
    th: "ติดต่อเรา",
    en: "Contact",
    titleTh: "ติดต่อเรา | Heatworks",
    titleEn: "Contact | Heatworks",
  },
};

const pageName = document.body.dataset.page;
const pageInfo = sitePages[pageName];
const siteBase = new URL(".", document.currentScript.src).pathname;
const navigation = [
  ["home", "", "หน้าแรก", "Home"],
  ["products", "products/", "สินค้า", "Products"],
  ["projects", "projects/", "ผลงาน", "Projects"],
  ["articles", "articles/", "บทความ", "Articles"],
  ["about", "about/", "เกี่ยวกับเรา", "About"],
  ["contact", "contact/", "ติดต่อเรา", "Contact"],
];
let currentLanguage = "th";

document.querySelector("#site-header").innerHTML = `
  <div class="topbar"><div class="container topbar-inner">
    <div class="topbar-contact">
      <a href="tel:+66952365392"><span class="topbar-icon" aria-hidden="true">⌕</span> 095-236-5392</a>
      <a href="https://lin.ee/VVUymw" target="_blank" rel="noreferrer"><span class="line-mark" aria-hidden="true">L</span> LINE @lyn6666</a>
      <a href="mailto:wsin-automator@automation.com"><span class="topbar-icon" aria-hidden="true">✉</span> wsin-automator@automation.com</a>
    </div>
    <span class="topbar-note" data-th="วิศวกรรมความร้อน เพื่อการผลิตที่มั่นใจ" data-en="Thermal engineering for confident production">วิศวกรรมความร้อน เพื่อการผลิตที่มั่นใจ</span>
  </div></div>
  <header class="site-header"><div class="container header-inner">
    <a class="brand" href="${siteBase}" aria-label="Heatworks home"><span class="brand-mark" aria-hidden="true"><span>H</span></span><span class="brand-copy"><strong>HEATWORKS</strong><small>INDUSTRIAL HEATING SYSTEMS</small></span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu"><span></span><span></span><span></span></button>
    <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
      ${navigation.map(([id, href, thai, english]) => `<a href="${siteBase}${href}"${id === pageName ? ' class="is-current" aria-current="page"' : ""} data-th="${thai}" data-en="${english}">${thai}</a>`).join("")}
      <div class="language-switch" role="group" aria-label="Language"><button type="button" class="is-active" data-language="th" aria-pressed="true">TH</button><button type="button" data-language="en" aria-pressed="false">EN</button></div>
    </nav>
  </div></header>
`;

document.querySelector("#site-footer").innerHTML = `
  <footer class="site-footer">
    <div class="container footer-main">
      <div class="footer-brand">
        <a class="brand brand-inverted" href="${siteBase}"><span class="brand-mark" aria-hidden="true"><span>H</span></span><span class="brand-copy"><strong>HEATWORKS</strong><small>INDUSTRIAL HEATING SYSTEMS</small></span></a>
        <p data-th="โซลูชันฮีตเตอร์และระบบควบคุม สำหรับงานอุตสาหกรรม" data-en="Heating and control solutions for industrial applications.">โซลูชันฮีตเตอร์และระบบควบคุม สำหรับงานอุตสาหกรรม</p>
      </div>
      <div class="footer-links"><h2 data-th="สำรวจ" data-en="Explore">สำรวจ</h2>${navigation.slice(0, 4).map(([, href, thai, english]) => `<a href="${href}" data-th="${thai}" data-en="${english}">${thai}</a>`).join("")}</div>
      <div class="footer-links"><h2 data-th="ติดต่อทีมงาน" data-en="Get in touch">ติดต่อทีมงาน</h2><a href="${siteBase}about/" data-th="เกี่ยวกับเรา" data-en="About">เกี่ยวกับเรา</a><a href="${siteBase}contact/" data-th="ติดต่อเรา" data-en="Contact">ติดต่อเรา</a><a href="tel:+66952365392">095-236-5392</a><a href="mailto:wsin-automator@automation.com">wsin-automator@automation.com</a><a href="https://lin.ee/VVUymw" target="_blank" rel="noreferrer">LINE @lyn6666 ↗</a></div>
    </div>
    <div class="container footer-bottom"><span>© 2026 HEATWORKS</span><span data-th="งานวิศวกรรมความร้อนและระบบควบคุม" data-en="Thermal engineering & control systems">งานวิศวกรรมความร้อนและระบบควบคุม</span></div>
  </footer>
  <a class="floating-contact" href="https://lin.ee/VVUymw" target="_blank" rel="noreferrer"><span class="button-symbol" aria-hidden="true">L</span><span data-th="คุยกับเรา" data-en="Chat with us">คุยกับเรา</span></a>
`;

const translatableElements = document.querySelectorAll("[data-th][data-en]");
const languageButtons = document.querySelectorAll("[data-language]");
const searchInput = document.querySelector("[data-search]");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const productCards = [...document.querySelectorAll("[data-category][data-searchable]")];
let activeFilter = new URLSearchParams(window.location.search).get("filter") || "all";

function updateProductResults() {
  if (!productCards.length) return;
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;
  productCards.forEach((card) => {
    const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
    const matchesSearch = !query || card.dataset.searchable.toLocaleLowerCase().includes(query);
    card.hidden = !matchesCategory || !matchesSearch;
    if (!card.hidden) visibleCount += 1;
  });
  document.querySelector("[data-no-results]").hidden = visibleCount > 0;
  document.querySelector("[data-result-count]").textContent = currentLanguage === "th"
    ? `แสดง ${visibleCount} รายการ`
    : `${visibleCount} items`;
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  translatableElements.forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  document.querySelectorAll("[data-placeholder-th][data-placeholder-en]").forEach((input) => {
    input.placeholder = language === "th" ? input.dataset.placeholderTh : input.dataset.placeholderEn;
  });
  languageButtons.forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.title = language === "th" ? pageInfo.titleTh : pageInfo.titleEn;
  updateProductResults();
}

function selectFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  updateProductResults();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  primaryNav.classList.toggle("is-open", !expanded);
});
primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter));
  button.addEventListener("click", () => selectFilter(button.dataset.filter));
});
if (searchInput) searchInput.addEventListener("input", updateProductResults);

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const formData = new FormData(contactForm);
    const subject = `${formData.get("subject")} - ${formData.get("name")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company") || "-"}`,
      `Phone: ${formData.get("phone") || "-"}`,
      `Email: ${formData.get("email")}`,
      "",
      String(formData.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:wsin-automator@automation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

setLanguage(currentLanguage);
if (filterButtons.some((button) => button.dataset.filter === activeFilter)) {
  selectFilter(activeFilter);
} else {
  selectFilter("all");
}
