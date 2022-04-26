const btn=document.getElementsByTagName('button');
const footer=document.getElementById('footer');
const container=document.getElementById('container');



//fonctions

function message(classr,e){
    var notif=document.createElement('div');
    var h3text=document.createElement('h3');
    h3text.innerHTML=e.target.innerHTML
    notif.setAttribute('id','notif');
    footer.appendChild(notif);
    notif.appendChild(h3text);
    container.appendChild(footer)
    notif.className=classr

    setInterval((e)=>{
        notif.remove();
    },2000)
    
}

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(e){
        var base=e.target.classList[0];
        message(base,e);
    })
}

