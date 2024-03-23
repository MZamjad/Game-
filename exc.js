let boxess = document.querySelectorAll(".box");
let buttonsStart = document.querySelector(".Start");
let TurnO = true; //playerX or PlayerO
let buttonrests = document.querySelector(".amjad");

let winmsg = document.querySelector(".massage");
let alertMsg = document.querySelector(".alert");


buttonsStart.addEventListener("click", () =>{

  dissableboxes();

 
})

let conntainners = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [3,4,5],
  [6,7,8],

];
let x =0;


boxess.forEach((box) => {
    box.addEventListener("click",()=>{

      if(TurnO){
        box.innerText ="O";
        TurnO = false
        box.classList.add("clicked");
      }
      else{
        box.innerText = "X";
        TurnO= true;
        box.classList.add("hite");
      }
      box.disabled = true;
      console.log("box was clicked");
      x++;
      console.log(x);


      chckWinner();
     
    })

})



const chckWinner = () =>{
  for (let containner of conntainners){

   // console.log(containner[0],containner[1]);
  
    let pos1val = boxess[containner[0]].innerText;
    let pos1va2 = boxess[containner[1]].innerText;
    let pos1va3 = boxess[containner[2]].innerText;
    
    
   
  
    if ( pos1val != "" && pos1va2 !="" && pos1va3 != "" ){
  
     if(pos1val === pos1va2 && pos1va2=== pos1va3){
      
      winmsg.innerText= "Congratulation, "+"player "+
      pos1va3+" is the winner";

      winmsg.classList.add("massage");
      buttonsStart.classList.remove("hidden");
      alertMsg.classList.add("hiden");
      buttonrests.classList.add("hidene");
      box.classList.remove("Boxx");
      for (box of boxess){
        box.disabled = true;
      }
        

    
      
     }
     else if (x>8){
      alertMsg.classList.remove("hiden");
      buttonrests.classList.remove("hidene");
      alertMsg.innerText="Try next better luck";
     }
     
    }
  
  }
  }
  
const dissableboxes =() =>{
  for (box of boxess){
    box.disabled = false;
  
  
    box.innerText ="";
    TurnO=true;
    box.classList.remove("hite");
    box.classList.remove("clicked");
    
    winmsg.classList.remove("massage");
    buttonsStart.classList.add("hidden");
    alertMsg.classList.add("hiden");
      buttonrests.classList.add("hidene");
  }

    x = 0;
    
    
  }
 

buttonrests.addEventListener("click", () => {
  
  dissableboxes();
});


 
