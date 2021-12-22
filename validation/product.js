const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateProductInput(data) {
      let errors = {};
      data.title = validText(data.title) ? data.title : '';
      data.description = validText(data.description) ? data.description : '';

      if (validator.isEmpty(data.title)) {
            errors.title = 'Title field is required'
      }

      if (validator.isEmpty(data.description)) {
            errors.description = 'Title field is required'
      }

      if (validator.isEmpty(data.price)) {
            errors.price = 'Title field is required'
      }

      return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}