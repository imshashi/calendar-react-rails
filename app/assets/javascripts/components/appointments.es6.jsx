class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      apt_time: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  render () {
    return (
      <div>
        <AppointmentForm
          title={ this.state.title }
          apt_time={ this.state.apt_time }
          onUserInput={ this.handleUserInput }
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

