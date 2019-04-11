'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert('Discusses', [{
      userid: 1,
      username: "Alibaba",
      iteration: 1,
      numberAnswer: 100,
      status: true,
      content: "Cho hỏi mod o0hoangsea0o làm vậy đúng hay sai, có đủ tư cách làm mod ko ?",
      detail: "Cho hỏi mod o0hoangsea0o làm vậy đúng hay sai, có đủ tư cách làm mod ko ?",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 100,
      username: "Peter",
      iteration: 1,
      numberAnswer: 3000,
      status: true,
      content: "Không comment được",
      detail: "khong comment duoc j het aaaaaaaaaa",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 34,
      username: "Peter",
      iteration: 1,
      numberAnswer: 222,
      status: true,
      content: "He nho",
      detail: "Hello everyone",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 100,
      username: "Peter",
      iteration: 1,
      numberAnswer: 3000,
      status: true,
      content: "Oh my god",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 20,
      username: "Loli",
      iteration: 1,
      numberAnswer: 3000,
      status: true,
      content: "Why lai nhu vay",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 100,
      username: "xyz",
      iteration: 1,
      numberAnswer: 111,
      status: true,
      content: "an khong được",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 100,
      username: "moil",
      iteration: 1,
      numberAnswer: 3000,
      status: true,
      content: "haxnl",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 3333,
      username: "toiluon",
      iteration: 1,
      numberAnswer: 3000,
      status: true,
      content: "Chan duoc",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 34,
      username: "xxx",
      iteration: 1,
      numberAnswer: 222,
      status: true,
      content: "He nho",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 34,
      username: "cccvs",
      iteration: 1,
      numberAnswer: 222,
      status: true,
      content: "He xxxxxxxx",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userid: 34,
      username: "Moilorem",
      iteration: 1,
      numberAnswer: 222,
      status: true,
      content: "123Test",
      detail: "ohhhhhhhhhhhhhhhhhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    return queryInterface.bulkInsert('Discuss_answers', [{
      discussid: 3,
      username: "Simayi",
      content: "Sai roi cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 3,
      username: "KongMing",
      content: "Dung r cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 3,
      username: "Henho",
      content: "Khongooooooooxcxcxcxcxcxcxcxcxcxcxcxcxcxcxc",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 3,
      username: "Simayi",
      content: "akkkkkkkkk",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 2,
      username: "Simayi",
      content: "ohhhhhh",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 3,
      username: "Simayi",
      content: "Sai roi cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 4,
      username: "Simayi",
      content: "Sai roi cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 1,
      username: "Simayi",
      content: "Sai roi cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 2,
      username: "Simayi",
      content: "Sai roi cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 5,
      username: "Simayi",
      content: "Sai roi cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      discussid: 2,
      username: "Simayi",
      content: "Sai roi cau",
      time: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Discusses', null, {});

  }
};
