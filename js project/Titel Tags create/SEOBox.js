let tagsContainer = document.querySelectorAll(".tags-container");
       let input = document.querySelector(".input");
        let inputs = document.querySelector(".inputs");
        let checkbox = document.querySelector(".checkbox");

        var box1='';
        var i=0;
        var box2='';

        function CreateItems(data){
            let span = document.createElement("span");
            span.classList.add("tags");
            span.innerHTML=data;
            input.insertAdjacentElement("beforeBegin",span);
            
            let img = document.createElement("img");
            img.src="icon img/times-square-svgrepo-com.png";
            img.classList.add("close");
            span.append(img);

            
            // let font = document.createElement("font");
            // font.classList.add("font");
            // font.innerHTML=i;
            // span.append(font);

        }

        checkbox.addEventListener("click",(e)=>{
            if(e.target.checked==true){
                
            for(key of box1){

                CreateItems(key);
            }
            }
        })


        inputs.addEventListener("input",(e)=>{

            box1= inputs.value;
            if(e.data=='|'){
            box1=box1.split(' |');
            }
            // console.log(box1)
        })

        input.addEventListener("keyup",(e)=>{
            

            // console.log(box1);
            box2 = input.value.replace(',','');
            if(e.key == ","  || e.key == 'Enter'){
            for(key of box1){
            console.log(key);
                if(key.trim()==box2)
                i++;
            }

            }

            if(e.key==','  || e.key == 'Enter'){;
            CreateItems(box2);
            input.value='';
            }
            

        })

        tagsContainer[1].addEventListener("click",(e)=>{
            let tags = document.querySelectorAll(".tags");
            
            for(key of tags){
                if(e.target.parentNode==key)
                key.remove();
            }

        });

