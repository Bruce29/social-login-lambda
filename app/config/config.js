// https://yrigb41dt7.execute-api.us-east-1.amazonaws.com/latest
const credentials = {
    github: {
        clientID : '0a3ea91f2bc344511e38',
        clientSecret : '82563ebb11f863d456e53d2d60aaef45ac0fb2fa',
        callbackURL : 'http://localhost:3011/auth/github/callback'
    },
    twitter: {
        clientID : 'MRYNegLZv00jNqZvkU2cNJjfR',
        clientSecret : 'DJLyMUKYDcRIV8qb3x98b4KHKrbUzAfAFQlRFcKzJkyrDooQmp',
        callbackURL : 'http://localhost:3011/auth/twitter/callback'
    },
    facebook: {
        clientID : '592238277963265',
        clientSecret : '415d0968519dcd8976142af5033f3be2',
        callbackURL : 'http://localhost:3011/auth/facebook/callback'
    },
    google: {

    }
}



module.exports = credentials;