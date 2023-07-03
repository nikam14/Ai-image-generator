const expres = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = expres.Router();

router.post('/generateimage', generateImage);

module.exports = router;
