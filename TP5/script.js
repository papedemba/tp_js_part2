const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
var i=1
var url=APIURL+i
paparazi(url)
function paparazi(urls){
    
const data=fetch(urls);
data.then(response=>{
    const getdata=response.json()
    getdata.then(function(find){
        /* console.log(getdata) */
        const film=find.results
        /* console.log(film) */
        
        film.forEach(element => {
            getfilms(element)
        });
    })
})
}
const search=document.getElementById('search')
const container=document.getElementById('container');
const imgtext=document.getElementById('imgtext');
/* const myinput=document.getElementById('btn') */



 search.addEventListener("keyup",function(e){
    
       e.preventDefault(); 
     var  searchterm=search.value;
     
     if(searchterm){
        imgtext.innerHTML=''
         paparazi(SEARCHAPI+searchterm)
     }
     else{
         paparazi(url)
     } 
     
 })
 window.onscroll=function(){
     if((document.body.scrollHeight)<=(window.innerHeight+window.scrollY)){
         i++
         url=APIURL+i
         paparazi(url);

 }
 
 }
document.onreadystatechange=function(){
   /*  console.log(document.readyState) */

    if(document.readyState==="complete"){
        setTimeout(()=>{
        document.querySelector(".spin").style.visibility='hidden'
        imgtext.style.visibility='visible'
    },600)
    }
    else{
        
            imgtext.style.visibility='hidden'
            document.querySelector(".spin").style.visibility='visible' 
       
    }
}
  
 
function getfilms(cut){

var image=document.createElement('div');
var imgs=document.createElement('img');
var block=document.createElement('div')
var myspan=document.createElement('span')
var myh3=document.createElement('h3')
var mydescript=document.createElement('div')
var myh2=document.createElement('h2')
// les attributs
    image.setAttribute('id','image');
    block.setAttribute('class','block')
    mydescript.setAttribute('id','descript') 
    imgs.src=IMGPATH+cut.poster_path

    // insertion
    imgtext.appendChild(block);
    block.appendChild(image);
    block.appendChild(myspan);
    block.appendChild(mydescript);
    myspan.appendChild(myh3);
    myspan.appendChild(myh2);
    image.appendChild(imgs);
    myh3.innerHTML=cut.title
    mydescript.innerHTML='Overviews: <br>'+cut.overview
    myh2.innerHTML=cut.vote_average

    imgs.addEventListener('mouseover',function(){
        mydescript.style.display='block'
        mydescript.style.transform='translateY(-110px)'
        

    
    })
    imgs.addEventListener('mouseout',function(){
        mydescript.style.display='none'
    
    })
    
    
    
   
    

}