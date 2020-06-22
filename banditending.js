

function banditending() {
  

  function checkStorage(){
	if (localStorage.getItem("character") == "Arturo") {
		window.location.href = 'arturobandit.html';
    } else if(localStorage.getItem('character') == "Faralinde") {
		window.location.href = 'faralindebandit.html';
	}
}
	checkStorage();
}