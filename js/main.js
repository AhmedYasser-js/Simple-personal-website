// *==================================*
// & 1- Background color NavBar

let sectionOffset = $ ('#About').offset ().top;
function stayColor () {
  let windowScroll = $ (window).scrollTop ();
  if (windowScroll > sectionOffset - 100) {
    $ ('.navbar').css ('backgroundColor', 'rgba(0,0,0,0.7)');
    $ ('#btnUp').removeClass ('d-none');
  } else {
    $ ('.navbar').css ('backgroundColor', 'rgba(0,0,0,0)');
    $ ('#btnUp').addClass ('d-none');
  }
}
stayColor ();
$ (window).scroll (() => stayColor ());

// *==================================*

// *==================================*
// & 2- btnUp

$ ('#btnUp').click (function () {
  $ ('html, body').animate ({scrollTop: 0}, 'slow'); //TODO 1000 === (1 second)
  new WOW ().init ();
});

// *==================================*

$ ('li a[href^="#"]').click (function () {
  let aHref = $ (this).attr ('href');
  console.log (aHref);
  let linkOffest = $ (aHref).offset ().top;
  $ (this).addClass ('.active');
  $ ('html, body').animate ({scrollTop: linkOffest}, 200);
  new WOW ().init ();
});

// *==================================*
// $ (document).ready (function () {
//   $ ('.nav-item').click (function () {
//     $ ('.nav-item').removeClass ('active');

//     $ (this).addClass ('active');
//   });
// });

// Wait for the DOM to be fully loaded
document.addEventListener ('DOMContentLoaded', function () {
  // Get all sections and nav links
  const sections = document.querySelectorAll ('section');
  const navLinks = document.querySelectorAll ('.nav-link');

  // Function to change the active link based on the section in view
  function setActiveLink () {
    let index = sections.length;

    // Loop through sections to find the one currently in the viewport
    while (--index && window.scrollY + 450 < sections[index].offsetTop) {
    }

    // Remove active class from all nav links
    navLinks.forEach (link => link.classList.remove ('active-section'));

    // Add active class to the current nav link
    navLinks[--index].classList.add ('active-section');
  }

  // Event listener for scroll event
  window.addEventListener ('scroll', setActiveLink);

  // Call the function initially to set the correct link on page load
  setActiveLink ();
});

// & change color by box color

var spans = $ ('#choose span');
var colors = ['#FF5733', '#36D7B7', '#A569BD', '#00A8E8', '#000'];

// Loop through each span and apply a different background color
spans.each (function (index) {
  $ (this).css ('background-color', colors[index]);
});

spans.click (function () {
  let colorNew = this.style.backgroundColor;

  // Save the color to local storage
  localStorage.setItem ('selectedColor', colorNew);

  $ ('h2,p').css ('color', colorNew);
});

// On page load, check if a color was previously saved in local storage and apply it
$ (document).ready (function () {
  let savedColor = localStorage.getItem ('selectedColor');
  if (savedColor) {
    $ ('h1,h2,p').css ('color', savedColor);
  }
});

// *==================================*

// ^  solution => 3
let boxColorWidth = $ ('#choose').width () + 7;
let left = true;
$ ('#btnBox').click (() => {
  if (left) {
    $ ('#lefttoggle').animate ({left: `-${boxColorWidth}`}, 40);
    left = false;
  } else {
    $ ('#lefttoggle').animate ({left: '0'}, 500);
    left = true;
  }
});

// *==================================*

$ (document).ready (function () {
  $ ('#spinner').fadeOut (0, function () {
    $ ('body').css ('overflow', 'auto');
  });
});
// *==================================*
new WOW ().init ();

// * About
document.addEventListener ('DOMContentLoaded', function () {
  const texts = ['UI / UX DESIGNER', 'WEB DEVELOPER'];
  const typingSpeed = 100; // speed in milliseconds
  const erasingSpeed = 50; // speed in milliseconds
  const delayBetweenTexts = 1500; // delay between texts in milliseconds

  let textIndex = 0;
  let charIndex = 0;
  const typingTextElement = document.getElementById ('typing-text');

  function type () {
    if (charIndex < texts[textIndex].length) {
      typingTextElement.textContent += texts[textIndex].charAt (charIndex);
      charIndex++;
      setTimeout (type, typingSpeed);
    } else {
      setTimeout (erase, delayBetweenTexts);
    }
  }

  function erase () {
    if (charIndex > 0) {
      typingTextElement.textContent = texts[textIndex].substring (
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout (erase, erasingSpeed);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout (type, typingSpeed);
    }
  }

  type ();
});
