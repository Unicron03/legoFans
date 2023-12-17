function ouvrirDialog() {
    var dialog = document.getElementById('quizDialog');
    if (!dialog.open) {
        dialog.showModal();
    }
}

function fermerDialog() {
    var dialog = document.getElementById('quizDialog');
    dialog.close();
}