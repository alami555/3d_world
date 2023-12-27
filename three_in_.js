

console.log('strat 3D world..')


var x0 = 0 , y0 = 0;
screen_1.style.width = `${window.innerWidth}px`;
screen_1.style.height = `${window.innerHeight}px`; 
/*function sizescreen(){
    screen_1.style.width = `${window.innerWidth}px`;
    screen_1.style.height = `${window.innerHeight}px`;
    var w = window.innerWidth / 2 - (640)
    var h = window.innerHeight / 2 - (460)
   //var el = document.getElementById('camera')
    // camera.style.left = `${w}px`;
    // camera.style.top = `${h}px`;
   var c =  x0 = w
   var c1 =  y0 = h
    requestAnimationFrame(sizescreen)
    return x0 = c , y0 = c1
 }
  
sizescreen();
*/
var pv = 1010;
let zoom = 1;
const ZOOM_SPEED = 7;
document.addEventListener("wheel", function(e) {  
if(e.deltaY > 0){
var k1 = zoom -= ZOOM_SPEED;
 camera.style.transform = `perspective(${pv}px) translate3d(0pc , 0pc , ${k1}pc)`;  
 
}else{    
var k2 =  zoom += ZOOM_SPEED;
camera.style.transform = `perspective(${pv}px) translate3d(0pc , 0pc , ${k2}pc)`;  
} 
}
);



var camera_1 = document.createElement('div');
camera_1.id = 'camera'
camera_1.style.width = `1277px`;
camera_1.style.height = ` 904px`;
//camera_1.style.backgroundColor = 'red';
camera_1.style.transform = `perspective(${pv}px) translate3d(0pc, 0pc, -57pc)`;
setInterval(()=>{
camera_1.style.left = `${x0}px`;
camera_1.style.top = `${y0}px`;
},10)
screen_1.appendChild(camera_1)

var sceen1 = document.createElement('div');
sceen1.id = 'Sceen'
sceen1.style.width = `1277px`;
sceen1.style.height = `1277px`;
sceen1.style.top = `-200px`;
sceen1.style.left = `0px`;
//sceen1.style.backgroundColor = 'blue';
sceen1.style.transform = `rotateX(-100deg)`
camera_1.appendChild(sceen1);
var lightelm = document.createElement('div');
lightelm.id = 'light1';
lightelm.style.width = '60px';
lightelm.style.height = '60px';
lightelm.style.background = 'white';
lightelm.style.top = '420px';
lightelm.style.left = '612px';
lightelm.style.transform = '   rotateY(30deg) translate3d(0px, 0px, 578px)';
lightelm.style.opacity = '0'
camera_1.appendChild(lightelm)

var comp = document.createElement('div');
comp.id = 'com1';
comp.style.width = '20px';
comp.style.height = '360px';
comp.style.background = 'white';
camera_1.appendChild(comp)


var vx = '',
    vy = '', 
    vz = ''


    
    
    
;

var 
faces1 = '',
faces2 = '',
faces3 = '',
faces4 = '',
faces5 = '',
faces6 = ''

;

var 
pox = 0,
poy = 0,
poz = 0

;
var box_a = 0;

var boX = '';




 // Select the light










