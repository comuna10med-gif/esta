
const translations = {
es:{
title:'Recupera tus activos digitales',
subtitle:'Especialistas en recuperación financiera internacional.'
},
en:{
title:'Recover your digital assets',
subtitle:'International financial recovery specialists.'
}
};

function setLang(lang){
document.getElementById('title').innerText = translations[lang].title;
document.getElementById('subtitle').innerText = translations[lang].subtitle;
}

document.getElementById('waForm').addEventListener('submit', function(e){
e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

const phone = '+573002819452';

const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});
