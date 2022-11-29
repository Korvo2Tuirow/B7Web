function clicou(){
    const teste =document.querySelector('#teste');
   console.log(teste.children[0].children);
   const ul = teste.querySelector('ul');
   console.log(ul);

   const teste2 = document.querySelector('#teste2');
   const ul2 = teste2.querySelector('ul');
   ul2.innerHTML = "<li> Item alterado</li>";


  const teste3 = document.querySelector('#teste3');
  const ul3 = teste3.querySelector('ul');
  ul3.innerHTML += ul3.innerHTML + "<li><strong>Item alterado2</strong></li>";
  ul3.children[1].innerText =  "<li><strong>Item alterado2</strong></li>";
  
  const teste4 = document.querySelector('#teste4');
  const ul4 = teste4.querySelector('ul');
  ul4.children[0].append(" ola") // concatena
  ul4.append("ola")

  const teste5 = document.querySelector('#teste5');
  const ul5 = teste5.querySelector('ul');
  let newLi = document.createElement("li");
  newLi.innerText = "item novo";
  ul5.appendChild(newLi);

  let newText = document.createElement("h1");
  newText.innerText = "Texto novo";
  ul5.prepend(newText);

let btn = document.createElement("button");
  btn.innerText = "olha eu ae";
  ul3.after(btn);

  const newUl = document.createElement("ul");

  for(let i = 0; i <5; i++){
   let newLi2 = document.createElement("li");
   newLi2.innerHTML = "item adicionado" + i;
   newUl.append(newLi2);
  }
  
  ul5.after(newUl);
  
  
 }   

//after = depois
   //before = antes
/////////////////////////////////////////////  

  







