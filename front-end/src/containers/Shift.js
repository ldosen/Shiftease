import React from "react";
import "./Shift.css";

//Shift in calendar cell
const Shift = props => (
  <div class="shift-wrapper">
    <span className="shift">
      {props.timeslot} - {props.employee}
    </span>
  </div>
);

export default Shift;
