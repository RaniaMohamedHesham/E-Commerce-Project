var ArrOfDivImages=document.getElementsByClassName("V-IMGS");
function MakeBorder(){
    for(let i=0;i<ArrOfDivImages.length;i++){

        ArrOfDivImages[i].addEventListener("click",function(){
           for(var j=0;j<ArrOfDivImages.length;j++){
               if(i==j){
                   ArrOfDivImages[j].style.border="2px solid rgb(0,57,83)"
               }
               else{
                ArrOfDivImages[j].style.border="none";
               }
           }
        })
        
       }
}

document.getElementById("HEART").addEventListener("click",function(){
    document.getElementById("HEART").setAttribute("class","fas fa-heart");

})

MakeBorder();


var ArrofChooseImg=document.getElementsByClassName("CHOOSE-IMG");
var ArrofChooseImgSmall=[
    ["https://m.media-amazon.com/images/I/81yuH+1kttL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/81+-O6d+CSL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/91TJAIlP65L._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/719JDwXGabL._AC_SR58.88,73.60000000000001_.jpg"],

    ["https://m.media-amazon.com/images/I/81iacX513lL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/81vCQjM-TvL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/81U3r+WnBcL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/71a-Tts4q6L._AC_SR58.88,73.60000000000001_.jpg"],

    ["https://m.media-amazon.com/images/I/81oyAYtIqfL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/81lJl+UNpPL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/81T34oYLSnL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/71hi1QCK5fL._AC_SR58.88,73.60000000000001_.jpg"],

    ["https://m.media-amazon.com/images/I/71tLgpYcvgL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/71RyKMOMVmL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/716q6p05WlL._AC_SR58.88,73.60000000000001_.jpg",
    "https://m.media-amazon.com/images/I/71+epAHvbIL._AC_SR58.88,73.60000000000001_.jpg"],
];

var ArrofChooseImgBig=[
    [
        "https://m.media-amazon.com/images/I/81yuH+1kttL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/81+-O6d+CSL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/91TJAIlP65L._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/719JDwXGabL._AC_SR736,920_.jpg"
    ],
    [
        "https://m.media-amazon.com/images/I/81iacX513lL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/81vCQjM-TvL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/81U3r+WnBcL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/71a-Tts4q6L._AC_SR736,920_.jpg"
    ],
    [
        "https://m.media-amazon.com/images/I/81oyAYtIqfL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/81lJl+UNpPL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/81T34oYLSnL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/71hi1QCK5fL._AC_SR736,920_.jpg"
    ],
    [
        "https://m.media-amazon.com/images/I/71tLgpYcvgL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/71RyKMOMVmL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/716q6p05WlL._AC_SR736,920_.jpg",
        "https://m.media-amazon.com/images/I/71+epAHvbIL._AC_SR736,920_.jpg"
    ]
]
var colors=['Army','Black','Hot Watermelon','Ivory'];
var ArroFLID=document.getElementsByClassName("LDI");
var CurrentItem=1;
function Switch(){
   

    for(let i=0;i<ArrofChooseImg.length;i++){

        ArrofChooseImg[i].addEventListener("click",function(){
            document.getElementById("SpanColorContent").innerHTML=colors[i];
            for(let k=0;k<ArrofChooseImg.length;k++){
                if(i==k)
                ArrofChooseImg[k].style.border="2px solid rgb(0,57,83)";
                else
                ArrofChooseImg[k].style.border="none";
                
            }
 
            for(let j=0;j<ArroFLID.length;j++){
                ArroFLID[j].src=(ArrofChooseImgSmall[i][j]);
                document.getElementById("MainHugeImg").src=ArrofChooseImgBig[i][0];
                CurrentItem=i;
            }
        })
    }


}

function ChangeContent(){
for(let i=0;i<ArrOfDivImages.length;i++){

     ArrOfDivImages[i].addEventListener("click",function(){
         document.getElementById("MainHugeImg").src=ArrofChooseImgBig[CurrentItem][i];
     })
     
    }
}

ChangeContent();
Switch();

