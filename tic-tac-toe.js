window.onload=function(){
     let xrow1=[0,1,2];
   let xIsNext=true;
   let winner=0;
   scard=[];
   let squares=document.querySelectorAll('#board div');
    let reset=document.querySelector('button');
     reset.addEventListener('click',function(){
      for(let r=0;r<squares.length;r++){
       squares[r].innerHTML="";
       squares[r].classList.remove('hover');
      } 
     document.getElementById("status").innerHTML="Move your mouse over a square and click to play an X or an O.";
     document.getElementById("status").classList.remove('you-won');
        
     
    });
     

      console.log(squares.length);
   for(let i=0;i<squares.length;i++){
   squares[i].classList.add('square');

   squares[i].addEventListener('mouseover',function(){
       squares[i].classList.add('hover');


   squares[i].addEventListener('click',function(){
     console.log('Square ' + i + ' clicked');    
     squares[i].classList.remove('hover');
      
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
     
      if (squares[0].innerHTML=='X' && squares[0].innerHTML==squares[1].innerHTML && squares[1].innerHTML==squares[2].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
       
      }else if (squares[0].innerHTML=='O' && squares[0].innerHTML==squares[1].innerHTML && squares[1].innerHTML==squares[2].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[3].innerHTML=='X' && squares[3].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[5].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[3].innerHTML=='O' && squares[3].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[5].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[6].innerHTML=='X' && squares[6].innerHTML==squares[7].innerHTML && squares[7].innerHTML==squares[8].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[6].innerHTML=='O' && squares[6].innerHTML==squares[7].innerHTML && squares[7].innerHTML==squares[8].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[0].innerHTML=='X' && squares[0].innerHTML==squares[3].innerHTML && squares[3].innerHTML==squares[6].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[0].innerHTML=='O' && squares[0].innerHTML==squares[3].innerHTML && squares[3].innerHTML==squares[6].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[1].innerHTML=='X' && squares[1].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[7].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[1].innerHTML=='O' && squares[1].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[7].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[2].innerHTML=='X' && squares[2].innerHTML==squares[5].innerHTML && squares[5].innerHTML==squares[8].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[2].innerHTML=='O' && squares[2].innerHTML==squares[5].innerHTML && squares[5].innerHTML==squares[8].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[0].innerHTML=='X' && squares[0].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[8].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[0].innerHTML=='O' && squares[0].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[8].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[2].innerHTML=='X' && squares[2].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[6].innerHTML ){
        document.getElementById("status").innerHTML="Congratulations! X is the Winner!";
        document.getElementById("status").classList.add('you-won');
      }else if (squares[2].innerHTML=='O' && squares[2].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[6].innerHTML){
        document.getElementById("status").innerHTML="Congratulations! O is the Winner!";
        document.getElementById("status").classList.add('you-won');

      
      }







      
   }); 
     
   });
   
   }
     
}

