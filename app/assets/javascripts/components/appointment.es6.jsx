var Appointment = React.createClass({
  render: function() {
    const { id, title, apt_time } = this.props.appointment;
    return (
      <div>
        <h3>{ title }</h3>
        <p>{ apt_time }</p>
      </div>
    );
  }
});

