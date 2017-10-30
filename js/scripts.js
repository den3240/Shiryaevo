var btnOpen = document.querySelector('.order-btn');

var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal-search-form');
var wrapperDate = modal.querySelectorAll('.wrapper-date');
var wrapperNumberAdults = modal.querySelector('.wrapper-number-adults');
var wrapperNumberChildren = modal.querySelector('.wrapper-number-children');
var btnSearch = modal.querySelector('.btn-search');
var btnClose = modal.querySelector('button');

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (modal.classList.contains('modal-search-form-open')) {
    overlay.classList.add('overlay-close');
    modal.classList.add('modal-search-form-close');
    wrapperDate[0].classList.add('wrapper-date-close');
    wrapperDate[1].classList.add('wrapper-date-close');
    wrapperNumberAdults.classList.add('close-block');
    wrapperNumberChildren.classList.add('close-block');
    btnSearch.classList.add('btn-search-close');
    
    modal.classList.remove('modal-search-form-open');
    wrapperDate[0].classList.remove('wrapper-date-open');
    wrapperDate[1].classList.remove('wrapper-date-open');
    wrapperNumberAdults.classList.remove('open-block');
    wrapperNumberChildren.classList.remove('open-block');
    btnSearch.classList.remove('btn-search-open');
  }
});

btnOpen.addEventListener('click', function (event) {
  event.preventDefault();
  if (modal.classList.contains('modal-search-form-close')) {
    modal.classList.add('modal-search-form-open');
    wrapperDate[0].classList.add('wrapper-date-open');
    wrapperDate[1].classList.add('wrapper-date-open');
    wrapperNumberAdults.classList.add('open-block');
    wrapperNumberChildren.classList.add('open-block');
    btnSearch.classList.add('btn-search-open');
    
    overlay.classList.remove('overlay-close');
    modal.classList.remove('modal-search-form-close');
    wrapperDate[0].classList.remove('wrapper-date-close');
    wrapperDate[1].classList.remove('wrapper-date-close');
    wrapperNumberAdults.classList.remove('close-block');
    wrapperNumberChildren.classList.remove('close-block');
    btnSearch.classList.remove('btn-search-close');
  }
});

overlay.addEventListener('click', function (event) {
  if (modal.classList.contains('modal-search-form-open')) {
    overlay.classList.add('overlay-close');
    modal.classList.add('modal-search-form-close');
    wrapperDate[0].classList.add('wrapper-date-close');
    wrapperDate[1].classList.add('wrapper-date-close');
    wrapperNumberAdults.classList.add('close-block');
    wrapperNumberChildren.classList.add('close-block');
    btnSearch.classList.add('btn-search-close');
    
    modal.classList.remove('modal-search-form-open');
    wrapperDate[0].classList.remove('wrapper-date-open');
    wrapperDate[1].classList.remove('wrapper-date-open');
    wrapperNumberAdults.classList.remove('open-block');
    wrapperNumberChildren.classList.remove('open-block');
    btnSearch.classList.remove('btn-search-open');
  }
});