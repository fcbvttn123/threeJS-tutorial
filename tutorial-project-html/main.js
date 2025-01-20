import * as THREE from "three"

// 1. Create the scene
const scene = new THREE.Scene()
scene.background = new THREE.Color("#F0F0F0")

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(
  // The camera's field of view (in degrees)
  75,
  // The aspect ratio of the camera (based on the current window size)
  window.innerWidth / window.innerHeight,
  // Objects closer than this distance will not be rendered
  0.1,
  // Objects farther than this distance will not be rendered
  1000
)
camera.position.z = 5

// 3.Create and add a cube object
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
})
const cube = new THREE.Mesh(geometry, material)

// 4. Add lighting
const light = new THREE.DirectionalLight(
  // Light Color
  0x9cdba6,
  // Light Intensity
  10
)
light.position.set(1, 1, 1)

// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 6. Connecting elements
scene.add(cube)
scene.add(light)

// 7. Animate the scene
function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()
