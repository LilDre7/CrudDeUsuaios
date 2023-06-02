require("dotenv").config();
const colors = require("colors");
const { db } = require("./db/config");
const app = require("./app");

const port = process.env.PORT || 3000;

db.authenticate()
  .then(() => console.log(" 🦄 Database authenticate ⛈️ ".red.bold))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log(" ☢️ Database synced 🏌🏾‍♂️".blue.bold))
  .catch((err) => console.log(err));

const server = app.listen(port, () => {
  console.log(`🥷🏾Server is running on port ${port} 👨🏾‍💻`.yellow.bold);
});
