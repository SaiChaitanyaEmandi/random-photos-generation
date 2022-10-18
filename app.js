const imgEle = document.querySelector(".img-container");
const btnEle = document.querySelector(".btn");

btnEle.addEventListener("click", ()=>{
    addNewImages();
});

function addNewImages(){
    for (let index = 0; index < 10; index++) {
        const newImg = document.createElement("img");
        newImg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imgEle.appendChild(newImg);   
    }
}