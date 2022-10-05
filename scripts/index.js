import View from './View.js';
import Client from './Client.js';
const view = new View();
const client = new Client();
const list = [];
if (localStorage.getItem('list'))
    list.push(...localStorage.getItem('list'));
for (movie of list) {
    client.getMovieData(movie).then(data =>
        view.displayMovieOnPage(data))
}
document.querySelector('.buttons').addEventListener('click', e => {
    if (e.target.classList.contains('btn-save')) {
        localStorage.setItem('list', list);
    }
    else if (e.target.classList.contains('btn-reset')) {
        list.length = 0;
        localStorage.removeItem('list');
    }
})
input = document.querySelector('#input');
document.querySelector('#input').addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        let movie = input.value;
        if (movie) {
            client.getMovieData(movie)
                .then(data => {
                    list.push(data);
                    view.displayMovieOnPage(data);
                });
        }
    }
})