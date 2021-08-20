import { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      companyName: "",
      serviceNeed: "",
      contactType: "",
      technician: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handleService = this.handleService.bind(this);
    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleContactType = this.handleContactType.bind(this);
    this.handleTechnician = this.handleTechnician.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleCompanyName(event) {
    this.setState({
      companyName: event.target.value,
    });
  }
  handleService(event) {
    this.setState({
      serviceNeed: event.target.value,
    });
  }
  handleContactType(event) {
    this.setState({
      contactType: event.target.value,
    });
  }
  handleTechnician(event) {
    this.setState({
      technician: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    // try {
    //   const response = await fetch(
    //     "https://v1.nocodeapi.com/stevendew02/google_sheets/DKQPEZbNQGwtlHnW?tabId=Sheet1",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify([
    //         [
    //           this.state.name,
    //           this.state.companyName,
    //           this.state.serviceNeed,
    //           this.state.contactType,
    //           this.state.technician,
    //           new Date().toLocaleString,
    //         ],
    //       ]),
    //     }
    //   );
    //   await response.json();
    // } catch (err) {
    //   console.log(err);
    // }
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="input-label">Name:</label>
            <input
              value={this.state.name}
              onChange={this.handleName}
              required
              className="input-field"
            ></input>
          </div>
          <div className="form-group">
            <label className="input-label">Company Name:</label>
            <input
              value={this.state.companyName}
              onChange={this.handleCompanyName}
              required
              className="input-field"
            ></input>
          </div>
          <div className="form-group">
            <label className="input-label">Service Need:</label>
            <input
              value={this.state.serviceNeed}
              onChange={this.handleService}
              required
              className="input-field"
            ></input>
          </div>
          <div className="from-group">
            {/* <label className="input-label">
              Contact Type: *this field is under construction
            </label> */}
            <input
              value={this.state.contactType}
              onChange={this.handleContactType}
              type="radio"
            ></input>
          </div>
          <div className="form-group">
            <label className="input-label">Request Specific Technician:</label>
            <input
              value={this.state.technician}
              onChange={this.handleTechnician}
              className="input-field"
            ></input>
            <p className="footnote">
              *if you would like a specific technician, please specify
            </p>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
