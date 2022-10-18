//Quantos números
//qual o maior valor informado
//soma dos valores
//média dos valores digitados
//adicionar um npumero
//listar números que foram utilizados
//valores diferentes, apenas aqueles que não estão na lista

let num = document.querySelector('input#txtnumb')
let lista = document.querySelector('select#nlist')
let console = document.querySelector('div#console')


let valores = [] // Criando vetor para captiruar dados

function isNumber(num){
    return (( Number(num)>=1 && Number(num) <=100) ? true : false)
}

function inList(num,list){
    return (list.indexOf(Number(num))===-1)? false: true
}

function adicionar(){
    //Informa a hora que foi realizada
     let data = new Date()
     let hora = data.getHours()
     let minutos = data.getMinutes()
     let segundos = data.getSeconds()

     //Realiza função
    if(!isNumber(num.value) || inList(num.value,valores)){
        window.alert('[ERRO] Verifice o valor e tente novamente')
        console.innerHTML='Operação inválida...'
    }else{
        console.innerHTML=`Você adicionou o número ${num.value}`
        let item = document.createElement('option')
        item.text = `[${hora}:${minutos}:${segundos}]:  Valor ${num.value} foi adicionado à lista`
        lista.appendChild(item)
        //Adiciona valor na lista
        valores.push(Number(num.value))
        console.innerHTML=`vetor: [${valores}]`
    }
}

function finalizar(){
    if(valores.length==0){
        window.alert('[ERRO] Adicione valores antes de finalizar')
    }else{
        let max = valores[0]
        let min = valores[0]
        for(let pos in valores){
            if(valores[pos]>max){
                max=valores[pos]
            }
            if(valores[pos]<min){
                min=valores[pos]
            }
        }
        let tot=valores.length
        console.innerHTML=`<p> Valores organizados  [${valores.sort((a,b)=>{ if (a>b) return 1; if (a<b) return -1; return 0;})}]<p>
         <p> No vetor existem ${tot} números cadastrados </p>
         <p> A soma dos valores no vetor é ${sum(valores)} </p>
         <p> A média dos valores é ${mean(valores)}</p>
         <p> O maior valores é ${max} e o menor é ${min}`
    }
}


function loading(){
    console.innerHTML='Carregando informações...'
}

//funções soma vetor/ maior valor / média dos valores / quantos números
function sum(lista){
    var sum = Number(0);
    for(let pos in lista){
        sum=sum+Number(lista[pos])
    }
    return Number(sum);
}

function mean(lista){
    var soma = sum(lista)
    var tam = lista.length
    var media = Number(soma)/Number(tam);

    return media
}
