const decrease = document.getElementById("btnDecrease");
const reset = document.getElementById("btnReset");
const increase = document.getElementById("btnIncrease");
const countNumber = document.getElementById("count_number");

let count = 0;

decrease.onclick=function(){
	count --;
	countNumber.textContent = count;
}

reset.onclick=function(){
	count =0;
	countNumber.textContent = count;
}

increase.onclick=function(){
	count ++;
	countNumber.textContent = count;
}