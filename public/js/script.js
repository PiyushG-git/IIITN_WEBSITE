function loadingAnimation() {
  var images = document.querySelectorAll(".loader-img");
  let delayTime = 0;

  let tl = gsap.timeline();
  images.forEach((img, index) => {
    tl.to(img, { opacity: 1, duration: 0.05, delay: delayTime }).to(img, {
      opacity: 0,
      duration: 0.05,
      delay: 0.01,
    });
    delayTime += 0.02;
  });

  setTimeout(() => {
    gsap.to("#loader", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        document.getElementById("loader").style.display = "none";
        //maine page1 ka animation hata diya hai
        document.getElementById("main").style.display = "block";
        gsap.from("#main", { opacity: 0, y: 50, duration: 1 });
      },
    });
  }, images.length * 200);
}

loadingAnimation();

const menuButtons = document.querySelectorAll(".menu");
const dropdowns = document.querySelectorAll(".dropdown");

menuButtons.forEach((button) => {
  const dropdownId = button.getAttribute("data-dropdown");
  const dropdownMenu = document.getElementById(dropdownId);

  button.addEventListener("mouseenter", () => {
    closeAllDropdowns(); // Close other dropdowns first
    button.classList.add("active");
    dropdownMenu.classList.add("active");
  });

  dropdownMenu.addEventListener("mouseenter", () => {
    dropdownMenu.classList.add("active");
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.classList.remove("active");
    button.classList.remove("active");
  });
});

document.addEventListener("mouseover", (event) => {
  if (
    ![...menuButtons, ...dropdowns].some((elem) => elem.contains(event.target))
  ) {
    closeAllDropdowns();
  }
});

function closeAllDropdowns() {
  menuButtons.forEach((button) => button.classList.remove("active"));
  dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
}








// Select all tiles
const tiles = document.querySelectorAll(".tile");

// Add hover animation effect
tiles.forEach((tile) => {
  tile.addEventListener("mouseenter", () => {
    tile.classList.add("hover");
  });

  tile.addEventListener("mouseleave", () => {
    tile.classList.remove("hover");
  });
});




