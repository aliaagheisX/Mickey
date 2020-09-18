var colors =
    {
        micky : '#951000',
        minnie: '#DE54AC',
        pluto: 'rgb(255 184 0)',
        goofy: '#EF811F',
        donald: '#387EB6'
    };

var i;

for(i in colors) {
    
    document.querySelector('a[href="#' + i +'"]').style='background:' + colors[i];
    document.querySelector('#' + i + " .content").style='background:' + colors[i];
}

/* colors*/




/*slider*/

var sections = document.getElementsByTagName('section');
var left=0;
    
for(i=0;i<sections.length;i++){
    
    sections[i].style="left:" + left + "vw";
    left += 100;        
}



/*slider*/
var active = function() {
    
    var url = location.hash;        //get the dash value
    
    if(url === "") url = "#micky"; //make sure that there a value for url if null the the main value
    
    
    //toggle active class for links
    var links = document.querySelectorAll('a:not([href="' + url +'"])');
    for(i=0;i<links.length;i++) links[i].classList.remove('active');
    document.querySelector('a[href="' + url +'"]').classList.add('active');
    
    
    var offset = document.querySelector(url).offsetLeft;
    window.scrollTo(offset, 0);
    
}

window.onhashchange = function() { 
     active();

}
window.onload = function() { 
     active();

}

