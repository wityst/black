let h1;
window.onload=function () {
	h1 = document.querySelector('h1');
	h1.addEventListener("click", function () {
		alert('click!');
	})
	h1.style.transition = 'add 0.3s';
	h1.style.cursor = 'pointer';

	let btn = document.querySelector('#btn');
	let name = document.querySelector('#name');
	btn.addEventListener('click',function (e) {
		e.preventDefault();
		console.log(name.value);
		return false;
	});
}