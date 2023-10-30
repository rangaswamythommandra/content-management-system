document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const blogPosts = document.querySelectorAll(".home-article");

    blogPosts.forEach(blogPost => {
        const title = blogPost.querySelector("h3").textContent.toLowerCase();
        const author = blogPost.querySelector("div").textContent.toLowerCase();

        if (title.includes(searchTerm) || author.includes(searchTerm)) {
            blogPost.style.display = "block";
        } else {
            blogPost.style.display = "none";
        }
    });

    document.getElementById("searchTime").textContent = "0.03 seconds";
    document.getElementById("searchTerm").textContent = searchTerm;
});
