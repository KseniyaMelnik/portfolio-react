import React from "react";
import style from './Contacts.module.css';

function Contacts() {
    return (
        <div className={style.contactsBlock}>
        <div className={style.container}>
            <div className={style.text}>
                <span>Contacts</span>
            </div>

                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
            <div className={style.buttonContainer}>
                <button className={style.button}>Send</button>
            </div>
        </div>
        </div>
    );
}

export default Contacts;