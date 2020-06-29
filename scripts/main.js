/*Menu mobilne*/
const burger = document.querySelector(".menuLogo");
const menuMobile = document.querySelector(".mobile");
const header = document.querySelector("header");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  menuMobile.classList.toggle("active");
  header.classList.toggle("active");
})


/*Todolist*/
const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const listWrapper = document.querySelector('.list_wrap');

class item {
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement('input');
    input.value = itemName;
    input.disabled = true;
    input.classList.add('item_input');
    input.tyle = "text";

    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let editButton = document.createElement('button');
    editButton.innerHTML = "ZMIEŃ";
    editButton.classList.add('editButton');

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "USUŃ";
    deleteButton.classList.add('deleteButton');

    listWrapper.appendChild(itemBox);

    itemBox.appendChild(input);
    itemBox.appendChild(deleteButton);
    itemBox.appendChild(editButton);

    deleteButton.addEventListener('click', () => this.delete(itemBox));

    editButton.addEventListener('click', () => this.edit(input));
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  delete(item) {
    listWrapper.removeChild(item);
  }
}

function add() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}


addButton.addEventListener('click', add);