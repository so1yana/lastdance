import '../less/style.scss'
import '../blocks/brands/brands'
import '../blocks/equipment/equipment'
import '../blocks/service/service'
import '../blocks/prices/prices'

let page = document.querySelector('.page')
let pageBurger = document.querySelector('.page__burger')
let modalBg = document.querySelector('.modal-bg')
let modalFeedback = document.querySelector('.modal-feedback')
let modalCall = document.querySelector('.modal-call')
let modalCloseButton = document.querySelector('.modal-close-button-container')
let buttonsFeedback = document.querySelectorAll('.circle-button-chat')
let buttonsCall = document.querySelectorAll('.circle-button-call')
let burgerBackdrop = document.querySelector('.burger-backdrop')
let burgerButton = document.querySelector('.circle-button-burger')
let burgerCloseButton = document.querySelector('.circle-button-close')
let expandButton = document.querySelectorAll('.expand-button')
let expandServiceText = document.querySelector('.service__text-text')
let expandBrandsWrapper = document.querySelector('.brands__swiper')
let expandEquipmentText = document.querySelector('.equipment__swiper')
let navigationServiceButtons = document.querySelectorAll('.service__slide-button')
let navigationBurgerButtons = document.querySelectorAll('.burger__nav-item')


let activateModalFeedback = function () {
  modalBg.classList.remove('modal-bg--hidden')
  modalFeedback.classList.remove('modal--hidden')
  modalCloseButton.classList.remove('circle-button--hidden')
  page.classList.add('modal--active')
}

let deactivateModalFeedback = function () {
  modalFeedback.classList.add('modal--hidden')
  modalBg.classList.add('modal-bg--hidden')
  modalCloseButton.classList.add('circle-button--hidden')
  page.classList.remove('modal--active')
}

let activateModalCall = function () {
  modalBg.classList.remove('modal-bg--hidden')
  modalCall.classList.remove('modal--hidden')
  modalCloseButton.classList.remove('circle-button--hidden')
  page.classList.add('modal--active')
}

let deactivateModalCall = function () {
  modalCall.classList.add('modal--hidden')
  modalBg.classList.add('modal-bg--hidden')
  modalCloseButton.classList.add('circle-button--hidden')
  page.classList.remove('modal--active')
}

let activateBurger = function () {
  pageBurger.classList.remove('burger--hidden')
  burgerBackdrop.classList.remove('burger-backdrop--hidden')
  page.classList.add('burger--active')
}

let deactivateBurger = function () {
  pageBurger.classList.add('burger--hidden')
  burgerBackdrop.classList.add('burger-backdrop--hidden')
  page.classList.remove('burger--active')
}

modalBg.addEventListener('click', function (evt) {
  if (modalFeedback.classList.contains('modal--hidden')) deactivateModalCall()
  if (modalCall.classList.contains('modal--hidden')) deactivateModalFeedback()
})

burgerBackdrop.addEventListener('click', function (evt) {
  if (window.screen.width >= 1440) return;
  if (this !== evt.target) return;
  deactivateBurger()
})

burgerButton.addEventListener('click', activateBurger)

burgerCloseButton.addEventListener('click', deactivateBurger)

modalCloseButton.addEventListener('click', function () {
  if (modalFeedback.classList.contains('modal--hidden')) deactivateModalCall()
  if (modalCall.classList.contains('modal--hidden')) deactivateModalFeedback()
})


let feedbackHandler = function (feedbackButton) {
  feedbackButton.addEventListener('click', activateModalFeedback)
}

let callHandler = function (callButton) {
  callButton.addEventListener('click', activateModalCall)
}

for (let i = 0; i < buttonsFeedback.length; i++) {
  feedbackHandler(buttonsFeedback[i])
}

for (let i = 0; i < buttonsCall.length; i++) {
  callHandler(buttonsCall[i])
}

let burgerHandler = function() {
  if (window.screen.width >= 1440) activateBurger()
  else deactivateBurger()
}
let navButtonHandler = function (elem) {
  elem.addEventListener('click', function () {
    for (let i = 0; i < navigationServiceButtons.length; i++) {
      let curButton = navigationServiceButtons[i];
      if (curButton.classList.contains('service__slide-button--active')) {
        curButton.classList.remove('service__slide-button--active');
      }
    }
    elem.classList.add('service__slide-button--active');
  })
}

for (let i = 0; i < navigationServiceButtons.length; i++) {
  navButtonHandler(navigationServiceButtons[i]);
}

let navBurgerButtonHandler = function (elem) {
  elem.addEventListener('click', function () {
    for (let i = 0; i < navigationBurgerButtons.length; i++) {
      let curButton = navigationBurgerButtons[i];
      if (curButton.classList.contains('burger__nav-item--active')) {
        curButton.classList.remove('burger__nav-item--active');
      }
    }
    elem.classList.add('burger__nav-item--active');
  })
}

for (let i = 0; i < navigationBurgerButtons.length; i++) {
  navBurgerButtonHandler(navigationBurgerButtons[i]);
}

let expandHandler = function (expand) {
  let text = this.querySelector('.expand-button__text').textContent;
  let defaultText = 'Показать все'
  if (this.classList.contains('service__expand-button')) {
    defaultText = 'Читать далее'
    expandServiceText.classList.toggle('service__text--cutted')
  } else if (this.classList.contains('brands__expand-button')) {
    expandBrandsWrapper.classList.toggle('brands__swiper--cutted')
  } else if (this.classList.contains('equipment__expand-button')) {
    expandEquipmentText.classList.toggle('equipment__swiper--cutted')
  }
  if (text === 'Читать далее' || text === 'Показать все') {
    this.querySelector('.expand-button__text').textContent = 'Скрыть'
  } else this.querySelector('.expand-button__text').textContent = defaultText
  this.querySelector('.expand-button__icon').classList.toggle('expand-button__icon--reverse')
}

window.matchMedia('(min-width:1440px)').addListener(burgerHandler)

burgerHandler()

for (let i = 0; i < expandButton.length; i++) {
  expandButton[i].addEventListener('click', expandHandler)
}

console.log('Works!')
