window.onload=function(){
   let squares=document.querySelectorAll('#board div');
   var i;
   for(i=0;i<squares.length;i++){
   squares[i].classList.add('square');
   }
}
