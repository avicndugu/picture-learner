let language;
let n;
const next =document.getElementById("first-subject");
let dictionary;
let dictionary2;

english.addEventListener('click', function() {
	language="english";
	n=0;
	loadData();
});

back.addEventListener('click', function() {
	previousItem(dictionary);
	dataFiller(dictionary,language);
});

next.addEventListener('click', function () {
	nextItem(dictionary);
	dataFiller(dictionary, language);
	// console.log(dictionary2);
});

swahili.addEventListener('click', function() {
	language="swahili";
	n=0;
	loadData();
});

resume.addEventListener('click', function(){
	if (!language){
		// Do nothing since it is hidden or if visible, modal to choose a language.
	}
	else {
		secondView();
	}	
});

exit.addEventListener('click', function(){
	sounds.pause();
});




function loadData(){
	console.log(language);
	const xhr= new XMLHttpRequest();
	xhr.open('GET',language+'.json', true);
	xhr.onload= function(){
		if(this.status===200){
			dictionary=JSON.parse(this.responseText);	
			dataFiller(dictionary, language);
		}
	}
	xhr.send();
}

function dataFiller(dictionary, language){
	itemHead.textContent = dictionary[n].name;
	picture.src=`img/${dictionary[n].url}`;
	sounds.src="sound/" + language+ "/"+ dictionary[n].audio;
	console.log(sounds.src);

/*  NOTES ON THE AUDIO API
This starts the audio playing
source.start(0)
This stops the audio from playing
source.pause();
source.currentTime = 0;
*/
}
function nextItem(m){
	console.log(m,n);

	if (n<m.length-1){
		n=n+1;
	}
	else{
		next.style.display="none";
	}
	console.log(n);
}

function previousItem(m){
	console.log(m,n);
	if (n<1){
		n=n;
	} 
	else if(n<m.length-1){
		n=n-1;
	}
	else{
		next.style.display="none";
	}
	console.log(n);
}

player.addEventListener('click', function(){
	if(sounds.paused || sounds.ended){
		sounds.play();
	}
	else {
		sounds.pause();
	}
	if (sounds.played){
		player.src= "img/pause.png";
	}
	else if(sound.paused){
		player.src="img/play.png";
	}
	else{

	}
});

// Next button to nove


// What i want done is this:
// I want when language button is pressed, it disappears with all the other language buttons
// it also passes a variable to indicate which language was selected
// The next and back buttons appear.
// When the next button is pressed, now the items can be displayed.

