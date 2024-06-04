import React, {useEffect, useState }from "react";
import { upperCase, lowerCase, numbers, specialCharacters } from "./Characters";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(26);
    const [includeUpper, setUpper] = useState(false);
    const [includeLower, setLower] = useState(false);
    const [includeNumbers, setNumbers] = useState(false);
    const [includeSpecialCharacters, setSpecialCharacters] = useState(false);
    let passwordCharacterSet = "";

    const generatePassword = () => {
        if (!includeUpper && !includeLower &&!includeNumbers && !includeSpecialCharacters) {
            passwordCharacterSet += upperCase + lowerCase + numbers + specialCharacters;
        }

        else {
            if (includeUpper) {
                passwordCharacterSet += upperCase;
            }
            if (includeLower) {
                passwordCharacterSet += lowerCase;
            }
            if (includeNumbers) {
                passwordCharacterSet += numbers;
            }
            if (includeSpecialCharacters) {
                passwordCharacterSet += specialCharacters;
            }
        }
        setPassword(createPassword(passwordCharacterSet));
        console.log(password);
    }

    const createPassword = (passwordCharacterSet) => {
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * passwordCharacterSet.length)
            password += passwordCharacterSet.charAt(characterIndex)
        }
        return password;
    }

    return (
        <div className="container">
            <div className="display-box">
            <div className="new-password">
                {password}
            </div>
            <div className="selection-container">
                <label>Add UpperCase Letters</label>
                <input type="checkbox" className="cbox" checked={includeUpper} onChange={(e) => setUpper(e.target.checked)}/>
            </div>
            <div className="selection-container">
                <label>Add LowerCase Letters</label>
                <input type="checkbox" className="cbox" checked={includeLower} onChange={(e) => setLower(e.target.checked)}/>
            </div>
             <div className="selection-container">
                <label>Include Numbers</label>
                <input type="checkbox" className="cbox" checked={includeNumbers} onChange={(e) => setNumbers(e.target.checked)}/>
            </div>
            <div className="selection-container">    
                <label>Symbols</label>
                <input type="checkbox" className="cbox" checked={includeSpecialCharacters} onChange={(e) => setSpecialCharacters(e.target.checked)}/>
            </div>
            <div className="generate-password-button-container">
                <button type="submit" value="Submit" className="generate-password-button" onClick={generatePassword}>Generate Password</button>
                </div>
                </div>
        </div>
    )
}

export default PasswordGenerator;