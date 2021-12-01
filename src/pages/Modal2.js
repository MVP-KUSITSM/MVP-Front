import React from "react";
import "../assets/css/modal2.css";

function Modal(props) {
    const {open, close, header, footer, betting} = props;

    return (
        <div className={open?'openModal modal':'modal'}>
            {open? (
                <>
                
                <div className="header">
                <img className="modal_logo"src="logo.png"></img>
                </div>
                    <main className="Main">
                        {props.children}
                    </main>
              
                </>
            ):null}
        </div>
    );
}

export default Modal;