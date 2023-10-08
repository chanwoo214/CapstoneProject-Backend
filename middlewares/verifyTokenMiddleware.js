const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const awsExports = require('../aws-exports');

const region = awsExports.aws_cognito_region;
AWS.config.update({ region: region });

const cognito = new AWS.CognitoIdentityServiceProvider();

const verifyToken = (req, res, next) => {
    var token = req.headers.authorization;
    //console.log('token:', token);
    token = token?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const params = {
        AccessToken: token,
    };

    cognito.getUser(params, (err, userData) => {
        if (err) {
            console.log("Error in getUser():", err);
            return res.status(401).json({ message: 'Unauthorized' });
        } else {
            //Token is valid; you can optionally decode it for more information.
            const userTokenDecoded = jwt.decode(token);
            req.userTokenDecoded = userTokenDecoded;
            req.user = userData;
            //console.log('userTokenDecoded:', userTokenDecoded);
            //console.log('user data:', user);
            next();
        }
    });
};

module.exports = verifyToken;