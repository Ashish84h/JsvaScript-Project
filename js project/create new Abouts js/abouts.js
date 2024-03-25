

let mainBox = document.querySelectorAll(".mainBox");
let img;
let btn1;
let h1;
let p;
function AboutMe(){

    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("border");
    mainBox[0].append(row)

    let col1 = document.createElement("div");
    col1.classList.add("col");
    // col1.classList.add("border");
    row.append(col1)
    
    let imgBox = document.createElement("div");
    imgBox.classList.add("imgBox");
    col1.append(imgBox);
    
    img = document.createElement("img");
    img.classList.add("img");
    img.src="IMG_20231219_152349_091 (1).jpg";

    imgBox.append(img);


    
    let col2 = document.createElement("div");
    col2.classList.add("col");
    // col2.classList.add("border");

    row.append(col2);
    
    let ContentBox = document.createElement("div");
    ContentBox.classList.add("ContentBox");
    col2.append(ContentBox);
    
    h1 = document.createElement("h1");
    ContentBox.append(h1);
    h1.innerHTML="Ashish Patel : ";
    h1.style="color: rgb(255, 234, 0);";
    let br = document.createElement("br");


    
    ContentBox.append(br);
    
    p = document.createElement("p");
    ContentBox.append(p);
    p.innerHTML="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi voluptatum aliquid quisquam ipsam corporis pariatur natus impedit nesciunt dicta! Reprehenderit cupiditate blanditiis eum animi odio dolores unde nihil eos maxime! ";


    // console.log(ContentBox);
}

AboutMe();

   



    let textarea;
function InputUser(){

    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("border");
    mainBox[1].append(row)

    let col1 = document.createElement("div");
    col1.classList.add("col");
    // col1.classList.add("border");
    row.append(col1)
    
    let imgBox = document.createElement("div");
    imgBox.classList.add("imgBox");
    // imgBox.classList.add("border");
    col1.append(imgBox);
    
    
    btn1 = document.createElement("img");
    btn1.src="plus-square-svgrepo-com.png"
    btn1.style="position:absolute; height:100px;";
    imgBox.append(btn1);

    let img = document.createElement("img");
    img.classList.add("img");
    img.classList.add("inputImg");
    // img.src="IMG_20231219_152349_091 (1).jpg";

    imgBox.append(img);


    
    let col2 = document.createElement("div");
    col2.classList.add("col");
    // col2.classList.add("border");

    row.append(col2);
    
    let ContentBox = document.createElement("div");
    ContentBox.classList.add("ContentBox");
    col2.append(ContentBox);
    
    let font1 = document.createElement("font");
    ContentBox.append(font1);
    font1.innerHTML="Enter Your Name"
    let InputName = document.createElement("input");
    ContentBox.append(InputName);
    InputName.classList.add("border");
    InputName.classList.add("InputName");


    
    let br = document.createElement("br");
    ContentBox.append(br);
    let font2 = document.createElement("font");
    ContentBox.append(font2);
    font2.innerHTML="Discription"
    textarea = document.createElement("textarea");
    ContentBox.append(textarea);
    textarea.classList.add("border");
    

    
    let btn = document.createElement("button");
    btn.innerHTML="submit";
    btn.classList.add("border");
    btn.classList.add("submit");
    btn.style="padding:10px;margin-top:10px; width:95%;background:yellow;";
    ContentBox.append(btn);
    

}

InputUser();


    let InputName = document.querySelector(".InputName");
    let inputImg = document.querySelector(".inputImg");
    let submit = document.querySelector(".submit");

    let SRC;
    
    let input = document.createElement("input");
    input.type="file";

    btn1.addEventListener("click",()=>{
        input.click();
        input.addEventListener("change",()=>{
            let FileReader = input.files[0];
            SRC = URL.createObjectURL(FileReader);
            inputImg.src=SRC;
        })
    })


    
    submit.addEventListener("click",()=>{
        mainBox[1].style="display:none";
        console.log(mainBox[1]);
        AboutMe();
        img.src = SRC;
        inputImg.src ="";


        h1.innerHTML=InputName.value;
        p.innerHTML=textarea.value;


    })

    
    let btn = document.createElement("img");
        btn.src="plus-square-svgrepo-com.png";
        btn.style="position:absolute; height:50px;";
        mainBox[0].append(btn);

        mainBox[1].style="display:none";
        btn.addEventListener("click",()=>{
        mainBox[1].style="display:flex";
    })









