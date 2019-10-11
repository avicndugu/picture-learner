const url = 'https://spreadsheets.google.com/feeds/cells/1PwuDRVFnRWfdRdc_dZU4Gvnxg6yKoMImop36k_07bLk/1/public/full?alt=json';
const xhr=new XMLHttpRequest();
xhr.open('GET', url, true);
// console.log(GET);
xhr.onload= function() {
    if(this.status===200)
    // console.log(JSON.parse(this.responseText));
    languageData(JSON.parse(this.responseText));
}
xhr.send();

const langList=[];
// Sifting important data
function languageData(data){
    data.feed.entry.forEach(function (item, index) {
        // console.log(item.content['$t'], index);
        langList.push(item.content['$t']);
    });
    displayList(langList);
    return langList
}

// Attaching data to HTML
function displayList(list){
    languages.textContent = list;
}

const array = ["one", "two", "three"]
array.forEach(function (item, index) {
  console.log(item, index);
});

// const fetchBill = () => {
//     const apiEndpoint = 'https://spreadsheets.google.com/feeds/cells/1PwuDRVFnRWfdRdc_dZU4Gvnxg6yKoMImop36k_07bLk/1/public/full?alt=json';
//     fetch(apiEndpoint)
//     .then(response => response.json())
//     .then((data)=> displayCartTotal(data)) 
//     .catch((error)=> console.log(error))
// };


// const displayCartTotal = ({results}) => {
//     const [data] = results;
//     console.log(data);
// }


// fetchBill();

