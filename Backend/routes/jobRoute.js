const express  = require('express');
const {postNewJob} = require('../controller/job')
const router = express();
// CREATE JOB ROUTE--------------------------------
router.post('/job', async(req,res,next)=>{
const resp = await postNewJob(req,res);
console.log(resp,"......res")
next();
})

// GET ALL JOBS------------------------------------
// APPLY FOR JOB-----------------------------------
module.exports = router