const { environment } = require('@rails/webpacker')

environment.loaders.prepend('coffee', require('./loaders/coffee'));

module.exports = environment
