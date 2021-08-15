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
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/stevendew02/google_sheets/DKQPEZbNQGwtlHnW?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              this.state.name,
              this.state.companyName,
              this.state.serviceNeed,
              this.state.contactType,
              this.state.technician,
              new Date().toLocaleString,
            ],
          ]),
        }
      );
      await response.json();
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input value={this.state.name} onChange={this.handleName}></input>
          </label>
          <label>
            Company Name:
            <input
              value={this.state.companyName}
              onChange={this.handleCompanyName}
            ></input>
          </label>
          <label>
            Service Need:
            <input
              value={this.state.serviceNeed}
              onChange={this.handleService}
            ></input>
          </label>
          <label>
            Contact Type:
            <input
              value={this.state.contactType}
              onChange={this.handleContactType}
            ></input>
          </label>
          <label>
            Request Specific Technician:
            <input
              value={this.state.technician}
              onChange={this.handleTechnician}
            ></input>
          </label>
          {console.log(this.state.name)}
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
