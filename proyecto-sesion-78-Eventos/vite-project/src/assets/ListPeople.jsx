import React, { Children } from "react";
import Profiles from "./components/Profiles";


const ListPeople = ({Children}) => {
    return(
        <div className="list.container">{Children}</div>
    )
}

export default ListPeople