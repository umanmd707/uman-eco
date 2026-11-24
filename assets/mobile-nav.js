/* Mobile workspace selector for static GitHub Pages PWA. */
(() => {
 const picker=document.getElementById('mobileWorkspace');
 if(!picker)return;
 const initial=location.hash.replace('#','');
 picker.value=[...picker.options].some(o=>o.value===initial)?initial:'overview';
 picker.addEventListener('change',()=>document.querySelector('.navitem[data-page="'+picker.value+'"]')?.click());
 document.addEventListener('click',event=>{
   const btn=event.target.closest('[data-page], [data-go]');
   if(btn){const page=btn.dataset.page||btn.dataset.go;if([...picker.options].some(o=>o.value===page))picker.value=page;}
 });
})();
