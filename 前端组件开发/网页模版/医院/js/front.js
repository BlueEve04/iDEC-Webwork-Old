'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchToggler').addEventListener('click', (e) => {
        e.preventDefault();
        this.querySelectorAll('.fa-search, .fa-times').forEach(function (el) {
            el.classList.toggle('d-none');
        });
        document.getElementById('search').classList.toggle('active');
    });
});
