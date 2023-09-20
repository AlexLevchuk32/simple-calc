// =======================================================================================
// Простой калькулятор

window.addEventListener('load', function () {
	let input1 = document.querySelector('.num1');
	let input2 = document.querySelector('.num2');
	let btnRun = document.querySelector('.btnRun');
	let resultBox = document.querySelector('.result');
	let operation = document.querySelector('.operation');

	btnRun.addEventListener('click', () => {
		let num1 = Number(input1.value);
		let num2 = Number(input2.value);
		let total;

		switch (operation.value) {
			case 'sum':
				total = num1 + num2;
				break;
			case 'sub':
				total = num1 - num2;
				break;
			case 'mult':
				total = num1 * num2;
				break;
			case 'div':
				total = num1 / num2;
				break;
		}

		if (isNaN(total)) {
			total = `Некорректный ввод`;
		}

		resultBox.innerHTML = total;
		input1.dataset.last = input1.value;
		input2.dataset.last = input2.value;
		operation.dataset.last = operation.value;
		btnRun.disabled = true;
	});

	input1.addEventListener('input', cleanInput);
	input2.addEventListener('input', cleanInput);

	[input1, input2, operation].forEach((item) => {
		item.addEventListener('input', enableBtn);
	});

	function enableBtn() {
		btnRun.disabled =
			input1.dataset.last === input1.value &&
			input2.dataset.last === input2.value &&
			operation.dataset.last === operation.value;
	}

	function cleanInput() {
		// this.value = this.value.replace(/[^0-9]/g, '');
		this.value = this.value.match(/-?[0-9]+\.?[0-9]*/g)[0];
	}
});
