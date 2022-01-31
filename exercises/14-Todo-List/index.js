// Your code here

//FUNCIONALIDAD PARA ELIMINAR ELEMENTOS DE LA LISTA

window.onload = () =>{
    getButtons();
}

let getButtons = () =>{
    let buttons = document.getElementsByClassName("fa");

    for(let button of buttons){
        button.addEventListener("click", (event) => {

            deleteLi(event.target);

        })
    }      

}



let deleteLi = (son) => {

    let li = son.parentNode.parentNode;

    li.remove();

}


//FUNCIONALIDAD PARA AÑADIR ELEMENTOS A LA LISTA

let ul = document.getElementsByTagName("ul");

let input = document.querySelector("#addToDo");

input.addEventListener("change", event =>{

    let li = document.createElement("li");

    li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${event.target.value}`

    if(event.target.value != "")
        ul[0].appendChild(li);

    getButtons();

})


