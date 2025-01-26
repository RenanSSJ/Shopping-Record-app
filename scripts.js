 // Obter os elementos
 const form = document.getElementById('user-form');
 const itemInput = document.getElementById('add-item');
 const priceInput = document.getElementById('add-price');
 const itemList = document.getElementById('items-list');

 // Adicionar evento de submissão ao formulário
 form.addEventListener('submit', function(event) {
   event.preventDefault(); // Evitar recarregar a página

   // Obter valores dos inputs
   const itemName = itemInput.value.trim();
   const itemPrice = priceInput.value.trim();

   if (itemName === '' || itemPrice === '') {
     alert('Por favor, preencha ambos os campos!');
     return;
   }

   // Criar novo item na lista
   const li = document.createElement('li');

   // Adicionar o nome do item
   const itemDiv = document.createElement('div');
   itemDiv.classList.add('item');
   itemDiv.textContent = itemName;

   // Adicionar o preço
   const priceDiv = document.createElement('div');
   priceDiv.classList.add('price');
   priceDiv.textContent = `R$ ${itemPrice}`;

   // Adicionar botão de remover
   const deleteImg = document.createElement('img');
   deleteImg.src = './assets/icons/rubish.svg';
   deleteImg.alt = 'remover';
   deleteImg.addEventListener('click', () => {
     li.remove(); // Remover o item da lista
   });

   // Montar o item na lista
   li.appendChild(itemDiv);
   li.appendChild(priceDiv);
   li.appendChild(deleteImg);

   // Adicionar o item à lista
   itemList.appendChild(li);

   // Limpar os campos de entrada
   itemInput.value = '';
   priceInput.value = '';
 });