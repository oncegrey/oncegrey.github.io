

function goodending() {
	

  function checkStorage(){
	if (localStorage.getItem("character") == "Arturo") {
		window.location.href = 'arturogoodending.html';
    } else if(localStorage.getItem('character') == "Faralinde") {
		window.location.href = 'faralindegoodending.html';
	}
}
	checkStorage();
}