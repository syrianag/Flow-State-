// lib/prisma.js
import { prisma } from "./prisma";
import { PrismaClient } from "@prisma/client";



if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
