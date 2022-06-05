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
   
   document.getElementById("SET").addEventListener("click",function(){
   
       if (document.getElementById("CHB").checked) {
           var email = document.getElementById("LEmailBOX").value;
           var pass = document.getElementById("LPassBOX").value;
           localStorage.setItem("email", email);
           localStorage.setItem("password", pass);
           alert("Data have been setted !!");
       }
   
   })
   
   document.getElementById("LEmailBOX").addEventListener("click", function () {
       if (localStorage.getItem("email") && localStorage.getItem("password")) {
           document.getElementById("LEmailBOX").value = localStorage.getItem("email");
           document.getElementById("LPassBOX").value = localStorage.getItem("password");
       } 
   })
    
    document.getElementById("SET").addEventListener("click",function(){


    var email = document.getElementById("LEmailBOX").value;
    var pass = document.getElementById("LPassBOX").value;
    if(email==""){
        document.getElementById("Warning1").innerHTML="Enter your email or mobile phone number";
        
        document.getElementById("Warning1").style.color="red";
        document.getElementById("ComponantsLogin").style.height="450px";
    }
    else{
        document.getElementById("Warning1").innerHTML="";
        document.getElementById("ComponantsLogin").style.height="400px";
    }
    if(pass==""){
        document.getElementById("Warning2").innerHTML="Enter your password";
        document.getElementById("Warning2").style.color="red";
        document.getElementById("ComponantsLogin").style.height="450px";
    }else{
        document.getElementById("ComponantsLogin").style.height="400px";
        document.getElementById("Warning2").innerHTML="";
    }


})

