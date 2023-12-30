document.getElementById('submenu').onclick = function() {
    document.getElementById('active').removeAttribute("id");
    document.getElementById('submenu').classList.add('active');
}