const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-th][data-en]");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const galleryMain = document.querySelector(".gallery-main");
const galleryButtons = [...document.querySelectorAll("[data-gallery-index]")];
const galleryThumbs = [...document.querySelectorAll(".gallery-thumb")];
const imageDialog = document.querySelector(".image-dialog");
const dialogArt = document.querySelector(".dialog-art");
const dialogCaption = document.querySelector(".dialog-caption");
let currentLanguage = "th";
let currentImage = 0;

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  translatableElements.forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.title = language === "th"
    ? "ตู้อบอุตสาหกรรม Oven By Heater | Heatworks"
    : "Industrial Oven By Heater | Heatworks";
  updateDialogCaption();
}

function selectImage(index) {
  currentImage = index;
  const selectedThumb = galleryThumbs[index];
  const artwork = selectedThumb.querySelector("svg").cloneNode(true);
  const mainArtWrap = galleryMain.querySelector(".main-art-wrap");
  mainArtWrap.replaceChildren(artwork);
  galleryThumbs.forEach((thumb, thumbIndex) => {
    const selected = thumbIndex === index;
    thumb.classList.toggle("is-selected", selected);
    thumb.setAttribute("aria-pressed", String(selected));
  });
  galleryMain.querySelector(".image-count").innerHTML = `0${index + 1} <span>/ 04</span>`;
  galleryMain.dataset.galleryIndex = String(index);
  if (imageDialog.open) {
    showDialogImage();
  }
}

function showDialogImage() {
  const artwork = galleryThumbs[currentImage].querySelector("svg").cloneNode(true);
  dialogArt.replaceChildren(artwork);
  updateDialogCaption();
}

function updateDialogCaption() {
  const label = currentLanguage === "th" ? "ภาพสินค้า" : "Product image";
  dialogCaption.textContent = `${label} 0${currentImage + 1} / 04`;
}

function moveDialogImage(direction) {
  selectImage((currentImage + direction + galleryThumbs.length) % galleryThumbs.length);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.galleryIndex);
    selectImage(index);
    if (button === galleryMain) {
      showDialogImage();
      imageDialog.showModal();
    }
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => imageDialog.close());
document.querySelector(".dialog-prev").addEventListener("click", () => moveDialogImage(-1));
document.querySelector(".dialog-next").addEventListener("click", () => moveDialogImage(1));
imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) {
    imageDialog.close();
  }
});

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

document.addEventListener("keydown", (event) => {
  if (!imageDialog.open) return;
  if (event.key === "ArrowRight") moveDialogImage(1);
  if (event.key === "ArrowLeft") moveDialogImage(-1);
});

setLanguage(currentLanguage);
