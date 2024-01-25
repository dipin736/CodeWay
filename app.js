let inputField = document.getElementById('calcInput');
let expression = '';

document.querySelectorAll('.Button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                expression = eval(expression);
                inputField.value = expression;
            } catch (error) {
                inputField.value = 'Error';
            }
        } else if (buttonText === 'C') {
            expression = '';
            inputField.value = expression;
        } else {
            expression += buttonText;
            inputField.value = expression;
        }
    });
});
