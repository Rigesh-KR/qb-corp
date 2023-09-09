// slick banner
$(".qbc-mainbanner-slick").slick({
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// slick pdct slide
// $(".qbc-partners__slick2").slick({
//   arrows: false,
//   dots: true,
//   infinite: true,
//   autoplay: true,
//   speed: 1000,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// });

// // onload accordion collapse
const accordionButton = document.querySelectorAll(
  ".qbc-product-list .accordion-button"
);
const accordionCnt = document.querySelectorAll(
  ".qbc-product-list .accordion-collapse"
);
window.addEventListener("load", () => {
  if (window.innerWidth < 767) {
    accordionButton.forEach((e) => {
      e.classList.add("collapsed");
    });
    accordionCnt.forEach((e) => {
      e.classList.remove("show");
    });
  } else {
    accordionButton.forEach((e) => {
      e.classList.remove("collapsed");
    });
    accordionCnt.forEach((e) => {
      e.classList.add("show");
    });
  }
});

// ==============MAP VIEW WITH COUNTRIES==============

  document.addEventListener("DOMContentLoaded", function () {
  const productsLink = document.getElementById("products-link");
  const productA = document.getElementById("product-a");
  const productB = document.getElementById("product-b");
  // Initially, show Product A and hide Product B
    if (productsLink) { 
      productA.classList.add("active");

      productsLink.addEventListener("click", function (event) {
      event.preventDefault();

      if (productA.classList.contains("active")) {
      productA.classList.remove("active");
      productB.classList.add("active");
      } else {
      productA.classList.add("active");
      productB.classList.remove("active");
      }
    });
  }
  });
// ==============MAP VIEW WITH PRODUCTS AND PARTNERS==============
// Get references to the links and divs
const link1 = document.getElementById("products");
const link2 = document.getElementById("partners");
const div1 = document.getElementById("products-body");
const div2 = document.getElementById("partners-body");

if (link1, link2) { 
// Add click event listeners to the links
link1.addEventListener("click", () => {
    toggleDiv(div1);
    hideDiv(div2);
    hideDiv(div3);
});

link2.addEventListener("click", () => {
    toggleDiv(div2);
    hideDiv(div1);
    hideDiv(div3);
});
// Function to toggle the visibility of a div
function toggleDiv(element) {
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";

    } else {
        element.style.display = "none";
    }
}
// Function to hide a div
function hideDiv(element) {
    element.style.display = "none";

}
}

