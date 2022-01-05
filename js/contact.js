const $contactForm = document.querySelector('#contact-form');
const $mailToButton = document.querySelector('#mailTo');

const onSubmitForm = function(e){
    const email = 'juanleon8581@gmail.com';
    const form = new FormData(this);
    let content = `mailto:${email}`;
    content += `?subject=contact From Portfolio:`;
    content += ` ${form.get('name')}`;
    content += `&body=`;
    content += `${form.get('email')}`;
    content += `%0D%0A${form.get('message')}`;
    e.preventDefault();
    $mailToButton.setAttribute('href', content)
    $mailToButton.click();
};

$contactForm.addEventListener('submit', onSubmitForm);