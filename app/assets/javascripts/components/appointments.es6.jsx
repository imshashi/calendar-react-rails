class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      apt_time: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  handleFormSubmit() {
    var appointment = {
      title: this.state.title,
      apt_time: this.state.apt_time
    }

    $.post('/appointments',
      { appointment: appointment }
    )
    .done(function(data) {
      this.addNewAppointment(data);
    }.bind(this));
  }

  addNewAppointment(appointment) {
    console.log(appointment);
    var appointments = React.addons.update(
      this.state.appointments,
      { $push: [appointment] }
    );
    this.setState({
      appointments: appointments.sort(function(a, b){
        return new Date(a.apt_time) - new Date(b.apt_time);
      })
    });
  }

  render () {
    return (
      <div>
        <AppointmentForm
          title={ this.state.title }
          apt_time={ this.state.apt_time }
          onUserInput={ this.handleUserInput }
          onFormSubmit={ this.handleFormSubmit }
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

