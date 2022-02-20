import * as React from "react"
import { Button } from "@progress/kendo-react-buttons"
// import './styles.scss'
import '../App.scss'

const Attachments = (props) => {
  const text = (
    <div id="Attachments" className="page attachments-page">
      <ul className="k-list-group">
        <li className="k-list-group-item active">Build enterprise apps</li>
        <li className="k-list-group-item">Fw: Regarding Multiline textbox</li>
        <li className="k-list-group-item">Away next week</li>
        <li className="k-list-group-item">Fw: Your Costume is ready</li>
        <li className="k-list-group-item">Update completed</li>
      </ul>
      <Button className="btn btn-success">Primary</Button>
    </div>
  )
  return <div>{props.children ? props.children : text}</div>
}

export default Attachments