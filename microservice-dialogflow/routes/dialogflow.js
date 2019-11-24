const express = require('express');

const dialogflowController = require('../controllers/dialogflow/dialogflow');

const router = express.Router();

/* Define Routes */
router.post('/', dialogflowController['v1']);

/* Export */
module.exports = router;
