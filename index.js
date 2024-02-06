let id = document.getElementsByClassName("adviceid");
let quote = document.getElementsByClassName("quote");
let btn = document.querySelectorAll("span")[2];

btn.onclick = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            throw new Error("API request failed")
        }
    })
    .then(data => {
        idArray = Array.from(id);
        quoteArray = Array.from(quote)
        idArray.forEach(element => {
            element.innerHTML = data.slip.id;
        });
        quoteArray.forEach(elem => {
            elem.innerHTML = data.slip.advice;
            console.log(data.slip.advice);
        })
    });
}
