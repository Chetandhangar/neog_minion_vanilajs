var btntranslate = document.querySelector('#btn-translate'); //getting button from html
var txtinput = document.querySelector('#txt-input');  //getting input textarea 
var txtoutput = document.querySelector('#output'); //getting outfield

//url of minion language 
var url = 	"https://api.funtranslations.com/translate/minion.json";


//adding inputtext to url in request header to server
function getTranalteUrl(input) {
    return url + "?" + "text=" + input;
}

function clickHandler(){
    var valueinput = txtinput.value;

    fetch(getTranalteUrl(valueinput))      //fetching data from server from giving text in header request
        .then(res => res.json())            // if get resonse storing in json file
        .then(data => {
            var outputdata = data.contents.translated;      //storing contents.translated into a variable 
            txtoutput.innerHTML = outputdata;               //adding translated value to outputfield 
        })
        .catch(err =>{
            alert("May be exausted number of limits to trasnferred a string.");  //if error
            console.log(err);
        })

}

btntranslate.addEventListener('click' , clickHandler);  //adding click listner to the button






