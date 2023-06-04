// Get the modal
var modal = document.getElementById("myModal")

// Get the button that opens the modal
var buttons = document.getElementsByClassName("myBtn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]
// Get the close button element inside the modal
var closeBtn = document.getElementsByClassName("close")[0]

  // Get the selectedCards element inside the modal
  var selectedCardsContainer = document.getElementById("selectedCards");
  var purchaseResult = document.getElementById("purchase-result");
  // result 
  var result = 0

  // Function to open the modal
    function openModal(event) {
    var card = event.currentTarget.parentElement
    var title = card.querySelector("h2").textContent
    var value = card.querySelector("span").textContent
    result = result + parseInt(value)
    console.log(result)
    
    var imageSrc = card.querySelector("img").src
    var selectedCard = document.createElement("div")
    var resultCard = document.createElement('span')
    resultCard.innerHTML = result
    selectedCard.className = "selectedCard"
    selectedCard.innerHTML = `
      <img src="${imageSrc}" alt="${title}">
      <h3>${title}</h3>
      <span>${value}</span>
    `
    // total.innerHTML = `<span>${}</span>`
    selectedCardsContainer.appendChild(selectedCard)
    purchaseResult.appendChild(resultCard)
    modal.style.display = "block"
  }

  // Function to close the modal
  function closeModal() {
    purchaseResult.innerHTML = ""
    var result = document.getElementById('purchase-result')
    if(result){
      result.remove()
    }
    modal.style.display = "none"
  }
// closing event 
closeBtn.addEventListener("click", closeModal)
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

  // Attach click event listeners to the buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", openModal)
  }