class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAptTime = this.setAptTime.bind(this);
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

  setAptTime(e) {
    var name = 'apt_time';
    var obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render() {
    var inputProps = {
      name: 'apt_time'
    }
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
          <Datetime
            input={ false }
            inputProps={ inputProps }
            value={ this.props.apt_time }
            onChange={ this.setAptTime }
          />
          <input type="submit" value="Make Appointment" className='submit-button' />
        </form>
      </div>
    );
  }
}

AppointmentForm.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};
