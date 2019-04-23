document.getElementById("first-subject").addEventListener('click', loadData);


let n=0;
function loadData(){
	const xhr= new XMLHttpRequest();
	
	xhr.open('GET','english.json', true);

	xhr.onload= function pacer(){
		if(this.status===200){
			// console.log(this.responseText);
			const dictionary=JSON.parse(this.responseText);
			// console.log(dictionary);
			feeder(dictionary);
			// const output= `
			// 	<h2 class="title">${dictionary[n].name}</h2>
			// 	<img src="img/${dictionary[n].url}">
			// 	`;
			// console.log(dictionary.length);
			// cycling();
			// document.getElementById('subject').innerHTML= output;
			// // Move to the next data set number
			// function cycling(){
			// 	if (n<dictionary.length-1){
			// 		n+=1;
			// 	}else{
			// 		n=0;
			// 		console.log(15);
			// 	}
			// }
			// console.log(n);
		}
		// console.log(dictionary);
		// return (dictionary);
	}
	// console.log(dictionary);

	xhr.send();
}

let newDict={};
		console.log(typeof(newDict));
		// newDict["language"]= "Englonish";
		newDict["items"]=[];

function setLang(language) {
	console.log(language.length);
	// 	newDict["language"]= "English";
	// }
	 // else if() {

	// } else {
		newDict["language"]=language;
		// document.langName.language.value;	
	// }
}

function feeder(dictionary) {
	// pick the name of the language  from input and stores it in an object.
	// let newDict=[];
		// let newDict={};
		// console.log(typeof(newDict));
		// newDict["language"]= "English";
		// newDict["items"]=[];
	// document.langName.language.value;
	console.log(newDict);

	// pick the names of the objects only
	// newDict["ObjectNames"]=[];
    // console.log(document.langName.language.value.length);

	if (n>0 && n<dictionary.length-1){
		newDict["items"].push(document.langName.language.value);
		// newDict[dictionary[n].name]=document.langName.language.value;
		// console.log(newDict);
		console.log(newDict["items"]);
		// console.log(dictionary[n].name);
	}
	langName.reset();
	// Old code that feeds the images
	const output= `
		<h2 class="title">${dictionary[n].name}</h2>
		<img src="img/${dictionary[n].url}">
		`;
	console.log(dictionary.length);
	cycling();
	document.getElementById('subject').innerHTML= output;
	// Move to the next data set number
	function cycling(){
		if (n<dictionary.length-1){
			n+=1;
		}else{
			n=0;
			console.log(15);
		}
	}
	console.log(n);

}
// Next button to nove
