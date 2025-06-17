document.addEventListener('DOMContentLoaded', () => {
    const writeIcon = document.getElementById('writeIcon');
    const writeSection = document.getElementById('write'); // write 전체
    const articleList = document.querySelector('.article-list');

    writeIcon.addEventListener('click', () => {
        if (writeSection) {
            writeSection.style.display = 'none';
        }


        if (articleList) {
            articleList.style.display = 'block';
            articleList.style.visibility = 'visible';
        }
    });
});