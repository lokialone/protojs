const button = document.querySelector('#button')
const dropdown = document.querySelector('#dropdown')

let timer = '';
button.addEventListener('click', () => {
    removeClass(dropdown, 'hide')
});

dropdown.addEventListener('focusin', () => {
    removeClass(dropdown, 'hide');
    clearTimeout(timer);
})
button.addEventListener('focusout', () => {
    console.log('focusout');
    timer = setTimeout(() => {
        handleOutside();
    }, 10);
    
})
dropdown.addEventListener('focusout', () => {
    console.log('focusout');
    timer = setTimeout(() => {
        handleOutside();
    }, 10);
    
})

function handleOutside () {
    addClass(dropdown, 'hide')
}

function addClass (el, name) {
    const classList = el.className.split(' ')
    if (classList.indexOf(name) > -1) return
    classList.push(name)
    el.className = classList.join(' ')
}
  
function removeClass (el, name) {
    const classList = el.className.split(' ')
    const index = classList.indexOf(name)
    if (index < 0) return
    classList.splice(index, 1)
    el.className = classList.join(' ')
}
  