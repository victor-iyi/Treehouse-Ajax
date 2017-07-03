const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
	if ( xhr.readyState === 4 ) {
		document.querySelector(".sidebar").innerHTML = xhr.responseText;
	}
}
xhr.open("GET", "sidebar.html");
xhr.send();