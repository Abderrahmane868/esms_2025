const input = document.getElementById("display");
const firstbase = document.getElementById("base-from");
const secondbase = document.getElementById("base-to");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
function isbase(a, b) {
  let find = true;
  let i;
  while (a != 0 && find === true) {
    i = a % 10;
    if (i >= b) {
      find = false;
    }
    a = Math.trunc(a / 10);
  }
  return find;
}
function swap() {
  a = firstbase.value;
  b = secondbase.value;
  firstbase.value = b;
  secondbase.value = a;
}
function test() {
  a = input.value;
  if(!Number(a)) {
    input.style.backgroundColor = "#d94d4d";
    return ; 
  }
 
  b = firstbase.value;
  const res = isbase(a, b);
  const temp = res;
  if (!res) {
    input.style.backgroundColor = "#d94d4d";
  } else {
    input.style.backgroundColor = "#ffff";
  }
  return temp;
}
function get() {
  let state = test();
  result.value = state;
  if (state) {
    input.style.backgroundColor = "white";
  }
}
function erase() {
  input.value = "";
  result.value = "";

  input.style.backgroundColor = "#ffff";
}

function power(a, b) {
  let p = 1;
  for (let i = 0; i < b; i++) {
    p = p * a;
  }
  return p;
}

function toten(n, b) {
  let res = 0;
  let pos = 0;
  let d;
  while (n != 0) {
    d = n % 10;
    res = res + d * power(b, pos);
    pos++;
    n = Math.trunc(n / 10);
  }
  return res;
}

function change(n, b) {
  let pos = 0;
  let res = 0;
  let d;
  while (n != 0) {
    d = n % b;
    res = res + d * power(10, pos);
    pos = pos + 1;
    n = Math.trunc(n / b);
  }
  return res;
}

function transform() {
  let state = test();
  if (state === true) {
    a = input.value;
    b = firstbase.value;
    c = secondbase.value;
    let res = toten(a, b);
    let final = change(res, c);
    result.value = final;
  } else {
    result.value = "";
  }
}
