document.addEventListener('DOMContentLoaded',function(){
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click',()=>{
      const shown = nav.style.display === 'flex';
      nav.style.display = shown ? '' : 'flex';
    });
  }
});
