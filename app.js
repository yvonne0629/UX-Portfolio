var draggableimage = document.querySelector(".drag");
var drag2 = document.querySelector(".drag1");

draggableimage.onmousedown = function (event) {
  let shiftX = event.clientX - draggableimage.getBoundingClientRect().left;
  let shiftY = event.clientY - draggableimage.getBoundingClientRect().top;

  draggableimage.style.position = "absolute";
  draggableimage.style.zIndex = 1000;
  document.body.append(draggableimage);

  moveAt(event.pageX, event.pageY);

  // moves the draggableimage at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    draggableimage.style.left = pageX - shiftX + "px";
    draggableimage.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the draggableimage on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the draggableimage, remove unneeded handlers
  draggableimage.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    draggableimage.onmouseup = null;
  };
};

draggableimage.ondragstart = function () {
  return false;
};
drag2.onmousedown = function (event) {
  let shiftX = event.clientX - drag2.getBoundingClientRect().left;
  let shiftY = event.clientY - drag2.getBoundingClientRect().top;

  drag2.style.position = "absolute";
  drag2.style.zIndex = 1000;
  document.body.append(drag2);

  moveAt(event.pageX, event.pageY);

  // moves the draggableimage at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    drag2.style.left = pageX - shiftX + "px";
    drag2.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the draggableimage on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the draggableimage, remove unneeded handlers
  drag2.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    drag2.onmouseup = null;
  };
};

drag2.ondragstart = function () {
  return false;
};
