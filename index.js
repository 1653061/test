let express = require('express');
let app = express();
let models = require('./models');


// set handlebars view engine
let expressHbs = require('express-handlebars');
let paginate = require('express-handlebars-paginate');
var helpers = require('handlebars-helpers')();

app.engine('hbs', expressHbs({
    extname: 'hbs',
    defaultLayout: 'layouts',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    helpers: {
        paginate: paginate.createPagination
    }
}));
app.set('view engine', 'hbs');

// use body-parser
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set public static folder
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});


let discussRouter = require('./routes/discussRouter');
app.use('/discuss', discussRouter);

// app.post('/comments', (req, res) => {
//     let comment = {
//         comment: req.body.comment,
//         ArticleId: req.body.article
//     };
//     models.Comment
//     .create(comment)
//     .then(() => {
//         res.redirect('/articles/' + req.body.article);
//     });
// });

// app.delete('/comments/:id', (req, res) => {
//     models.Comment
//     .destroy({
//         where: { id: req.params.id }
//     })
//     .then(() => {
//         res.sendStatus(200);
//     });
// });

// creat tables into database
app.get('/sync', (req, res) => {   
    models.sequelize
    .sync()
    .then(() => {
        res.send('tables created!');
    });
});

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

// set server port
app.set('port', process.env.PORT || 2000);


// start server
app.listen(app.get('port'), () => {
    console.log('server is  listening on port ' + app.get('port'));
});