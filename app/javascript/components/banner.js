import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Make cocktails great again", "You're the new barmaid"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
