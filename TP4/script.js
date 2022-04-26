const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:01`);
year.innerHTML = currentYear+1;
//
function updateCount(){
    const inyear=moment();
    const newy=moment(newYearTime,'YYYY')
    
    var   differ=newy-inyear;
    
     var d=newy.diff(inyear,'days')
     var duration=moment.duration(differ,'milliseconds');
     var h=duration._data.hours
     var m=duration._data.minutes
     var s=duration._data.seconds


    //affichage dans le DOM
    days.innerHTML = d< 10 ? +d :'0-'+ d;;
    hours.innerHTML = h < 10 ? +h :'0-'+ h; 
    minutes.innerHTML = m < 10 ? +m :'0-'+ m; 
    seconds.innerHTML = s < 10 ? +s :'0-'+ s; 
}
//Afficher le spinner
setTimeout(()=>{
    loading.remove();
    //Afficher le temps
    count.style.display = 'flex';
},1000);

//
 setInterval(updateCount,1000); 