//var vx1 = 0 , vy1 = 0 ;
const three = {
  
CubeGeometry:function(v1,v2,v3){
  vx = v1;
  vy = v3;
  vz = v2;
var el = 'div';
var _box = document.createElement('div');
_box.id = 'box';
_box.style.width = '200px';
_box.style.height = '200px';
//_box.style.backgroundColor = 'red';
/*
_box.style.transform = `
 matrix3d(${v1}, 0, 0, 0, 0, ${v3}, 0, 0, 0, 0, ${v2}, 0, 0, 0, 0, 1)
    
`;
*/
_box.style.left = `${540}px`;
_box.style.top = `${540}px`;
/*
_box.innerHTML = `
<${el} id='face'
style="
width: 200px;
height: 200px;
transform: rotateX(90deg) ;
top: -100px;
";=""
></${el}>
<${el} id='face'
style="
width: 200px;
height: 200px;
transform: rotateX(-90deg) ;
top: 100px;
";=""
></${el}>
<${el} id='face'
style="
width: 200px;
height: 200px;
transform: rotateY(-90deg) ;
left:-100px;
";=""
></${el}>
<${el} id='face'
style="
width: 200px;
height: 200px;
transform: rotateY(90deg) ;
left:100px;
";=""
></${el}>
<${el} id='face'
style="
width: 200px;
height: 200px;
transform: translateZ(-100px) rotateX(180deg);
";=""
></${el}>
<${el} id='face'
style="
width: 200px;
height: 200px;
transform: translateZ(100px);
";=""
></${el}>


`;
*/
var face1 = document.createElement('div');
face1.id = 'face';
face1.style.border = '0.001mm solid black';
face1.style.width = '200px';
face1.style.height = '200px';
face1.style.top = '-100px'
face1.style.transform = 'rotateX(90deg)';
_box.appendChild(face1)

var face2 = document.createElement('div');
face2.id = 'face';
face2.style.border = '0.001mm solid black';
face2.style.width = '200px';
face2.style.height = '200px';
face2.style.top = '100px'
face2.style.transform = 'rotateX(-90deg)';
_box.appendChild(face2)

var face3 = document.createElement('div');
face3.id = 'face';
face3.style.border = '0.001mm solid black';
face3.style.width = '200px';
face3.style.height = '200px';
face3.style.left = '-100px'
face3.style.transform = 'rotateY(-90deg)';
_box.appendChild(face3)

var face4 = document.createElement('div');
face4.id = 'face';
face4.style.border = '0.001mm solid black';
face4.style.width = '200px';
face4.style.height = '200px';
face4.style.left = '100px'
face4.style.transform = 'rotateY(90deg)';
_box.appendChild(face4)

var face5 = document.createElement('div');
face5.id = 'face';
face5.style.border = '0.001mm solid black';
face5.style.width = '200px';
face5.style.height = '200px';

face5.style.transform = 'translateZ(-100px) rotateX(180deg)';
_box.appendChild(face5)

var face6 = document.createElement('div');
face6.id = 'face';
face6.style.border = '0.001mm solid black';
face6.style.width = '200px';
face6.style.height = '200px';

face6.style.transform = 'translateZ(100px) ';
_box.appendChild(face6)


var f1 = faces1 = face1 ;
var f2 = faces2 = face2 ;
var f3 = faces3 = face3 ;
var f4 = faces4 = face4 ;
var f5 = faces5 = face5 ;
var f6 = faces6 = face6 ;

var wx = boX = _box;

if(wx){
  return wx  ; 
}
if(f1){
  
  return f1;
}
 if(f2){
  
  return f2;
}
if(f3){
  
  return f3;
}
if(f4){
  
  return f4;
}
if(f5){
  
  return f5;
}
if(f6){
  
  return f6;
}




},


PlaneGeometry:function(v1,v2,v3){
  vx = v1;
  vy = v3;
  vz = v2;
 


    var plane = document.createElement('div');
    plane.id = 'S'
    plane.style.width = `${200}px`;
    plane.style.height = `${200}px`;
    plane.style.left = `${540}px`;
    plane.style.top = `${540}px`;
    plane.style.backgroundColor = 'blue';
    //plane.style.transform = `scale3d(${v1},${v2} , 1)`
  return plane;
}
,
Sceen:{
    add:function(v1){
      
        sceen1.appendChild(v1);
       return sceen1;
       //sceen1.innerHTML += `${v1}`
}
,
addTEXT:function(v1){
  
  sceen1.innerHTML = `${v1}`;
  
}

},
Mesh:(v1 , v2 , v3 , v4)=>{
//setInterval(()=>{
 // console.log(pox,poy,poz);

  x1 = v2;
  y1 = v4;
  z1 = v3;
  //v1.style.left = `${pox}px`;
  //v1.style.top = `${poy}px`;

  v1.style.transform = `translate3d(${pox}px,${poy}px,${poz}px) rotateX(${x1}deg) rotateY(${y1}deg) rotateZ(${z1}deg)  matrix3d(${vx}, 0, 0, 0, 0, ${vy}, 0, 0, 0, 0, ${vz}, 0, 0 ,0, 0, 1)`;



  
//},10)

return v1;

  
}
,
MeshPhongMaterial:function(v10 , v20 , v30){
  
faces1.style.backgroundColor = `rgb(${v10} , ${v20} , ${v30})`;
faces2.style.backgroundColor = `rgb(${v10} , ${v20} , ${v30})`;
faces3.style.backgroundColor = `rgb(${v10} , ${v20} , ${v30})`;
faces4.style.backgroundColor = `rgb(${v10} , ${v20} , ${v30})`;
faces5.style.backgroundColor = `rgb(${v10} , ${v20} , ${v30})`;
faces6.style.backgroundColor = `rgb(${v10} , ${v20} , ${v30})`;

//if(faces1 = faces2 = faces3 = faces4 = faces5 = faces6){
  return {
   faces1 , faces2, faces3 , faces4 , faces5 , faces6
}
} 
,
position:{
  set:function(x1,y1,z1){
   
      var w_1 = pox = x1;
      var w_2 = poy = z1;
      var w_3 = poz = y1;
    // var li = [w_1,w_2,w_3];
   
     
      return{
        w_1,w_2,w_3
      };
   
}
  
} 
,
MeshImagefaces:function(v1,im,facen){
  /*
  for(var i = 1; i < facen ; i++){
    var allface = (faces + i)
   // console.log(allface)
    allface.style.backgroundImage = `linear-gradient( rgba(0,0,0,${v1} ),rgba(0,0,0,${v1} )),url(${im})`;
    allface.style.backgroundSize = `cover`;
    
  }*/
  
  faces1.style.backgroundImage = `linear-gradient( rgba(0,0,0,${v1} ),rgba(0,0,0,${v1} )),url(${im})`;
  faces1.style.backgroundSize = `cover`;

  faces2.style.backgroundImage = `linear-gradient( rgba(0,0,0,${v1} ),rgba(0,0,0,${v1} )),url(${im})`;
  faces2.style.backgroundSize = `cover`;

  faces3.style.backgroundImage = `linear-gradient( rgba(0,0,0,${v1} ),rgba(0,0,0,${v1} )),url(${im})`;
  faces3.style.backgroundSize = `cover`;

  faces4.style.backgroundImage = `linear-gradient( rgba(0,0,0,${v1} ),rgba(0,0,0,${v1} )),url(${im})`;
  faces4.style.backgroundSize = `cover`;

  faces5.style.backgroundImage = `linear-gradient( rgba(0,0,0,${v1} ),rgba(0,0,0,${v1} )),url(${im})`;
  faces5.style.backgroundSize = `cover`;

  faces6.style.backgroundImage = `linear-gradient( rgba(0,0,0,${v1} ),rgba(0,0,0,${v1} )),url(${im})`;
  faces6.style.backgroundSize = `cover`;

}
,
Light:function(){
  window.requestAnimationFrame =
   window.requestAnimationFrame ||
   
   function(fps) {
      setTimeout(fps, 1000/60); 
   
   
    
     
     };
   
   
   
     var light = document.getElementById("light1");
   
     // Select the faces
     var faces = [].slice.call(face);
     
   
   
   
   function loop() {
   
    var lightPosition = getTransform(light).translate;
   
   // Schedule the next render
   requestAnimationFrame(loop)
   
     
     faces.forEach(function (face, i) {
   
       var vertices = 
       computeVertexData(face)
     
       
       
       ;
     
       var faceCenter = Vect3.divs(Vect3.sub(vertices.c, vertices.a), 5);
   
       var faceNormal = Vect3.normalize(Vect3.cross(Vect3.sub(vertices.b, vertices.a), Vect3.sub(vertices.c, vertices.a)));
   
       var direction = Vect3.normalize(Vect3.sub(lightPosition, faceCenter));
   
       var amount = 1 -  Math.max(0 , Vect3.dot(faceNormal, direction)).toFixed(10);
       
       var img = ',url(crate.gif) ';
       //console.log(amount)
    
      face.style.backgroundImage = ` linear-gradient( rgba(0,0,0,${amount} ), rgba(0,0,0,${amount} )) `;
      face.style.border = 'none';
   
   
   
   });
   
   // Light each face
   
   
   }      
   
   
   loop()

}








}











var begX, begY, prevX, prevY, newX, newY, dv;
newX=0; newY=-100;
screen_1.onmousedown = beginD;
screen_1.onmouseup = stopD;
var rox = 97;
function beginD(e){
  dv = screen_1.parentNode.offsetWidth >> 8;
  begX = e.clientX/(dv!=0?dv:dv=4);
  begY = e.clientY/dv;
  prevX = newX;
  prevY = newY;
  drag = true;
  document.onmousemove = letsD; 
  return false;
}

function letsD(e) {
  if (!drag) return;
  newX =  (prevX + (e.clientX/dv) - begX);
  newY = prevY - (e.clientY /dv) + begY;

sceen1.style.transform = `rotateX(${newY}deg)   rotateZ(${newX}deg)     `;



  
 

  return false; 
} 

function stopD() { 
  drag = false;
  
}















