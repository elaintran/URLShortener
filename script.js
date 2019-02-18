var form = document.querySelector(".bar");

form.addEventListener("submit", urlSubmit);

function urlSubmit(event) {
	event.preventDefault();
	//console.log("test");
}

require('dotenv').config()