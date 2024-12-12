live.addEventListener("change",function(){
    console.log("a change was made");
    let choice = document.getElementById('live'). value;
    console.log(choice);

    if(choice == '1') {
        console.log('stand by me!!!!');
        document.getElementById('answer').innerHTML= "great movie, not my favourite though!!!";
}
    if(choice == '2'){
        console.log('fnaf?!');
        document.getElementById('answer').innerHTML= "close…. this is my SECOND favourite movie!!! huge fnaf fan!";
    }
    
    if(choice == '3'){
    console.log('haha fool');
    document.getElementById('answer').innerHTML= "this isn't even a real movie silly!!!!!";
}
    if(choice == '4'){
        console.log('good ending');
        document.getElementById('answer').innerHTML= "YOU GOT IT!!!!!YIPPEEE WOOOOO!!! YAYYYAYAY!! OMGOMG!!";
    }
});

var acc = document.getElementsByClassName("accordion");
var i;

for(i=0; i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel=this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        } else{
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    });
}

let currentYear=new Date().getFullYear();
    document.getElementById("year").innerText='©{currentYear} Jade PN';