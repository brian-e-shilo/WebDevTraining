import { useRef } from "react";

interface ColorPickerProps {
  onChangeTitle: (newTitle: string) => void;
}

export default function ColorPicker({ onChangeTitle }: ColorPickerProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value?.trim() || "";
    const color = colorRef.current?.value || "#000000";
    if (title) onChangeTitle(`${title} (${color})`);
    if (titleRef.current) titleRef.current.value = "";
    if (colorRef.current) colorRef.current.value = "#000000";
    alert(`Saved: ${title} with color ${color}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={titleRef} type="text" placeholder="Color title..." />
      <input ref={colorRef} type="color" defaultValue="#000000" />
      <button type="submit">Apply Title</button>
    </form>
  );
}
