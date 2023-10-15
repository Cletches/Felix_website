//const cir=document.createElement("img");
//cir.classList.add("cir");
//document.body.appendChild(cir);

const rocket=document.getElementById("rocket");
var old_x=0;
var old_y=0;
var other_angle=0;
window.addEventListener('mousemove',(ev)=>{
    var x=ev.clientX;
    var y=ev.clientY;
    
    var new_x=x;
    var new_y=y;

   

    var angle_v=angle(old_x,old_y,new_x,new_y);
    var main_angle;
    if(old_x>new_x){
         main_angle=other_angle+angle_v;
    }
    else{
         main_angle=angle_v;
    }
     other_angle=angle(new_x,new_y,old_x,old_y);
    old_x=new_x;
    old_y=new_y;
   
   
    var xyStyle1='translate('+x+'px,'+y+'px)'+'rotate(' +main_angle+'deg)';
   
    
    
   
   
    rocket.style.transform=xyStyle1;
    
    rocket.style.transition="1s";
   
   
  
});

function len(x1,y1,x2,y2){
    var a=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
    return a;
}

function angle(xn,yn,xo,yo){
   var old_len=len(0,0,xo,yo);
   var new_len=len(0,0,xn,yn);
   var other_len=len(xn,yn,xo,yo);

   var angle_rad=aa(new_len,other_len,old_len);
   var angle_deg=deg(angle_rad);
   return angle_deg;
}

function deg(n){
    var deg_angle=(n/Math.PI)*270;
    return deg_angle;
}

function aa(a,b,c){
    var top=a*a+b*b-c*c;
    var down=2*a*b;
    var angle=Math.acos(top/down);
    return angle;
}


const rollingText=document.querySelector("div.rollingText");
var txt='"PassionAndIntegrity"';

var mainText=txt.split("")

var subText=" ";
var i=0;


     setInterval(() => {
    subText+=' '+mainText[i];
    
    rollingText.innerHTML=subText;
    i++;
    if(i>mainText.length-1)
    {
        i=0;
        rollingText.classList.add("back");
        subText=' ';
        
           
    }
}, 100);

const about=document.getElementById('about');
const contact= document.getElementById('contact');
const abo=document.querySelector("div.about");
const con=document.querySelector("div.contact");

about.addEventListener('click',()=>{
  abo.style.display='flex';
  abo.style.transition='ease-in 1s';
  con.style.display='none';
  about.classList.add("men");
  contact.classList.remove("men");
});

contact.addEventListener('click',()=>{
    abo.style.display="none";
    con.style.display="flex";
    con.style.transition="ease-in 1s";
    contact.classList.add("men");
    about.classList.remove("men");
  });

  const hum=document.getElementById('hum');
  const menu2=document.getElementById('menu2');
  hum.addEventListener('click',()=>{
     menu2.classList.add("show");
     hum.style.display="none";
  })
  

  const close=document.getElementById('close');

  close.addEventListener('click',()=>{
     menu2.classList.remove("show");
     hum.style.display="block";
  })


  
const about1=document.getElementById('about1');
const contact1= document.getElementById('contact1');


about1.addEventListener('click',()=>{
  abo.style.display='flex';
  abo.style.transition='ease-in 1s';
  con.style.display='none';
  about1.classList.add("men");
  contact1.classList.remove("men");
});

contact1.addEventListener('click',()=>{
    abo.style.display="none";
    con.style.display="flex";
    con.style.transition="ease-in 1s";
    contact1.classList.add("men");
    about1.classList.remove("men");
  });