function slideCards(direction) {
  const container = document.getElementById("cards");
  const scrollAmount = 300;

  if (direction === "left") {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

//javascripts for news
// const events = [
//   {
//     date: "FEB 18, 2025",
//     title: "School Students Visit at NIT Jalandhar",
//     img: "https://nitj.ac.in/files/1739868813778-14Feb_Bilga.jpg",
//     link: "#",
//   },
//   {
//     date: "FEB 17, 2025",
//     title: "NITJ Half Marathon – Pace for Positivity",
//     img: "https://nitj.ac.in/files/1739621323062-1.jpeg",
//     link: "#",
//   },
//   {
//     date: "FEB 10, 2025",
//     title: "All India Inter NIT Tournament",
//     img: "https://nitj.ac.in/files/1739182171938-main.jpeg",
//     link: "#",
//   },
//   {
//     date: "JAN 29, 2025",
//     title: "Placement Drive – Hematsingka",
//     img: "https://nitj.ac.in/files/1738144114458-IMG-20250129-WA0002.jpg",
//     link: "#",
//   },
//   {
//     date: "MAR 15, 2024",
//     title: "Utkansh’24 - Mega Cultural Festival",
//     img: "https://www.nitj.ac.in/images/slider/02_Placement_Benchmarks_48903.png",
//     link: "#",
//   },
//   {
//     date: "APR 5, 2023",
//     title: "Placed at a package of 1.2 crore",
//     img: "https://www.nitj.ac.in/images/slider/04_Highest_Package_32291.png",
//     link: "#",
//   },
// ];

// const carousel = document.getElementById("carousel");

// events.forEach((event) => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML = `
//       <img src="${event.img}" alt="${event.title}">
//       <div class="card-content">
//           <p class="date">${event.date}</p>
//           <p class="title">${event.title}</p>
//           <a href="${event.link}" class="read-more">Read More →</a>
//       </div>
//   `;
//   carousel.appendChild(card);
// });

// function scrollCarousel(direction) {
//   const scrollAmount = 300;
//   if (direction === "left") {
//     carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//   } else {
//     carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   }
// }

// // Sample news data
// const newsData = [
//   {
//     title: "Document Verification and Stage-II Selection Process",
//     link: "https://www.nitj.ac.in/template/index.html?id=66ecf300033ae592141ef6e6?category=newpage",
//     isNew: true,
//   },
//   {
//     title: "Annual Alumni Meet and Silver Jubilee Celebration - 22nd Dec 2025",
//     link: "https://www.nitj.ac.in/template/index.html?id=67b850528b69e0412f1149a0?category=newpage",
//     isNew: false,
//   },
//   {
//     title: "Job Openings: JRF/Project Assistant/Project Associate",
//     link: "https://nitj.ac.in/template/index.html?id=65d43060f5e9d537566a6989?category=newpage",
//     isNew: false,
//   },
//   {
//     title: "Stage-II Admit Card for Registrar, Librarian & Medical Officer",
//     link: "https://www.nitj.ac.in/template/index.html?id=66ecf300033ae592141ef6e6?category=newpage",
//     isNew: true,
//   },
// ];

// Function to load news dynamically
// function loadNews() {
//   const newsContainer = document.getElementById("news-cards");
//   newsContainer.innerHTML = ""; // Clear existing news

//   newsData.forEach((news) => {
//     const newsCard = document.createElement("div");
//     newsCard.classList.add("news-card");

//     if (news.isNew) {
//       newsCard.innerHTML += `<span class="new-badge">NEW</span>`;
//     }

//     newsCard.innerHTML += `
//               <a href="${news.link}" target="_blank">
//                   ${news.title}
//               </a>
//           `;

//     newsContainer.appendChild(newsCard);
//   });
// }

// Load news on page load
// window.onload = loadNews;





// JavaScript of page5


// document.addEventListener("DOMContentLoaded", function () {
//   const clubsContainer = document.getElementById("clubs-and-socs");

//   const clubs = [
//     {
//       name: "ANIMANIACS",
//       category: "Cultural",
//       description:
//         "Animaniacs is the first official animation club of NITJ. We are a creative community...",
//       image:
//         "https://nitj.ac.in/clubs/img/IMG-20230321-WA0005%20-%20ARUN%20RAJEEV.jpg",
//       link: "https://nitj.ac.in/clubs/animanics.html",
//     },
//     {
//       name: "SPIC MACAY",
//       category: "Cultural",
//       description:
//         "SPIC MACAY promotes Indian classical music, dance, and other forms of traditional art...",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTEm-32N-O4UJSE8e30OQ-xLV-g-TpGmB9JKt1ix6TKUqposxUwdR9WZFSJhkTtCRaLU&usqp=CAU",
//       link: "https://nitj.ac.in/clubs/spic.html",
//     },
//     {
//       name: "SPIC MACAY",
//       category: "Cultural",
//       description:
//         "SPIC MACAY promotes Indian classical music, dance, and other forms of traditional art...",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTEm-32N-O4UJSE8e30OQ-xLV-g-TpGmB9JKt1ix6TKUqposxUwdR9WZFSJhkTtCRaLU&usqp=CAU",
//       link: "https://nitj.ac.in/clubs/spic.html",
//     },
//   ];

//   function createClubCard(club) {
//     return `
//         <div class="club-card">
//             <img src="${club.image}" class="club-image" alt="${club.name}">
//             <div class="club-info">
//                 <h4 class="club-title">${club.name}</h4>
//                 <div class="club-category">${club.category}</div>
//                 <p class="club-description">${club.description}</p>
//                 <a href="${club.link}" target="_blank" class="club-learn-more">Learn more →</a>
//             </div>
//         </div>
//         `;
//   }

//   clubs.forEach((club) => {
//     clubsContainer.innerHTML += createClubCard(club);
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery");

  // Array of images (You can fetch these from an API too)
  const imageUrls = [
    "../images/photos/image1.jpg",
    "../images/photos/image2.jpg",
    "../images/photos/image3.jpg",
    "../images/photos/image4.jpg",
    "../images/photos/image5.jpg",
    "../images/photos/image6.jpg",
    "../images/photos/image7.jpg",
    "../images/photos/image8.jpg",
    "../images/photos/image9.jpg",
    "../images/photos/image10.jpg",
    "../images/photos/image11.jpg",
    "../images/photos/image12.jpg"

  ];

  const imagesPerRow = 4; // Adjust the number of images per row

  for (let i = 0; i < imageUrls.length; i += imagesPerRow) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("gallery-row");

    // Add images in this row
    for (let j = i; j < i + imagesPerRow && j < imageUrls.length; j++) {
      const boxDiv = document.createElement("div");
      boxDiv.classList.add("gallery-box");

      const img = document.createElement("img");
      img.classList.add("gallery-image");
      img.src = imageUrls[j];

      boxDiv.appendChild(img);
      rowDiv.appendChild(boxDiv);
    }

    galleryContainer.appendChild(rowDiv);
  }

  // Hover Effect
  document.querySelectorAll(".gallery-row").forEach((row) => {
    const images = row.querySelectorAll(".gallery-box");

    images.forEach((image) => {
      image.addEventListener("mouseenter", () => {
        row.querySelectorAll(".gallery-box").forEach((img) => {
          img.style.flex = "0.85"; // Shrink other images
        });
        image.style.flex = "1.5"; // Expand hovered image
      });

      image.addEventListener("mouseleave", () => {
        row.querySelectorAll(".gallery-box").forEach((img) => {
          img.style.flex = "1"; // Reset all images
        });
      });
    });
  });
});





