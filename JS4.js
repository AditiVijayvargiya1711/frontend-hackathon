x=0
function function1(){
    element=document.getElementById('main-image');
    wave=document.getElementById('wave-text');
    if (x==0){
        element.style.backgroundImage='url("/images/bgmain3.jpg")';
        element.style.width="35%";
        wave.style.display="flex";
        x=1;
    }
    else{
        element.style.backgroundImage='none';
        element.style.width="5%";
        wave.style.display="none";
        x=0;
    }
}