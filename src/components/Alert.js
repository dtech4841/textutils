import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        let first = word.charAt(0).toUpperCase() + word.slice(1);
        return first;
    }
    return (
        <div style={{height:'60px'}}>
            {
        props.alert &&
        <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {capitalize(props.alert.type)} : </strong> {props.alert.msg}
                
            </div>
        </div>}
        </div>
    )
}
