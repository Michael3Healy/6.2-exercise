// const container = document.getElementById('container');
const container = document.querySelector('#container');
const lis = document.querySelectorAll('.second');
const third = document.querySelector('ol .third');

container.innerText = 'Hello!';

const div = document.querySelector('div.footer')
div.classList.add('main');
div.classList.remove('main');

let newLi = document.createElement('li');
newLi.innerText = 'four';
const list = document.querySelector('ul');
list.append(newLi);

const oLElements = document.querySelectorAll('ol li');

for (let elem of oLElements) {
    elem.style.backgroundColor = 'green';
}

const footer = document.querySelector('footer');
footer.remove();

