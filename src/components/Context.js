import Table from "./Table";
import Form from "./Form";
import { UserContext } from '../index'
import { useContext } from "react";

function Card(props) {
  const ctx = useContext(UserContext);
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : "";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card m-auto" + bg + txt;
  }

  return (
    <div className={classes()} style={{ width: "90%", maxWidth: "600px" }}>
      {props.header && <h3 className="card-header black">{props.header}</h3>}
      <div className="card-body py-5 m-auto" style={{ overflowX: "scroll", maxWidth: "500px", width: "100%" }}>
        {props.title && <h5 className="card-title mb-4 mx-auto" style={{maxWidth: "400px"}}>{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
        {props.ctx && <Table />}
        {props.formTemplate && <Form template={props.formTemplate} onSubmit={props.onSubmit} />}
      </div>
    </div>
  );
}

export default Card;
