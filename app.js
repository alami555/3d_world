

const Sceen =  three.Sceen;
var sun =  three.Light;



three.position.set(0,0,0);
    var cube1 = three.CubeGeometry(3,3,10);
    var v =  three.MeshPhongMaterial(250, 240, 230);
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


































    


