// JavaScript for page6
// document.addEventListener("DOMContentLoaded", function () {
//   setTimeout(() => {
//     document.getElementById("noOfStudents").innerHTML =
//       document.getElementById("noOfStudents").dataset.value;
//     document.getElementById("noOfFaculty").innerHTML =
//       document.getElementById("noOfFaculty").dataset.value;
//     document.getElementById("noOfStaff").innerHTML =
//       document.getElementById("noOfStaff").dataset.value;
//   }, 1000);
// });



//page3 javascript

// Function to Render Notices
// function renderNotices(category) {
//   const updatesList = document.getElementById("page3-part2-updates");
//   updatesList.innerHTML = "";
//   notices[category].forEach((notice) => {
//     updatesList.innerHTML += `
//   <li>
//     <a href="${notice.link}" target="_blank">${notice.title}</a>
//     <div class="meta-info">
//         <div class="new-tag">
//         <span></span>
//         <p>✨ New</p>
//       </div>
//       <div class="page3-part2-date-tag">
//       <span></span>
//       <p class="page3-part2-annoucement-data">📅 ${notice.startDate} - ${notice.endDate}</p>
//     </div>
//   </div>
//   </li>`;
//   });
// }

// Handle Tab Clicks
// document.querySelectorAll(".page3-part2-tab-btn").forEach((button) => {
//   button.addEventListener("click", function () {
//     document
//       .querySelectorAll(".page3-part2-tab-btn")
//       .forEach((btn) => btn.classList.remove("active"));
//     this.classList.add("active");
//     renderNotices(this.dataset.tab);
//   });
// });

// Load Default Notices
// renderNotices("upcomingEvent");

// document
//   .getElementById("page3-part1-icon")
//   .addEventListener("mouseover", function () {
//     this.classList.add("shake");
//     setTimeout(() => {
//       this.classList.remove("shake");
//     }, 300);
//   });

const notices = {
  upcomingEvent: [
    {
      title:
        "Online Short-Term Course on Application of Econometrics for Management Research",
      link: "#",
      isNew: true,
      startDate: "FEB 24, 2025",
      endDate: "FEB 28, 2025",
    },
    {
      title: "Workshop on ANSYS Simulation",
      link: "#",
      isNew: false,
      startDate: "MAR 3, 2025",
      endDate: "MAR 7, 2025",
    },
    {
      title: "Workshop on ANSYS Simulation",
      link: "#",
      isNew: false,
      startDate: "MAR 3, 2025",
      endDate: "MAR 7, 2025",
    },
    {
      title: "Workshop on ANSYS Simulation",
      link: "#",
      isNew: false,
      startDate: "MAR 3, 2025",
      endDate: "MAR 7, 2025",
    },
  ],
  notice: [
    {
      title: "New Exam Guidelines Released",
      date: "Feb 20, 2025",
      link: "#",
    },
    {
      title: "Student Council Elections Announced",
      link: "#",
      isNew: true,
      startDate: "FEB 22, 2025",
      endDate: "FEB 22, 2025",
    },
  ],
  tender: [
    {
      title: "Student Council Elections Announced",
      link: "#",
      isNew: true,
      startDate: "FEB 22, 2025",
      endDate: "FEB 22, 2025",
    },
  ],
  scholarship: [
    {
      title: "Student Council Elections Announced",
      link: "#",
      isNew: true,
      startDate: "FEB 22, 2025",
      endDate: "FEB 22, 2025",
    },
    {
      title: "Workshop on ANSYS Simulation",
      link: "#",
      isNew: false,
      startDate: "MAR 3, 2025",
      endDate: "MAR 7, 2025",
    },
  ],
};

// Function to Render Notices
function renderNotices(category) {
  const updatesList = document.getElementById("page3-part2-updates");
  updatesList.innerHTML = "";
  notices[category].forEach((notice) => {
    updatesList.innerHTML += `
<li>
  <a href="${notice.link}" target="_blank">${notice.title}</a>
  <div class="meta-info">
      <div class="new-tag">
      <span></span>
      <p>✨ New</p>
    </div>
    <div class="page3-part2-date-tag">
    <span></span>
    <p class="page3-part2-annoucement-data">📅 ${notice.startDate} - ${notice.endDate}</p>
  </div>
</div>
</li>`;
  });
}

