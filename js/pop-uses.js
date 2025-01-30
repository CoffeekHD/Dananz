const popup = document.querySelector('.popup-success__wrapper')
const popupClose = document.querySelector('.close__element')
const background = document.querySelector('.overlay')

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup_active')
    background.classList.remove('_active')
})