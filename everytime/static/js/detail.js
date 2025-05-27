document.addEventListener('DOMContentLoaded', (event) => {
    const anonymCheckbox = document.querySelector('.anonym-checkbox');
    const anonymLabel = document.querySelector('.anonym-label');

    anonymCheckbox.addEventListener('change', () => {
        if (anonymCheckbox.checked) {
            anonymLabel.style.color = 'red';
            anonymCheckbox.style.accentColor = 'red';
        } else {
            anonymLabel.style.color = '';
            anonymCheckbox.style.accentColor = '';
        }
    });
});
