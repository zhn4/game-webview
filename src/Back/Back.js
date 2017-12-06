import React from "react";
import { withRouter } from "react-router-dom";

import './Back.css'

const Back = ({ history }) =>
  history.length > 1 && (
    <div onClick={history.goBack} className="back">←返回</div>
  );

export default withRouter(Back);
