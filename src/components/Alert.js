import React from "react";

function Alert(props) {
    const capitalize = (word) => {
        if (word === "danger") {
            return "Error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
    return (
        props.alert && (
            <div
                className={`alert alert-${props.alert.type} alert-dismissible fade show mt-3`}
                role="alert"
            >
                <b>{capitalize(props.alert.type)}</b> : {props.alert.msg}
            </div>
        )
    );
}

export default Alert;
