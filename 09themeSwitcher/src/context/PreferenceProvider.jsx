import UserPreferencesContext from "./UserPreferencesContext";
import React, { useState } from "react";
const UserPreferencesContextProvider =({children})=>{
    const [UserPreferences,setUserPreferences] = useState({theme : "light"});
     return( 
        <UserPreferencesContext.Provider value={{UserPreferences, setUserPreferences}}>
            {children}
        </UserPreferencesContext.Provider>
    )
}

export default UserPreferencesContextProvider;