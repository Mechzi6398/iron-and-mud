<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Iron & Mud</title>
<style>
body{
margin:0;
overflow:hidden;
}
</style>
</head>
<body>

<script type="module">

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.body.appendChild(
renderer.domElement
);

const floor =
new THREE.Mesh(
new THREE.PlaneGeometry(100,100),
new THREE.MeshBasicMaterial()
);

floor.rotation.x=-Math.PI/2;
scene.add(floor);

camera.position.y=2;
camera.position.z=5;

function animate(){
requestAnimationFrame(animate);
renderer.render(scene,camera);
}

animate();

</script>

</body>
</html>