var Anchors =document.getElementsByClassName("PA");
for(let i=0;i<Anchors.length;i++){
    Anchors[i].addEventListener("mouseover",function(){
        Anchors[i].style.textDecoration = "underline";
    })
    Anchors[i].addEventListener("mouseout",function(){
        Anchors[i].style.textDecoration = "none";
    })
}
var additemid = 0;
var PricesofItems=0;
var NoOfItems=0;
var Array_of_ItemsinCart=[]
function AddToCart(SENTIMG,SENTH1,SENTH2,S3r,Ba2y,SpanColorContent){

     NoOfItems++;

    if(NoOfItems==1){
        document.getElementById('btn-cart').innerHTML='<i class="fas fa-shopping-cart" id="shopping-cart"></i>   '+NoOfItems+" ITEM IN CART";
    }else{
        document.getElementById('btn-cart').innerHTML='<i class="fas fa-shopping-cart" id="shopping-cart"></i>   '+NoOfItems+" ITEMS IN CART";
    }

    additemid += 1;
   
    // Main Div
    var MainSelectItemDiv=document.createElement('div');
    MainSelectItemDiv.setAttribute('id', additemid) ;
    MainSelectItemDiv.style.display="flex";
    MainSelectItemDiv.style.flexDirection="row";
    MainSelectItemDiv.style.marginBottom="10px";
    var selecteditem1= document.createElement('div');
    selecteditem1.style.backgroundColor="rgb(244,244,244)";
    selecteditem1.style.textAlign="center";
    var selecteditem2=document.createElement('div');
    // selecteditem1.classList.add('cartimg') ;
    selecteditem1.setAttribute('id', "SI1" ) ;
    selecteditem2.setAttribute('id', "SI2") ;
    selecteditem1.style.width="40%";
    //Image in First Div
    var img = document.createElement ('img');
     img.setAttribute('src',SENTIMG.children[0].getAttribute('src'));
     img.style.width='80%';
     img.style.height='100px';
     img.style.marginTop='20px';


    var title1 = document.createElement ('div');
    var title2 = document.createElement ('div');
    var title3= document.createElement ('div');
    title1.innerText= SENTH1.innerHTML+"\n"+SENTH2.innerHTML;
    title1.style.fontSize='20px';
    title1.style.fontWeight="bold";
    title2.innerText="Price: $"+ S3r.innerHTML+"."+Ba2y.innerHTML;
    PricesofItems+=parseFloat(S3r.innerHTML+"."+Ba2y.innerHTML);
    title3.innerHTML="Color : "+SpanColorContent.innerHTML;
    title2.style.color="rgb(3,93,90)";
    title3.style.color="rgb(3,93,90)";
    var DeleteP=document.createElement('p');
    DeleteP.innerHTML="Delete";
    DeleteP.setAttribute('id','DeletFromCart');
    DeleteP.setAttribute('onclick','Del(' + additemid + ',' + S3r.innerHTML + "." + Ba2y.innerHTML+')');
    var cartItems = document.getElementById('RealCartSpace');


    Array_of_ItemsinCart.push({
      
        ID :additemid,
        Image :img.src,
        Title :SENTH1.innerHTML+"\n"+SENTH2.innerHTML,
        Price:S3r.innerHTML+"."+Ba2y.innerHTML,
        color : SpanColorContent.innerHTML,

        
    })

    localStorage.setItem("ArrofItems",JSON.stringify(Array_of_ItemsinCart));
    // var FORM=document.createElement('form');
    // var ListofbougthItems=document.createElement('select');
    // ListofbougthItems.setAttribute('id','SecondRemove'+additemid);
    // var op1=document.createElement('option');
    // var op2=document.createElement('option');
    // var op3=document.createElement('option');
    // var op4=document.createElement('option');
    // var op5=document.createElement('option');
    // op1.value='1';
    // op2.value='2';
    // op3.value='3';
    // op4.value='4';
    // op5.value="Remove";
   
    // ListofbougthItems.setAttribute('onchange','Del('+'SecondRemove'+additemid+')');
 
    
    // ListofbougthItems.append(op1);
    // ListofbougthItems.append(op2);
    // ListofbougthItems.append(op3);
    // ListofbougthItems.append(op4);
    // ListofbougthItems.append(op5);
    // ListofbougthItems.style.height="25px";
    DeleteP.style.textDecoration="underline";
    DeleteP.style.color="rgb(3,93,90)";
    DeleteP.style.fontWeight="bold";
    DeleteP.style.fontSize="25px";

    // FORM.append(ListofbougthItems);

    selecteditem1.append (img) ;

    selecteditem2.append (title1) ;
    selecteditem2.append (title2) ;
    selecteditem2.append (title3) ;
    // selecteditem2.append(FORM);
    selecteditem2.append(DeleteP);
    
    MainSelectItemDiv.append (selecteditem1);
    MainSelectItemDiv.append(selecteditem2);
    cartItems.append (MainSelectItemDiv);
}

