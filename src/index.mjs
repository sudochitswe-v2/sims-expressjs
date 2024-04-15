import { createApp } from "./createApp.mjs";
import dotenv from "dotenv";

dotenv.config();
const app = createApp();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});