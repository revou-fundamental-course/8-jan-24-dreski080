var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

document
	.getElementById('handleHitungKeliling')
	.addEventListener('click', function () {
		if (num1 !== '') {
			var res = parseInt(num1.value) * parseInt(4);
			console.log('keliling persegi', res);
			document.getElementById('textHitungKeliling').innerHTML =
				'K = 4 x ' + num1.value;
			document.getElementById('textHasilKeliling').innerHTML = 'K = ' + res;
		} else {
			console.log('Silahkan memasukkan angka');
		}
	});

document
	.getElementById('handleResetKeliling')
	.addEventListener('click', function () {
		if (num1 !== '') {
			num1.value = '';
			document.getElementById('textHitungKeliling').innerHTML = 'K = 4 x ***';
			document.getElementById('textHasilKeliling').innerHTML = 'K = ***';
		} else {
			console.log('Data inputan kosong');
		}
	});

document
	.getElementById('handleHitungLuas')
	.addEventListener('click', function () {
		if (num2 !== '') {
			var res = parseInt(num2.value) * parseInt(num2.value);
			console.log('luas persegi', res);
			document.getElementById('textHitungLuas').innerHTML =
				'L = ' + num2.value + ' x ' + num2.value;
			document.getElementById('textHasilLuas').innerHTML = 'L = ' + res;
		} else {
			console.log('Silahkan memasukkan angka');
		}
	});

document
	.getElementById('handleResetLuas')
	.addEventListener('click', function () {
		if (num2 !== '') {
			num2.value = '';
			document.getElementById('textHitungLuas').innerHTML = 'L = *** x ***';
			document.getElementById('textHasilLuas').innerHTML = 'L = ***';
		} else {
			console.log('Data inputan kosong');
		}
	});
