const wrapper = document.querySelector('.wrapper'),
    qrInput = wrapper.querySelector('.form input'),
    generateBtn = wrapper.querySelector('.form button'),
    qrImg = wrapper.querySelector('.qr-code img'),
    error = wrapper.querySelector('.error-msg');

generateBtn.addEventListener('click', () => {
    if (qrInput.value) {
        wrapper.classList.remove('error');
        generateBtn.innerText = 'Generating QR Code...';
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrInput.value}`;
        qrImg.addEventListener('load', () => {
            wrapper.classList.add('active');
            generateBtn.innerText = 'Generate QR code';
        });
    } else {
        wrapper.classList.add('error');
    }
});

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        wrapper.classList.remove('active');
        wrapper.classList.remove('error');
    }
});