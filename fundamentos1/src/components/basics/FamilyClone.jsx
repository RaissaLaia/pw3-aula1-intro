import React, { cloneElement } from 'react';

export default props => {
    return(
        <div>
        {/* para unico elemento filho */}
        {/*{cloneElement(props.children, {...props})} */}

        {/* para varios elementos filhos */}
        {props.children.map((child) => {
            return cloneElement(child, {props})
        })}
        </div>
    )
}
