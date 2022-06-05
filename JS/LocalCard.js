var ArrofRI=JSON.parse(localStorage.getItem('ArrofItems'));
var POI=0;

function Solve(){
    
for(let i=0;i<ArrofRI.length;i++){

    let IDval,IMGval,Priceval,Nameval,Colorval;
   for(var [key,value] of Object.entries(ArrofRI[i])){
       if(key=='ID')IDval=value;
       else if(key=='Image')IMGval=value;
       else if(key=='Price'){
           Priceval=value;
           POI+=parseFloat(value);
       }
       else if(key=='Title')Nameval=value;
       else if(key=='color')Colorval=value;
   }
   

   document.getElementById("TableItems").innerHTML+=`
         <tr id=${IDval}>
            <th scope="row g-0 m-0">
                <div class="row g-0 m-0">
                    <div class="col-6">
                        <div class="card" style="width: 10rem;">
                            <img src=${IMGval} class="card-img-top" alt="...">
                            <div class="card-body">
                            </div>
                          </div>
            
                    </div>
                    <div class="col-6">
                        <a href="" class="Linktext">${Nameval}</a>
                    </div>
                </div>
            </th>
            <td>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Quantity
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item active" href="#">Remove</a></li>
                      <li><a class="dropdown-item" href="#">1</a></li>
                      <li><a class="dropdown-item" href="#">2</a></li>
                      <li><a class="dropdown-item" href="#">3</a></li>
                      <li><a class="dropdown-item" href="#">4</a></li>
                    </ul>
                </div>
                <div class="Moveto pt-3">
                    <a href="" class="Linktext" style="border-bottom: 1px solid #003953 ;"> Moveto<i class="far fa-heart" aria-hidden="true"></i> </a><br>
                    <br>
                    <a href="" class="Linktext" style="border-bottom: 1px solid #003953 ;" onclick="DELET(${IDval})"> Remove </a>
                </div>
            </td>
            <td>${Priceval}</td>
            </tr>`;

            
   
}

if(ArrofRI.length==1){
    document.getElementById('PARAGRAPHITHES').innerHTML=ArrofRI.length+" item in My Cart";
    document.getElementById('SUMMARYCART').innerHTML='Cart Summary ('+ArrofRI.length+" Item)";
    document.getElementById('SUBSAMMARY').innerHTML='Subtotal ('+ArrofRI.length+" Item)";
   
   
    }
    else{
    document.getElementById('PARAGRAPHITHES').innerHTML=ArrofRI.length+" items in My Cart";
    document.getElementById('SUMMARYCART').innerHTML='Cart Summary ('+ArrofRI.length+"  Items)";
    document.getElementById('SUBSAMMARY').innerHTML='Subtotal ('+ArrofRI.length+" Items)";
    }
    


    document.getElementById('SUMMARYPRICE').innerHTML=POI+"$";
}
Solve();

function DELET(item){

    let templet=[]
    for(let i=0;i<ArrofRI.length;i++){


     if(ArrofRI[i].ID!=item){
         templet.push(ArrofRI[i]);
     }else{
        POI-=ArrofRI[i].Price;
    }
    }    
    
   localStorage.setItem("ArrofItems",JSON.stringify(templet));  
   ArrofRI=templet;
   

}
DELET();