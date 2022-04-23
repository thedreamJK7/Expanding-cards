const panel = document.querySelectorAll('.panel');

panel.forEach(element => {
    element.addEventListener('click', ()=> {
        removeClassList();
        element.classList.add('active');
    })
});

function removeClassList() {
    panel.forEach(element => {
        element.classList.remove('active');
    });
}