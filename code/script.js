// A function that adds and remove the class "active" on the section you click on.
function accordionToggle() {
  this.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.

window.onload = function() {
  let accordions = document.getElementsByClassName("accordion");

  for(let i = 0; i < accordions.length; i++) {
    let accordion = accordions[i];
    let items = accordion.getElementsByClassName("accordion-item");

    for(let j = 0; j < items.length; j++) {
      items[j].onclick = accordionToggle
    }
  }
};
