document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchBoxContainer = this.documentElement('searchBoxContainer');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            if(searchBoxContainer){
                searchBoxContainer.classList.add('visible');
            }
        });
    }
});