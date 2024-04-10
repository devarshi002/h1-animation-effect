function animateLogo() {
  const scrollY = window.scrollY || window.pageYOffset;
  const pageHeight = window.innerHeight;

  // Calculate the percentage of scroll progress
  const scrollPercentage = (scrollY / (document.body.scrollHeight - pageHeight)) * 100;

  // Adjust the font size based on the scroll progress
  const newSize = 7 - scrollPercentage * 0.05; // You can adjust this factor to change the rate of size change

  gsap.to('.logo h1', {
    duration: 0.5,
    fontSize: `${newSize}rem`,
    onComplete: function() {
      // Animation complete
      // Add any additional actions here
    }
  });
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    animateLogo();
  } else {
    gsap.to('.logo h1', {
      duration: 0.5,
      fontSize: '10rem',
      onComplete: function() {
        // Animation complete
        // Add any additional actions here
      }
    });
  }
});




var tl = gsap.timeline({
  scrollTrigger:{
      trigger:"#page3",
      start: "50% 50%",
      end:"250% 50%",
      scrub: true,
      pin: true,
      marker:true,
      
  }
})

tl.to(".svg",{
  maskSize: "300%",
  duration: 1
},'a')

tl.to(".imges",{
  backgroundSize: "100%",
  duration: 1
},'a')

tl.to(".svg2",{
  maskSize: "300%",
  duration: 1
},'a1')

tl.to(".imges2",{
  backgroundSize: "100%",
  duration: 1
},'a1')