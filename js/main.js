const nav = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", function () {
  function addShadow() {
    if (window.scrollY >= 300) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  window.addEventListener("scroll", addShadow);
});

/* Contact form validation */
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

$(document).ready(function () {
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    transitionDuration: "0.5s",
    masonry: {
      columnWidth: ".all",
    },
  });

  var initShow = 8;
  var counter = initShow;
  var iso = $grid.data("isotope");

  var defaultFilter = document.body.getAttribute("data-default-filter") || "*";
  if (defaultFilter !== "*") {
    $grid.isotope({
      filter: defaultFilter,
    });

    $(".btn-portfolio").removeClass("active");
    $('.btn-portfolio[data-filter="' + defaultFilter + '"]').addClass("active");
  }

  loadMore(initShow);

  function loadMore(toShow) {
    $grid.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems
      .slice(toShow, iso.filteredItems.length)
      .map(function (item) {
        return item.element;
      });

    $(hiddenElems).addClass("hidden");
    $grid.isotope("layout");

    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    }
  }

  $("#load-more").click(function () {
    if ($("#filters").data("clicked")) {
      counter = initShow;
      $("#filters").data("clicked", false);
    }

    counter = counter + initShow;
    loadMore(counter);
  });

  $("#filters").click(function () {
    $(this).data("clicked", true);
    loadMore(initShow);
  });

  $(".btn-portfolio").click(function () {
    $(".btn-portfolio").removeClass("active");
    $(this).addClass("active");

    var data = $(this).attr("data-filter");
    $grid.isotope({
      filter: data,
    });
  });
});

function readMore(text) {
  let dots = document.querySelector(`.item[data-text="${text}"] .dots`);
  let moreText = document.querySelector(`.item[data-text="${text}"] .more`);
  let btnText = document.querySelector(`.item[data-text="${text}"] .plus`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = '<i class="bi bi-plus-lg"></i>';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = '<i class="bi bi-dash"></i>';
    moreText.style.display = "inline";
  }
}

const videoContainers = document.getElementsByClassName("bg-video-container");
const videos = document.getElementsByClassName("bg-video");

window.addEventListener("scroll", () => {
  for (let vc = 0; vc < videoContainers.length; vc++) {
    const rect = videoContainers[vc].getBoundingClientRect();
    const offset = -rect.top;
    videos[vc].style.transform = `translateY(${offset}px)`;
  }
});
