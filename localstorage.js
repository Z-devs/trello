//Local Storage Manager
class TrelloCard {
    constructor (fatherList, text) {
        this.id = create_UUID(); // generacion uuid un timestamp no me sirve
        this.fatherList = fatherList;
        this.text= text;
    }
}

function generateUUID(){ // Public Domain/MIT
        //https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
        var d = new Date().getTime();//Timestamp
        var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

function create_UUID(){
        //https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }


console.time('generateUUID');
console.log(generateUUID())
console.timeEnd('generateUUID');

console.time('create_UUID');
console.log(create_UUID()) 
console.timeEnd('create_UUID');

function CreateDemoData() {

    let mainBoard = [];
    let nombresLista = ['Vainilla','Manzana', 'Pera', 'Sandia', 'Melon','Cereza']
    let lista_tareas = [];
    
    for (let l = 0; l < nombresLista.length; l++) {
        for (let i=0; i<10;i++){
            var newTask = new TrelloCard(nombresLista[l],"Tarea Numero "+String(i));
            lista_tareas.push(newTask)
        } 
        mainBoard.push(lista_tareas);
        lista_tareas = [];
    }
    localStorage.setItem("ZDevsTrello", JSON.stringify(mainBoard));
}

function existsZDevsTrello(){
    let data = window.localStorage.getItem("ZDevsTrello");
    if (data === null) {
        return false;
    }
    else {
        return true;
    }
}

function getZDevsTrello() {
    return window.localStorage.getItem("ZDevsTrello");
}



var mainBoard = []; //Array que guarda todas las taskList
var taskList = []; // Array de listas de tareas

if ( existsZDevsTrello() ) {
    console.log('Data for ZDevsTrello found!!');
    mainBoard = JSON.parse(getZDevsTrello());
    console.log('ZDevsTrello:',mainBoard, 'typeof: ', typeof(mainBoard));
    mainBoard.forEach( (item) => taskList.push(item) );
    console.log('taskList: ', taskList);
    taskList.forEach ( (item) => { console.log('taskList item: ',item)})
}
else {
    console.log('Data for ZDevsTrello not found');
    CreateDemoData();
}




// https://youtu.be/UgL36NhdmDc
