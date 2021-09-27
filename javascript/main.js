const inputs = document.querySelectorAll('.inp-form');
inputs.forEach(input => {
    input.onfocus = () => {
        input.previousElementSibling.classList.add('reubicar');
        input.parentNode.classList.add('focus');
    }

    input.onblur = () => {
        if (input.value.trim().length == 0)
            input.previousElementSibling.classList.remove('reubicar');
        input.parentNode.classList.remove('focus');
    }
});