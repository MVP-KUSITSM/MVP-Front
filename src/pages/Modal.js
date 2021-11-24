import React from "react";
import "../assets/css/modal.css";

function Modal(props) {
    const {open, close, header, footer, betting} = props;

    let style = {
        "display": "flex",
        "align-items": "center",
        "text-align": "center",
    }

    let style2 = {
        "display": "none",
        "align-items": "center",
        "text-align": "center",
    }

    return (
        <div className={open?'openModal modal':'modal'}>
            {open? (
                <section>
                    <header style={betting? style2:null}>
                       {header}
                    </header>
                    <main style={betting? style:null}>
                        {props.children}
                    </main>
                    <footer>
                        <button className="close" onClick={close}>{footer}</button>
                    </footer>
                </section>
            ):null}
        </div>
    );
}

export default Modal;