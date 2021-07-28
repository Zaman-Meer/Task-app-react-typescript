import React from "react";
import { Button } from "reactstrap";
import {CustomHeaderWrapper} from "./StyledComponents"

interface ICustomHeader {
    buttonLabel:string,
    onClick:()=>void
}

const CustomHeader:React.FC<ICustomHeader> =({buttonLabel,onClick})=>{

    return(
        <CustomHeaderWrapper>
        <h3>Task App</h3>
        <Button color="secondary"  size="sm" onClick={onClick}  >{buttonLabel}</Button>
    
        </CustomHeaderWrapper>
    )
}

export default CustomHeader;