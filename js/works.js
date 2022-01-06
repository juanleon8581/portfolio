const $cordovaFreeFloatButton = document.querySelector('#cordova-plugin-free-float-button');

const cordovaFreeFloatButtonRedirect = () => {
    const url = 'https://github.com/juanleon8581/cordova-plugin-free-float-button';
    window.open(url, '_blank').focus();
}

$cordovaFreeFloatButton.addEventListener('click', cordovaFreeFloatButtonRedirect);