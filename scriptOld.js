document.getElementById("button").addEventListener("click", createList);
var dragging, draggedOver;
var array = [];

function createList(){
    var title = prompt("Introduce the name of the list");
    var list = document.createElement("div");
    list.id = `div_ ${new Date().getTime().toString()}`;
    list.className = "list";
    
    var header = document.createElement("header");
    header.innerHTML = title;
    list.appendChild(header);

    var items = document.createElement("ul");
    list.appendChild(items);

    var footer = document.createElement("footer");
    footer.innerHTML = "Add a card...";
    footer.myItems = items;
    footer.addEventListener("click", addItem);

    list.appendChild(footer);

    document.getElementById("lists").appendChild(list);
}

function addItem(e) {
    var text = prompt("Introduce nueva tarea");
    array.push(text);
    renderItems(e.currentTarget.myItems);
  }

  function renderItems(list){
    list.innerText = "";
    array.forEach(item => {
        var node = document.createElement("li");
        node.myItems = list;
        node.draggable = true;
        node.addEventListener('drag', setDragging) 
        node.addEventListener('dragover', setDraggedOver)
        node.addEventListener('drop', compare) 
        node.innerText = item;
        list.appendChild(node);
    })
  }
  const compare = (e) =>{
    var index1 = array.indexOf(dragging);
    var index2 = array.indexOf(draggedOver);
    array.splice(index1, 1)
    array.splice(index2, 0, dragging)

    renderItems(e.currentTarget.myItems);
  };
  const setDraggedOver = (e) => {
    e.preventDefault();
    draggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
  }
  const setDragging = (e) =>{
    dragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText : parseInt(e.target.innerText)
  }