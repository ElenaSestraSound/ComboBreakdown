import { GlossaryItem } from "@/utils/types";

interface IGlossaryItem {
  item: GlossaryItem;
}

export default function GlossaryListItem ({ item }: IGlossaryItem) {
  return (
    <details>
      <summary className="mb-5 p-2 bg-purple-900 hover:bg-purple-800 rounded-lg cursor-pointer">{item.term}</summary>
      <p className="mt-2 mb-5">{item.def}</p>
    </details>
  );
}
