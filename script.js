// ELEMENTS HTML
const myForm = document.querySelector("#quotationForm");
const quotation = document.querySelector("#texteCitation");
const author = document.querySelector("#nomAuteur");
const submitButton = document.querySelector("buttonSubmit");


function recupQuote(event){
	const quotation = event.target.value;
	console.log("😀 quote :", quotation);
}


  myForm.addEventListener("submit", function (event) {
	event.preventDefault()
	recupQuote.value
	console.log("😀 quote :", quotation);
  })






