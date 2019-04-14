import React from "react";

//Shift in calendar cell
const Shift = props => (
  <div class="shift">
    <span>
      {props.timeslot} - {props.employee}
    </span>
  </div>
);

export default Shift;
