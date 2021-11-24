import React from "react";
import "../assets/css/modal.css";

function Modal(props) {
    const {open, close, header, footer} = props;

    return (
        <div className={open?'openModal modal':'modal'}>
            {open? (
                <section>
                    {/* <header>
                        {header}
                    </header> */}
                    <main>
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