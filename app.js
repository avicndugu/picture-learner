let language;
let n;
const next =document.getElementById("first-subject");

english.addEventListener('click', function() {
	language="english";
	n=0;
	loadData();
});

next.addEventListener('click', function () {
	loadData();
});

swahili.addEventListener('click', function() {
	language="swahili";
	n=0;
	loadData();
});


function loadData(){
	console.log(language);
	const xhr= new XMLHttpRequest();
	xhr.open('GET',language+'.json', true);
	xhr.onload= function(){
		if(this.status===200){
			console.log(this.responseText);
			const dictionary=JSON.parse(this.responseText);	
			dataJump(dictionary);
		}
	}
	xhr.send();
}

function dataJump(dictionary){
	console.log(dictionary);
	// Variable containing the display content
	const output= `
		<h2 class="title">${dictionary[n].name}</h2>
		<img src="img/${dictionary[n].url}">
		`;
	// Instert it into DOM tree
	document.getElementById('subject').innerHTML= output;
	nextItem(dictionary);
}
function nextItem(m){
	if (n<m.length-1){
		n=n+1;
	}
	console.log(n);
}
// Next button to nove


// What i want done is this:
// I want when language button is pressed, it disappears with all the other language buttons
// it also passes a variable to indicate which language was selected
// The next and back buttons appear.
// When the next button is pressed, now the items can be displayed.

