import { useState } from 'react'
import GlobalStore from './GlobalStore'

export default function GlobalStoreProvider({ children }) {

    const host = "https://resume-parser-s7my.vercel.app/";
                    
    const [inputFile, setInputFile] = useState(null);
    const [serverRes, setServerRes] = useState(null);
    const [loading, setLoading] = useState(false);


    const parsePdf = async () => {
        if (inputFile) {
            try {
                console.log(inputFile);
                const formData = new FormData();
                formData.append("inputFile", inputFile);

                const response = await fetch(`${host}`, {
                    method: "POST",
                    body: formData
                });

                const json = await response.json();
                setLoading(false);
                setServerRes(json);
            } catch (error) {
                console.log("Error in GlobalStore.jsx: ", error);
                throw error;
            }
        }
    };

    return (
        <GlobalStore.Provider value={{ inputFile, setInputFile, serverRes, setServerRes, parsePdf, loading, setLoading }}>
            {children}
        </GlobalStore.Provider>
    )
}
