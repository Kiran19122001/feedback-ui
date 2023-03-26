const ratingEle = document.querySelectorAll('.rating')
const button = document.getElementById("btn")
const container = document.querySelector('.container')
const error=document.getElementById("error")
let selectedEmoji=""
ratingEle.forEach((emoji) => {
    emoji.addEventListener('click', (event) => {
        remove(event)
        error.textContent=""
        selectedEmoji=event.target.innerText ||event.target.parentNode.innerText
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
        
    })
})
function remove(event) {
    ratingEle.forEach((emoji) => {
        emoji.classList.remove("active")
    })
}

btn.addEventListener("click", () => {
    if (selectedEmoji !== "") {
        container.innerHTML = `
        <div class="style">
        <h1>Thank You For Your Feedback</h1>
        <h3>Feedback : ${selectedEmoji}</h3>
        <h4>We will use your feedback to improve our customer support</h4></div>`
    }
    else {
        error.innerText="Please give your feedback"
    }
})