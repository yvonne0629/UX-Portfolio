var draggableimage = document.querySelector(".drag");
var drag2 = document.querySelector(".drag1");
var drag3 = document.querySelector(".drag3");
var drag4 = document.querySelector(".drag4");
var drag5 = document.querySelector(".drag5");
var projectInput = document.getElementById("project-filter");

function renderProjects(project_list) {
  var tbody = document.querySelector("tbody");
  tbody.textContent = "";

  for (var idx = 0; idx < project_list.length; idx++) {
    var project = project_list[idx];

    tbody.appendChild(renderProject(project));
  }
}

function renderProject(project) {
  var tr = document.createElement("tr");

  tr.appendChild(renderProjectProp(project.title, true));
  tr.appendChild(renderProjectProp(project.date));
  tr.appendChild(renderProjectProp(project.role));
  tr.appendChild(renderProjectProp(project.description));
  tr.appendChild(renderProjectProp(project.tag));

  return tr;
}

function renderProjectProp(content, nonNumeric) {
  var td = document.createElement("td");

  td.textContent = content;

  if (nonNumeric) {
    td.classList.add("non-numeric");
  }

  return td;
}

PROJECTS.sort(function (record1, record2) {
  return record2.revenue - record1.revenue;
});

projectInput.addEventListener("input", function () {
  searchTable();
});

function searchTable() {
  var filter, found, table, tr, td, i, j;
  filter = projectInput.value.toLowerCase();
  table = document.querySelector("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toLowerCase().indexOf(filter) > -1) {
        found = true;
      }
    }
    if (found) {
      tr[i].style.display = "";
      found = false;
    } else {
      tr[i].style.display = "none";
    }
  }
}

//TODO: find way to apply all elements

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

drag3.onmousedown = function (event) {
  let shiftX = event.clientX - drag3.getBoundingClientRect().left;
  let shiftY = event.clientY - drag3.getBoundingClientRect().top;

  drag3.style.position = "absolute";
  drag3.style.zIndex = 1000;
  document.body.append(drag3);

  moveAt(event.pageX, event.pageY);

  // moves the draggableimage at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    drag3.style.left = pageX - shiftX + "px";
    drag3.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the draggableimage on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the draggableimage, remove unneeded handlers
  drag3.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    drag3.onmouseup = null;
  };
};

drag3.ondragstart = function () {
  return false;
};

drag4.onmousedown = function (event) {
  let shiftX = event.clientX - drag4.getBoundingClientRect().left;
  let shiftY = event.clientY - drag4.getBoundingClientRect().top;

  drag4.style.position = "absolute";
  drag4.style.zIndex = 1000;
  document.body.append(drag4);

  moveAt(event.pageX, event.pageY);

  // moves the draggableimage at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    drag4.style.left = pageX - shiftX + "px";
    drag4.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the draggableimage on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the draggableimage, remove unneeded handlers
  drag4.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    drag4.onmouseup = null;
  };
};

drag4.ondragstart = function () {
  return false;
};

drag5.onmousedown = function (event) {
  let shiftX = event.clientX - drag5.getBoundingClientRect().left;
  let shiftY = event.clientY - drag5.getBoundingClientRect().top;

  drag5.style.position = "absolute";
  drag5.style.zIndex = 1000;
  document.body.append(drag4);

  moveAt(event.pageX, event.pageY);

  // moves the draggableimage at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    drag5.style.left = pageX - shiftX + "px";
    drag5.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the draggableimage on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the draggableimage, remove unneeded handlers
  drag5.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    drag5.onmouseup = null;
  };
};

drag5.ondragstart = function () {
  return false;
};
