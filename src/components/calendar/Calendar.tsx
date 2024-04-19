import "./style.css";
import Actions from "./Partials/Actions";
import CalendarComponent from "./Partials/Calendar";

interface ICalendarProps {
  setDate: any;
  date: any;
  selectRange: boolean;
  setSelectRange: any;
}

const CustomCalendar = (props: ICalendarProps) => {
  const { setDate, date, selectRange, setSelectRange } = props;
  return (
    <div style={{ width: "80vw", display: "grid", placeItems: "flex-start" }}>
      <CalendarComponent
        setDate={setDate}
        date={date}
        selectRange={selectRange}
      />
      <Actions
        setDate={setDate}
        date={date}
        selectRange={selectRange}
        setSelectRange={setSelectRange}
      />
    </div>
  );
};

export default CustomCalendar;
