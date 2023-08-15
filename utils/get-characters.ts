import { cache } from 'react';
import { prisma } from '@/lib/prisma';

export const revalidate = 60; // 3600 // revalidate at most every hour

export const getCharacters = cache(async () => {
  try {
    let characters = await prisma.character.findMany();
    return characters;
  } catch (err) {
    console.error(err);
  }
});
