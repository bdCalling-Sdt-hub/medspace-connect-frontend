import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    searchQuery: string;
    location: string;
    price: string;
    practiceType: string;
    facilities: string;
    practiceNeed: string;
}

const initialState: FilterState = {
    searchQuery: '',
    location: '',
    price: '',
    practiceType: '',
    facilities: '',
    practiceNeed: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setPrice: (state, action: PayloadAction<string>) => {
            state.price = action.payload;
        },
        setPracticeType: (state, action: PayloadAction<string>) => {
            state.practiceType = action.payload;
        },
        setFacilities: (state, action: PayloadAction<string>) => {
            state.facilities = action.payload;
        },
        setPracticeNeed: (state, action: PayloadAction<string>) => {
            state.practiceNeed = action.payload;
        },
        clearFilter: (state, action: PayloadAction<keyof FilterState>) => {
            state[action.payload] = ''; // Clear the specific filter
        },
        clearAllFilters: (state) => {
            state.searchQuery = '';
            state.location = '';
            state.price = '';
            state.practiceType = '';
            state.facilities = '';
            state.practiceNeed = '';
        },
    },
});

// Export actions for use in components
export const {
    setSearchQuery,
    setLocation,
    setPrice,
    setPracticeType,
    setFacilities,
    setPracticeNeed,
    clearFilter,
    clearAllFilters,
} = filterSlice.actions;

// Export the reducer to be used in the store
export default filterSlice.reducer;
