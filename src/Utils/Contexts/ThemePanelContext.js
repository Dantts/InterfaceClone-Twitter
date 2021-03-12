import React, {useContext, createContext, useState} from 'react';

const PanelContext = createContext();

export default function PanelProvider({ children }) {
    const [panel, setPanel] = useState(false);

    return(
        <PanelContext.Provider value={{panel, setPanel}}>
            {children}
        </PanelContext.Provider>
    );
};

export function usePanel() {
    const context = useContext(PanelContext);
    if(!context) throw new Error("usePanel must be used within a PanelProvider");
    const {panel, setPanel} = context;
    return {panel, setPanel};
}