

function verde(){
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.add('verde');
    document.querySelector('#exemplo').style.borderRadius="25%" ;
};

function vermelho(){
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('vermelho');
    document.querySelector('#exemplo').style.borderRadius="50%" ;
};


function azul(){
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.add('azul');

    document.querySelector('#exemplo').style.borderRadius="0%" ;
};

//////////////////////////////////////////////////

function trocar(){
    if(document.querySelector('#trocar').classList.contains('preto')){
        document.querySelector('#trocar').classList.remove('preto');
        document.querySelector('#trocar').classList.add('verde');
    }else{
        document.querySelector('#trocar').classList.remove('verde');
        document.querySelector('#trocar').classList.add('preto');

    }
}