class Appointment extends React.Component {
  render () {
    const { id, title, apt_time } = this.props.appointment;
    return (
      <div>
        <h3>{ title }</h3>
        <p>{ formatDate(apt_time) }</p>
      </div>
    );
  }
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired
};
