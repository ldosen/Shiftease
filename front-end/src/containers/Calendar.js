import "./Calendar.css";
import React from "react";
import dateFns from "date-fns";
import Shift from "./Shift";
import { Button } from "react-bootstrap";
import { SplitButton } from "react-bootstrap";
import { MenuItem } from "react-bootstrap";
import Popup from "reactjs-popup";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const oldscheduledShifts = {
  2019: {
    4: {
      10: { "9am": "Ramsha", "10am": "Somto", "11am": "Maha" },
      16: { "8am": "Maha", "10am": "Luke" },
      27: { "12pm": "Jonathan" }
    }
  }
};

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      open: false,
      calendarFilled: false,
      scheduledShifts: undefined,
      unschedulable: undefined,
      formDate: undefined
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
  }
  closeModal() {
    this.setState({ open: false });
  }

  componentDidMount() {
    fetch("https://shiftease.herokuapp.com/integrationdemo")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            scheduledShifts: result.schedule,
            unschedulable: result.unschedulable
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  renderHeader() {
    const dateFormat = "MMMM YYYY";
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }
  renderDays() {
    const dateFormat = "dddd";
    const days = [];
    let startDate = dateFns.startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }
  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "D";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        var fullDate = [
          dateFns.format(day, "YYYY"),
          dateFns.format(day, "M"),
          formattedDate
        ];
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <p>{this.checkCalendarFilled(fullDate)}</p>
          </div>
        );
        console.log("fullDate: " + fullDate);
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }
  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };
  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };
  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  checkCalendarFilled = fullDate => {
    if (this.state.calendarFilled) {
      return this.renderShifts(fullDate);
    } else {
      return null;
    }
  };

  fillCalendar = () => {
    this.setState({ calendarFilled: true });
    console.log("button clicked");
    return null;
  };

  renderShifts = fullDate => {
    if (fullDate[0] in this.state.scheduledShifts) {
      if (fullDate[1] in this.state.scheduledShifts[fullDate[0]]) {
        if (
          fullDate[2] in this.state.scheduledShifts[fullDate[0]][fullDate[1]]
        ) {
          //console.log("key in this.state.scheduledShifts");
          //console.log(this.state.scheduledShifts[formattedDate]);

          var result = [];
          for (var shift in this.state.scheduledShifts[fullDate[0]][
            fullDate[1]
          ][fullDate[2]]) {
            result.push([
              shift,
              this.state.scheduledShifts[fullDate[0]][fullDate[1]][fullDate[2]][
                shift
              ]
            ]);
          }
          return result.map(i => {
            return <Shift timeslot={i[0]} employee={i[1]} />;
          });
        }
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <Button onClick={this.fillCalendar}>Create</Button>
        <div>
          <SplitButton
            title=" Unscheduled Employees "
            pullRight
            id="split-button-pull-right"
          >
            <MenuItem eventKey="1" onClick={this.openModal}>
              Zac
            </MenuItem>
            <MenuItem eventKey="2">Emmanuel</MenuItem>
            <MenuItem eventKey="3">Jonathan</MenuItem>
            <MenuItem divider />
          </SplitButton>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div>
              <a className="close" onClick={this.closeModal}>
                &times;
              </a>
              <FormGroup controlId="first_name" bsSize="large">
                <ControlLabel>Date</ControlLabel>
                <FormControl type="date" onChange={this.handleChange} />
                <ControlLabel>Time</ControlLabel>
                <FormControl type="time" onChange={this.handleChange} />
              </FormGroup>
            </div>
          </Popup>
        </div>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </div>
    );
  }
}
export default Calendar;
