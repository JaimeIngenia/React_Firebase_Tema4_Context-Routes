import React, { createContext, useState } from 'react';
import usersData from "../../App"

export const Appcontext = createContext(null)

export const AppProvider = ({ children }) => {
    const [usersData, setUsersData] = useState([]);
    const [userLog, setUserLog] = useState(null); //datos de servicio de autenticación del usuario logueado
    const [data, setData] = useState(usersData);
    const [color, setColor] = useState("");
    const valoresAcompartir = {
        usersData,
        setUsersData,
        userLog,
        setUserLog,
        data,
        setData,
        color,
        setColor
    }
    return (
        <Appcontext.Provider value={valoresAcompartir}>
            {children}
        </Appcontext.Provider>
    )
}
