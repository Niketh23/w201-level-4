/* eslint-disable linebreak-style */
/* eslint-disable quotes */
const Sequelize = require("sequelize");
const database = "todo_db";
const username = "postgres";
const password = "changeme";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});
const connect = async () => {
  return sequelize.auhenticate();
};
module.exports = {
  connect,
  sequelize,
};
