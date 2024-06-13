import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
  user: { type: String, required: true },
  pass: { type: String, required: true },
});

const Admin = mongoose.model("crediential", AdminSchema, 'Mail');

export default Admin;
