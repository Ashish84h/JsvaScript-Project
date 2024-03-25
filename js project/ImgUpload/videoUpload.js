let imgContenor = document.querySelector(".imgContenor");
let ai_upload = document.querySelector(".ai-upload");
let file=document.createElement("input");
file.type="file";
file.setAttribute("multiple","");

ai_upload.addEventListener("click",()=>{

   file.click();

   file.addEventListener("change",()=>{

    for(key of file.files){    
    let fileReader = key;
    let url = URL.createObjectURL(fileReader);
    newUpload(url);
    };

   })

})


function newUpload(e){
    
    let img=document.createElement("img");
    let div=document.createElement("div");
    div.classList.add("img");
    img.src=e;
    div.append(img);
    imgContenor.append(div);
    
}