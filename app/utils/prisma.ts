'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function findAllYear() {
  return await prisma.years.findMany();
}

export async function findYear(year: number) {
  return await prisma.issues.findMany({
    where: {
      year: year,
    },
  });
}
