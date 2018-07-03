const express = require('express');
const router = express.Router();
//require all ur schemas
router.get('/', (req, res)=>{
    console.log('pets.router.js is working');
    res.send(/*something*/)
});
router.post('/', (req, res)=>{
    //whatever the post does
    res.sendStatus(201);
})















module.exports = router;