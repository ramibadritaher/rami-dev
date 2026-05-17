import { Client, Databases, ID } from "appwrite";

const apiUrl = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
  .setEndpoint(apiUrl)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const databases = new Databases(client);

// IDs
export const DB_ID = "6a0901c80015ff171fa8";
export const TRANSACTIONS_COLLECTION = "transaction";
export const BUDGETS_COLLECTION = "budget";

// Helpers
export const createDocument = (collection: string, data: any) => {
    console.log("Creating document in collection:", collection, "with data:", data);
 databases.createDocument(DB_ID, collection, ID.unique(), data);
}
 

export const updateDocument = (collection: string, id: string, data: any) =>
  databases.updateDocument(DB_ID, collection, id, data);

export const deleteDocument = (collection: string, id: string) =>
  databases.deleteDocument(DB_ID, collection, id);

export const listDocuments = (collection: string) =>
  databases.listDocuments(DB_ID, collection);
