import { eq } from 'drizzle-orm'
import db from '~/db'
import { NewUser, User, users } from '~/db/schemas/user'

export const getManyUsers = async () => {
  return await db.select().from(users)
}

export const insertUser = async (newUser: NewUser) => {
  return await db.insert(users).values(newUser)
}

export const updateUserById = async (id: number, updateUser: User) => {
  return await db.update(users).set(updateUser).where(eq(users.id, id))
}

export const deleteUserById = async (id: number) => {
  return await db.delete(users).where(eq(users.id, id))
}
