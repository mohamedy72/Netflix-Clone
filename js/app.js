const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab Content item
function selectItem(e) {
  console.log(e);
  // Remove borders for any other element except the one that is clicked
  removeBorder();

  // Remove Class 'Show' on every element except the one that is
  removeShowClass();

  // Add border to current tab
  this.classList.add("tab-border");

  // Grab Content items from DOM
  /*
  The trick here is to dynamically choose the element based on this.id 
  (this) is refers to whatever the item that calls selectItem function
  */
  const getContentItem = document.querySelector(`#${this.id}-content`);
  getContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}
function removeShowClass() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Loop through the nodeList from tabItems variable then add event listener on each one
tabItems.forEach((item) => item.addEventListener("click", selectItem));
