let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let sel = document.querySelector("#mySelect");

for(let country of countries){
    let option = document.createElement("option");

    option.innerHTML = country;

    sel.appendChild(option);
}


    

sel.addEventListener("change", (event) => {
    alert(event.target.value);
})