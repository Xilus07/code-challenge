import app from "./app";
import sequelize from "./models/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log("Database connected!");
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
