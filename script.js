let num1, pResultado
num1 = document.getElementById('numero1')
pResultado = document.getElementById('resultado')

function calcularfat(){
    let resultado   
    let n1=parseInt(num1.value) 
    resultado = n1
    for (n1;n1>=2;n1--)
    {   
        if (n1==2){ 
            exibirDados(resultado)
            break
        }
        resultado = resultado * (n1-1)
        console.log(resultado)
    }
   

}

    function exibirDados (resultado){
        limparCampos()
        pResultado.textContent = resultado
       
    }
    function limparCampos(){
        num1.value = ''
      
        num1.focus()

    }
   
   