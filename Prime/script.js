const input = document.getElementById("input");
const res = document.getElementById("result");
const re = document.getElementById("res");
function prime() {
  if (input.value === "") {
    input.style.borderColor = "red";
    re.textContent = "Error";
    return;
  }
  let n = parseInt(input.value);
  if (isNaN(n)) {
    return;
  }
  if (n === 0 || n === 1) {
    res.value = "not prime";
    return;
  }
  let i = 2;
  let prime = true;
  while (i <= n / 2 && prime ) {
    if (n % i === 0) {
      prime = false;
    }
    i++;
  }
  if (!prime) {
    res.value = "not prime";
    return ;
  } 
    res.value = "prime";
  
}
function erase() {
  input.value = "";
  res.value = "";
  input.style.borderColor = "black";
  re.textContent = " ";
}
