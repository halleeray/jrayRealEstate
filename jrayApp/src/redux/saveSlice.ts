import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Property{
    id: string;
    saved: boolean;
}

interface SavedProperties{
    properties: Property[];
}

const initialState: SavedProperties = {
    properties: [],
};


const savesSlice = createSlice({
    name: 'saves',
    initialState,
    reducers: {
        togglePropertySave: (state, action:PayloadAction<string>) => {
            const propertyId = action.payload;
            const existingProperty = state.properties.find(property => property.id === propertyId);
            if (existingProperty){
                existingProperty.saved = !existingProperty.saved
            } 
            else{
                state.properties.push({id: propertyId, saved: true});
            }
        },
    },
});


export const {togglePropertySave} = savesSlice.actions;
export const savesReducer = savesSlice.reducer;