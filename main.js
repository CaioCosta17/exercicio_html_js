document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = document.getElementById('campoA').value;
    const campoB = document.getElementById('campoB').value;
    const mensagem = document.getElementById('mensagem');

    mensagem.textContent = ""; 

    // Verifica se os campos estão preenchidos
    if (campoA.trim() === "" || campoB.trim() === "") {
        mensagem.textContent = "Preencha ambos os campos.";
        mensagem.className = "mensagem negativo";
        return;
    }

    const numeroA = parseFloat(campoA);
    const numeroB = parseFloat(campoB);

    // Verifica se os valores são numéricos
    if (isNaN(numeroA) || isNaN(numeroB)) {
        mensagem.textContent = "Preencha ambos os campos com números válidos.";
        mensagem.className = "mensagem negativo";
        return;
    }

    // Valida se B é maior que A
    if (numeroB > numeroA) {
        mensagem.textContent = "Formulário válido! O número B é maior que A.";
        mensagem.className = "mensagem positivo";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que A.";
        mensagem.className = "mensagem negativo";
    }
});