// Handle Tab Clicks
document.querySelectorAll(".page3-part2-tab-btn").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".page3-part2-tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    renderNotices(this.dataset.tab);
  });
});

// Load Default Notices
renderNotices("upcomingEvent");


document
      .getElementById("page3-part1-icon")
      .addEventListener("mouseover", function () {
        this.classList.add("shake");
        setTimeout(() => {
          this.classList.remove("shake");
        }, 300);
      });





// // navbar sticky 
//   window.addEventListener("scroll", () => {
//     const headerMiddle = document.getElementById("header-middle");
//     const headerBottom = document.getElementById("header-bottom");
//     // const headerMiddleOffset = headerMiddle.offsetTop;

//     if (window.scrollY >= 100) {
//       // headerMiddle.style.position = "fixed";
//       // headerMiddle.style.top = "0";
//       // headerMiddle.style.width = "100vw";
//       // headerMiddle.style.zIndex = "1000";
//       // headerMiddle.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

//       headerBottom.style.position = "fixed";
//       // headerBottom.style.top = headerMiddle.offsetHeight + "px";
//       headerBottom.style.top = 0;
//       headerBottom.style.width = "100vw";
//       headerBottom.style.zIndex = "999999";
//     } else {
//       headerMiddle.style.position = "relative";
//       headerMiddle.style.boxShadow = "none";
//       headerBottom.style.position = "relative";
//     }
//   });




document.addEventListener("DOMContentLoaded", function () {
  const clubsContainer = document.getElementById("clubs-and-socs");
  const clubsWrapper = document.querySelector(".clubs-container");

  const clubs = [
    {
      name: "Dot Slash",
      category: "Technical Club",
      description: "Dot Slash is the coding wing, fostering programming and development skills.",
      image: "../images/clubs_logo/dotslash.jpg",
      link: "https://iiitn.ac.in/Downloads/SAC/Dot%20Slash.pdf",
    },
    {
      name: "Elevate",
      category: "Technical Club",
      description: "Elevate is the development wing, focusing on software and application development.",
      image: "../images/clubs_logo/elevate.jpg",
      link: "https://iiitn.ac.in/Downloads/SAC/Elevate.pdf",
    },
    {
      name: "Crescendo",
      category: "Cultural Club",
      description: "Crescendo is the music wing, encouraging musical talents and performances.",
      image: "../images/clubs_logo/crescendo.jpg",
      link: "https://iiitn.ac.in/Downloads/SAC/Crescendo.pdf",
    },
    {
      name: "DTraxia",
      category: "Cultural Club",
      description: "DTraxia is the dance wing, promoting various dance forms and performances.",
      image: "../images/clubs_logo/dtraxia.jpg",
      link: "https://iiitn.ac.in/Downloads/SAC/D%20Taraxia.pdf",
    }
];

  function createClubCard(club) {
      return `
      <div class="club-card">
          <img src="${club.image}" class="club-image" alt="${club.name}">
          <div class="club-info">
              <h4 class="club-title">${club.name}</h4>
              <div class="club-category">${club.category}</div>
              <p class="club-description">${club.description}</p>
              <a href="${club.link}" target="_blank" class="club-learn-more">Learn more →</a>
          </div>
      </div>
      `;
  }

  clubs.forEach(club => {
      clubsContainer.innerHTML += createClubCard(club);
  });

  // Scrollbar and Animation Synchronization
  let isHovered = false;
  let scrollSpeed = 1; // Adjust speed of scrolling
  let animationFrame;

  function autoScroll() {
      if (!isHovered) {
          clubsWrapper.scrollTop += scrollSpeed;

          // Reset scroll to create infinite effect
          if (clubsWrapper.scrollTop >= clubsWrapper.scrollHeight - clubsWrapper.clientHeight) {
              clubsWrapper.scrollTop = 0;
          }
      }
      animationFrame = requestAnimationFrame(autoScroll);
  }

  autoScroll(); // Start animation

  // Stop animation and scrolling on hover
  clubsWrapper.addEventListener("mouseenter", function () {
      isHovered = true;
      clubsContainer.style.animationPlayState = "paused"; // Pause animation
  });

  // Resume animation and scrolling when mouse leaves
  clubsWrapper.addEventListener("mouseleave", function () {
      isHovered = false;
      clubsContainer.style.animationPlayState = "running"; // Resume animation
  });
});







// director_message
document.querySelector('a[href="/directors-message"]').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/directors-message';
});









