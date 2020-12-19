//=============================== header scroll start
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0)
});
//=============================== header scroll end

$(document).ready(function () {
    //=============================== back to top start
        $(".back-top-top-btn").click(() => $(window).scrollTop(0));
    //=============================== back to top end

    //=============================== Hamburger start
    $(".hamburger").click(function() {
        $(this).toggleClass("active-hamburger");
        $(".nav-left").toggleClass("active");
        $(".nav-right").toggleClass("active");
    })
    //=============================== Hamburger end

    //=============================== Category section Slider start
    $('.category-block').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    //=============================== Category section Slider end

})