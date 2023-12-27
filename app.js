

const Sceen =  three.Sceen;
var sun =  three.Light;



    three.position.set(0,0,0);
    var cube1 = three.CubeGeometry(10,0.1,0.1);
    var v =  three.MeshPhongMaterial(250,10, 0);
   //three.MeshImagefaces(1.9,'crate.gif',7);
var mesh1  = three.Mesh(cube1,190,0,10);
 
  
   Sceen.add(mesh1);






//sun()



sun()


  
document.addEventListener('DOMContentLoaded', function(event) {

  if (window.DeviceOrientationEvent) {
   // document.getElementById('notice').innerHTML = 'Working API detected';
    window.addEventListener('deviceorientation', (eventData) => {
      // gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
      const y1 = eventData.gamma;
      // beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
      const x1 = eventData.beta;
      // alpha: The direction the compass of the device aims to in degrees.
      const z1 = eventData.alpha;
      // Call the function to use the data on the page.
      deviceOrientationHandler(y1 , x1, z1);
    }, false);
  } /*else {
    document.getElementById('notice').innerHTML = 'No API detected'
  };
*/
  function deviceOrientationHandler(y,x,z) {
    /*
    document.getElementById('tiltLR').innerHTML = Math.ceil(tiltLR);
    document.getElementById('tiltFB').innerHTML = Math.ceil(tiltFB);
    document.getElementById('direction').innerHTML = Math.ceil(dir);
    */
    // Rotate the disc of the compass. - CSS transform
    //const compassDisc = document.getElementById('compassDiscImg');
      
    mesh1.style.rotate = `${z}deg`;


    
  }
    



      

});


































    


















