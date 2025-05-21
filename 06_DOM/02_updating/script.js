let control=0;
function callback()
{
   // console.log(control);
   const el =document.querySelectorAll("h4")[1];
   el.innerHTML=control;
    control++;
}
setInterval(callback,1000);