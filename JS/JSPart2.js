// Second part

var ClassPannerLine3 =document.getElementsByClassName("pannerline3");

function Clicklink(){
    for(let i=0;i<ClassPannerLine3.length;i++){
        
        ClassPannerLine3[i].addEventListener("mouseover", function(){
            ClassPannerLine3[i].style.color="rgb(78,160,209)";
        })
        ClassPannerLine3[i].addEventListener("mouseout",function(){
            ClassPannerLine3[i].style.color="Black";
        })
    }
}
Clicklink();

// Last part
var BWbutton =document.getElementsByClassName("BW-BTN");

function ClickBTN(){
    for(let i=0;i<BWbutton.length;i++){
        
        BWbutton[i].addEventListener("mouseover", function(){
            BWbutton[i].style.color="white";
            BWbutton[i].style.backgroundColor="black";
        })
        BWbutton[i].addEventListener("mouseout",function(){
            BWbutton[i].style.color="black";
            BWbutton[i].style.backgroundColor="white";
        })
    }
}
ClickBTN();


