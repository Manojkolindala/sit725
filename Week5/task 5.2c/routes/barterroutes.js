const express = require('express');
const router = express.Router();
const barterController = require('../controllers/barterController');


router.get('/', barterController.getAllBarters);
router.post('/', barterController.postBarter);
router.get('/match/:item', barterController.findMatch);

module.exports = router;
