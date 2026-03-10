const BASE_URL  = "https://latest.currency-api.pages.dev/v1/currencies";
let selected = document.querySelectorAll(".p-from select");
let button = document.querySelector("button");
let input = document.querySelector("input");
let fromCurr = document.querySelector(".select-from")
let toCurr = document.querySelector(".select-to")
for (const select of selected) {
for (const country in countryList ) {
let option = document.createElement("option");
option.innerText = country;
option.value = country;
if(select.name === "select-from" && country === "USD"){
    option.selected = "selected"
}
else if(select.name === "select-to" && country === "PKR"){
    option.selected = "selected"
}
 select.append(option);
}
select.addEventListener("change",(evt) =>{
ChangeVal(evt.target)
})
}
const ChangeVal = (element) =>{
let country = element.value
let countryCode = countryList[country]
let imgBox = element.closest(".img-box")
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
 let img = imgBox.querySelector("img")
img.src = newSrc
}
const upData = async () => {
    let amountVal = Number(input.value);
    if (isNaN(amountVal) || amountVal <= 0) {
        amountVal = 1;
        input.value = "1";
    }

    try {
        let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        if (!rate) {
            alert(`Currency ${toCurr.value} not available`);
            return;
        }

        let newRate = rate * amountVal;
        console.log("Rate:", rate);
        console.log("Converted:", newRate);
        document.querySelector(".result").innerText =
        `${amountVal} ${fromCurr.value} = ${newRate.toFixed(2)} ${toCurr.value}`;

    } catch (err) {
        console.error("Error fetching currency:", err);
    }
};

button.addEventListener("click", (evt) =>{
    evt.preventDefault()
    upData()
})


