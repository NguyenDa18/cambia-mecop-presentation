import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class CustomDatepicker extends Component {
state = {
    startDate: new Date()
}

    handleChange = date => {

        let initDate = !date ? this.props.initialDate : date;
        this.setState({
            startDate: initDate
        });
    };
    
  render() {

    const { startDate } = this.state;
    const { initialDate } = this.props;
    return (
      <div>
        <DatePicker
          selected={startDate}
          onChange={this.handleChange}
          format={"L"}
          isClearable={true}
          fixedHeight
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>
    )
  }
}
