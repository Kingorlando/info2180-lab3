window.onload=function(){
     let xrow1=[0,1,2];
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
      if (squares[0].innerHTML==squares[1].innerHTML && squares[1].innerHTML==squares[2].innerHTML){
        console.log('x wins');
      }
     function Board(){
       this.positions=Array.from(document.querySelectorAll('.square'));
       
         this.checkwinner=function(){
         let winner=false;
          const wcombo=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
          ];
          const positions=this.positions;
          wcombo.forEach((combo)=>{
            const pos0innertext=positions[wcombo[0]].innerText;
            const pos1innertext=positions[wcombo[1]].innerText;
            const pos2innertext=positions[wcombo[2]].innerText;
            const isWcombo=pos0innertext!=='' && pos0innertext==pos1innertext && pos1innertext==pos2innertext;
            
            if (isWcombo){
              winner=true;
              combo.forEach((index)=>{
                positions[index].className+='winner';
              })
            }
          });
          return winner;
       }
     }
     
   });
   }
}
