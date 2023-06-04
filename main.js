// Get the modal
var modal = document.getElementById("myModal")

// Get the button that opens the modal
var buttons = document.getElementsByClassName("myBtn")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

  // Get the selectedCards element inside the modal
  var selectedCardsContainer = document.getElementById("selectedCards");

  // Function to open the modal
  function openModal(event) {
    var card = event.currentTarget.parentElement
    var title = card.querySelector("h2").textContent
    var value = card.querySelector("span").textContent
    var imageSrc = card.querySelector("img").src
    console.log(value)
    var selectedCard = document.createElement("div")
    var total = document.createElement("span")
    selectedCard.className = "selectedCard"
    selectedCard.innerHTML = `
      <img src="${imageSrc}" alt="${title}">
      <h3>${title}</h3>
      <span>${value}</span>
    `
    // total.innerHTML = `<span>${}</span>`
    selectedCardsContainer.appendChild(selectedCard)
    modal.style.display = "block"
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none"
  }

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


  // Get the card elements
  var wood1 = document.getElementById("wood1")
  var wood2 = document.getElementById("wood2")
  var wood3 = document.getElementById("wood3")

  // Function to handle wood card click
  function handleCardClick(imageSrc, productName, value) {
    console.log("Image Source:", imageSrc)
    console.log("Product Name:", productName)
    console.log("Value:", value)
  }

  // Attach click event listeners to the cards
  wood1.addEventListener("click", function() {
    handleCardClick("lustres.jpg", "Lustre 1", 100)
  })

  wood2.addEventListener("click", function() {
    handleCardClick("lustres2.jpg", "Lustre 2", 150)
  })

  wood3.addEventListener("click", function() {
    handleCardClick("lustres3.jpg", "Lustre 3", 300)
  })