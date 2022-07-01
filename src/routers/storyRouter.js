import express from "express";
import { story, edit, deleteStory } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)", story);
storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", deleteStory);

export default storyRouter;