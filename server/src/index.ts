import dotenv from "dotenv";
import connectDb from "./db/db_index";
import app from "./app";

dotenv.config({ path: "./.env" });

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.error("Express App Error:", error);
      process.exit(1);
    });
    app.listen(process.env.PORT || 4000, () => {
      console.info(`Server is running on ${process.env.PORT || 4000}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });
