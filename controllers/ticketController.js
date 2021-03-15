const Ticket = require('../models/ticketModel');
const catchAsync = require('./../utilities/catchAsync');

exports.getAllTickets = catchAsync( async (req, res, next) => {

    const Tickets = await Ticket.find();

        res.status(200).json({
            status: 'success',
            data: {
                Tickets
            }
        });
});

