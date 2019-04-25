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
// SUBMIT BUTTON TO SEND DATA TO GOOGLE DOCS
console.log(newDict);
var myform = document.getElementById('langName');
    var language= document.getElementById('language');
    // language.name("language");
    console.log(language.name);

    document.getElementById('submit').addEventListener('click', function(e) {
        // alert(1);
        e.preventDefault();
		console.log(newDict);
        // The data collected from the form and stored in an array
        // var data=["ronny", "uou", "yutuyt", "etert", "xersr", "rytryt", "s4esrz", "lutaia", "hitars", "portas"];
        
        // Takes the data and encodes it so that it can be parsed as a string on the URL
        var encodeurl=[];
        for (i=0; i<newDict["items"].length; i++) {
                    encodeurl.push("field"+i +"=" +newDict["items"][i]);
        }
        console.log(encodeurl);
        var sentData= encodeurl.join("&");

        console.log((sentData));
        // JSON.stringify(myform.language.value);
        console.log(newDict);
        console.log(myform);
        var url = 'https://script.google.com/macros/s/AKfycbwNHpeIfd5C8nOVBmkbhLw3Y35QPlNAe1zkSQUNIX1ndVNUvyc/exec?'+sentData;
        // language='+sentData;
        console.log(url);

        const xhr=new XMLHttpRequest();
        xhr.open('GET', url, true);
        // console.log(GET);
        xhr.onload= function() {
            if(this.status===200)
            console.log(this.responseText);
        }
        xhr.send();
     });


