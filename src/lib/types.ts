import { z } from "zod";


export const FormSchema = z.object({
  email: z.string().describe("Email").email("Invalid Email"),
  password: z.string().describe("Password").min(8, "Password must be at least 8 characters long"),
})