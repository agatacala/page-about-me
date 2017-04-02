window.addEventListener('load', function() {
    document.querySelector('.przejscie').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.projects').scrollIntoView({behavior: "smooth"});
    })
    }
);

