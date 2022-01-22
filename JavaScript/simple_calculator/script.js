const outputValue = document.getElementById('outputValue');
const historyValue = document.getElementById('historyValue');

function getOutput(){
	return outputValue.innerText;
}

function getHistory(){
	return historyValue.innerText;
}

function printOutput(num){
	if(num === ''){
		outputValue.innerText = num;
	} else{
		outputValue.innerText = getFormattedNumber(num);
	}	
}

function printHistory(num){
	historyValue.innerText = num;
}

function getFormattedNumber(num){
	if(num === '-'){
		return '';
	}
	// 숫자 천 단위에 콤마 넣기
	const value = new Intl.NumberFormat().format(num);
	return value;
}

function reverseNumberFormat(num){
	// g flag(/regexp/g): 표현식을 만족시키는 패턴이 한 개 이상 있는지 검사
	return Number(num.replace(/,/g,''));
}

const btnNumber = document.getElementsByClassName('number');
for(let i = 0;i < btnNumber.length;i++){
  btnNumber[i].onclick = function(){
    let output = reverseNumberFormat(getOutput());
		if(output != NaN){
			output = output + this.id;
			printOutput(output);
		}
  }
}

const btnOperator = document.getElementsByClassName('operator');
for(let i = 0;i < btnOperator.length;i++){
	btnOperator[i].onclick = function(){
		if(this.id === 'clear'){
			printOutput('');
			printHistory('');
		} else if(this.id === 'backspace'){
			let output = reverseNumberFormat(getOutput()).toString();
			if(output){ // output에 값이 있다면
				output = output.substr(0, output.length - 1);
				printOutput(output);
			}
		} else {
			let output = getOutput();
			let history = getHistory();
			if(output === '' && history != ''){
				if(isNaN(history[history.length - 1])){
					history = history.substr(0, history.length - 1);
				}
			}

			if(output != '' || history != ''){
				output = output === '' ? output : reverseNumberFormat(output);
				history = history  + output;
				if(this.id === '='){
					const result = Function('"use strict";return (' + history + ')')();
					printOutput(result);
					printHistory('');
				} else{
					history = history + this.id;
					printHistory(history);
					printOutput('');
				}
			}
		}
	}
}