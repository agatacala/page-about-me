window.addEventListener('load', function() {

    document.querySelector('.go-to-about-me').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.about-me').scrollIntoView({behavior: "smooth"});
    });

    document.querySelector('.go-to-projects').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.projects').scrollIntoView({behavior: "smooth"});
    });

    document.querySelector('.go-to-contact').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.contact').scrollIntoView({behavior: "smooth"});
    });

    }
);

