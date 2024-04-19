import { useState } from "react";
import "./style.css";
import CustomCalendar from "./Calendar"
function MyCalendar() {
  const [date, setDate] = useState<any>(new Date());
  const [selectRange, setSelectRange] = useState<boolean>(false);
  return (
    <div className="App" style={{ display: "grid", placeItems: "center" }}>
      <CustomCalendar
        date={date}
        setDate={setDate}
        selectRange={selectRange}
        setSelectRange={setSelectRange}
      />
    </div>
  );
}

export default MyCalendar;
