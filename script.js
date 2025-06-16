let btnEle = document.querySelector(".btn");
let container = document.querySelector(".container");
let container1 = document.querySelector(".container1");


let inputEle = document.querySelector("#inp");
let Statement = document.querySelector(".Statement");
let vdo = document.querySelector(".vdo");
let body = document.querySelector("body");


btnEle.addEventListener("click", () => {
    // let userMessage = inputEle.value;
    if (inputEle.value > 0) {
        if (inputEle.value == 2025) {
            document.querySelector(".container").classList.add('none1');
            document.querySelector(".none").classList.remove('none');

            alert("हर एक साल आता है, हर एक साल जाता है,इस नए साल में आपको वो सब मिल जाए,जो आपका दिल चाहता है।नव वर्ष की हार्दिक शुभकामनाएं!");



            // boxEle.classList.add("show-img");
        }
        else {
            document.querySelector("#p1").innerText = "अवे नया वर्ष डाल😡!";
            document.querySelector("#p1").style.color = "red";
        }
    }
})


// new year script

const countdown = () => {
    const newYear = new Date('january 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').style.display = 'none';
        document.getElementById('celebration-message').classList.remove('hidden');
        document.querySelector("#h1").classList.remove('hidden');
        container1.classList.add('container2')
        document.querySelector(".video-container").classList.remove('hidden');
        document.querySelector(".video-container1").classList.remove('hidden');

    }
};

const interval = setInterval(countdown, 10);
