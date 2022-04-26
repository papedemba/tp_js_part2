const URLAPI="https://www.themealdb.com/api/json/v1/1/random.php"
const APISEARCHID="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52913";
const APISEARCHNAME="https://www.themealdb.com/api/json/v1/1/search.php?s=Brie"
const popup=document.getElementById('popup');
const container=document.querySelector('.container');


transformdata(URLAPI);

// fonctions
function getfood(elt){
let mydivimg=document.createElement('div');
let mydivfooter=document.createElement('div');
let myh1=document.createElement('h1');
let myicone=document.createElement('i');
let myimg=document.createElement('img')

// les attributs
mydivimg.setAttribute('id','image')
mydivfooter.setAttribute('id','footer')
myicone.className='fa-solid fa-heart'
myimg.src=elt.strMealThumb
myh1.innerHTML=elt.strMeal
// integration
container.appendChild(popup)
popup.appendChild(mydivimg)
popup.appendChild(mydivfooter)
mydivimg.appendChild(myimg)
mydivfooter.appendChild(myh1)
mydivfooter.appendChild(myicone)

}
/* console.log(getfood) */
function transformdata(urls){
    const data=fetch(urls);
data.then(response=>{
    const getdata=response.json()
    getdata.then(function(find){
        /* console.log(getdata) */
        const food=find.meals
        /* console.log(film) */
        
        food.forEach(element => {
            getfood(element)
            console.log(element)
        });
    })
})
}
const search=document.querySelector('input');
search.addEventListener('keyup',function(e){
    var getrecette=search.value
    if(Number(getrecette)){
        /* popup.innerHTML='' */
        transformdata(APISEARCHID+getrecette)
    }
    else{
        /* popup.innerHTML='' */
        transformdata(APISEARCHNAME+getrecette)
    }
})