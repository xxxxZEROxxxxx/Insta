import { INewUser } from "@/types";
import { ID } from "appwrite";
import { account } from "./config";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );
        console.log("Account created successfully:", newAccount);
        return newAccount; 
    } catch (error) {
        console.error("Error creating account:", error);
        return error; 
    }
}

