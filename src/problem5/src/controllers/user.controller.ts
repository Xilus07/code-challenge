import { Request, Response } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/user.service";

// Create a new user
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};

// Get all users
export const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const filters = {
      name: req.query.name as string,
      email: req.query.email as string,
    };

    const users = await getUsers(filters);
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

// Get user by ID
export const getUserByIdHandler = async (req: Request, res: Response) => {
  try {
    const user = await getUserById(Number(req.params.id));
    user ? res.json(user) : res.status(404).json({ error: "User not found" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Error fetching user" });
  }
};

// Update user
export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    await updateUser(Number(req.params.id), name, email);
    res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Error updating user" });
  }
};

// Delete user
export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    await deleteUser(Number(req.params.id));
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Error deleting user" });
  }
};
