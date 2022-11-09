

let btn = document.querySelector("#btn");

btn.addEventListener( "click", function msg() {
  
  let n1 = document.querySelector("#a1");
  let n2 = document.querySelector("#a2");

  let v1 = n1.valueAsNumber;
  let v2 = n2.valueAsNumber;

  resp = ((v2/100)*v1);
  

  alert(resp)
   
} )

