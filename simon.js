let color=["red","skyblue","gold","blue"];
let keycol=[];
let usercol=[];
let startgame=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(startgame==false){
    console.log("game started");
    startgame=true;
    levelup();
}
})
function flashlight(b){
    b.classList.add("flash");
    setTimeout(function(){
        b.classList.remove("flash");
    },250);
}
function flashgreen(b){
    b.classList.add("green");
    setTimeout(function(){
        b.classList.remove("green");
    },250);
}
function levelup(){
    usercol=[];
   level++;
   h2.innerText=`Level ${level}`;
   let randnum=Math.floor(Math.random()*3);
   let randcol=color[randnum];
   keycol.push(randcol);
   console.log(keycol);
   let randele=document.querySelector(`.${randcol}`);
   flashlight(randele);
}
function checkans(idx){
    if(usercol[idx]===keycol[idx]){
        if(usercol.length==keycol.length){
       setTimeout(levelup,1000); 
    }
}
    else{
        h2.innerHTML=`Game is over!Your score is ${level} <br> please enter any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        restart();
    }
}
function btnpress(){
let bt=this;
flashgreen(bt);
let c=bt.getAttribute("id");
usercol.push(c);
// console.log(usercol);
checkans(usercol.length-1);
}
let  btns=document.querySelectorAll(".btn");
for(let btn of btns){
btn.addEventListener("click",btnpress);
}
function restart(){
    startgame=false;
    keycol=[];
    usercol=[];
    level=0;
}