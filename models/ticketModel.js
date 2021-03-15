const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    seat_number: {
        type: Number,
        min: 1,
        max: 40,
        required: [true, 'A Ticket must have a Seat Number']
    },
    is_booked: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
    // passenger: {
    //     type: mongoose.Schema.Types.ObjectId, ref: User
    // }
})

module.exports = mongoose.model('Ticket', TicketSchema);