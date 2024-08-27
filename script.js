const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
var form = document.getElementById('form')

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
	const modal = document.querySelector(button.dataset.modalTarget)
	openModal(modal)
	})
	
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach(modal => {
		closeModal(modal)
	})
})

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
	const modal = button.closest('.modal')
		closeModal(modal)
	})
	
})


function openModal(modal) {
	if (modal == null) return
		modal.classList.add('active')
		overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}

document.getElementById("challengeSettings").addEventListener("button start", function(event){
    event.preventDefault(); //to prevent submit
	const lengthOfTime = document.getElementById("lengthOfTime").value();
	const wordCount = document.getElementById("wordCount").value();
	const studentAge = document.getElementById("studentAge").value ();
		
		if (lengthOfTime === "threeMin" && wordCount === "oneWord" && studentAge === "fourToSix") {
			window.location.href = "index2.html";
		} else if (lengthOfTime === "threeMin" && wordCount === "twoWords" && studentAge === "fourToSix") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "threeMin" && wordCount === "twoWords" && studentAge === "sevenNine") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "threeMin" && wordCount === "oneWord" && studentAge === "sevenNine") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "threeMin" && wordCount === "oneWord" && studentAge === "tenPlus") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "threeMin" && wordCount === "twoWords" && studentAge === "tenPlus") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "fiveMin" && wordCount === "oneWord" && studentAge === "fourToSix") {
			window.location.href = "index2.html";
		} else if (lengthOfTime === "fiveMin" && wordCount === "twoWords" && studentAge === "fourToSix") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "fiveMin" && wordCount === "twoWords" && studentAge === "sevenNine") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "fiveMin" && wordCount === "oneWord" && studentAge === "sevenNine") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "fiveMin" && wordCount === "oneWord" && studentAge === "tenPlus") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "fiveMin" && wordCount === "twoWords" && studentAge === "tenPlus") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "twelveMin" && wordCount === "oneWord" && studentAge === "fourToSix") {
			window.location.href = "index2.html";
		} else if (lengthOfTime === "twelveMin" && wordCount === "twoWords" && studentAge === "fourToSix") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "twelveMin" && wordCount === "twoWords" && studentAge === "sevenNine") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "twelveMin" && wordCount === "oneWord" && studentAge === "sevenNine") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "twelveMin" && wordCount === "oneWord" && studentAge === "tenPlus") {
			window.location.href = "blue.html";
		} else if (lengthOfTime === "twelveMin" && wordCount === "twoWords" && studentAge === "tenPlus") {
			window.location.href = "blue.html";
		} else {
			window.location.href = "other.html";
		}
});