if(window.SimpleSlide) {
new SimpleSlide({
    slide: 'quote', // nome do atributo data-slide="principal"
    // nav: true, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides, 5000 = 5 segundos
    pauseOnHover: true, // pausa a transição automática
})

new SimpleSlide ({
    slide: 'portifolio',
    time: 5000,
    nav: true
});

}

if(window.SimpleAnime) {
new SimpleAnime ();

}