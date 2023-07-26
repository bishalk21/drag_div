const drag_div = document.querySelector(".drag-div");

function drag({ movementX, movementY }) {
  let style = window.getComputedStyle(drag_div);
  console.log(style);
  let top = parseInt(style.top);
  let left = parseInt(style.left);

  drag_div.style.top = `${top + movementY}px`;
  drag_div.style.left = `${left + movementX}px`;
}

drag_div.addEventListener("mousedown", () => {
  drag_div.classList.add("active");
  drag_div.addEventListener("mousemove", drag);
});

drag_div.addEventListener("mouseup", () => {
  drag_div.classList.remove("active");
  drag_div.removeEventListener("mousemove", drag);
});
