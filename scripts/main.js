let myImage=document.querySelector('img');

myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if (mySrc==='images/icon.png'){
        myImage.setAttribute('src','images/icon1.png');
    }
    else
    {
        myImage.setAttribute('src','images/icon.png');
    }
}

let myButton=document.querySelector('button');
let myHeading =document.querySelector('h1');

function setUserName(){
    let myName=prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozill 酷比了'+myName;
}

if (!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent='mozilla 苦逼了'+storedName;
}


myButton.onclick=function(){
    setUserName();
}