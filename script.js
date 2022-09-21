//restourant cartes
let Mapobj=[
    {
        titel:"food 1",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illum.",
        imgage:"https://t4.ftcdn.net/jpg/01/14/90/99/240_F_114909978_ssaf0LT7dAFaLxM4UEBr5rlMhz8iO4Q6.jpg",
        subtitle:"hotel 1",
        subpara:"dolor sit amet consectetur adipisicing elit"
    },
    {
        titel:"food 2",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illum.",
        imgage:"https://www.foodiesfeed.com/wp-content/uploads/2021/06/small-donut-with-raspberry-on-top-768x1024.jpg.webp",
        subtitle:"hotel 2",
        subpara:"dolor sit amet consectetur adipisicing elit"
    },
    {
        titel:"food 3",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illum.",
        imgage:"https://www.foodiesfeed.com/wp-content/uploads/2021/11/fresh-beef-burger-takeaway-768x1024.jpg.webp",
        subtitle:"hotel 3",
        subpara:"dolor sit amet consectetur adipisicing elit"
    },
    {
        titel:"food 11",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illum.",
        imgage:"https://www.foodiesfeed.com/wp-content/uploads/2021/10/carrot-cake-with-fresh-fruits-777x1024.jpg.webp",
        subtitle:"hotel 11",
        subpara:"dolor sit amet consectetur adipisicing elit"
    },
    {
        titel:"food 5",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illum.",
        imgage:"https://www.foodiesfeed.com/wp-content/uploads/2020/05/costela-de-porco-assada-1-1024x683.jpg.webp",
        subtitle:"hotel 5",
        subpara:"dolor sit amet consectetur adipisicing elit"
    },
    {
        titel:"food 8",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, illum.",
        imgage:"https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-1024x683.jpg.webp",
        subtitle:"hotel 8",
        subpara:"dolor sit amet consectetur adipisicing elit"
    },
]
let tit=document.querySelector('.titel');
let preatitel =document.querySelector('.preatitel');
let parasubtiel=document.querySelector('.parasubtiel');
let imagetag=document.querySelector('img');
let subtitel=document.querySelector('.subtitel');
let affter=document.querySelector('.affter');
let befor=document.querySelector('.beffor');
let randomBtn=document.querySelector('.random');
let index=0;
//function Html seit 
function cart(){
tit.innerHTML=Mapobj[index].titel;
preatitel.innerHTML=Mapobj[index].para;
subtitel.innerHTML=Mapobj[index].subtitle;
parasubtiel.innerHTML=Mapobj[index].subpara;
imagetag.src=Mapobj[index].imgage;
}
//event next
affter.addEventListener('click',()=>{
    index++;
    if(index < Mapobj.length-1){
        cart();
    }
    else{
        index=Mapobj.length-1
        cart();
    }
console.log(index)
})
//evnt beffor
befor.addEventListener('click',()=>{
    index--;
    if(index > 0){
        cart();
    }
    else{
        index=0;
        cart();
    }
})
//Random event
randomBtn.addEventListener('click',()=>{
    index=Math.floor(Math.random()*Mapobj.length);
    cart();
})