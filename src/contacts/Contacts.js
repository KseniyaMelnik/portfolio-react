import React from "react";
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/style.module.css";
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <Title text={'Contacts'} />
                <div className={style.formContainer}>
                    <form className={style.form}>
                        <input type="text" placeholder={'Name'}/>
                        <input type="text" placeholder={'Email'}/>
                        <textarea placeholder={'Message '}></textarea>
                    </form>
                    <div className={style.buttonContainer}>
                        <button className={style.button}>Send</button>
                    </div>
                </div>
        </div>
        </div>
    );
}

export default Contacts;