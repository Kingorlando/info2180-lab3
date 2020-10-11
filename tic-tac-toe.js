
const btnDiv=document.querySelector('.btn');
const squareDivs=document.querySelectorAll('.square');

let gameisLive=true;
let xIsNext=true;


const entry=(e)=>{
   const location=e.target.classList[1];
   
   if (e.target.classList[2]=='x' || e.target.classList[2]=='o'){
     return;
   }
   
   if (xIsNext){
   e.target.classList.add('x');
   xIsNext=!xIsNext;
   }else{
   e.target.classList.add('o');
   xIsNext=!xIsNext;
   }
};



for (const squareDiv of squareDivs){
  squareDiv.addEventListener('click',entry)
}