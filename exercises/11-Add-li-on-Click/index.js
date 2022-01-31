let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let li = document.createElement("li");

	let list = document.getElementById("myList");

	li.innerHTML = "Forth element";

	list.appendChild(li);

});
