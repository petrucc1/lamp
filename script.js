const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('br0ken') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/on.jpg';
    }
}

turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/off.jpg';
    }
}

turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseleave', lampOff);

function lampBroken() {
    lamp.src = '.img/br0ken.jpg';
}

lamp.addEventListener('dblclick', lampBroken);
