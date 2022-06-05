var ArrofTB=document.getElementsByClassName("TextBoxes");
function ColorBorders(){
    for(let i=0;i<ArrofTB.length;i++){
        ArrofTB[i].addEventListener("click",()=>{
            for(let j=0;j<ArrofTB;j++){
                if(i==j)
                ArrofTB[i].style.borderColor= "rgb(" +0+ "," +57+ "," +83+ ")";
                else
                ArrofTB[i].style.borderColor= "rgb(" +211+ "," +206+ "," +206+ ")";
                
            }
          

        })
        
    }
}
ColorBorders();
var ArrofA=document.getElementsByTagName("a");
function UnderlineA(){
    for(let i=0;i<ArrofA.length;i++){
        ArrofA[i].addEventListener("mouseover",()=>{
            ArrofA[i].style.textDecoration = "underline";
        })
        ArrofA[i].addEventListener("mouseout",()=>{
            ArrofA[i].style.textDecoration = "none";
        })
    }
}
UnderlineA();
