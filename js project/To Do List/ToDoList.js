let  ToDoList = document.querySelector(".ToDoList");
let input = document.querySelector(".input");

 var i=1;
 var box2='';

 function CreateItems(data){
     
     let span = document.createElement("span");
     span.classList.add("tags");
     span.innerHTML=data;
     ToDoList.append(span);
     
     let img = document.createElement("img");
     img.src="icon img/times-square-svgrepo-com.png";
     img.classList.add("close");
     span.append(img);

     
     let font = document.createElement("font");
     font.classList.add("font");
     font.innerHTML=i++;
     span.append(font);

 }



 input.addEventListener("keyup",(e)=>{
     box2 = input.value.replace(',','');

     if(e.key==','  || e.key == 'Enter'){
         
     CreateItems(box2);
     input.value='';
     }
     

 })

 ToDoList.addEventListener("click",(e)=>{
     
     let tags = document.querySelectorAll(".tags");
     for(key of tags){
         
         if(e.target.parentNode==key){
         key.remove();
         i--;
         }
     }

     let fontList=document.querySelectorAll(".font");
     let j=1;


     for(key of fontList)
     key.innerHTML=j++;

 });

