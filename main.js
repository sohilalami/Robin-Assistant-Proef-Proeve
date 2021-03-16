var login = document.getElementById("log-in");
var edit = document.getElementById("profile-edit");
var pageTitle = document.getElementById("page-title");
var clients = document.getElementsByClassName("client");

if (login) {
	login.addEventListener("click", function (e) {
		e.preventDefault();
		location.href = "./client-select.html";
	});
}

if (edit) {
	edit.addEventListener("click", function () {
		if (this.classList.contains("blue")) {
			this.classList.remove("blue");
			this.textContent = "PROFIELEN BEHEREN";
			pageTitle.textContent = "Kies een cliënt";
		} else {
			this.classList.add("blue");
			this.textContent = "KLAAR";
			pageTitle.textContent = "Profielen beheren";
		}
	});
}
