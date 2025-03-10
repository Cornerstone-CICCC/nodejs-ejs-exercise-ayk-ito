"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
// Home page
pageRouter.get("/", (req, res) => {
    res.status(200).render("home", {
        title: "Home",
        welcomeMessage: "Hello, this page show you useful French sentences ",
    });
});
// About page
pageRouter.get("/about", (req, res) => {
    res.status(200).render("about", { title: "About" });
});
// Contact page
pageRouter.get("/contact", (req, res) => {
    res.status(200).render("contact", {
        contacts: ["+1 (123)789-4567", "corner@cornerstone.com", "Vancouver, Canada"],
    });
});
exports.default = pageRouter;
