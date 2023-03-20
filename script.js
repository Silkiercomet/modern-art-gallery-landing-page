window.addEventListener("load", () => {
    const heroContent = document.querySelector(".hero__content")
    heroContent.classList.add("show")
})
/*--------------------------------------------------- */
const options = {
    threshold: 0.25, // When half of the element is visible on screen
    rootMargin: '0px 0px -50px 0px' // Detect intersection when 100px below viewport
  };
  
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Stop observing the target element once it is animated
      }
    });
  }, options);
  const gridsPara = document.querySelectorAll(".grid__para")
  gridsPara.forEach(e => {
    observer.observe(e)
  })
  
  