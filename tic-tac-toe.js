window.onload=function(){
   let xIsNext=true;
   scard=[];
   let squares=document.querySelectorAll('#board div');
   for(let i=0;i<squares.length;i++){
   squares[i].classList.add('square');
   squares[i].addEventListener('click',function(){
     console.log('Square ' + i + ' clicked');
     if (xIsNext){
       squares[i].classList.add('X');
       let playerx=squares[i].innerHTML='X';
       xIsNext=!xIsNext;
       scard+=i
       console.log(scard);
       scard+=',';
     }else{
       squares[i].classList.add('O');
       let playero=squares[i].innerHTML='O';
       xIsNext=!xIsNext;
       scard+=i
       console.log(scard);
       scard+=',';
     }

   });
   }
}
