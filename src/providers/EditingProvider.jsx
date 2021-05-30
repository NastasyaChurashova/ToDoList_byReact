import React, { useState} from "react";

const DEFAULT_VALUE = {
    isEditing: false,
    setEditing: () => undefined,// returns nothing
};

export const EditingContext = React.createContext(DEFAULT_VALUE);//нужно испольховать какой-то объект, кот.будет содержать isEditing

export const EditingProvider = ({ children }) => {
    const [isEditing, setEditing] = useState(false);
    return <EditingContext.Provider value={{ isEditing, setEditing }}>{children}</EditingContext.Provider>;
};
