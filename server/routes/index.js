const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api/user-routes');

router.use('api', apiRoutes);

router.use((req, res)=>{
    res.sendFile(path.join(__dirname, '../../cclient/public/index.html'));
});

module.exports = router;