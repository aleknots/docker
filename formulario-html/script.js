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

        // Ações futuras:
        // Aqui você pode enviar os dados para um servidor usando a API Fetch
        // Exemplo:
        /*
        fetch('URL_DO_SEU_BACKEND', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log('Sucesso:', result);
            alert('Formulário enviado com sucesso!');
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar o formulário.');
        });
        */
        
        // Para este exemplo, apenas mostramos um alerta
        alert('Formulário enviado com sucesso! Verifique o console para ver os dados.');
    });
});