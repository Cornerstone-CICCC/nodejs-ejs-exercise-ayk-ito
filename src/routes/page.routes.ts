import { Router, Request, Response } from "express";

const pageRouter = Router();

// Home page
pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).render("home", {
    title: "Home",
    welcomeMessage: "Hello, this page show you useful French sentences ",
  });
});

// About page
pageRouter.get("/about", (req: Request, res: Response) => {
  res.status(200).render("about", { title: "About" });
});

// Contact page
pageRouter.get("/contact", (req: Request, res: Response) => {
  res.status(200).render("contact", {
    contacts: ["+1 (123)789-4567", "corner@cornerstone.com", "Vancouver, Canada"],
  });
});

export default pageRouter;
