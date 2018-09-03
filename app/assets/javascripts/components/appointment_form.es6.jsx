class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    return (
      <div>
        <h3> Make a new appointment </h3>
        <form onSubmit={ this.handleSubmit }>
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
  onUserInput: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};
