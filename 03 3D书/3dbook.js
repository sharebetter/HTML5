function turn(n){
	var isTurn = document.querySelectorAll('div')[n].getAttribute('data-turn');
	if(isTurn == 0){
		for(var i = 0;i < n;i++){
			isTurn = document.querySelectorAll('div')[i].getAttribute('data-turn');
			if(isTurn == 0){
				return;
			}
		}
		document.querySelectorAll('div')[n].style.transform = 'rotateY(-' + 10 * (18 - n) + 'deg)';
		document.querySelectorAll('div')[n].setAttribute('data-turn', '1')
	}else{
		for(var i = 4;i > n;i--){
			console.log(i)
			isTurn = document.querySelectorAll('div')[i].getAttribute('data-turn');
			console.log(isTurn)
			if(isTurn == 1){
				return;
			}
		}
		document.querySelectorAll('div')[n].style.transform = 'rotateY(-' + 10 * (5 - n) + 'deg)';
		document.querySelectorAll('div')[n].setAttribute('data-turn', '0');
	}
}
