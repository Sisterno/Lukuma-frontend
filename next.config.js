const { config } = require('process')

const path = require('path')

/*This part of the code allow us to cut the specification folder of the path like import X from '../../../X'*/
module.exports = {

env: {
    API_URL: process.env.API_URL
},

    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    }
}