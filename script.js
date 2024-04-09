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
  