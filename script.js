document.getElementById("button").addEventListener("click", addBox);
var draggingItem, draggedOverItem, draggedBox, draggedOverBox;

//Add Box
function addBox() {
    //DOM Elements
    var box = document.createElement("div");
    var header = document.createElement("header");
    var list = document.createElement("ul");
    var footer = document.createElement("footer");

    //Element Header
    header.innerHTML = prompt("Introduce the name of the list: ");
    header.addEventListener('drag', setDraggingBox);
    header.addEventListener('dragover', setDraggedOverBox);
    header.addEventListener('drop', compareBoxes);
    header.box = box;

    //Element List (already created)

    //Element Footer
    footer.innerHTML = "Add a card...";
    footer.list = list;
    footer.addEventListener("click", addItem);

    //Appending elements to Element Box
    box.className = "list";
    box.appendChild(header);
    box.appendChild(list);
    box.appendChild(footer);

    //Appending Box to Element Boxes
    document.getElementById("boxes").appendChild(box);
}

//Add Item
function addItem(e) {
    //DOM Elements
    var list = e.currentTarget.list;
    var item = document.createElement("li");

    //Element Item
    item.list = list;
    item.innerText = prompt("Introduce nueva tarea");
    item.draggable = true;
    item.addEventListener('drag', setDraggingItem)
    item.addEventListener('dragover', setDraggedOverItem)
    item.addEventListener('drop', compareItems)

    //Appending Item to Element List
    list.appendChild(item);
}


//Drag & Drop boxes
const compareBoxes = (e) => {
    var boxes = document.getElementById("boxes");
    boxes.insertBefore(draggingBox, draggedOverBox);
};
const setDraggedOverBox = (e) => {
    e.preventDefault();
    draggedOverBox = e.currentTarget.box;
}
const setDraggingBox = (e) => {
    e.preventDefault();
    draggingBox = e.currentTarget.box;
}

//Drag & Drop Items
const compareItems = (e) => {
    var list = draggedOverItem.list;
    draggingItem.list = list;
    list.insertBefore(draggingItem, draggedOverItem);
};
const setDraggedOverItem = (e) => {
    e.preventDefault();
    draggedOverItem = e.currentTarget;
}
const setDraggingItem = (e) => {
    e.preventDefault();
    draggingItem = e.currentTarget;
}