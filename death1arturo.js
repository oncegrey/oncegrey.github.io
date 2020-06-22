<script>
function checkStorage(){
	localStorage.setItem('character', 'arturo');
	if (localStorage.getItem("character") == "arturo") {
		window.location.href = 'faralinde2.html'
    } else if (localStorage.getItem("theme") == "dark") {
        document.getElementById("maincss").href = "./css/dark.css";
    } else {
        document.getElementById("maincss").href = "./css/main.css";
    };
}
</script>
