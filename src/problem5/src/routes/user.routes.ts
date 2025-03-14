import express from "express";
import {
  createUserHandler,
  getUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../controllers/user.controller";

const router = express.Router();

router.post("/users", createUserHandler);
router.get("/users", getUsersHandler);
router.get("/users/:id", getUserByIdHandler);
router.put("/users/:id", updateUserHandler);
router.delete("/users/:id", deleteUserHandler);

export default router;
