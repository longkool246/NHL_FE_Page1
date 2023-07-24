const headerBars = document.querySelector('.header__bars')
const overlay = document.querySelector('.header__overlay')
const navigation = document.querySelector('.navigation')

headerBars.addEventListener('click', () => {
  overlay.classList.toggle('show-overlay')
  navigation.classList.toggle('show-menu')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('show-overlay')
  navigation.classList.remove('show-menu')
})