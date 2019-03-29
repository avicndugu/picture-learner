// First view has logo, tag line and a button to start.
const header=document.getElementById('header');
const subject= document.getElementById('subject');
const firstSubject=document.getElementById('first-subject');
const exit=document.getElementById('exit');
const contribute=document.getElementById('contribute');
const contribution= document.getElementById('contribution');
const languages=document.getElementById("languages");
// document.getElementById('logo').addEventListener('load', firstView);
exit.addEventListener('click', firstView);
console.log(firstSubject.textContent);


header.style.display="block";
exit.style.display="none";
subject.style.display="none";
contribution.style.display="none";

function firstView(){
	header.style.display="inline-block";
	exit.style.display="none";
	subject.style.display="none";
	firstSubject.textContent="START";
	contribute.style.display="inline-block";
	languages.style.display="block";
}
function secondView(){
	if (firstSubject.textContent==='START'){
		firstSubject.textContent="NEXT";
		subject.style.display="inline-block";	
		header.style.display="none";
		contribute.style.display="none";
		languages.style.display="none";

		// console.log(22);
	}
	else{
		exit.style.display="inline-block";
		// console.log(33);
	}
}
function helpView(){
	subject.style.display="inline-block";	
	header.style.display="none";
	contribute.style.display="none";
	contribution.style.display="block";

}
// Second view has the name of the object the image below it and the next button.
document.getElementById('first-subject').addEventListener('click', secondView);
document.getElementById('contribute').addEventListener('click', helpView);
// the final view is the same as the previous one but has an exit button.
