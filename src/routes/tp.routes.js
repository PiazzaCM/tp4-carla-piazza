const { getTp, postTp, putTp, deleteTp } = require('../controllers/tp.controllers');

const router = require('express').Router();

router.get('/tp', getTp);
router.post('/tp', postTp);
router.put('/tp', putTp);
router.delete('/tp', deleteTp);

module.exports = router;