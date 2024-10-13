var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productDes=document.getElementById("productDes");
var productCat=document.getElementById("productCat");
var productImage=document.getElementById("productImage");
var productName1=document.getElementById("productName1");
var productPrice1=document.getElementById("productPrice1");
var productDes1=document.getElementById("productDes1");
var productCat1=document.getElementById("productCat1");
var productImage1=document.getElementById("productImage1");
var search_input=document.querySelector(".search_input");
var myModal = new bootstrap.Modal(document.querySelector('.eror'))
var myModal2 = new bootstrap.Modal(document.querySelector('.error0'))
var myModal1 = new bootstrap.Modal(document.querySelector('.error1'))
var newTerm;


productName.addEventListener("input",function(e){
    validation(this);
})
productPrice.addEventListener("input",function(e){
    validation(this);
})
productDes.addEventListener("input",function(e){
    validation(this);
})
productCat.addEventListener("input",function(e){
    validation(this);
})

productName1.addEventListener("input",function(e){
    validation(this);
})
productPrice1.addEventListener("input",function(e){
    validation(this);
})
productDes1.addEventListener("input",function(e){
    validation(this);
})
productCat1.addEventListener("input",function(e){
    validation(this);
})


search_input.addEventListener("input",function(e){
searchCard();
})
document.getElementById("add").addEventListener("click",function(){
    addCard();

});

document.getElementById("update").addEventListener("click",function(e){
if(emptyForUpdate()==true){
    updateNew()
    myModal1.hide()

    var n=document.querySelectorAll(".modal input");
    for(var i=0;i<n.length;i++){
n[i].classList.remove("is-valid");
n[i].classList.remove("is-invalid");
    }    
 

}else{
    myModal.show()
}
 
    }

)



var arr;
if(localStorage.getItem("products")==null){
    arr=[]
}

else{
    arr=JSON.parse(localStorage.getItem("products"))
    displayCard(arr)

    
}

function addCard(){
        if(empty()==true){
        var product={
           productName:productName.value,
           productPrice:productPrice.value,
           productDes:productDes.value,
           productCat:productCat.value,
           productImage:`../images/${productImage.files[0].name}`,
        //    productImage2:productImage.value,
   
   
        }
        console.log(product.productImage);
        
   arr.push(product);
   displayCard(arr);
   localStorage.setItem("products", JSON.stringify(arr));
   deleteAll()
       console.log(JSON.parse(localStorage.getItem("Products")));
       console.log(index);
       (function(){

           var n=document.querySelectorAll(".container input");
           for(var i=0;i<n.length;i++){
    n[i].classList.remove("is-valid");
    n[i].classList.remove("is-invalid");
           }    
       })()
      
    }else{
        // document.querySelector("#disapear").classList.replace("d-none","d-block");
        myModal2.show()

    }
   }

   var index;


function displayCard(newArr){
var cartouna=""
for(var i=0;i<newArr.length;i++){
index=i



cartouna+=`
<div class="col-md-4">
<div class="card">
<div class="position-relative">
  <img src="${newArr[i].productImage}" class="card-img-top" alt="...">
    <span class="position-absolute space bg-success p-1 rounded-circle text-white">${i+1}</span>
  </div>
  <div class="card-body">
<div class="d-flex justify-content-between my-3 px-3">  
<h1 class="fs-5 fw-bold">Product Name:</h1> 
    <h2 class="fs-6">${newArr[i].productName}</h2>
          
</div>
    <div class="d-flex justify-content-between my-3 px-3">
    <h1 class="fs-5 fw-bold">Product Price:</h1> 
      <h2 class="fs-6">${newArr[i].productPrice}</h2>
    </div>
<div class="d-flex justify-content-between my-3 px-3">
<h1 class="fs-5 fw-bold">Product Des:</h1>
      <h2 class="fs-6">${newArr[i].productDes}</h2>
</div>
   <div class="d-flex justify-content-between my-3 px-3">
   <h1 class="fs-5 fw-bold">Product Cat:</h1>
      <h2 class="fs-6">${newArr[i].productCat}</h2>
   </div>
      <button type="button" class="btn btn-warning text-white px-2 w-100" onclick="updateCard(${i}) " >
      Update
      </button>
      <button class="btn btn-danger w-100 my-3 no"  id="delete">Delete</button>
    </div>
</div>
</div>
`
// data-bs-toggle="modal" data-bs-target="#exampleModal"
// onclick="deletCard(${i})"

}


document.querySelector(".display").innerHTML=cartouna;

(function (){
    var x=document.querySelectorAll(".no");
    
    for(let i=0;i<x.length;i++){

    
        x[i].addEventListener("click",function(){
            
    deletCard(i);

    
            
        })
    
    
    }
})()

}


