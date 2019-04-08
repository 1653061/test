let controller = {};

let models = require('../models');
let Article = models.Article;

controller.getAll = (req, res) => {
    Article
    .findAll()
    .then(articles => {
        res.locals.articles = articles;
        res.render('index');
    });
};

controller.getById = (req, res) => {
    Article
    .findOne({
        where: { id: req.params.id},
        include: [ models.Comment ]
    })
    .then(article => {
        let page = req.query.page || 1;
        let pageLimit = 3;
        let offset = (page-1) * pageLimit;
        
        let pagination = {
            page: parseInt(page), 
            limit: pageLimit,
            totalRows: article.Comments.length
        };
        res.locals.pagination = pagination;
        article.Comments = article.Comments.slice(offset, offset+pageLimit);
        res.locals.article = article;

        res.render('details');
    });
};

module.exports = controller;