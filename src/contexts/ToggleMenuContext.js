import { createContext } from "react";

const ToggleMenuContext = createContext({
    toggleMenu : {
        isActive: false
    }
})

ToggleMenuContext.displayName = "ToggleMenuContext";

export default ToggleMenuContext;