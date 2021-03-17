var login = document.getElementById("log-in");
var edit = document.getElementById("profile-edit");
var pageTitle = document.getElementById("page-title");
var clients = document.getElementsByClassName("client");
var selectInputs = document.getElementsByClassName("select-input");
var editButtons = document.querySelectorAll(".profile-edit .buttons .btn-2");

if (login) {
	login.addEventListener("click", function (e) {
		e.preventDefault();
		location.href = "./client-select.html";
	});
}

if (edit) {
	edit.addEventListener("click", function () {
		for (let i = 0; i < clients.length; i++) {
			const editOverlay = clients[i].querySelector(".edit-overlay");

			if (editOverlay.classList.contains("hidden")) {
				editOverlay.classList.remove("hidden");
			} else {
				editOverlay.classList.add("hidden");
			}
		}

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

if (selectInputs) {
	for (let i = 0; i < selectInputs.length; i++) {
		const selectWrapper = selectInputs[i].querySelector(".select"),
			select = selectWrapper.querySelector("select"),
			style = window.getComputedStyle(select),
			width = style.getPropertyValue("width");

		selectWrapper.style.width = width;
	}
}

if (editButtons) {
	for (let i = 0; i < editButtons.length; i++) {
		const editButton = editButtons[i];

		editButton.addEventListener("click", function (e) {
			e.preventDefault();
			location.href = "./client-select.html";
		});
	}
}
