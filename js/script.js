// =======================================================================================
// Простой калькулятор

window.addEventListener('load', function () {
	let input1 = document.querySelector('.num1');
	let input2 = document.querySelector('.num2');
	let btnRun = document.querySelector('.btnRun');
	let resultBox = document.querySelector('.result');
	let operation = document.querySelector('.operation');
	let controls = [input1, input2, operation];
	let mathOps = {
		sum: (a, b) => a + b,
		sub: (a, b) => a - b,
		mult: (a, b) => a * b,
		div: (a, b) => a / b,
	};

	btnRun.addEventListener('click', () => {
		let num1 = Number(input1.value);
		let num2 = Number(input2.value);

		// let v = operation.value;
		// let fn = mathOps[v];
		// let total = fn(num1, num2);
		let total = mathOps[operation.value](num1, num2);

		if (isNaN(total)) {
			total = `Некорректный ввод`;
		}

		resultBox.innerHTML = total;

		controls.forEach((item) => {
			item.dataset.last = item.value;
		});

		btnRun.disabled = true;
	});

	input1.addEventListener('input', cleanInput);
	input2.addEventListener('input', cleanInput);

	controls.forEach((item) => {
		item.addEventListener('input', enableBtn);
	});

	function enableBtn() {
		btnRun.disabled = controls.every((item) => item.dataset.last === item.value);
	}

	function cleanInput() {
		this.value = this.value.match(/-?[0-9]+\.?[0-9]*/g)[0];
	}
});
