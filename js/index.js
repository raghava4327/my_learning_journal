import { cardData } from './data.js'
const cards = document.getElementById("cards")
const menubar=document.getElementById("menu-bar")
const body=document.getElementById("body")

const renderCards = () => {
  let card = ''
  cardData.forEach(function (cardData) {
    card +=
      `<div class="card">
    <img class="card-image"src="images/${cardData['image']}" />
    <p class="card-date">${cardData['date']}</p>
    <h2 class="card-title">${cardData['title']}</h2>
    <p class="card-content">
     ${cardData['content']}
    </p>
    </div>`

  })
  cards.innerHTML = card;
}
document.addEventListener("click",(e)=>{
  (e.target.id == 'icon' || e.target.id == 'close-btn') && toggleMenu()
})

const toggleMenu=()=>{
  menubar.classList.toggle("menu-on-off") 
}

renderCards()