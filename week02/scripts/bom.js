const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const del_butt = document.createElement('button');

li.textContent = input.value;
del_butt.textContent = '❌';

li.appendC(del_butt);

list.append(li);