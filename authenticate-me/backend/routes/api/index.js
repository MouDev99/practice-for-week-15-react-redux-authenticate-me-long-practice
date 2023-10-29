const router = require('express').Router();

router.post('/test', (req, res) => {
    res.send({ rquestBody: req.body });
});

module.exports = router;
