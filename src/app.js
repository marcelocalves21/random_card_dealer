
const changeNumber = () => {
  let allCardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  let randomCard = Math.floor(Math.random() * 14)
  let cardNumber = allCardNumbers[randomCard]
  document.querySelector('.number').textContent = cardNumber
}

const changeImage = () =>{
  let allCardSymbol = [1, 2, 3, 4]
  let randomSymbol = Math.floor(Math.random() * 4)
  let cardSymbol = allCardSymbol[randomSymbol]
  switch (cardSymbol){
    case 1 :
      document.querySelector('.img').src='./assets/img/heart 200x200.png'
      document.querySelector('.img2').src='./assets/img/heart 200x200.png'
      break
    case 2 :
      document.querySelector('.img').src='./assets/img/diamond 200x200.png'
      document.querySelector('.img2').src='./assets/img/diamond 200x200.png'
      break
    case 3 :
      document.querySelector('.img').src='./assets/img/spades 200x200.png'
      document.querySelector('.img2').src='./assets/img/spades 200x200.png'
      break
    case 4 :
      document.querySelector('.img').src='./assets/img/clubs 200x200.png'
      document.querySelector('.img2').src='./assets/img/clubs 200x200.png'
      break
    default:
      break

  }
}

const changeCard = () =>{
  changeNumber()
  changeImage()
}