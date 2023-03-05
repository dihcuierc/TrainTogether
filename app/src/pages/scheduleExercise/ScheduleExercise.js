import React from "react";
import background from "../../assets/css/Background.module.css";
import padding from "../../assets/css/Padding.module.css";
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import "./ScheduleExercise.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import Stack from "react-bootstrap/esm/Stack";

export default function ScheduleExercise() {
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(date.getTime());
  const [endTime, setEndTime] = React.useState(date.getTime() + 3600000);

  return (
    <div className={background.default}>
      {console.log(startTime)}
      <h1 className={padding.headerTop}>Schedule Exercise</h1>
      <Stack className="stack-container" gap={5}>
        <Calendar onChange={setDate} value={date} calendarType="US" />
        {console.log(date)}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="row-item">
            <Typography sx={{left: "20px"}}>Start Time</Typography>
            <DesktopTimePicker
              defaultValue={dayjs(startTime)}
              ampm={false}
              sx={{ width: "200px", marginLeft: "20px", "& .MuiInputBase-input": {color: "white" }}}
            />
          </div>

          <div className="row-item" style={{marginBottom: "5rem"}}>
            <Typography>End Time</Typography>
            <DesktopTimePicker
              defaultValue={dayjs(endTime)}
              ampm={false}
              sx={{ width: "200px", marginLeft: "20px", "& .MuiInputBase-input": {color: "white" }}}
            />
          </div>

        </LocalizationProvider>

      </Stack>
    </div>
  );
}
