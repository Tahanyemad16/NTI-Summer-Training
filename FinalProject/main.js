const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
  $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        rtl: true,
        items: 5,
        slideBy: 5,
        responsive: {
          0: { items: 1, slideBy: 1 },
          576: { items: 2, slideBy: 2 },
          768: { items: 3, slideBy: 3 },
          992: { items: 4, slideBy: 4 },
          1200: { items: 5, slideBy: 5 }
        }
      });
    });

    const cardsData = [
  { img: 'images/furniture-6-300x300.jpg', title: 'Wall Clock', price: '$50' },
  { img: 'images/furniture-3-300x300.jpg', title: 'Studio Chair', price: '$192' },
  { img: 'images/furniture-5-300x300.jpg', title: 'Dining Table', price: '$569' },
  { img: 'images/196-300x300.jpg', title: 'Comfort Armrest', price: '$1465' },
  { img: 'images/furniture-29-300x300.jpg', title: 'Slate Table Lamp', price: '$138' }
];

 const input = document.getElementById("searchInput");
  const suggestions = document.getElementById("searchSuggestions");

  input.addEventListener("focus", () => {
    suggestions.style.display = "block";
  });

  input.addEventListener("blur", () => {
    setTimeout(() => {
      suggestions.style.display = "none";
    }, 200);
  });

  document.querySelectorAll(".search-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      input.value = tag.textContent;
      suggestions.style.display = "none";
    });
  });