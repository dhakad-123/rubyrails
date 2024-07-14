document.addEventListener("DOMContentLoaded", function() {
    const everythingLink = document.getElementById("everything");
    const releasesLink = document.getElementById("releases");
    const newsLink = document.getElementById("news");

    function showItems(start, end) {
        const newsItems = document.querySelectorAll(".news-item");
        newsItems.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    everythingLink.addEventListener("click", function() {
        showItems(0, 10); // Show all items
    });

    releasesLink.addEventListener("click", function() {
        showItems(0, 5); // Show first 5 items
    });

    newsLink.addEventListener("click", function() {
        showItems(5, 10); // Show next 5 items
    });

    // Initially show all items
    showItems(0, 10);
});
