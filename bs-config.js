const fs = require('fs');
const path = require('path');

module.exports = {
  server: {
    baseDir: 'dist/angular-real-dev/browser',
    middleware: {
      1: function (req, res, next) {
        const filePath = path.join(__dirname, 'dist/angular-real-dev/browser', req.url);
        if (!fs.existsSync(filePath)) {
          req.url = '/index.html';
        }
        return next();
      }
    }
  }
};