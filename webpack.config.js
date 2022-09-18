const devConfig = require('./config/dev.config.js');
const prodCongig = require('./config/prod.config.js');

module.exports = [
  {
    name: 'dev',
    ...devConfig  
  },
  {
    name: 'prod',
    ...prodCongig
  }
];