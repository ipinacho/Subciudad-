import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const loader = new GLTFLoader();

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( 'jsm/libs/draco/gltf/' );

loader.setDRACOLoader( dracoLoader );

loader.load( 'assets/ferrari.glb', function ( gltf ) {
  console.log("here");
  scene.add( gltf.scene );
}, undefined, function ( error ) {
  console.error( "pERR0R:", error );
});
camera.position.z = 50;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );