const body=document.querySelector('body');
const toggle=body.querySelector('.toggle')
const sidebar=body.querySelector('.sidebar')
const search=body.querySelector('.bx bx-search')
const nodeswicht=body.querySelector('.node-text')


//----------event-------
 toggle.addEventListener('click',function(){
     sidebar.classList.toggle('close')
 })


 nodeswicht.addEventListener('click',function(){
    body.classList.toggle('dark')
})
 
