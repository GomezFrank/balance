
const balancear = (cadena => {
    const abiertos = [];
    const cerrados = [];

    const llaves = ['{', '}'];
    const corchetes = ['[', ']'];
    const parentesis = ['(', ')'];
    const mayorMenor = ['<','>'];
    const interrogacion = ['¿','?'];


    for(let i=0; i<cadena.length; i++){
        let element = cadena.charAt(i);
        if('{' === element || '[' === element || '(' === element){
            abiertos.push(element)
        }
        if('}' === element || ']' === element || ')' === element){
            cerrados.unshift(element)
        }
    }

    for(let i = 0; i < abiertos.length; i++){
        if((llaves.includes(abiertos[i]) && !llaves.includes(cerrados[i]))
        || (corchetes.includes(abiertos[i]) && !corchetes.includes(cerrados[i]))
        || (parentesis.includes(abiertos[i]) && !parentesis.includes(cerrados[i]))
        || (mayorMenor.includes(abiertos[i]) && !mayorMenor.includes(cerrados[i]))
        || (interrogacion.includes(abiertos[i]) && !interrogacion.includes(cerrados[i]))    
        ){
            return false
        }
     }
     return true;
})

export default balancear;









