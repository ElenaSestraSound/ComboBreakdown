import { IGlossaryListItem } from "@/utils/types";

export default function GlossaryListItem ({ item }: IGlossaryListItem) {
  return (
    <details>
      <summary className="mb-5 p-2 bg-purple-900 hover:bg-purple-800 rounded-lg cursor-pointer">{item.term}</summary>
      <p className="mt-2 mb-5">{item.def}</p>
    </details>
  );
}
