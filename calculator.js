const $ = document.querySelector.bind(document)

$('#calculate').addEventListener('click', () => {
	const pot = $('#pot')
	const horas = $('#horas')
	if (!isNaN(pot.value) && !isNaN(horas.value)) {
		$('.alert').classList.remove('alert-error')
		$('#resultado').classList.add('alert-result')
		$('#resultado').textContent = `${pot.value * horas.value * 1000} kWh`
	} else {
		$('.alert').textContent = `Os dados digitados não são válidos`
		$('.alert').classList.add('alert-error')
	}
})