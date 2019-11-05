import Sequelize from "sequelize";

const sequelize = new Sequelize("candystore", "admin", "1234", {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  host: "localhost",
  dialect: "postgres"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

export { sequelize };
