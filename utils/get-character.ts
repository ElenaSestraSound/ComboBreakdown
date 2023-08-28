import { cache } from 'react';
import { prisma } from '@/lib/prisma';

export const revalidate = 3600 // revalidate at most every hour

export const getCharacter = cache(async (characterName: string) => {
  try {
    let character = await prisma.character.findFirst({
      where: {
        name: characterName
      },
      include: {
        moves: true
      }
    });
    await prisma.$disconnect();
    return character;
  } catch (err) {
    console.error(err);
  }
});
