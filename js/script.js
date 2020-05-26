const clear = document.querySelector(".clear");
const dateElement = document.getElementById(date);
const list = document.getElementById("list");
const input = document.getElementById("input");

let LIST = []



function addToDo(){
    const text = `<li class="item>"
                    <i class="co fa fa-circle-thin" job="complete"></i>
                    <p class="text">${toDo}</p>
                    <i class="de fa fa-trash-o" job="delete"></i>
                </li>`;
    
    const position = "beforeend";
    
    list.insertAdjacentElement(position, text);

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
