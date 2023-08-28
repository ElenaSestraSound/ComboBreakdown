import { cache } from 'react';
import { prisma } from '@/lib/prisma';

export const revalidate = 3600;

export const getCharacters = cache(async () => {
  try {
    let characters = await prisma.character.findMany({
      include: {
        moves: true
      }
    });
    await prisma.$disconnect();
    return characters;
  } catch (err) {
    console.error(err);
  }
});
