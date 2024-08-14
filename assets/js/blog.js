document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Author:</strong> ${post.username}</p>
        `;
        postsContainer.appendChild(postDiv);
    });

    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});