const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLists = document.querySelector('nav');

    burger.addEventListener('click', () => {
        navLists.classList.toggle('nav-active');
        burger.classList.toggle('toggle-burger');
    });
};

navSlide();

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset()
    }
}

const toggleButton = document.getElementById('dark-mode-toggle');
        const body = document.body;

        toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');
        });