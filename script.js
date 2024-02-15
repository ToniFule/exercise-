const firstBtn=document.getElementById("firstBtn")
const secondBtn=document.getElementById("secondBtn")
const thirhBtn=document.getElementById("thirdBtn")
const forthBtn=document.getElementById("forthBtn")

async function myCountries() {
    try{
    const res = await fetch(`https://restcountries.com/v3.1/all`)
    const data = await res.json()
    console.log(data)
    }
    catch{(err)=>console.log(err)}
}
myCountries()