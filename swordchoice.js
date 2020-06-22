function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";

  function checkStorage(){
	if (localStorage.getItem("character") == "Arturo") {
		window.location.href = 'leave2.html';
    } else if(localStorage.getItem('character') == "Faralinde") {
		window.location.href = 'faralindedeath2.html';
	}
}
	checkStorage();
}