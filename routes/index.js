const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Wellcome'));

router.get('/pilotos', controllers.getAllPilotos);
router.get('/pilotos/:id', controllers.getPilotoById); 
router.post('/pilotos', controllers.createPiloto);
router.put('/pilotos/:id', controllers.updatePiloto);
router.delete('/pilotos/:id', controllers.deletePiloto);

module.exports = router;
