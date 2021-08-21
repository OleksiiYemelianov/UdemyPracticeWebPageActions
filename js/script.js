/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// МОЙ КОД, КОТОРЫЙ Я ПИСАЛ БЕЗ ПОДСКАЗОК, ДРУГОЙ СПОСОБ (ЗАДАНИЯ 1-3)

// let adds = document.querySelectorAll('.promo__adv img'),
//     genre = document.querySelectorAll('.promo__genre'),
//     bgPromo = document.querySelector('.promo__bg'),
//     list = document.querySelectorAll('.promo__interactive-item');

//     adds.forEach(item => {
//         item.remove();
//     });

//     let divGenre = document.createElement('div');
//     divGenre.classList.add('promo__genre');
//     divGenre.textContent = 'ДРАМА';
    
//     genre.forEach(item => {
//         item.replaceWith(divGenre);
//     });
    
// bgPromo.style.cssText = 'background: url("img/bg.jpg")';

// list.forEach(item => {
//     item.remove();
// });

// movieDB.movies.sort();

let adds = document.querySelectorAll('.promo__adv img'),
    bgPromo = document.querySelector('.promo__bg'),
    genre = bgPromo.querySelector('.promo__genre'),
    Movielist = document.querySelector('.promo__interactive-list');
    
    adds.forEach(item => {
                item.remove();
            });


genre.textContent = 'ДРАМА';

bgPromo.style.backgroundImage = 'url("img/bg.jpg")';

Movielist.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    Movielist.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>
    `;
});






