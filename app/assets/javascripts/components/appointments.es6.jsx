var Appointments = React.createClass ({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      input_title: '',
      input_apt_time: ''
    }
  },

  handleUserInput: function(obj) {
    this.setState(obj);
  },

  render: function() {
    return (
      <div>
        <AppointmentForm
          input_title={ this.state.input_title }
          input_apt_time={ this.state.input_apt_time }
          onUserInput={ this.state.handleUserInput }
        />
        <AppointmentsList
          appointments={ this.state.appointments }
        />
      </div>
    );
  }
});
