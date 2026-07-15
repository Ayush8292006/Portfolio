const { body, validationResult } = require('express-validator');

const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email'),
  
  body('subject')
    .trim()
    .notEmpty().withMessage('Subject is required'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    console.log('❌ Validation Errors:', errors.array());
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  
  next();
};

module.exports = {
  validateContact,
  handleValidationErrors
};