// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    
    // Adiciona um ouvinte para o evento de envio do formulário
    form.addEventListener('submit', (event) => {
        // Impede o envio padrão do formulário, que recarregaria a página
        event.preventDefault();

        // Coleta todos os dados do formulário
        const formData = new FormData(form);
        const data = {};
        
        // Coleta os valores de campos de texto, email, select, etc.
        formData.forEach((value, key) => {
            if (key !== 'tecnologias') {
                data[key] = value;
            }
        });

        // Coleta os valores dos checkboxes marcados
        const tecnologiasSelecionadas = [];
        form.querySelectorAll('input[name="tecnologias"]:checked').forEach(checkbox => {
            tecnologiasSelecionadas.push(checkbox.value);
        });
        data.tecnologias = tecnologiasSelecionadas;

        // Exibe os dados coletados no console
        console.log('Dados do formulário:', data);

        // Para este exemplo, apenas mostramos um alerta
        alert('Formulário enviado com sucesso! Verifique o console para ver os dados.');
    });
});
