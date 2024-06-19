let btn = document.getElementById('btn');
let first = document.getElementById('first');
let last = document.getElementById('last');
// console.log(last);

const setBackground = (event) => {
	first.style.backgroundColor = 'red';
	last.style.backgroundColor = 'blue';
};
btn.addEventListener('click', setBackground);
