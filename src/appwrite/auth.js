import config from '../config.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({name, email, password}) {
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // call another method 
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    };

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
            
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService;