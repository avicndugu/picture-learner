english.addEventListener('click', function() {
	loadData('english');
});
document.getElementById("first-subject").addEventListener('click', function () {
	
});
swahili.addEventListener('click', function() {
	loadData('swahili');
});


let n=0;
function loadData(language){
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
		<br>
		<audio controls src="sound/${dictionary[n].audio}"></audio>
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
