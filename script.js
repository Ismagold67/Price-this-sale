var tn1 = window.document.querySelector('input#txtn11') //tanto faz um como outro
    var tn2 = window.document.querySelector('input#txtn21')  //os dois funcionam
    var tn3 = window.document.querySelector('input#txt31')
    var tn4 = window.document.querySelector('input#txt41')
    var res = window.document.getElementById('res')

function somar () {  
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = tn3.value
    var n4 = Number(tn4.value)
    
    var s1 = n4 / n1
    var s2 = s1 / n2
    var s3 = (s2*0.4) + s2

    res.innerHTML = `Nome do produto:<strong>${n3}</strong></br> 
    Valor total do Produto:<strong>R$ ${n4}</strong></br>
    N° de Cx:<strong>${n1}</strong></br>
    N° de Und por CX:<strong>${n2}</strong></br>
    Preço de Custo:<strong>R$ ${s2.toFixed(2)}</strong></br>
    Preço para Venda:<strong>R$ ${s3.toFixed(2)}</strong>`
}