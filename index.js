var a;

function getAndupdate() {
  console.log("Update");
  a = document.getElementById("content").value;
  console.log(a);
  if (localStorage.getItem("content") == null) {
    items = [];
    items.push(a);
    localStorage.setItem("content", JSON.stringify(items));
  } else {
    itemsStr = localStorage.getItem("content");
    items = JSON.parse(itemsStr);
    items.push(a);
    localStorage.setItem("content", JSON.stringify(items));
  }
  update();
}

function update() {
  if (localStorage.getItem("content") == null) {
    items = [];
    localStorage.setItem("content", JSON.stringify(items));
  } else {
    itemsStr = localStorage.getItem("content");
    items = JSON.parse(itemsStr);
  }
  document.getElementById("content").value = "";
  let list = document.getElementById("list-grp");
  let str = "";
  items.forEach((element, index) => {
    str += `<div class="d-flex">
    <li class="list-group-item fs-4 flex-grow-1 border-end-0">${element}</li>
    <i class="fas fa-trash-alt fa-2x pt-2 m-1 mb-0 border-bottom"  onclick="remove(${index})"></i>
  </div>`;
  });
  list.innerHTML = str;
}

add.addEventListener("click", getAndupdate);
update();

function remove(itemIndex) {
  console.log("Delete", itemIndex);
  itemsStr = localStorage.getItem("content");
  items = JSON.parse(itemsStr);
  items.splice(itemIndex, 1);
  localStorage.setItem("content", JSON.stringify(items));
  update();
}
