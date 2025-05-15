import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let model;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild( renderer.domElement );

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.background = new THREE.Color(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;
controls.enableRotate = true;

// Grid helper
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);

// Axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Handle window resize
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});


const loader = new OBJLoader();

loader.load( '/assets/Testarossa.obj',  ( obj ) =>{
  console.log("here");
  model = obj;

  const box = new THREE.Box3().setFromObject( model );
  const center = box.getCenter( new THREE.Vector3() );
  const size = box.getSize( new THREE.Vector3() );

  model.position.x = -center.x;
  model.position.y = -center.y;
  model.position.z = -center.z;

  const maxDim = Math.max( size.x, size.y, size.z );

  if(maxDim > 5){
    const scale = 5 / maxDim;
    model.scale.set(scale, scale, scale);
  }

  scene.add( model );
}, undefined, function ( error ) {
  console.error( "pERR0R:", error );
});


function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );