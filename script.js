const wrapper = document.querySelector('.wrapper'),
    qrInput = wrapper.querySelector('.form input'),
    generateBtn = wrapper.querySelector('.form button'),
    qrImg = wrapper.querySelector('.qr-code img'),
    text = wrapper.querySelector('.text');
    // error = wrapper.querySelector('.error-msg');

generateBtn.addEventListener('click', () => {
    if (qrInput.value) {
        text.innerText = 'Paste a url o enter text to create QR code';
        text.style.color = '#474747';
        // wrapper.classList.remove('error');
        generateBtn.innerText = 'Generating QR Code...';
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrInput.value}`;
        qrImg.addEventListener('load', () => {
            wrapper.classList.add('active');
            generateBtn.innerText = 'Generate QR code';
        });
    } else {
        text.innerText = 'Please digit some text o url';
        text.style.color = '#ff6347';
        // wrapper.classList.add('error');
    }
});

qrInput.addEventListener('keyup', () => {
    if (!qrInput.value) {
        wrapper.classList.remove('active');
        // wrapper.classList.remove('error');
    }
});