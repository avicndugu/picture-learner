document.getElementById("first-subject").addEventListener('click', loadData);


let n=0;
function loadData(){
	const xhr= new XMLHttpRequest();
	
	xhr.open('GET','english.json', true);

	xhr.onload= function(){
		if(this.status===200){
			// console.log(this.responseText);
			const dictionary=JSON.parse(this.responseText);	
			const output= `
				<h2 class="title">${dictionary[n].name}</h2>
				<img src="img/${dictionary[n].url}">
				`;
			console.log(dictionary.length);
			cycling();
			document.getElementById('subject').innerHTML= output;
			// console.log(output);
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
		}console.log(dictionary);
	}
	xhr.send();
}


// Next button to nove
