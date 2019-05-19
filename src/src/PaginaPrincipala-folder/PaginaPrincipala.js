import React from "react";
import ReactDom from "react-dom";

import "./CssPrincipalaPagina.css";

class MainPage extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <div style={{ height: "15%", width: "100%" }}>
          <div id="TitleDiv">
            <div>
              <img
                id="ProfilePhoto"
                src="https://www.nzaf.org.nz/assets/ee-uploads/cache/6e456c4c746cba65/Guy-sample_376_268_s_c1.jpg"
              />
            </div>
            <div style={{ marginLeft: "30px" }}>
              <div>test</div>
              <div>test</div>
            </div>
          </div>
          <div id="ConfigDiv">
            <img
              onClick={this.props.updateStatus}
              src="https://png2.kisspng.com/sh/f56f3a02b340387779d54039f1f03cb2/L0KzQYm3VMAzN5V2iZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfRwf59xh9NtLXzyd7r1Tflkd58yfNd8aXfxPbbBigQuPZJoSqQDN0LlSbe5UckvOmE5S6g7NEC0RYO5Vsc0P2g9T6g6Nj7zfri=/kisspng-computer-icons-download-login-icon-design-exit-5ac22872b9f219.2043624015226737787616.png"
            />
          </div>
        </div>
        <div className="Menus">
          <div className=" ExteriorColumn">test</div>
          <div className=" MainColumn">test</div>
          <div className=" ExteriorColumn">test</div>
        </div>
      </div>
    );
  }
}

export default MainPage;
