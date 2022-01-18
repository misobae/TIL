const outputValue = document.getElementById("outputValue");

function printOutput(num){
	outputValue.innerText = num;
}

const number = document.getElementsByClassName('number');
for(let i = 0;i < number.length;i++){
  number[i].onclick = function(){
    printOutput(this.id);
  }
}