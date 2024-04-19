import { motion } from "framer-motion";
import "../style.css";
interface ActionProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
}
const options = {
  weekday: 'long', 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric',
};

const Actions = (props: ActionProps) => {
  const { setDate, date, selectRange, setSelectRange } = props;
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
    >
      {date.length > 0 && selectRange ? (
        <p className="text-center">
          {date[0].toLocaleDateString("es", options)}
          &nbsp;-&nbsp;
          {date[1].toLocaleDateString("es", options)}
        </p>
      ) : (
        <p className="text-center">{date.toLocaleDateString("es", options)}</p>
      )}
      <button
        style={{
          color: selectRange ? "var(--theme)" : "#524d4d",
          cursor: "pointer",
          marginTop: "1rem",
          width: "10rem",
          height: "3rem",
          border: "none",
          outline: "none",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "0.5rem",
          boxShadow: "0 12px 14px rgba(0, 0, 0, 0.1)",
        }}
        onClick={() => {
          setSelectRange(!selectRange);
          setDate(new Date());
        }}
      >
        Seleccionar rango de fechas
      </button>
    </motion.div>
  );
};

export default Actions;
