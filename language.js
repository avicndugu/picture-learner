// SUBMIT BUTTON TO SEND DATA TO GOOGLE DOCS
var myform = document.getElementById('languageName');
var language= document.getElementById('language');
    // language.name("language");
console.log(language.name);
console.log(myform)

document.querySelector('input[type="submit"]').addEventListener('click', function(e) {
    // alert(1);
    e.preventDefault();
    var dataSend= JSON.stringify(myform.language.value);
    // console.log(myform.language.value);
    console.log(dataSend);
    //     // The data collected from the form and stored in an array
    //     // var data=["ronny", "uou", "yutuyt", "etert", "xersr", "rytryt", "s4esrz", "lutaia", "hitars", "portas"];
        
    //     // Takes the data and encodes it so that it can be parsed as a string on the URL
    //     var encodeurl=[];
    //     for (i=0; i<newDict.length; i++) {
    //                 encodeurl.push("field"+i +"=" +newDict[i]);
    //     }
    //     console.log(encodeurl);
    //     var sentData= encodeurl.join("&");

    //     console.log((sentData));
    //     // JSON.stringify(myform.language.value);
    //     console.log(newDict);
    //     console.log(myform);
    //     var url = 'https://script.google.com/macros/s/AKfycbwNHpeIfd5C8nOVBmkbhLw3Y35QPlNAe1zkSQUNIX1ndVNUvyc/exec?'+sentData;
    //     // language='+sentData;
    //     console.log(url);

    //     const xhr=new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     // console.log(GET);
    //     xhr.onload= function() {
    //         if(this.status===200)
    //         console.log(this.responseText);
    //     }
    //     xhr.send();
});


