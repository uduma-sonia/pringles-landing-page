//OVERLAP ANIMATION
TweenMax.to(".left", 0.8, { delay: 0.2, left: "-50%", ease: Expo.easeInOut });
TweenMax.to(".right", 0.8, { delay: 0.2, right: "-50%", ease: Expo.easeInOut });

//ANIMATING THE LOGO
TweenMax.from(".logo", 1, {
  delay: 0.8,
  x: -100,
  ease: Expo.easeInOut,
  opacity: 0,
  scale: 0.8,
});

// //ANIMATING THE NAV-LINKS
TweenMax.from("nav li", 1, {
  delay: 1.2,
  x: 100,
  opacity: 0,
  ease: Expo.easeInOut,
});

// //ANIMATING THE LANDING TEXT
TweenMax.from(".header-text h1", 1, {
  delay: 1.5,
  y: -50,
  ease: Expo.easeInOut,
  opacity: 0,
});

// ANIMATING THE LANDING TEXT PARAGRAH AND BUTTON
TweenMax.from(".header-text P", 1, {
  delay: 1.9,
  y: -50,
  ease: Expo.easeInOut,
  opacity: 0,
});

TweenMax.from(".header-text .btn", 1, {
  delay: 1.9,
  y: -50,
  ease: Expo.easeInOut,
  opacity: 0,
});

// //ANIMATING THE PRINGLES & CIRCLE
TweenMax.from(".pringles", 0.5, { delay: 2, y: -400, opacity: 0 });
TweenMax.from(".circle", 0.2, { delay: 2, x: 400, opacity: 0 });

gsap.to(".chips1", 2, { delay: 0.9, y: 330, opacity: 1, ease: "bounce" });
gsap.to(".chips2", 2, { delay: 0.6, y: 380, opacity: 1, ease: "bounce" });
gsap.to(".chips3", 2, { delay: 0.7, y: 390, opacity: 1, ease: "bounce" });
