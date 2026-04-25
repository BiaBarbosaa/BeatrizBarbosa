document.getElementById('contatoForm').addEventListener('submit', function(event){
    event.preventDefault();

    const nome_completo = document.getElementById('nome_completo').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const data = {
        nome_completo:nome_completo,
        email:email,
        mensagem:mensagem
    }
    //endereço da API para cadastrar um objeto
    fetch('http://localhost:8081/contato',{
        method:'POST',

        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(data),
    })

    .then(response=>{
        if(response.status === 200){
            return response.json();
        }
        else if(response.status ===401){
            return response.json();
        }
        else{
            throw new Error("contato inválido");
        }
    })
    .then(data=>{
        if(data.msg === "Contato realizado com sucesso"){
        alert('Contato realizado com sucesso')
        window.location.href = 'index.html'
        }
        else if(data.msg === "O email ja esta cadastrado na base de dados"){
        }
        else{
            alert('Ocorreu um erro'+ data.msg)
        }
    })
    .catch((erro)=>{
        throw new Error(error)
    })
})
