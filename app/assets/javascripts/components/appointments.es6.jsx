class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      input_title: '',
      input_apt_time: ''
    }
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  render () {
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
}

Appointments.propTypes = {
  appointments: PropTypes.array.isRequired
};

