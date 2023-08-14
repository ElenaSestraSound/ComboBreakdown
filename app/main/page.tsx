import CharacterList from "./character-list";

export default function Main () {

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-3">
        <h2>Characters</h2>
        <CharacterList />
      </div>
    </div>
  );
}
