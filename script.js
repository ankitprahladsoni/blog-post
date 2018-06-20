window.addEventListener('scroll', e => {
    const nav = document.querySelector('nav');
    const navSection = document.querySelector('#navbar-section');
    const title = document.querySelector('#title');
    const divs = [nav, navSection, title];
    
    if (window.scrollY) {
        collapse(divs);
    } else {
        expand(divs);
    }
});

function collapse(divs) {
    divs.forEach(div => {
        div.classList.add('collapse');
        div.classList.remove('expand');
    });
}

function expand(divs) {
    divs.forEach(div => {
        div.classList.remove('collapse');
        div.classList.add('expand');
    });
}