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

if ((link1, link2)) {
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

// prevent closing of datepicker (filter) on click inside
const datepicker = document.querySelectorAll(".dropdown-menu");

datepicker?.forEach((datepicker) => {
  datepicker.addEventListener("click", (e) => {
    if (datepicker.classList.contains("show")) {
      e.target.tagName !== "BUTTON" && e.stopPropagation();
    }
  });
})

function removeshow() {
  menu_subitem.forEach((e) => {
    e.classList.remove('show');
  })
}

const menu_item = document.querySelectorAll('.na-navlink');
const menu_subitem = document.querySelectorAll('.dropdown-submenu');

if (window.innerWidth < 600) {
  menu_item.forEach((e, index) => {
    e.addEventListener('click', (item) => {
      removeshow()
      menu_subitem[index].classList.add('show');
    })
  })
}
document.querySelectorAll(".dropdown-menu").forEach((drop) => {
  drop.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-m-drop")) {
      e.stopPropagation();
      e.preventDefault();
      let cel = e.target.nextSibling.nextElementSibling.nextElementSibling;
      while (cel) {
        if (cel.classList.contains("dropdown-submenu")) break;
        cel = cel.nextElementSibling;
      }

      if (cel) {
        if (cel.classList.contains("show")) {
          cel.classList.remove("show");
        } else {
          cel.classList.add("show");
        }
      }
    }
  });
});
// CATELOGUE LINKS
$(".qbc-cat-links__outer--slick").slick({
  arrows: true,
  dots: false,
  infinite: false,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 7,
  slidesToScroll: 1,
  // centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//johnsonville product tab

$('.qbc-jhnvil-slide').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.qbc-product-tab__arrowl'),
  nextArrow: $('.qbc-product-tab__arrowr'),
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// tab links scroll

document.addEventListener("DOMContentLoaded", function () {
  const scrollableNav = document.querySelector(".qbc-product-tab__tab-out");
  const scrollRightBtn = document.querySelector(".qbc-product-tab__arrowr");
  const scrollLeftBtn = document.querySelector(".qbc-product-tab__arrowl");
  const tileContainer = document.querySelector('#myTab');
  const tiles = document.querySelectorAll(".qbc-product-tab__tab-out .nav-item");

  if(scrollLeftBtn){
    function setMinWidth() {
        const totalWidth = Array.from(tiles).reduce((sum, e) => sum + e.offsetWidth, 0);
        tileContainer.style.minWidth = totalWidth + 'px';
        if (totalWidth < 500) {
          scrollLeftBtn.style.display = 'none';
          scrollRightBtn.style.display = 'none';
      } else {
          scrollLeftBtn.style.display = 'block';
          scrollRightBtn.style.display = 'block';
      }
    }
  }

  function updateScrollButtons() {
      const isAtMinWidth = scrollableNav.scrollLeft <= 0;
      const isAtMaxRight = scrollableNav.scrollLeft + scrollableNav.clientWidth >= scrollableNav.scrollWidth;

      scrollLeftBtn.style.display = isAtMinWidth ? 'none' : 'block';
      scrollRightBtn.style.display = isAtMaxRight ? 'none' : 'block';
  }

  if(scrollRightBtn){
    window.onload = setMinWidth;
    scrollRightBtn.addEventListener("click", () => scrollableNav.scrollBy({ left: 120, behavior: "smooth" }));
    scrollLeftBtn.addEventListener("click", () => scrollableNav.scrollBy({ left: -120, behavior: "smooth" }));
    scrollableNav.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
  }
});
