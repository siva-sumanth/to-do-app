let v=document.getElementById("Add_Card");

v.addEventListener("click", Addnew=()=>{
    console.log("hii");
document.getElementById("overlay").style.display="block";
   document.getElementById("data").style.display="none";

});
let c=document.getElementById("Add");
let d=document.getElementById("close");
d.addEventListener("click",down=()=>{
    document.getElementById("overlay").style.display="none";
    document.getElementById("data").style.display="block";
})
c.addEventListener("click",up=()=>{
     let val = document.getElementById("read").value;
    if(val.length=0){
        val="Un Known"
    }
    document.getElementById("data").style.display="none";
    let a=document.createElement("div");
    let g= document.createTextNode(val);
    a.appendChild(g);
    let e = document.getElementById("container");
    e.appendChild(a);
    document.getElementById("overlay").style.display="none";


})