    const header  = document.getElementById('site-header-menu-container');
    const headerPosition = header.offsetTop;
    window.addEventListener('scroll', function () {
        if (window.scrollY > headerPosition) {
            header.classList.add("fixed-menu");
        }
        else {
            header.classList.remove("fixed-menu");
        }
    });