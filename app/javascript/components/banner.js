import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: [
      "Is the Sharing Economy Hub",
      "For Business Travelers",
      "And Bleisure Expreriences"],
      typeSpeed: 100,
      loop: true
    });
  }
}

loadDynamicBannerText();

export { loadDynamicBannerText };