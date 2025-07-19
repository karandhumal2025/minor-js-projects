
// product database

var objofdata = {
    arrofimg : ['https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',   
        'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1596363505729-4190a9506133?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',   
        'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1596363505729-4190a9506133?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',   
        'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1596363505729-4190a9506133?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
    arrofproduct : ['Apple','banana','mango','grapes','pinaple','orange','Apple','banana','mango','grapes','pinaple','orange','Apple','banana','mango','grapes','pinaple','orange'],
    arrofprize : [200,60,250,50,80,140,200,60,250,50,80,140,200,60,250,50,80,140]

};
// cart db
var objofcartdata = {
arrofcartquantity : [],
arrofcartproduct : [],
arrofcartprize : [],
arrofcartimg : []
}

// global variables
var remove = false;
var add = false;

// loding time run functions
function createCards() {
var clutter="";
objofdata.arrofproduct.forEach(function(elem,idx){   
    clutter += ` <div class="card" id="card${idx}">
                    <img src="${objofdata.arrofimg[idx]}">
                    <h6>Product : ${objofdata.arrofproduct[idx]} </h6>
                    <h6>Prize : ${objofdata.arrofprize[idx]}/kg </h6>    
                    <h6>Quantity: 
                        <input type="number" class="quantity" id="quantity${idx}" placeholder="1">
                    </h6> 
                    <div class="btn-container" id="btn-container${idx}">
                        <button class="b" id="add${idx}" onclick="addtocartclick(${idx});">Add To Cart</button>
                        <button  class="b" id="remove${idx}" onclick="removetocartclick(${idx});">remove</button>
                    </div>
                        <h5 class="h5" id="h5${idx}"></h5>
                    </div>
                </div>`;  
        });

        document.querySelector("#main-content").innerHTML = clutter;
    }

// onclick events through html
    function addtocartclick(idx)
    {
        document.querySelector(`#h5${idx}`).innerHTML = "Added To cart"
        document.querySelector(`#h5${idx}`).style.color = "green"
        document.querySelector(`#card${idx}`).style.border ="2px solid #5dca4f"
        document.querySelector(`#card${idx}`).style.backgroundColor = "#98e698"
        var temp = document.getElementById(`quantity${idx}`).value;
        if(temp <= 0 || temp == NaN || temp == undefined || temp == null || temp == ""){
            temp = 1;
        }else{}
        add = true;
        //cart database
        objofcartdata.arrofcartquantity[idx]=(temp);
        objofcartdata.arrofcartproduct[idx]=(objofdata.arrofproduct[idx]);
        objofcartdata.arrofcartprize[idx]=(objofdata.arrofprize[idx]);
        objofcartdata.arrofcartimg[idx]=(objofdata.arrofimg[idx]);

        //console
        console.log(temp);
        console.log("arrofcartproduct : "+objofcartdata.arrofcartproduct[idx]);
        console.log("arrofcartprize : "+objofcartdata.arrofcartprize[idx]);
        console.log("arrofcartimg : "+objofcartdata.arrofcartimg[idx]);
        console.log("arrofcartquantity : "+objofcartdata.arrofcartquantity[idx]); 
        
        billcards();
    }
    function removetocartclick(idx)
    {
        if(objofcartdata.arrofcartproduct.length != 0 && objofcartdata.arrofcartquantity[idx] != 0) 
        {
        remove=true;
        document.querySelector(`#h5${idx}`).innerHTML = "Remove From Cart"
        document.querySelector(`#h5${idx}`).style.color = "red"
        document.querySelector(`#card${idx}`).style.border ="2px solid #ee4646"
        document.querySelector(`#card${idx}`).style.backgroundColor = "#ec9191"
       

        //cart database
        objofcartdata.arrofcartquantity[idx]=0;
        objofcartdata.arrofcartproduct[idx]="";
        objofcartdata.arrofcartprize[idx]=0;
        objofcartdata.arrofcartimg[idx]="";

        //console
        console.log("arrofcartproduct : "+objofcartdata.arrofcartproduct[idx]);
        console.log("arrofcartprize : "+objofcartdata.arrofcartprize[idx]);
        console.log("arrofcartimg : "+objofcartdata.arrofcartimg[idx]);
        console.log("arrofcartquantity : "+objofcartdata.arrofcartquantity[idx]); 
        }
        else
        {
            alert("Already removed or cart is empty");
        }
        billcards();
    }


   function billcards(){
    var clutter ="";
    var total = 0;
    objofcartdata.arrofcartproduct.forEach(function(elem,idx){   
            var quantity = objofcartdata.arrofcartquantity[idx];

                    total += objofdata.arrofprize[idx]*quantity;
                    document.querySelector("#bill-ta").innerHTML ='Total Amount : '+ total;
                
                    var totalwithgst = total + ((total*7)/100);
                    document.querySelector("#bill-twg").innerHTML ='Total With Gst : '+ totalwithgst;
               
                clutter += ` <div class="card" id="card${idx}">
                <h6>Product : ${objofdata.arrofproduct[idx]} </h6>
                <h6>Prize : ${objofdata.arrofprize[idx]}/kg </h6>    
                <h6>Quantity: ${objofcartdata.arrofcartquantity[idx]} </h6>
            </div>`; 
                
        });

        document.querySelector("#cart").innerHTML = clutter;  
   }
   
    


    
   
  


    
           

        
           
        
            
            
            
      