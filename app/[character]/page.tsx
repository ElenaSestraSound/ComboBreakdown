import { useRouter } from 'next/router'
// ... other necessary imports ...

export default function CharacterPage() {
  const router = useRouter();
  const { name } = router.query;

  // Here you could potentially fetch specific character data using the `name`
  // For this example, I'll just display the name:

  return (
    <div>
      <h1>{name}</h1>
      {/* Display more character details here */}
    </div>
  );
}
