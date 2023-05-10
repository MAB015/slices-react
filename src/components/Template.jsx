import React from "react";
import { setLang, setTheme } from "../store/slices/settings/SettingsSlices";
import { translation } from "../assets/translation"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/auth/AuthSlices";

const Template = () => {
    const dispatch = useDispatch()
    const { lang, theme } = useSelector((state) => state.settings)

    const changeLanguage = () => {
        lang === 'es' ? dispatch(setLang('en')) : dispatch(setLang('es'))
    }

    const changeTheme = () => {
        theme === 'light' ?  dispatch(setTheme('dark')) : dispatch(setTheme('light'))
    }  

    return (
        <div>
            <h1>{translation[lang].title}</h1>
            <p>{translation[lang].description}</p>
            <button onClick={changeLanguage}>
                {translation[lang].changeLanguage}
            </button>
            <button onClick={changeTheme}>
                {translation[lang].changeTheme}
            </button>
            <button onClick={dispatch(logout())}>
                {translation[lang].textLogout}
            </button>
        </div>
    )
}

export default Template