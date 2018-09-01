class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  render() {
    return (
      <div>
        <h3> Make a new appointment </h3>
        <form>
          <input
            name="title"
            placeholder="Appointment Title"
            value={ this.props.title }
            onChange={ this.handleChange }
          />
          <input
            name="apt_time"
            placeholder="Date and Time"
            value={ this.props.apt_time }
            onChange={ this.handleChange }
          />
          <input type="submit" value="Make Appointment" />
        </form>
      </div>
    );
  }
}

AppointmentForm.propTypes = {
  onUserInput: PropTypes.func.isRequired
};
