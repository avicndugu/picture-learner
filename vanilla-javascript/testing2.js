http://localhost:5000/books?category=biographies&type=paperback

// SUBMIT BUTTON TO SEND DATA TO GOOGLE DOCS
var myform = document.getElementById('languageName');
var language= document.getElementById('language');
console.log(language.name);
console.log(myform)

document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    // alert(1);
   var url2= 'http://node.avicndugu.com/send?category=biographies&type=paperback';

    e.preventDefault();
    // var data= (myform.language.value);
    // // console.log(myform.language.value);
    // console.log(data);
    //     var url = 'https://script.google.com/macros/s/AKfycbwU5JRZF6rPm2V0xUBQajvFrcToYI1M6cKtFSCMgg8iczeqAsBW/exec?language='+data;
    // //     // language='+sentData;
    // console.log(url);

        const xhr=new XMLHttpRequest();
        xhr.open('GET', url2, true);
        // console.log(GET);
        xhr.onload= function() {
            if(this.status===200)
            console.log(this.responseText);
        }
        xhr.send();
});


