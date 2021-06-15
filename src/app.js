
const changeCard = () => {
  let cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
  let cardSymbol = [1, 2, 3, 4]
  let randomCard = Math.floor(Math.random() * 14)
  let randomSymbol = Math.floor(Math.random() * 4)
  let finalCard = [cardNumbers[randomCard], cardSymbol[randomSymbol]]
  document.querySelector('#number').textContent = finalCard[0]
}
