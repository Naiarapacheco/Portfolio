const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show--modal');
const btnCloseModal = document.querySelector('.close--modal');

//MODAL CONTACT
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', function(){
    openModal();
});

btnCloseModal.addEventListener('click', function(){
    closeModal();
});

//SCROLL
document.getElementById('scrollTo').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

//GET CURRENT YEAR
const year = new Date();
const current_year = year.getFullYear();
document.querySelector('#year').textContent += current_year;

//ABOUT
let tabLinks = document.getElementsByClassName('tab__links');
let tabContents = document.getElementsByClassName('tab__contents');

function openTab(event, nomeAba) {
    event.preventDefault();

    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active_link');
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active_content');
    }
    
    event.currentTarget.classList.add('active_link');
    document.getElementById(nomeAba).classList.add('active_content');
}

