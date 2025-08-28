const movies = [
  {
    title: "Inception",
    year: 2010,
    category: "sci-fi",
    image: "images/inception.jpg",
    description: "A thief who enters dreams to steal secrets must pull off one final job.",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    title: "Joker",
    year: 2019,
    category: "drama",
    image: "images/joker.jpg",
    description: "A failed comedian spirals into madness and becomes Gotham's infamous Joker.",
    trailer: "https://www.youtube.com/embed/t433PEQGErc"
  },
  {
    title: "Avatar",
    year: 2009,
    category: "sci-fi",
    image: "images/avatar.jpg",
    description: "On an alien world, humans exploit resources, but one soldier chooses another path.",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    category: "action",
    image: "images/avengers.jpg",
    description: "Earth's mightiest heroes assemble for the ultimate battle against Thanos.",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
  },
  {
    title: "Interstellar",
    year: 2014,
    category: "sci-fi",
    image: "images/interstellar.jpg",
    description: "A team of explorers travel through a wormhole in space to save humanity.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    title: "Toy Story",
    year: 1995,
    category: "animation",
    image: "images/toy_story.jpg",
    description: "Toys come to life and embark on adventures when their owner is away.",
    trailer: "https://www.youtube.com/embed/KYz2wyBy3kc"
  },
  {
    title: "RRR",
    year: 2022,
    category: "action",
    image: "images/rrr.jpg",
    description: "Two revolutionaries fight against British colonial rule in this epic Telugu blockbuster.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    title: "Pushpa: The Rise",
    year: 2021,
    category: "action",
    image: "images/pushpa.jpg",
    description: "The rise of Pushpa Raj, a red sandalwood smuggler, who battles enemies and the system.",
    trailer: "https://www.youtube.com/embed/Q1NKMPhP8PY"
  },
  {
    title: "Baahubali 2: The Conclusion",
    year: 2017,
    category: "action",
    image: "images/baahubali2.jpg",
    description: "Mahendra Baahubali avenges his father's death and reclaims the Mahishmati throne.",
    trailer: "https://www.youtube.com/embed/G62HrubdD6o"
  },
  {
    title: "Jawan",
    year: 2023,
    category: "action",
    image: "images/jawan.jpg",
    description: "A man fights corruption and injustice, taking on a powerful system to protect the people.",
    trailer: "https://www.youtube.com/embed/MWOlnZSnXJo"
  },
  {
    title: "Pathaan",
    year: 2023,
    category: "action",
    image: "images/pathaan.jpg",
    description: "An Indian spy teams up with allies to stop a biological attack planned against his homeland.",
    trailer: "https://www.youtube.com/embed/vqu4z34wENw"
  },
  {
    title: "Brahmāstra: Part One – Shiva",
    year: 2022,
    category: "sci-fi",
    image: "images/brahmastra.jpg",
    description: "A young man discovers his connection to a mystical weapon and an ancient secret society.",
    trailer: "https://www.youtube.com/embed/BUjXzrgntcY"
  },
  {
    title: "KGF Chapter 2",
    year: 2022,
    category: "action",
    image: "images/kgf2.jpg",
    description: "Rocky continues his battle to control the gold mines and face ruthless enemies.",
    trailer: "https://www.youtube.com/embed/JKa05nyUmuQ"
  },
  {
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    category: "romance",
    image: "images/ddlj.jpg",
    description: "Raj and Simran fall in love during a trip to Europe, but face family opposition back home.",
    trailer: "https://www.youtube.com/embed/cmax1C1p660"
  },
  {
    title: "La La Land",
    year: 2016,
    category: "romance",
    image: "images/lalaland.jpg",
    description: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    trailer: "https://www.youtube.com/embed/0pdqf4P9MB8"
  },
  {
    title: "Geetha Govindam",
    year: 2018,
    category: "romance",
    image: "images/geetha_govindam.jpg",
    description: "A charming lecturer falls in love with a young woman, but misunderstandings create hurdles in their journey of love.",
    trailer: "https://youtu.be/OYK2eJ0oeg8?feature=shared"
  }
];

const movieContainer = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function createCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="movie-info">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <div class="movie-meta"><span>${movie.category}</span></div>
      <p>${movie.description}</p>
    </div>
  `;
  card.addEventListener("click", () => openModal(movie));
  return card;
}

function displayMovies(filteredMovies) {
  movieContainer.innerHTML = "";
  if (filteredMovies.length === 0) {
    movieContainer.innerHTML = '<p style="color:#bbb; grid-column: 1/-1; text-align:center;">No movies found.</p>';
    return;
  }
  filteredMovies.forEach(movie => {
    movieContainer.appendChild(createCard(movie));
  });
}

function filterMovies() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = movies.filter(movie =>
    (movie.title.toLowerCase().includes(searchText) || movie.description.toLowerCase().includes(searchText)) &&
    (selectedCategory === "all" || movie.category === selectedCategory)
  );

  displayMovies(filtered);
}

searchInput.addEventListener("input", filterMovies);
categorySelect.addEventListener("change", filterMovies);

// Modal logic
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTrailer = document.getElementById("modal-trailer");
const modalClose = document.getElementById("modal-close");

function openModal(movie) {
  modalImg.src = movie.image;
  modalImg.alt = movie.title;
  modalTitle.textContent = `${movie.title} (${movie.year})`;
  modalDesc.textContent = movie.description;
  modalTrailer.src = movie.trailer;  // load trailer
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden","true");
  modalTrailer.src = ""; // stop trailer when closing
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Initial load
displayMovies(movies);
