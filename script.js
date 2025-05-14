const images = [
  'images/Home.png',
  'images/Us.png'
];

function showImage(index) {
  const imgElement = document.getElementById('mainImage');
  imgElement.src = images[index];
}
