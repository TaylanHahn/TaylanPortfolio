window.onload = function() {
    document.body.style.zoom = "90%";
};

function emBreve(value){
    alert("Comecei recentemente a estudar esta ferramenta, em breve, será uma opção a mais para desenvolver novos projetos.")
};

const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
})

