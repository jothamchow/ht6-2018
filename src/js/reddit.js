'use strict';
const snoowrap = require('snoowrap');
var config = require('./config.json');

app.get('/api-call', function(request, response) {
    const snoowrap = require('snoowrap');
    var input = request.body // depends on client

    const r = new snoowrap({
        userAgent: request.headers['user-agent'], // need to pass in userAgent in client
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        refreshToken: config.refreshToken
    });
    r.getSubreddit('AdviceAnimals').search({query: input, sort: 'relevance'}).then(console.log)
});
