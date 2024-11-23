const apiKey = "AIzaSyD1xv8tdaNbXsP5hhqPGBcDQPIoxRSp6D4";

function searchVideos() {
  const query = document.getElementById("searchQuery").value;
  // Modify the query to include "math" and filter by medium duration (4-20 minutes)
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(query + " math")}&type=video&videoDuration=medium&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayVideos(data.items);
    })
    .catch(error => console.error("Error fetching data:", error));
}

function displayVideos(videos) {
  const videoContainer = document.getElementById("videoContainer");
  videoContainer.innerHTML = ""; // Clear previous results

  videos.forEach(video => {
    const videoLink = document.createElement("a");
    videoLink.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
    videoLink.target = "_blank"; // Opens the link in a new tab
    videoLink.textContent = video.snippet.title; // Display the video title as link text
    videoLink.classList.add("video-link"); // Class for styling

    const videoBox = document.createElement("div");
    videoBox.classList.add("video-box"); // Add styling class to the box
    videoBox.appendChild(videoLink);

    videoContainer.appendChild(videoBox);
  });
}
