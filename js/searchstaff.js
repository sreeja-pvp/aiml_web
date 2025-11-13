
function filterFaculty() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let facultyCards = document.querySelectorAll('.faculty-card');

    facultyCards.forEach(card => {
        let name = card.querySelector('.faculty-name').textContent.toLowerCase();
        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
