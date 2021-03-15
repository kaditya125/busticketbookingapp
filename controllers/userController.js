const User = require('./../models/userModel');
const catchAsync = require('./../utilities/catchAsync');

exports.getAllUsers = catchAsync( async (req, res, next) => {

    const users = await User.find();
    
    // SEND RESPONCE
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
});

exports.createUser = catchAsync( async (req, res, next) => {
    console.log(req.body);
    const newUser = await User.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            tour: newUser
        }
    });
});

exports.deleteMe = catchAsync( async(req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, {active: false});

    res.status(204).json({
        status: 'success',
        data: null
    })
});

exports.getUser = (req, res) => {
    
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined...'
    });
}