let search = document.querySelector(".search");
let searchBtn = document.querySelector(".searchBtn");
let displayBox = document.querySelector(".displayBox");


let ItemsList = [
    {
        name : "ashish patel"
    } ,
    {
        name : "rohan"
    }  ,
    {
        name : "ankit"
    }  ,
    {
        name : "anuj"
    }  ,
    {
        name : "manish"
    },
     {
        name : "ashu"
    } 
];

console.log(ItemsList);
function ObjectCreate(items){
    let newItems = document.createElement("a");
    newItems.classList.add("list");
    newItems.href="#";
    newItems.innerHTML=items;
    displayBox.append(newItems);
}


search.addEventListener("input",(e)=>{
    

    let list = document.querySelectorAll(".list");
    ItemsList.filter((data)=>{

            if(data.name.search(search.value) != -1){
                ObjectCreate(data.name);

                for(data of list){

                    if(data.innerHTML!=search.value){
                        data.remove();
                    }
                }

            }

    });


    
})

displayBox.addEventListener("click",(e)=>{
    search.value=e.target.innerHTML;
    displayBox.remove();
})


