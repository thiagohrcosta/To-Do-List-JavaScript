const clear = document.querySelector(".clear");
const dateElement = document.getElementById(date);
const list = document.getElementById("list");
const input = document.getElementById("input");

let LIST = []

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGHT = "lineThrough";


function addToDo(toDo, id, done,trash){

    if(trash){
        return;
    }
    
    const DONE = done? CHECK : UNCHECK;
    const LINE = done? LINE_THROUGHT : "";


    const text = `<li class="item>"
                    <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="de fa fa-trash-o" job="delete" id="${id}"></i>
                </li>`;
    
    const position = "beforeend";
    
    list.insertAdjacentElement(position, text);

}

function completeToDo(){
    //1818
}

document.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo, id, false, false);
            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            })
        }
        input.value = "";
        id++;
    }
});
