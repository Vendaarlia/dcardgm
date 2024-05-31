const form = document.getElementById('myForm');
const steps = [...form.elements].filter(el => el.tagName === 'H2');
const stepsElements = [...form.elements].filter(el => el.tagName !== 'H2');

let currentStep = 0;
let formData = {};

form.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        currentStep++;
        if (currentStep < steps.length) {
            updateStep();
        } else {
            submitForm();
        }
    }
});

function updateStep() {
    steps[currentStep].style.display = 'block';
    stepsElements.forEach((element, index) => {
        if (index < currentStep) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

function submitForm() {
    // Submit the form data to the server
    form.submit();
}
