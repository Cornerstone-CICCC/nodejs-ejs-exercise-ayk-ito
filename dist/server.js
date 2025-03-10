"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
// Create server
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "../src/views"));
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use("/", page_routes_1.default);
// 404 Fallback
app.use((req, res) => {
    res.status(404).render("404");
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
