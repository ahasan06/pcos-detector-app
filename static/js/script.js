window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');

  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-[#0a0f2c]/90', 'backdrop-blur');
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-[#0a0f2c]/90', 'backdrop-blur');
  }
});


const infectedContainer = document.getElementById("infected-grid");
const nonInfectedContainer = document.getElementById("noninfected-grid");

// Helper to create image card with download icon
function createImageCard(src) {
  const wrapper = document.createElement("div");
  wrapper.className = "relative rounded-xl overflow-hidden shadow";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "Dataset Image";
  img.className = "object-cover w-full h-24 rounded-xl";

  const a = document.createElement("a");
  a.href = src;
  a.download = "";
  a.className = "absolute top-1 right-1 bg-white text-gray-700 p-1 rounded-full shadow";
  a.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3M12 4v8" />
      </svg>
    `;

  wrapper.appendChild(img);
  wrapper.appendChild(a);
  return wrapper;
}

// List of infected and non-infected images
const infectedImages = Array.from({ length: 10 }, (_, i) => {
  const num = i + 1;
  const padded = num < 10 ? `0${num}` : `${num}`;
  return `/static/images/infected/infected${padded}.jpg`;
});

const nonInfectedImages = Array.from({ length: 10 }, (_, i) => {
  const num = i + 1;
  const padded = num < 10 ? `0${num}` : `${num}`;
  return `/static/images/notinfected/non_infected${padded}.jpg`;
});


// Append infected
infectedImages.forEach((src) => {
  infectedContainer.appendChild(createImageCard(src));
});

// Append non-infected
nonInfectedImages.forEach((src) => {
  nonInfectedContainer.appendChild(createImageCard(src));
});


function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const previewBox = document.getElementById('previewBox');
    const previewImage = document.getElementById('imagePreview');
    previewImage.src = URL.createObjectURL(file);
    previewBox.classList.remove('hidden');
  }
}

// Optional: if you're getting prediction from API dynamically, simulate result display
document.getElementById('uploadForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // simulate model response after 1.5s
  setTimeout(() => {
    document.getElementById('resultBox').classList.remove('hidden');
    document.getElementById('predictionText').innerHTML = 'Detected: <span class="font-bold text-red-400">PCOS Positive</span>';
    document.getElementById('accuracyText').innerHTML = 'Model Accuracy: <span class="font-bold text-green-400">94.8%</span>';
  }, 1500);
});
