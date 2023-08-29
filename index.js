const temperatureField= document.querySelector(".weather1");
const cityField= document.querySelector(".weather2 p");
const dateField= document.querySelector(".weather2 span");
const emojiField= document.querySelector(".weather3 img");
const weatherField= document.querySelector(".weather3 span");
const inputElement = document.querySelector("input");
// const searchField = document.querySelector(".searchField");
// const form= document.querySelector("form");


let target ="Lucknow";


const fetchData = async ()=>{
    const url= `https://api.weatherapi.com/v1/current.json?key=487ecc0c98d84e78855121018232808&q=${target}`;
    const response = await fetch(url);
    const data = await response.json();
    const {current:{temp_c},location:{name,localtime},
current:{condition:{text,icon}}}= data;
    console.log(data);
    updateDom(temp_c,name,localtime,text,icon);
}
function updateDom(temperature,city,timeAndDate,condition,icon){
    const exactDate = timeAndDate.split(" ")[0];
    console.log(exactDate);
    const exactTime = timeAndDate.split(" ")[1];
    console.log(exactTime);
   temperatureField.innerHTML= temperature+"°";
   cityField.innerHTML= city;
   dateField.innerHTML= timeAndDate;
   emojiField.src = icon;
   weatherField.innerHTML = condition;

}
fetchData();