import { useState } from "react";

const mapMood = {
  happy: 3,
  neutral: 2,
  sad: 1,
};

export default function MoodForm({ onAdd }) {
  const [mood, setMood] = useState("happy");

  const handle = () => {
    onAdd({
      mood,
      value: mapMood[mood],
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <div>
      <h3>Registrar humor</h3>
      <select onChange={(e) => setMood(e.target.value)}>
        <option value="happy">😊 Feliz</option>
        <option value="neutral">😐 Neutro</option>
        <option value="sad">😞 Triste</option>
      </select>
      <button onClick={handle}>Salvar</button>
    </div>
  );
}
