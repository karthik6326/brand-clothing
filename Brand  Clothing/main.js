let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() => {
    search.classList.toggle('active');
    menu.classList.remove('active');
    
}

let menu=document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
}




let header =document.querySelector('shadow');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

function myDate(){
    window.alert(new Date());
}

function buy(){
     return document.getElementById('demo').innerHTML ="Shop Now On...";
}

function shirt1(){
    return document.getElementById('shirt1').innerHTML = "Buy now";
}

function shirt2(){
    return document.getElementById('shirt2').innerHTML = "Buy now";
}

function shirt3(){
    return document.getElementById('shirt3').innerHTML = "Buy now";
}

function shirt4(){
    return document.getElementById('shirt4').innerHTML = "Buy now";
}

function shirt5(){
    return document.getElementById('shirt5').innerHTML = "Buy now";
}

function shirt6(){
    return document.getElementById('shirt6').innerHTML = "Buy now";
}

function shirt7(){
    return document.getElementById('shirt7').innerHTML = "Buy now";
}


function shirt8(){
    return document.getElementById('shirt8').innerHTML = "Buy now";
}

function shirt9(){
    return document.getElementById('shirt9').innerHTML = "Buy now";
    
}
function btn1(){
    return document.getElementById('btn1').innerHTML = "Learn More About Clothing";
}
function shirt90(){
    
    window.open("https://www.myntra.com");
    
}
function face(){
    window.open("https://www.facebook.com");
}
function twitter(){
    window.open("https://www.twitter.com");
}
function instagram(){
    window.open("https://www.instagram.com");
}
function whatsapp(){
    window.open("https://www.whatsapp.com");
}
function items(){
    window.open('textiles2.html');
}