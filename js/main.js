let open_btn = document.querySelector('.open-br');
let popup = document.querySelector('.popup');



open_btn.addEventListener('click', function() {
    
    popup.classList.add('df');

});

document.querySelector('.popup-close').addEventListener('click', function() {
    popup.classList.remove('df');
});


let popup__link = document.querySelector('.popup-block__link');
const LINK = 'https://t.me/+6pgdRIuHDpU2N2Ey';
popup__link.href = LINK;
