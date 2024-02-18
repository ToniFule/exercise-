const firstBtn=document.getElementById("firstBtn")
const secondBtn=document.getElementById("secondBtn")
const thirhBtn=document.getElementById("thirdBtn")
const searchBtn=document.getElementById("searchBtn")
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
<td>Flag:<img src="${character.flags.png}" alt="Flag"></td>
<td>Name:${character.name.official}</td>
<td>Population:${character.population}</td>
<td>Capital:${character.capital}</td>
<td>Area:${character.area}</td>
`;


table.appendChild(tHead)
});


}
catch{(err)=>console.log(err)}
}

   
