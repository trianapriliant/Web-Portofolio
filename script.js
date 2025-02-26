
// 3D Profile Animation
const initProfile3D = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const container = document.getElementById('profile3D');
  
  renderer.setSize(200, 200);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    color: 0xA3BFFA,
    shininess: 100
  });
  
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 2);
  scene.add(light);

  camera.position.z = 3;

  const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();
};

// Form Validation
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add form submission logic here
  alert('Message sent successfully!');
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Card expansion functionality
document.querySelector('.expandable-card')?.addEventListener('click', function() {
  this.classList.toggle('expanded');
});

// Initialize 3D effects when the page loads
window.addEventListener('load', initProfile3D);
