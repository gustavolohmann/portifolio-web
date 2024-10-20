const CopyToClipBoard = (valuetocopy) => {
    const freelancerInput = document.getElementById('email-freelancer');
    const recrutadorInput = document.getElementById('email-recrutador');
    const telefoneInput = document.getElementById('telefone-recrutador');
    
    const typeContact = {
        'freelancer': freelancerInput ? freelancerInput.value : null,
        'recrutador': recrutadorInput ? recrutadorInput.value : null,
        'telefone': telefoneInput ? telefoneInput.value : null
    };

    if (typeContact[valuetocopy]) {
        const valueContactInput = typeContact[valuetocopy];
        navigator.clipboard.writeText(valueContactInput)
            .then(() => {
                alert('Texto copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    } else {
        console.error('Elemento não encontrado ou inválido.');
    }
};
export default CopyToClipBoard;