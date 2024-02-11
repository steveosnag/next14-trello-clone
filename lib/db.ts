import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// if we are in development or local globalThis.prisma will be our db
// we do this to avoid hot reload error in Nextjs meaning new PrismaClient() will init multiple times thus create a warning
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;