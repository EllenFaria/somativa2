import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: "",
        password: "",
      },
      validationEmail: false,
      validationPassword: false,
      showStatus: false,
    };
  }

  handleInputChange(fieldName, value) {
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [fieldName]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.formData.email === "ellen@pucpr.br" &&
      this.state.formData.password === "123456"
    ) {
      this.setState({ validationEmail: true });
      this.setState({ validationPassword: true });
    } else {
      this.setState({ validationEmail: false });
      this.setState({ validationPassword: false });
    }

    this.setState({ showStatus: true });
    console.log(this.state.formData);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="login">
          <input
            type="email"
            value={this.state.formData.email || ""}
            onChange={(e) => this.handleInputChange("email", e.target.value)}
          />
          <input
            type="password"
            value={this.state.formData.password || ""}
            onChange={(e) => this.handleInputChange("password", e.target.value)}
          />
        </div>
        <button type="submit">Acessar</button>

        <div className={this.state.showStatus === true ? "show" : "hide"}>
          {this.state.validationEmail === true &&
          this.state.validationPassword === true ? (
            <p>Acessado com sucesso!</p>
          ) : (
            <p>Usuário ou senha incorretos</p>
          )}
        </div>
      </form>
    );
  }
}

export default Login;
