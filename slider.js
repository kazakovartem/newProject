console.log(document.querySelector('.slider-arrow-left'))


window.onload = function(){
	let count = 1;
	let slider = document.getElementById("#slider");
	let slideContainer = document.querySelector('.slides');
	let slides = document.querySelectorAll('.slide');
	var width = 720;
	var op = 1;
	var top = 0;
	let disabledClick = false;

	document.querySelector('.slider-arrow-right').addEventListener('click', function() {

		if (disabledClick  === true) {
			return false;
		}
		disabledClick  = true;

		let firstDot = document.querySelector('.dots'+op);
		firstDot.style['background-color'] = 'rgb(203, 203, 233)';
		firstDot.style['cursor'] = 'pointer';
		

		let animation = slideContainer.animate([
			{transform: 'translateX(' + - (top ) + 'px)'},
			{transform: 'translateX(' + - (top + width ) + 'px)'},
		],{
			duration: 700,
		});
		animation.addEventListener('finish', function() {
			slideContainer.style.transform = 'translateX(' + - (top ) + 'px)';
		});
		top += width;
		op ++;
		if(op == 6){
			slideContainer.style.transform = 'translateX(0)';
			op = 1;
			top = 0;
		}
		
		let secondDot = document.querySelector('.dots'+op);
		secondDot.style['background-color'] = 'rgb(154, 154, 165)';
		secondDot.style['cursor'] = 'auto';

		setTimeout(function () {
			disabledClick = false;
		}, 1000);
	});


	document.querySelector('.slider-arrow-left').addEventListener('click', function() {
		if (disabledClick  === true) {
			return false;
		}
		disabledClick  = true;

		let firstDot = document.querySelector('.dots'+op);
		firstDot.style['background-color'] = 'rgb(203, 203, 233)';
		firstDot.style['cursor'] = 'pointer';
		op --;
		if(op <= 0){
			slideContainer.style.transform = 'translateX(3600px )';
			op = 5;
			top = width*5;
		}
		
		let animation = slideContainer.animate([
			{transform: 'translateX(' +  - (top ) + 'px)'},
			{transform: 'translateX(' +  - (top - width ) + 'px)'},
		], 700);
		animation.addEventListener('finish', function() {
			slideContainer.style.transform = 'translateX(' + -(top ) + 'px)';
		});
		top -= width;
		let secondDot = document.querySelector('.dots'+op);
		secondDot.style['background-color'] = 'rgb(154, 154, 165)';
		secondDot.style['cursor'] = 'auto';

		setTimeout(function () {
			disabledClick = false;
		}, 1000);
	});

	document.querySelector('.dots1').addEventListener('click', function() {
		if(op != 1){
			if (disabledClick  === true) {
				return false;
			}
			disabledClick  = true;

			let firstDot = document.querySelector('.dots'+op);
			firstDot.style['background-color'] = 'rgb(203, 203, 233)';
			firstDot.style['cursor'] = 'pointer';

			top = width*(op-1);
			console.log(top);
			let animation = slideContainer.animate([
				{transform: 'translateX(' +  - (top ) + 'px)'},
				{transform: 'translateX(' +  - (top - width*(op-1) ) + 'px)'},
			], 700);
			animation.addEventListener('finish', function() {
				slideContainer.style.transform = 'translateX(' + - (0) + 'px)';
			});
			top = 0;
			op = 1;

			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';

			setTimeout(function () {
				disabledClick = false;
			}, 1000);
		}
	})
	document.querySelector('.dots2').addEventListener('click', function() {
		if(op != 2){
			if (disabledClick  === true) {
				return false;
			}
			disabledClick  = true;

			let firstDot = document.querySelector('.dots'+op);
			firstDot.style['background-color'] = 'rgb(203, 203, 233)';
			firstDot.style['cursor'] = 'pointer';

			if(op > 2){
				top = width*(op-1);
				let animation = slideContainer.animate([
					{transform: 'translateX(' +  - (top ) + 'px)'},
					{transform: 'translateX(' +  - (top + width*(2 - op) ) + 'px)'},
				], 700);
				animation.addEventListener('finish', function() {
					slideContainer.style.transform = 'translateX(' + -(width) + 'px)';
				});
			}else{
				top = width*(op-1);
				let animation = slideContainer.animate([
					{transform: 'translateX(' +  - (top ) + 'px)'},
					{transform: 'translateX(' +  - (top - width*(op-2) ) + 'px)'},
				], 700);
				animation.addEventListener('finish', function() {
					slideContainer.style.transform = 'translateX(' + - (width) + 'px)';
				});
			}

			top = width;
			op = 2;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';

			setTimeout(function () {
				disabledClick = false;
			}, 1000);
		}
	})
	document.querySelector('.dots3').addEventListener('click', function() {
		if(op != 3){
			if (disabledClick  === true) {
				return false;
			}
			disabledClick  = true;

			let firstDot = document.querySelector('.dots'+op);
			firstDot.style['background-color'] = 'rgb(203, 203, 233)';
			firstDot.style['cursor'] = 'pointer';

			if(op > 3){
				top = width*(op-1);
				let animation = slideContainer.animate([
					{transform: 'translateX(' +  - (top ) + 'px)'},
					{transform: 'translateX(' +  - (top + width*(3 - op) ) + 'px)'},
				], 700);
				animation.addEventListener('finish', function() {
					slideContainer.style.transform = 'translateX(' + -(width*2) + 'px)';
				});
			}else{
				top = width*(op-1);
				let animation = slideContainer.animate([
					{transform: 'translateX(' +  - (top ) + 'px)'},
					{transform: 'translateX(' +  - (top - width*(op-3) ) + 'px)'},
				], 700);
				animation.addEventListener('finish', function() {
					slideContainer.style.transform = 'translateX(' + - (width*2) + 'px)';
				});
			}

			top = width*2;
			op = 3;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';

			setTimeout(function () {
				disabledClick = false;
			}, 1000);
		}
	})
	document.querySelector('.dots4').addEventListener('click', function() {
		if(op != 4){
			if (disabledClick  === true) {
				return false;
			}
			disabledClick  = true;

			let firstDot = document.querySelector('.dots'+op);
			firstDot.style['background-color'] = 'rgb(203, 203, 233)';
			firstDot.style['cursor'] = 'pointer';
			if(op > 4){
				top = width*(op-1);
				let animation = slideContainer.animate([
					{transform: 'translateX(' +  - (top ) + 'px)'},
					{transform: 'translateX(' +  - (top + width*(4 - op) ) + 'px)'},
				], 700);
				animation.addEventListener('finish', function() {
					slideContainer.style.transform = 'translateX(' + -(width*3) + 'px)';
				});
			}else{
				top = width*(op-1);
				let animation = slideContainer.animate([
					{transform: 'translateX(' +  - (top ) + 'px)'},
					{transform: 'translateX(' +  - (top - width*(op-4) ) + 'px)'},
				], 700);
				animation.addEventListener('finish', function() {
					slideContainer.style.transform = 'translateX(' + - (width*3) + 'px)';
				});
			}
			
			top = width*3;
			op = 4;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';

			setTimeout(function () {
				disabledClick = false;
			}, 1000);
		}
	})
	document.querySelector('.dots5').addEventListener('click', function() {
		if(op != 5){
			if (disabledClick  === true) {
				return false;
			}
			disabledClick  = true;
			
			let firstDot = document.querySelector('.dots'+op);
			firstDot.style['background-color'] = 'rgb(203, 203, 233)';
			firstDot.style['cursor'] = 'pointer';

			top = width*(op-1);
			let animation = slideContainer.animate([
				{transform: 'translateX(' +  - (top ) + 'px)'},
				{transform: 'translateX(' +  - (top + width*(5 - op) ) + 'px)'},
			], 700);
			animation.addEventListener('finish', function() {
				slideContainer.style.transform = 'translateX(' + -(width*4) + 'px)';
			});
			
			top = width*4;
			op = 5;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';

			setTimeout(function () {
				disabledClick = false;
			}, 1000);
		}
	})
}