// var x=document.querySelectorAll(".nol");
// for(let i=0;i<x.length;i++){
//     x[i].addEventListener("click",function(){
// alert(i);
        
//     })
// }




function deletCard(term){
arr.splice(term,1)
displayCard(arr);
localStorage.setItem("products", JSON.stringify(arr));

}






function updateCard(term){
    myModal1.show()
    newTerm=term;
   productName1.value=arr[term].productName;
   productPrice1.value=arr[term].productPrice;
   productDes1.value=arr[term].productDes;
   productCat1.value=arr[term].productCat;
//    productImage1.files[0] =arr[term].productImage


//    document.getElementById("update").classList.replace("d-none","d-block");
//    document.getElementById("add").classList.replace("d-block","d-none");

console.log( arr[term].productImage);


}
function updateNew(){
    let x=productImage1.files[0] !== undefined?`../images/${productImage1.files[0].name}`:arr[newTerm].productImage
   arr[newTerm].productName=productName1.value;
   arr[newTerm].productPrice=productPrice1.value;
   arr[newTerm].productDes=productDes1.value;
   arr[newTerm].productCat=productCat1.value;
    arr[newTerm].productImage=x;
   displayCard(arr);
   localStorage.setItem("products", JSON.stringify(arr));
   deleteAll()

}






function searchCard(){
    var cartouna=""
    for(var i=0;i<arr.length;i++){
        if(arr[i].productName.toLowerCase().includes(search_input.value.toLowerCase())){


          

            cartouna+=`
            <div class="col-md-4">
            <div class="card">
            <div class="position-relative">
              <img src="${arr[i].productImage}" class="card-img-top" alt="...">
                <span class="position-absolute space bg-success p-1 rounded-circle text-white">${i+1}</span>
              </div>
              <div class="card-body">
            <div class="d-flex justify-content-between my-3 px-3">  
            <h1 class="fs-5 fw-bold">Product Name:</h1> 
                <h2 class="fs-6">${arr[i].productName}</h2>
                      
            </div>
                <div class="d-flex justify-content-between my-3 px-3">
                <h1 class="fs-5 fw-bold">Product Price:</h1> 
                  <h2 class="fs-6">${arr[i].productPrice}</h2>
                </div>
            <div class="d-flex justify-content-between my-3 px-3">
            <h1 class="fs-5 fw-bold">Product Des:</h1>
                  <h2 class="fs-6">${arr[i].productDes}</h2>
            </div>
               <div class="d-flex justify-content-between my-3 px-3">
               <h1 class="fs-5 fw-bold">Product Cat:</h1>
                  <h2 class="fs-6">${arr[i].productCat}</h2>
               </div>
                  <button type="button" class="btn btn-warning text-white px-2 w-100" onclick="updateCard(${i})" >
                  Update
                  </button>
                  <button class="btn btn-danger w-100 my-3 no"  id="delete">Delete</button>
                </div>
            </div>
            </div>
            `






        }
    }
    document.querySelector(".display").innerHTML=cartouna
}




function validation(element){
var regex={
    productName:/^[a-zA-Z]{3,12}/,
    productPrice:/^[0-9]{3,6}$/,
    productDes:/^.{3,12}$/,
    productCat:/^(tv|laptop|mobile|tab|sports)/,
    productName1:/^[a-zA-Z]{3,12}/,
    productPrice1:/^[0-9]{3,6}$/,
    productDes1:/^.{3,12}$/,
    productCat1:/^(tv|laptop|mobile|tab|sports)/,
}
if(regex[element.id].test(element.value)){
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    return true
    console.log("true");
    
}else{
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
    return false
    console.log("false");
    
}
}


function empty(){
    if(productName.value==""|productPrice.value==""|productDes.value==""|productCat.value==""){
        return false;
    }else{
        return true;
    }

}
function emptyForUpdate(){
    if(productName1.value==""|productPrice1.value==""|productDes1.value==""|productCat1.value==""){
        return false;
    }else{
        return true;
    }

}



function good(){
    document.querySelector(".error0").classList.add("d-none");

}

function deleteAll(){
    productName.value=""
    productPrice.value=""
    productDes.value=""
    productCat.value=""
    productImage.value=""

}





