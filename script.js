let menubtn=document.querySelector(".responsive-icon");
console.log(menubtn);
let navbar1=document.querySelector(".navbar-responsive");
console.log(navbar1);
let onclickmenu=()=>
{
navbar1.classList.toggle("active");

}
menubtn.addEventListener('click',onclickmenu);

 /*AOS.init
({
offset:200,
delay:100,
duration:400,
easing:'ease',
once:false,
mirror:false,
anchorePlacement:'top-bottom'
});*/
//Aos Init
AOS.init
({
offset:300,
delay:200,
duration:500,
easing:'ease',
once:false,
mirror:false,
anchorePlacement:'top-bottom'
})