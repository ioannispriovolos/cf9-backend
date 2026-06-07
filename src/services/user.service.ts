import User, { IUser } from "../models/user.model";
import Role, { IRole } from "../models/role.model";
import { Types } from "mongoose";

export const createUser = async(payload: IUser) => {
    console.log("Service payload:", payload);
    const user = new User(payload);
    console.log("New user:", user);
    return user;
}