const body = document.body;
                const modeToggle = document.getElementById('modeToggle');

                // Event listener for mode toggle
                modeToggle.addEventListener('click', () => {
                    // Toggle the light-mode class
                    body.classList.toggle('light-mode');

                    // Update button text based on the mode
                    if (body.classList.contains('light-mode')) {
                        modeToggle.textContent = 'Switch to Dark Mode';
                    } else {
                        modeToggle.textContent = 'Switch to Bright Mode';
                    }
                });
    document.addEventListener("DOMContentLoaded", () => {
        const scrollElements = document.querySelectorAll(".scroll-animate");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        scrollElements.forEach((el) => observer.observe(el));
    });
    document.getElementById("startButton").addEventListener("click",function(){
        document.getElementById("nextPage").scrollIntoView({behavior:"smooth"});
    });
    document.getElementById("YouTube").addEventListener("click",function(){
        window.location.href="index.html";
    });
   