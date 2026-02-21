import { useEffect, useState, useContext } from 'react'
import './App.css'
import Card from './components/Card'
import Theme from './components/Theme'
import UserPreferencesContext from './context/UserPreferencesContext'
import UserPreferenceContextProvider from './context/PreferenceProvider'

function AppContent() { 
  const { UserPreferences : preferences}= useContext(UserPreferencesContext);
  useEffect(()=>{
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(preferences.theme);
 },[preferences.theme]) ;
  return( 
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Theme/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                    <Card/>

                    </div>
                </div>
                </div> 
  )
}

function App() {
  return (
    <UserPreferenceContextProvider>
      <AppContent />
    </UserPreferenceContextProvider>
  )
}

export default App;
