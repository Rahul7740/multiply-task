let score = document.querySelector(".score");
let h2 = document.querySelector(".heading2");
let submit = document.querySelector(".submit");
rndom()
let sum = 0;
score.innerHTML = "score " + sum;
function rndom() {
    let firstRendom = Math.floor(Math.random() * 10);
    let SecondRendom = Math.floor(Math.random() * 8);
    h2.innerHTML ="what is " + firstRendom + " multiply by " + SecondRendom + "?";
    multi = firstRendom * SecondRendom;
    console.log(multi);
}
submit.addEventListener("click", (event) => {
    event.preventDefault()
    let input = document.querySelector(".input");
    

  if (multi == input.value) {
    sum += 1;
    score.innerHTML = "score " + sum;
  }
  else{
    sum -= 1;
    score.innerHTML = "score " + sum;
    
  }
  rndom()
  input.value = ""
});
