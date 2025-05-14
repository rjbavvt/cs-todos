const images = [
  'Home.png',
  'Us.png'
];

function showImage(index) {
  const imgElement = document.getElementById('mainImage');
  imgElement.src = images[index];
}
