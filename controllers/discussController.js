//Controller for Discuss
let controller = {};

let models = require('../models');
let Discuss = models.Discuss;
let Discuss_answer = models.Discuss_answer;



controller.getAll = (req, res) => {
    Discuss
        .findAll()
        .then(discusses => {
            let page = req.query.page || 1;
            let pageLimit = 10;
            let offset = (page - 1) * pageLimit;

            let pagination = {
                page: parseInt(page),
                limit: pageLimit,
                totalRows: discusses.length
            };
            res.locals.pagination = pagination;
            discusses = discusses.slice(offset, offset + pageLimit);
            res.locals.discusses = discusses;
            res.render('ThaoLuan');
        });
};

controller.getById = (req, res) => {
    Discuss
        .findOne({
            where: { id: req.params.id }
        })
        .then(discusses => {
            Discuss_answer
                .findAll({
                    where: { discussid: req.params.id }
                }).then(discusses_answer => {
                    let page = req.query.page || 1;
                    let pageLimit = 10;
                    let offset = (page - 1) * pageLimit;

                    let pagination = {
                        page: parseInt(page),
                        limit: pageLimit,
                        totalRows: discusses_answer.length
                    };
                    res.locals.pagination = pagination;
                    discusses_answer = discusses_answer.slice(offset, offset + pageLimit);
                    res.locals.discusses = discusses;
                    res.locals.discusses_answer = discusses_answer;

                    res.render('ThaoLuanChiTiet');
                })
        });
};

module.exports = controller;