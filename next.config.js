
const path = require('path')
 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }


require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

// console.log(process.env.API_URL, 'process.env.API_URL')
  