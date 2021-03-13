const express = require('express');
const Ticket = require('../models/Ticket');
const User = require('../models/User');
const router = express.Router();

// create a ticekt
router
    .get('/', (req, res) => {
        res.status(404).json({
            status: 'successes',
            message: 'This is working'
        })
    })
    .post('/ticket',async (req, res) =>{

       try {
           const newTicket = await Ticket.create(req.body);
            res.status(201).json({
                status: 'success',
                data:{
                    ticket: newTicket
                }
            });
    } catch(err){
       console.log(err);
    }
    });

module.exports = router;