/**
 * Created by ronnnwu on 6/25/17.
 */
'use strict';


let http = require('http'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    express = require('express');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('This is Meeting REST API backend' );
});


var queue = [];

app.post('/user2', (req, res) => {

    queue.push(req.body.Img_url);

});

var i = 0;

app.get('/user1', (req,res) => {
    //console.log(queue);
    if (queue.length > i ){
        res.send(queue[i]);
        i = i + 1;
    }
});


app.listen(process.env.PORT || 3001);