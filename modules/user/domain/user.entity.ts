import { z } from "zod"

export enum Role { USER = "user", ADMIN = "admin" }

export const UserSchema = z.object({
  id: z.string().min(2, { message: "ID must be at least 2 characters." }),
  name: z.string().min(2, { message: "Username must be at least 2 characters." }),
  providerId: z.string().min(2, { message: "Auth provider ID must be at least 2 characters." }),
  email: z.email({ message: "Invalid email address." }),
  image: z.string(),
  role: z.enum([Role.USER, Role.ADMIN], { message: `Role must be either '${Role.USER}' or '${Role.ADMIN}'` }),
  createdAt: z.string().transform(str => new Date(str)),
  updatedAt: z.string().transform(str => new Date(str)),
})
export type User = z.infer<typeof UserSchema>
export const UsersSchema = z.array(UserSchema);
/*-----*****-----*/
export const EditUserSchema = UserSchema.omit({ 
  id: true, role: true, createdAt: true, updatedAt: true 
});
export type NewEditUser = z.infer<typeof EditUserSchema>
export interface EditUser { userId: string; editUser: NewEditUser}

export const EditFormUserSchema = UserSchema.omit({ 
  id: true, providerId: true, role: true, createdAt: true, updatedAt: true 
});
export type NewEditFormUser = z.infer<typeof EditFormUserSchema>
export interface EditFormUser { userId: string; editFormUser: NewEditFormUser}
/*-----*****-----*/
export interface FindUser { userId: string}
export interface FindUserByProvider { userProviderId: string}