"use strict";

///////////////////////////////
// MAKE MOBILE NAVIGATION WORK
///////////////////////////////
// Mobile navigation is displayed whenever the header has the .nav-open class

// Selecting elements

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// When the MENU button is clicked, the .nav-open class gets added to the header, when the CLOSE button is clicked, the .nav-open class is removed

// That means that we want to add .nav-open class to the header when it's not there, but if it's already there, then we want to remove the .nav-open class. We need to use the classList property with toggle method. In the process, button stays the same, but the icon changes.

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////
// IMPLEMENT SMOOTH SCROLLING
// + mobile navigation details
///////////////////////////////

// Selecting all links on the page -> ('a:link') will select link elements which have href property

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      event.preventDefault();
      const sectionEl = document.querySelector(href);
      const offset = 74; // Value adjusted to the headers height 7.4rem
      const position = sectionEl.offsetTop;
      window.scrollTo({ top: position - offset, behavior: "smooth" });
    }

    // Close mobile naviagtion

    if (link.classList.contains("main-nav-link")) {
      if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
      }
    }
  });
});

///////////////////////////////
// FOOTER SECTION - SET CURRENT YEAR
///////////////////////////////

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

console.log(currentYear);

///////////////////////////////
// Fixing flexbox gap property (missing in some browsers - IE and some mobile browsers)
///////////////////////////////

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
