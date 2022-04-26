const center=document.getElementById('center')
const btns=document.querySelectorAll('button')

    // tableau de src  des images
const image=[   'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg',
                'img/11.jpg',
                'img/12.jpg',
                'img/13.jpg',
                'img/14.jpg'
            ]
         
           
   var nbr=image.length  
      
 var i=0

    const photo=document.createElement('img');
    photo.src=image[i]
    center.appendChild(photo)
    /* photo.setAttribute('src',attrib); */
   
    setInterval(function(){
        i++
        if(i==nbr-1){
            i=0;
           
        }
        
        photo.src=image[i]

    },3000)
    btns.forEach((btn,i)=>{
        btn.addEventListener('click',function(){
            if(btn.getAttribute('data-slide')=='left'){
                i=i>0?i-1:0
            }
            else{
                i=i<nbr-1?i+1:0
            }
            photo.src=image[i]
            
        })
    })

   
   
    

 

