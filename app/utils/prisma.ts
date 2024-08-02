'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function findAllYear() {
  return await prisma.year.findMany();
}

export async function findYear(year: number) {
  return await prisma.issue.findMany({
    where: {
      year: year,
    },
  });
}
