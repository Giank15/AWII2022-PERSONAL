const { Router } = require('express');

const {
    createPropina,
    getPropinas,
    espejoPropina
} = require('../Controllers').Propina;

const router= Router();

router.post('/', createPropina);

router.get('/', getPropinas);

router.put('/', espejoPropina);

module.exports = router;