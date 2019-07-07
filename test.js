var context;
var request;
var source;
english.addEventListener('click', function() {
    // language="english";
    // n=0;
    loadData();
});
function loadData(){
    try {
    context = new AudioContext();
    request = new XMLHttpRequest();
    request.open("GET","/sound/english/phone.mp3",true);
    request.responseType = "arraybuffer";

    request.onload = function() {
      context.decodeAudioData(request.response, function(buffer) {
        source = context.createBufferSource();  
        source.buffer = buffer;
        source.connect(context.destination);
        // auto play
        source.start(0); // start was previously noteOn
      });
    };

    request.send();

    } catch(e) {
    alert('web audio api not supported');
    }
}
















// var xhr = new XMLHttpRequest();
 
// xhr.addEventListener('progress', function(e) {
//     if (e.lengthComputable) {
//         var percentComplete = e.loaded / e.total;
//         console.log('Downloading: ' + percentComplete + '%');
//     }
// });
 
// xhr.addEventListener('load', function(blob) {
//     if (xhr.status == 200) {
//         audioLink.src = window.URL.createObjectURL(xhr.response);        
//     }
// });
 
// xhr.open('GET', '/sound/english/phone.mp3');
// xhr.responseType = 'blob';
// xhr.send(null);