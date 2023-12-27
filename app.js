

const Sceen =  three.Sceen;
var sun =  three.Light;



//let text = String.fromCharCode(40);
//let result =  text.endsWith("world");
//let depth = screen.colorDepth;
//let depth = screen.pixelDepth;
/*
 var te = 'hello ';
 var addcolor = te.fontcolor('red')


Sceen.addTEXT(addcolor)

*/
/*
<!DOCTYPE html>
<html>
<body>
<h1>HTML5 Canvas</h1>
<h2>The drawImage() Method</h2>

<p>Image to use:</p>
<img id="scream" src="img_the_scream.jpg" alt="The Scream" width="220" height="277">

<p><button onclick="draw()">Tryit</button></p>

<p>Canvas:</p>
<canvas id="myCanvas" width="250" height="300" style="border:1px solid grey"></canvas>

<script>
function draw() {
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  const img = document.getElementById("scream");
  ctx.drawImage(img, 10, 10, 150, 180);
}
</script>

</body>
</html>

*/

  var x1 = 0 , y1 = 0, z1 = 0;
/*
  for(let x = 0; x < 6; x++){
    for(let y = 0; y < 6; y++){
      for(let z = 0; z < 6; z++){
        
        x1 = x * 300 + (-500);
        
        y1 = y * 300 + (-500);
        z1 = z * 300 + (-500);

        three.position.set(x1,y1,z1);
        var cube4 = three.CubeGeometry(1,1,1);
        var vb1 =  three.MeshPhongMaterial(250, 240, 230);
        var mesh4 = three.Mesh(cube4,0,0,0);
        Sceen.add(mesh4);

}
}
}
*/ 


























three.position.set(0,0,0);
    var cube1 = three.CubeGeometry(1,1,1);
    var v =  three.MeshPhongMaterial(0, 150, 0);
   //three.MeshImagefaces(1.9,'crate.gif',7);
    var mesh1  = three.Mesh(cube1,0,0,0);
 
  
   Sceen.add(mesh1);
//sun()



sun()


  
document.addEventListener('DOMContentLoaded', function(event) {

  if (window.DeviceOrientationEvent) {
   // document.getElementById('notice').innerHTML = 'Working API detected';
    window.addEventListener('deviceorientation', (eventData) => {
      // gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
      const tiltLR = eventData.gamma;
      // beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
      const tiltFB = eventData.beta;
      // alpha: The direction the compass of the device aims to in degrees.
      const dir = eventData.alpha
      // Call the function to use the data on the page.
      deviceOrientationHandler(tiltLR, tiltFB, dir);
    }, false);
  } /*else {
    document.getElementById('notice').innerHTML = 'No API detected'
  };
*/
  function deviceOrientationHandler(tiltLR, tiltFB, dir) {
    /*
    document.getElementById('tiltLR').innerHTML = Math.ceil(tiltLR);
    document.getElementById('tiltFB').innerHTML = Math.ceil(tiltFB);
    document.getElementById('direction').innerHTML = Math.ceil(dir);
    */
    // Rotate the disc of the compass. - CSS transform
    //const compassDisc = document.getElementById('compassDiscImg');
    mesh1.style.transform = `rotateZ(${dir}deg)`
  }

});


































    


















