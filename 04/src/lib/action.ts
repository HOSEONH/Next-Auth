"use server";

import { revalidatePath } from "next/cache";
import connectDB from "./db";
import { User } from "./schema";

export async function fetchUsers() {
  // // mongodb connection
  // connectDB();
  // // mongodb Schema Query
  // const users = await User.find();
  // return users;
}

// 회원 추가
export async function addUser(prevState: string, formdata: FormData) {
  const name = formdata.get("name");
  const email = formdata.get("email");

  // mongodb connection
  connectDB();

  if (email === "" || name === "") {
    // return { success: false, message: "Please fill in the form." };
    return "Please fill in the form.";
  }

  // mongodb Schema Query
  const user = new User({ name, email });
  await user.save();
  revalidatePath("/");

  return "user add Sucess!";
  // return { success: true, message: "user add Sucess!" };
}

export async function deleteUser(formdata: FormData) {
  const id = formdata.get("id");
  // mongodb connection
  connectDB();
  // mongodb Schema Query
  await User.findByIdAndDelete(id);
  revalidatePath("/");
}
