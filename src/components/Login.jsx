import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/auth/AuthSlices";
import { translation } from "../assets/translation";
import { setLang, setTheme } from "../store/slices/settings/SettingsSlices";

const Login = () => {

    const dispatch = useDispatch()
    const { lang } = useSelector((state) => state.settings)
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

    const createSection = () => {
        const token = 'ghsahdfskhes'
        dispatch(login({id:user, email: email, token: token}))
    }

    return (
        <>
            <input
                type="text"
                onChange={(e) => setUser(e.target.value)}
                placeholder = {translation[lang].placeholderId}
            />
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder = {translation[lang].placeholderEmail}
            />
            <button onClick={createSection}>{translation[lang].inputText}</button>
            
        </>
    )
}

export default Login