import { z } from "zod"

export enum Role { USER = "user", ADMIN = "admin" }

export const UserSchema = z.object({
  id: z.string().min(2, { message: "ID must be at least 2 characters." }),
  name: z.string().min(2, { message: "Username must be at least 2 characters." }),
  authProviderId: z.string().min(2, { message: "Auth provider ID must be at least 2 characters." }),
  email: z.email({ message: "Invalid email address." }),
  image: z.string(),
  role: z.enum([Role.USER, Role.ADMIN], { message: `Role must be either '${Role.USER}' or '${Role.ADMIN}'` }),
  createdAt: z.string().transform(str => new Date(str)),
  updatedAt: z.string().transform(str => new Date(str)),
})
export type User = z.infer<typeof UserSchema>
export const UsersSchema = z.array(UserSchema);

export const addUserSchema = UserSchema.omit({ 
  id: true, role: true, createdAt: true, updatedAt: true 
});

export type NewUser = z.infer<typeof addUserSchema>

export const editUserSchema = addUserSchema
export interface EditUser { id: string; user: NewUser}