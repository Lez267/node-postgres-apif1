const { Router } = require('express');
const controllers = require('../controllers');


const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = Router();

router.get('/', (req, res) => res.send('Wellcome'));

router.get('/pilotos', controllers.getAllPilotos);
router.get('/pilotos/:id', controllers.getPilotoById); 
router.post('/pilotos', upload.single('imagen'), controllers.createPiloto);
router.put('/pilotos/:id', upload.single('imagen'), controllers.updatePiloto);
router.delete('/pilotos/:id', controllers.deletePiloto);

module.exports = router;
