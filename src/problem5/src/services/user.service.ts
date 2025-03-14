import { Op } from "sequelize";
import User from "../models/user.model";

interface UserFilters {
  name?: string;
  email?: string;
}

// Create User
export const createUser = async (name: string, email: string) => {
  return await User.create({ name, email });
};

// Get All Users
export const getUsers = async (filters: UserFilters) => {
  const whereClause: any = {};

  if (filters.name) {
    /* Use Code below if using PostgreSQL as SQLite doesn't support 'iLike' */
    // whereClause.name = { [Op.iLike]: `%${filters.name}%` };

    /* Code Below uses 'like' instead of 'iLike' */
    whereClause.name = { [Op.like]: `%${filters.name}%` };
  }

  if (filters.email) {
    /* Use Code below if using PostgreSQL as SQLite doesn't support 'iLike' */
    // whereClause.email = { [Op.iLike]: `%${filters.email}%` };
    
    /* Code Below uses 'like' instead of 'iLike' */
    whereClause.email = { [Op.like]: `%${filters.email}%` };
  }

  return await User.findAll({ where: whereClause });
};

// Get User by ID
export const getUserById = async (id: number) => {
  return await User.findByPk(id);
};

// Update User
export const updateUser = async (id: number, name: string, email: string) => {
  return await User.update({ name, email }, { where: { id } });
};

// Delete User
export const deleteUser = async (id: number) => {
  return await User.destroy({ where: { id } });
};
