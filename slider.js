console.log(document.querySelector('.slider-arrow-left'))


window.onload = function(){
	let count = 1;
	let slider = document.getElementById("#slider");
	let slideContainer = document.querySelector('.slides');
	let slides = document.querySelectorAll('.slide');
	var width = 720;
	var op = 1;
	var top = 0;
	var pop = 0;
	let disabledClick = false;

	document.querySelector('.slider-arrow-right').addEventListener('click', function() {

		if (disabledClick  === true) {
			return false;
		}
		disabledClick  = true;

		let firstDot = document.querySelector('.dots'+op);
		firstDot.style['background-color'] = 'rgb(203, 203, 233)';
		firstDot.style['cursor'] = 'pointer';

		let sop = top;
		let start = Date.now(); 
		let timer = setInterval(function() {
			let timePassed = Date.now() - start;
			Promise.resolve().then(()=>{draw(timePassed)});
			if (timePassed >= width) {
				clearInterval(timer);
				return;
			}
		}, 1);

		function draw(timePassed) {
			slideContainer.style['margin-left'] = -(sop +timePassed) + 'px';
		}

		top += width;
		op ++;
		if(op == 6){
			slideContainer.style['margin-left'] = '0 px';
			op = 1;
			top = 0;
		}
		
		let secondDot = document.querySelector('.dots'+op);
		secondDot.style['background-color'] = 'rgb(154, 154, 165)';
		secondDot.style['cursor'] = 'auto';

		setTimeout(function () {
			disabledClick = false;
		}, 800);
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
			slideContainer.style['margin-left'] = '-3600 px';
			op = 5;
			top = width*5;
		}

		let sop = top;
		let start = Date.now(); 
		let timer = setInterval(function() {
			let timePassed = Date.now() - start;
			Promise.resolve().then(()=>{draw(timePassed)});
			if (timePassed >= width) {
				clearInterval(timer);
				return;
			}
		}, 1);

		function draw(timePassed) {
			slideContainer.style['margin-left'] = -(sop -timePassed) + 'px';
		}

		top -= width;
		let secondDot = document.querySelector('.dots'+op);
		secondDot.style['background-color'] = 'rgb(154, 154, 165)';
		secondDot.style['cursor'] = 'auto';

		setTimeout(function () {
			disabledClick = false;
		}, 800);
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

			let sop = top;
			let mer = width*(op-1);
			let start = Date.now(); 
			let timer = setInterval(function() {
				let timePassed = Date.now() - start;
				Promise.resolve().then(()=>{draw(timePassed)});
				if (timePassed >= mer) {
					clearInterval(timer);
					return;
				}
			}, 1);
	
			function draw(timePassed) {
				slideContainer.style['margin-left'] = -(sop - timePassed) + 'px';
			}
			
			setTimeout(function () {
				disabledClick = false;
			}, mer );

			top = 0;
			op = 1;

			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';
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
			top = width*(op-1);
			let sop = top;
			let mer;
			if(op > 2){
				mer = width*(op-2);
				let start = Date.now(); 
				let timer = setInterval(function() {
					let timePassed = Date.now() - start;
					Promise.resolve().then(()=>{draw(timePassed)});
					if (timePassed >= mer) {
						clearInterval(timer);
						return;
					}
				}, 1);
		
				function draw(timePassed) {
					slideContainer.style['margin-left'] = -(sop - timePassed) + 'px';
				}
			}else{
				mer = width;
				let start = Date.now(); 
				let timer = setInterval(function() {
					let timePassed = Date.now() - start;
					Promise.resolve().then(()=>{draw(timePassed)});
					if (timePassed >= mer) {
						clearInterval(timer);
						return;
					}
				}, 1);
		
				function draw(timePassed) {
					slideContainer.style['margin-left'] = -(sop + timePassed) + 'px';
				}
			}

			setTimeout(function () {
				disabledClick = false;
			}, mer);

			top = width;
			op = 2;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';
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
			top = width*(op-1);
			let sop = top;
			let mer;
			if(op > 3){
				mer = width*(op-3);
				let start = Date.now(); 
				let timer = setInterval(function() {
					let timePassed = Date.now() - start;
					Promise.resolve().then(()=>{draw(timePassed)});
					if (timePassed >= mer) {
						clearInterval(timer);
						return;
					}
				}, 1);
		
				function draw(timePassed) {
					slideContainer.style['margin-left'] = -(sop - timePassed) + 'px';
				}
			}else{
				mer = width*(3-op);
				let start = Date.now(); 
				let timer = setInterval(function() {
					let timePassed = Date.now() - start;
					Promise.resolve().then(()=>{draw(timePassed)});
					if (timePassed >= mer) {
						clearInterval(timer);
						return;
					}
				}, 1);
		
				function draw(timePassed) {
					slideContainer.style['margin-left'] = -(sop + timePassed) + 'px';
				}
			}

			setTimeout(function () {
				disabledClick = false;
			}, mer );

			top = width*2;
			op = 3;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';
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
			let mer;
			top = width*(op-1);
			let sop = top;
			if(op > 4){
				mer = width*(op-4);
				let start = Date.now(); 
				let timer = setInterval(function() {
					let timePassed = Date.now() - start;
					Promise.resolve().then(()=>{draw(timePassed)});
					if (timePassed >= mer) {
						clearInterval(timer);
						return;
					}
				}, 1);
		
				function draw(timePassed) {
					slideContainer.style['margin-left'] = -(sop - timePassed) + 'px';
				}
			}else{
				
				mer = width*(4-op);
				let start = Date.now(); 
				let timer = setInterval(function() {
					let timePassed = Date.now() - start;
					Promise.resolve().then(()=>{draw(timePassed)});
					if (timePassed >= mer) {
						clearInterval(timer);
						return;
					}
				}, 1);
		
				function draw(timePassed) {
					slideContainer.style['margin-left'] = -(sop + timePassed) + 'px';
				}
			}

			setTimeout(function () {
				disabledClick = false;
			},    mer );

			top = width*3;
			op = 4;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';
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
			
			
			let sop = top;
			let mer = width*(5-op);
			let start = Date.now(); 
			let timer = setInterval(function() {
				let timePassed = Date.now() - start;
				Promise.resolve().then(()=>{draw(timePassed)});
				if (timePassed >= mer) {
					clearInterval(timer);
					return;
				}
			}, 1);
	
			function draw(timePassed) {
				slideContainer.style['margin-left'] = -(sop + timePassed) + 'px';
			}


			setTimeout(function () {
				disabledClick = false;
			},  mer );

			top = width*4;
			op = 5;
			let secondDot = document.querySelector('.dots'+op);
			secondDot.style['background-color'] = 'rgb(154, 154, 165)';
			secondDot.style['cursor'] = 'auto';

		}
	})
}
