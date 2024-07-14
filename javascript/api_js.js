function toggleFiles(event) {
    event.preventDefault();
    const filesList = document.getElementById('filesList');
    const arrow = document.getElementById('arrow');
    if (filesList.classList.contains('hidden')) {
        filesList.classList.remove('hidden');
        arrow.classList.remove('arrow-right');
        arrow.classList.add('arrow-down');
    } else {
        filesList.classList.add('hidden');
        arrow.classList.remove('arrow-down');
        arrow.classList.add('arrow-right');
    }
}