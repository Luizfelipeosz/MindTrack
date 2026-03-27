import { motion } from "framer-motion";
import MoodChart from "../components/MoodChart";
import MoodList from "../components/MoodList";
import MoodForm from "../components/MoodForm";
import useMoods from "../hooks/useMoods";

export default function Dashboard() {
  const { moods, addMood } = useMoods();

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>MindTrack</h2>
        <p>Dashboard</p>
      </aside>

      <main className="main">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Visão geral emocional
        </motion.h1>

        <div className="grid">
          <motion.div whileHover={{ scale: 1.02 }} className="card">
            <MoodForm onAdd={addMood} />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="card">
            <MoodChart data={moods} />
          </motion.div>
        </div>

        <motion.div whileHover={{ scale: 1.01 }} className="card">
          <MoodList moods={moods} />
        </motion.div>
      </main>
    </div>
  );
}