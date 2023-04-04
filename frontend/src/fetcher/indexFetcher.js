import { instance } from "../modules/axios";

async function getAllBooks() {
  try {
    const response = await instance.get("/books");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.massage || "Something went wrong");
  }
}

async function registerUser(data) {
  try {
    const response = await instance.post("/register", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Something went wrong");
  }
}

export { getAllBooks, registerUser };
