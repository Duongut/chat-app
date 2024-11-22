import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import { getAllContacts, getContactsForDMlist, searchContacts } from "../controllers/ContactsController.js";


const contactsRouters = Router();
contactsRouters.post("/search", verifyToken, searchContacts);
contactsRouters.get("/get-contacts-for-dm", verifyToken, getContactsForDMlist);
contactsRouters.get("/get-all-contacts", verifyToken, getAllContacts)
export default contactsRouters;