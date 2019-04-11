// First view has logo, tag line and a button to start.
const header=document.getElementById('header');
const subject= document.getElementById('subject');
const firstSubject=document.getElementById('first-subject');
const exit=document.getElementById('exit');
const contribute=document.getElementById('contribute');
const contribution= document.getElementById('contribution');
const languages=document.getElementById("languages");
const notification=document.getElementById("notification");
const other=document.getElementById("other");
const submit=document.getElementById("submit");
const english=document.getElementById("english");
const swahili=document.getElementById("swahili");
const nav=document.getElementById("navigation");
// document.getElementById('logo').addEventListener('load', firstView);
exit.addEventListener('click', firstView);
console.log(firstSubject.textContent);
let state;
const errorLang=document.getElementById("error-language");
// header.style.display="block";
// exit.style.display="none";
// subject.style.display="none";


firstView();
function firstView(){
    header.style.display="inline-block";
    exit.style.display="none";
    subject.style.display="none";
    firstSubject.textContent="NEXT";
    nav.style.display="none";
    // contribute.style.display="inline-block";
    languages.style.display="block";
    contribution.style.display="none";
    notification.style.display="none";
    submit.style.display="none";
}
function secondView(){
    // if (state=='undefined') {
    //     errorLang.textContent="Choose a language!";
    //     console.log(state);
    // } else {
        languages.style.display="none";
        // other.style.display="none";
        action.style.display="none";
        tagline.style.display="none";
        nav.style.display="block";
        submit.style.display="inline-block";
        subject.style.display="inline-block";   

        console.log(state);    
    // }

    // if (firstSubject.textContent==='START'){
    //     firstSubject.textContent="NEXT";
    //     subject.style.display="inline-block";   
    //     header.style.display="none";
    //     // contribute.style.display="none";
        // languages.style.display="none";

    //     // console.log(22);
    // }
    // else{
    //     exit.style.display="inline-block";
    //     // console.log(33);
    // }
}
function helpView(){
    subject.style.display="inline-block";   
    header.style.display="none";
    // contribute.style.display="none";
    contribution.style.display="block";

}
// Second view has the name of the object the image below it and the next button.
document.getElementById('first-subject').addEventListener('click', secondView);

other.addEventListener("click",function(){
        contribution.style.display="block";
        languages.style.display="none";
        nav.style.display="block";
        console.log(document.langName.language.value.length);

});
english.addEventListener("click",function(){
    state=1;
    nav.style.display="block";
    // secondView();
});

swahili.addEventListener("click",function(){
    state=1;
    nav.style.display="block";
});
// document.getElementById('contribute').addEventListener('click', helpView);
// the final view is the same as the previous one but has an exit button.
// submit.addEventListener('click', function(){
    
// });