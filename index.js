const form=document.querySelector('form');
const person1=document.querySelector('#nameInput1');
const person2=document.querySelector('#nameInput2');
const calculate=document.querySelector('#compute');




calculate.addEventListener('click',function(e){
    e.preventDefault();
    const clickbutton=e.target.value;
    if(person1.value!=='' && person2.value!==''){
        var loveScore=Math.random()*100;
        const resultLoveScore=document.createElement('p');
        const resultLabel=document.querySelector('#resultLabelv');
        resultLoveScore.innerHTML=Math.floor(loveScore)+'%';
        resultLabel.appendChild(resultLoveScore);
    }
    if(clickbutton ==="update1"){
        update1();
    }
    if(clickbutton ==="update2"){
        update2();
    }


})

function update1(){
    person1.value = "";
}

function update2(){
    person2.value = "";
}