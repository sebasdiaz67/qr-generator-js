const wrapper = document.querySelector('.wrapper'),
    qrInput = wrapper.querySelector('.form input'),
    generateBtn = wrapper.querySelector('.form button'),
    qrImg = wrapper.querySelector('.qr-code img');

generateBtn.addEventListener('click', () => {
    if (qrInput.value) {
        generateBtn.innerText = 'Generating QR Code...';
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrInput.value}`;
        qrImg.addEventListener('load', () => {
            wrapper.classList.add('active');
            generateBtn.innerText = 'Generate QR code';
        });
    }
});

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        wrapper.classList.remove('active');
    }
});