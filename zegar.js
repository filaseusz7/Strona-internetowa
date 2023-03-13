function getTime(){
    return (new Date()).toLocaleTimeString();
}

setInterval(function() {
 
    document.getElementById('zegar').innerHTML = getTime();
     
}, 1000);