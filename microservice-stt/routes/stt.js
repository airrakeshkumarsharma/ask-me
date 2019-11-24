const express = require('express');

const ttsController = require('../controllers/stt/stt');

const router = express.Router();

/* Define Routes */
router.post('/stt', ttsController['v1']);

/* Export */
module.exports = router;