function Del (item , num){

    document.getElementById(item).remove();
    PricesofItems-=parseFloat(num);
    NoOfItems--;
    if(NoOfItems==1){
        document.getElementById('btn-cart').innerHTML='<i class="fas fa-shopping-cart" id="shopping-cart"></i>   '+NoOfItems+" ITEM IN CART";
    }else if(NoOfItems>1){
        document.getElementById('btn-cart').innerHTML= '<i class="fas fa-shopping-cart" id="shopping-cart"></i>   ' + NoOfItems+" ITEMS IN CART";
    }
    else{
        document.getElementById('btn-cart').innerHTML='<i class="fas fa-shopping-cart" id="shopping-cart"></i>  '+"MY CART"
    }
        
   // Local Sorage Modify

   let templet=[];

   let retrv_Arr=JSON.parse(localStorage.getItem('ArrofItems'));
   for(let idx=0;idx<retrv_Arr.length;idx++){
       if(retrv_Arr[idx].ID!=item)
       templet.push(retrv_Arr[idx]);
   }
   localStorage.setItem("ArrofItems",JSON.stringify(templet));
   Array_of_ItemsinCart=templet;
   templet=[];

   
}

document.getElementById('exit').addEventListener('click',function(){
    document.getElementById('CartDIV-AH').style.display="none";
})

function PageLoad(){

    if(localStorage.getItem('ArrofItems')){

        let RA= JSON.parse(localStorage.getItem('ArrofItems'));
        let RA_SZ=RA.length;
        if(RA_SZ==1){
            document.getElementById('btn-cart').innerHTML='<i class="fas fa-shopping-cart" id="shopping-cart"></i>   '+RA_SZ+" ITEM IN CART";
        }else if(RA_SZ>1){
            document.getElementById('btn-cart').innerHTML='<i class="fas fa-shopping-cart" id="shopping-cart"></i>   '+RA_SZ+" ITEMS IN CART";
        }
        else{
            document.getElementById('btn-cart').innerHTML='<i class="fas fa-shopping-cart" id="shopping-cart"></i>  '+"MY CART"
        }

        // Put Data into Cart 


       for(let i=0;i<RA_SZ;i++){

        MainSelectItemDiv=document.createElement('div');
        MainSelectItemDiv.setAttribute('id', RA[i].ID) ;
        MainSelectItemDiv.style.display="flex";
        MainSelectItemDiv.style.flexDirection="row";
        MainSelectItemDiv.style.marginBottom="10px";
        selecteditem1= document.createElement('div');
        selecteditem1.style.backgroundColor="rgb(244,244,244)";
        selecteditem1.style.textAlign="center";
        selecteditem2=document.createElement('div');
        // selecteditem1.classList.add('cartimg') ;
        selecteditem1.setAttribute('id', "SI1" ) ;
        selecteditem2.setAttribute('id', "SI2") ;
        selecteditem1.style.width="40%";
        //Image in First Div
         img = document.createElement ('img');
         img.setAttribute('src',RA[i].Image);
         img.style.width='80%';
         img.style.height='100px';
         img.style.marginTop='20px';
    
    
         title1 = document.createElement ('div');
         title2 = document.createElement ('div');
         title3= document.createElement ('div');
        title1.innerText= RA[i].Title;
        title1.style.fontSize='20px';
        title1.style.fontWeight="bold";
        title2.innerText="Price: $"+ RA[i].Price;
        PricesofItems+=parseFloat(S3r.innerHTML+"."+Ba2y.innerHTML);
        title3.innerHTML="Color : "+RA[i].color;
        title2.style.color="rgb(3,93,90)";
        title3.style.color="rgb(3,93,90)";
        DeleteP=document.createElement('p');
        DeleteP.innerHTML="Delete";
        DeleteP.setAttribute('id','DeletFromCart');
        DeleteP.setAttribute('onclick','Del(' + RA[i].ID + ',' +RA[i].Price +')');
        cartItems = document.getElementById('RealCartSpace');
    
    
        
        DeleteP.style.textDecoration="underline";
        DeleteP.style.color="rgb(3,93,90)";
        DeleteP.style.fontWeight="bold";
        DeleteP.style.fontSize="25px";
    
        
    
        selecteditem1.append (img) ;
    
        selecteditem2.append (title1) ;
        selecteditem2.append (title2) ;
        selecteditem2.append (title3) ;
        selecteditem2.append(DeleteP);
        MainSelectItemDiv.append (selecteditem1);
        MainSelectItemDiv.append(selecteditem2);
        cartItems.append (MainSelectItemDiv);
       }





    }
    
}
PageLoad();