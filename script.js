const form = document.getElementById('lead-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = 'Preencha todos os campos para liberar seu bônus.';
    message.classList.remove('success');
    return;
  }

  const name = document.getElementById('nome').value.trim().split(' ')[0];
  message.textContent = `Perfeito, ${name}! Seu bônus foi ativado e nosso time enviará os próximos passos no seu WhatsApp.`;
  message.classList.add('success');
  form.reset();
});
