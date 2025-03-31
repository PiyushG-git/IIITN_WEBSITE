tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: "#035184",
          secondary: "#035184",
        },
        borderRadius: {
          none: "0px",
          sm: "4px",
          DEFAULT: "8px",
          md: "12px",
          lg: "16px",
          xl: "20px",
          "2xl": "24px",
          "3xl": "32px",
          full: "9999px",
          button: "8px",
        },
      },
    },
  };

  function showTimeTable() {
    showModal(
      "Time Table",
      `
<div class="space-y-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Monday</h4>
<p class="text-sm mt-2">09:00 - 10:30 Advanced Mathematics</p>
<p class="text-sm">11:00 - 12:30 Computer Networks</p>
<p class="text-sm">14:00 - 15:30 Database Systems</p>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Tuesday</h4>
<p class="text-sm mt-2">09:00 - 10:30 Artificial Intelligence</p>
<p class="text-sm">11:00 - 12:30 Software Engineering</p>
<p class="text-sm">14:00 - 15:30 Web Development</p>
</div>
</div>
`
    );
  }
  function showFacilities() {
    showModal(
      "Campus Facilities",
      `
<div class="space-y-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Library</h4>
<p class="text-sm mt-2">Opening Hours: 8:00 AM - 10:00 PM</p>
<p class="text-sm">Location: Academic Block A</p>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Sports Complex</h4>
<p class="text-sm mt-2">Opening Hours: 6:00 AM - 9:00 PM</p>
<p class="text-sm">Facilities: Gym, Swimming Pool, Indoor Courts</p>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Computer Labs</h4>
<p class="text-sm mt-2">Opening Hours: 9:00 AM - 8:00 PM</p>
<p class="text-sm">Location: Tech Block B</p>
</div>
</div>
`
    );
  }

  // Mock data for Twitter feed
  const tweets = [
    {
      username: "@IITN_OFFICIAL",
      content:
        "Join us for the upcoming Tech Symposium 2025! Register now at our website.",
      time: "4h ago",
    },
    {
      username: "@IITN_OFFICIAL",
      content:
        "Proud to announce our new collaboration with MIT for joint research programs!",
      time: "6h ago",
    },
  ];
  function loadTweets() {
    const feed = document.getElementById("twitter-feed");
    tweets.forEach((tweet) => {
      const tweetElement = document.createElement("div");
      tweetElement.className = "border-b pb-4 mb-4";
      tweetElement.innerHTML = `
<p class="text-sm text-gray-600">${tweet.username}</p>
<p class="mt-2">${tweet.content}</p>
<p class="text-xs text-gray-500 mt-2">${tweet.time}</p>
`;
      feed.appendChild(tweetElement);
    });
  }
  function showModal(title, content) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal").classList.add("flex");
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-content").innerHTML = content;
  }
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal").classList.remove("flex");
  }
  function showInternshipPage() {
    showModal(
      "Internship Opportunities",
      `
<div class="space-y-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Software Development Intern</h4>
<p class="text-sm text-gray-600 mt-2">Google - Summer 2025</p>
<p class="text-sm mt-2">Apply by: March 15, 2025</p>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Research Intern</h4>
<p class="text-sm text-gray-600 mt-2">Microsoft Research - Fall 2025</p>
<p class="text-sm mt-2">Apply by: April 30, 2025</p>
</div>
</div>
`
    );
  }
  function showFeesPayment() {
    showModal(
      "Online Fees Payment",
      `
<div class="space-y-4">
<div class="p-4 bg-gray-50 rounded">
<p class="font-medium">Student ID</p>
<input type="text" class="mt-2 w-full p-2 border rounded" placeholder="Enter your student ID">
</div>
<div class="p-4 bg-gray-50 rounded">
<p class="font-medium">Amount</p>
<input type="number" class="mt-2 w-full p-2 border rounded" placeholder="Enter amount">
</div>
<button class="w-full bg-primary text-white py-2 rounded !rounded-button hover:bg-primary/90">
Proceed to Payment
</button>
</div>
`
    );
  }
  function showCalendar() {
    showModal(
      "Academic Calendar 2025",
      `
<div class="space-y-4">
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Spring Semester</h4>
<p class="text-sm mt-2">Classes Begin: January 15, 2025</p>
<p class="text-sm">Mid-term Exams: March 1-15, 2025</p>
<p class="text-sm">Final Exams: May 1-15, 2025</p>
</div>
<div class="p-4 bg-gray-50 rounded">
<h4 class="font-medium">Fall Semester</h4>
<p class="text-sm mt-2">Classes Begin: August 15, 2025</p>
<p class="text-sm">Mid-term Exams: October 1-15, 2025</p>
<p class="text-sm">Final Exams: December 1-15, 2025</p>
</div>
</div>
`
    );
  }
  // Initialize
  loadTweets();
