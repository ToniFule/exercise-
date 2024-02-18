
const firstInput=document.getElementById("firstInput1")
let tHead=document.getElementById("thead")
let table=document.getElementById("tbl");


async function myCountries() {
    try{
    const res = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await res.json()
    console.log(data)

  
    }
    catch{(err)=>console.log(err)}
}
myCountries()


async function fetchCountry() {
    try{
    const res = await fetch(`https://restcountries.com/v3.1/name/${firstInput.value}`)
    const data = await res.json()
    console.log(data)
   data.forEach(character => {
    const tHead = document.createElement('tr');
    tHead.innerHTML += `
<tr>
<td>Flag:</td>
<td><img src="${character.flags.png}" alt="Flag"></td>
</tr>
<tr>
<td>Name:</td>
<td>${character.name.official}</td>
</tr>
<td>Population:</td>
<td>${character.population}</td>
<tr>
<td>Capital:</td>
<td>${character.capital}</td>
</tr>
<tr>
<td>Area:</td>
<td>${character.area}</td>
<td>  <p>Open on <a href="https://en.wikipedia.org/wiki/${character.name.common}" >Wikipedia</a></p>
</tr>
`;


table.appendChild(tHead)
});


}
catch{(err)=>console.log(err)}
}
async function usingEuro() {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        
        const euroCountries = data.filter(country => {
            return country.currencies && country.currencies.hasOwnProperty('EUR');
        });

        const euroCountriesElement = document.getElementById("euroCountries");
        let euroCountriesHTML = "<ul>";
        euroCountries.forEach(country => {
            euroCountriesHTML += `
            <li><img src="${country.flags.png}" alt="Flag">${country.name.common} is using Euro!! </li>`;
        });
        euroCountriesHTML += "</ul>";
        euroCountriesElement.innerHTML = euroCountriesHTML;
    } catch (err) {
        console.error("Error fetching data: ", err);
    }
}

async function talkingEnglish() {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await res.json();
        
        const englishLanguage = data.filter(country => {
            return country.languages && country.languages.hasOwnProperty('eng');
        });

        const englishLanguageElement = document.getElementById("talkingEnglish");
        let englishLanguageHTML = "<ul>";
        englishLanguage.forEach(country => {
            englishLanguageHTML += `
            <li><img src="${country.flags.png}" alt="Flag">${country.name.common} is talking English!! </li>`;
        });
        englishLanguageHTML += "</ul>";
        englishLanguageElement.innerHTML = englishLanguageHTML;
    } catch (err) {
        console.error("Error fetching data: ", err);
    }
}


function resetBtn() {
    euroCountries.innerHTML = ""; 
    englishLanguage.innerHTML="";
    tHead.innerHTML="";
}
