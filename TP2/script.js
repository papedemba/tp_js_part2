const menu=[
    
      {
        "text":'dashboard',
        "icone": "fa-solid fa-gauge-low",
        "icone1":"fa-solid fa-angle-right",
        "sousmenu":null
      },

      {
        "text":'Widgets',
        "icone": "fa-solid fa-grid",
        "icone1":"fa-solid fa-angle-right",
        "sousmenu":null
      },
      {
        "text":'Layout Options',
        "icone": " fa-solid fa-option",
        "icone1":"fa-solid fa-angle-right",
        "sousmenu":null
      },
      {
        "text":'charts',
        "icone": "fa-solid fa-chart-pie",
        "icone1":"fa-solid fa-angle-right",
        "sousmenu":['menu1','menu2','menu3']
      },
      {
        "text":'UI Elements',
        "icone": "fa-solid fa-tree",
        "icone1":"fa-solid fa-angle-right",
        "sousmenu":null
      },
      {
        "text":'Forms',
        "icone": "fa-solid fa-pen-to-square",
        "icone1":"fa-solid fa-angle-right",
        "sousmenu":null
      },
      {
        "text":'Tables',
        "icone": "fa-solid fa-table",
        "icone1":"fa-solid fa-angle-right",
        "sousmenu":null
      }
]
const classlistes=document.querySelector('.classlist')
const iconelist=document.querySelector('.iconelist')
const btn=document.querySelector('button');
//    events
  btn.addEventListener('click',function(){
    
    classlistes.classList.toggle('close')
    
  })
// fonctions

function getTables(){
    var mydiv=document.createElement('div');
    var myicone=document.createElement('i');
    var myicone2=document.createElement('i');
    var myspan=document.createElement('span');
    
    mydiv.setAttribute('class','icones');
    myicone.setAttribute('class',menu['icone'])
    myicone2.setAttribute('class',menu['icone1']);

    mydiv.appendChild(myicone);
    mydiv.appendChild(myspan);
    mydiv.appendChild(myicone2);
    iconelist.appendChild(mydiv);

}