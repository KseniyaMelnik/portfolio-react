import React from "react";
import style from './Contacts.module.css';
import styleContainer from "../common/styles/style.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2>Contacts</h2>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="9"></textarea>
                </form>
            <div className={style.buttonContainer}>
                <button className={style.button}>Send</button>
            </div>
        </div>
        </div>
    );
}

export default Contacts;