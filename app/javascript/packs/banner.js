import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Make cocktails good again", "You're the new barmaid"],
    typeSpeed: 30,
    loop: true
  });
}

export { loadDynamicBannerText };
