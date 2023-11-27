// En el archivo index.js del cliente

const socket = io();
const realTimeProducts = document.getElementById('realTimeProducts');

socket.on('updateProducts', (products) => {
  // Limpiar la lista de productos
  realTimeProducts.innerHTML = '';

  // Agregar los productos actualizados a la lista
  products.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - ${product.price}`;
    realTimeProducts.appendChild(listItem);
  });
});

// Aquí puedes agregar la lógica para enviar nuevos productos o eliminar productos a través de Socket.IO
// Por ejemplo, capturar eventos de formularios y emitirlos al servidor

// Agregar nuevo producto
const addProductButton = document.getElementById('addProductButton');
addProductButton.addEventListener('click', () => {
  // Capturar los datos del formulario
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;

  // Emitir un evento al servidor
  socket.emit('newProduct', { name, price });
});

// Eliminar producto
const deleteProductButton = document.getElementById('deleteProductButton');
deleteProductButton.addEventListener('click', () => {
  // Capturar el ID del producto a eliminar
  const productId = document.getElementById('productId').value;

  // Emitir un evento al servidor
  socket.emit('deleteProduct', productId);
});
