AFRAME.registerComponent("ball", {
    init: function () {
      this.throwBall();
    },
    throwBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var ball = ball.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
  
          ball.setAttribute("color", "bowling_ball");
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          ball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          ball.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
          ball.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0"
          });
          ball.addEventListener("collide", this.removeBullet);
  
          scene.appendChild(ball);

          ball.addEventListener("collide", this.removeBall);
        }
      });
    },
    removeBall: function(e){
      console.log(e.detail.target.el);
      console.log(s.detail.body.el);
      var element= e.detail.target.el;
      var elementHit=e.detail.body.e;;
      if(elementHit.id.includes){}
      //bullet element
      var elemente = detail.target.el;
  //element which is hit
      var elementHite = detail.body.el;
      if (elementHit.id.includes ("pin")) {
        //impulse and point vector
        var impulse = new CANNON. Vec3(0,1,-15);
        var worldPoint = new CANNON. Vec3().copy();
        elementHit.getAttribute("position")
        elementHit.body.applyForce (impulse, worldPoint);
        //remove event listener
        element.removeEventListener("collide", this.removeBall);
        //remove the bullets from the scene
        var scene = document.querySelector("#scene"); 
        scene.removeChild(element);
        };
    }
    
  });


  
  
  