import React from "react";
import { RxCross2 } from "react-icons/rx";

const Listitem = (props) => {
  return (<>
    <div className="list_style">
      <div className="listname">
        < RxCross2 className="list" onClick={() => {
          props.onSelect(props.id)
        }}
        />
      </div>
      {/* <i onClick={ () => {
        props.onSelect(props.id)
      }}></i> */}
      <li>{props.text}</li>
    </div>
  </>
  )

}

export default Listitem;