import { prisma } from '@/lib/prisma';

export const revalidate = 60; // 3600 // revalidate at most every hour

// TODO: use react cache to cache results
export const getCharacters = async () => {
  let characters = await prisma.character.findMany();
  return characters;
};
