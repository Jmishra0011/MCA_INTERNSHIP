const images = [
  "https://www.shutterstock.com/image-illustration/lord-bal-krishna-colorful-background-600nw-1757751773.jpg",
  "https://unsplash.com/photos/lord-ganesha-figurine-q1EYz9ktPH8",
  "https://unsplash.com/photos/gold-buddha-figurine-on-black-table-Tyvg1zigZ14",
  "https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Add more image URLs as needed
];

let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");

function changeImage(step) {
  currentIndex += step;

  // Wrap around when reaching the end or beginning of the array
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  const imageUrl = images[currentIndex];
  galleryImage.src = imageUrl;
}

// Initialize with the first image
changeImage(0);
