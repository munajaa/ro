document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});

document.getElementById('comment-form').addEventListener('submit', event => {
    event.preventDefault();
    const commentSection = document.getElementById('comments-section');
    const textarea = event.target.querySelector('textarea');
    const fileInput = event.target.querySelector('input[type="file"]');
    const newComment = document.createElement('div');
    newComment.innerHTML = `<p>${textarea.value}</p>`;
    if (fileInput.files[0]) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(fileInput.files[0]);
        img.style.maxWidth = '100px';
        img.style.marginTop = '0.5em';
        newComment.appendChild(img);
    }
    commentSection.appendChild(newComment);
    textarea.value = '';
    fileInput.value = '';
});
