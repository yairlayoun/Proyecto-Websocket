import express from 'express';
import { products } from '../app.js';

const router = express.Router();

router.get('/home', (req, res) => {
  // Obtener la lista de productos (simulada para este ejemplo)
  const products = [
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 20 },
    { name: 'Producto 3', price: 30 },
    { name: 'Producto 4', price: 40 },
    { name: 'Producto 5', price: 50 },
  ];

  res.render('home', { products });
});

router.get('/', (req, res) => {
});

router.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts');
});

export default router;