import { Router } from "express";
import type { Request, Response } from "express";

const catController = Router();

// http://localhost:4000/cats -- GET
catController.get("/", async (request: Request, response: Response) => {
    const catNames = ["Bob", "Tom", "North", "Benz"];

    response.status(200).render("index", {
        success: true,
        timestamp: new Date().toUTCString(),
        title: "Cat's Title !",
        catName: catNames[Math.floor(Math.random() * catNames.length)],
    });
});

// http://localhost:4000/cats -- POST
catController.post("/", async (request: Request, response: Response) => {
    const { name } = request.body;
    // let message: string;

    // if (name) {
    //     message = name;
    // } else {
    //     message = "You are not own cat.";
    // }
    response.status(200).json({
        success: true,
        timestamp: new Date().toUTCString(),
        message: name
        ? name
        : "You are not own cat.",
        title: "Cat's Title !"
    });
});

export { catController }