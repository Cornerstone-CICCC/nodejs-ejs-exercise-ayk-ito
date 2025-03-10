import express, { Request, Response } from "express";
import path from "path";
import pageRouter from "./routes/page.routes";

// Create server
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", pageRouter);

// 404 Fallback
app.use((req: Request, res: Response) => {
  res.status(404).render("404");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
