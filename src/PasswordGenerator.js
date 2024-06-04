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
            <div className="new-password">
                {password}
            </div>
                <label>
                    Add UpperCase Letters
                    <input type="checkbox" checked={includeUpper} onChange={(e) => setUpper(e.target.checked)}/>
                </label>
                <label>
                    Add LowerCase Letters
                    <input type="checkbox" checked={includeLower} onChange={(e) => setLower(e.target.checked)}/>
                </label>
                <label>
                    Include Numbers
                    <input type="checkbox" checked={includeNumbers} onChange={(e) => setNumbers(e.target.checked)}/>
                </label>
                <label>
                    Symbols
                    <input type="checkbox" checked={includeSpecialCharacters} onChange={(e) => setSpecialCharacters(e.target.checked)}/>
                </label>
                <button type="submit" value="Submit" onClick={generatePassword}>Generate Password</button>
        </div>
    )
}

export default PasswordGenerator;