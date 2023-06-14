import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { insertPlace, selectPlaces } from "../db";
import Place from "../models/place";

const initialState = {
    places: [],
    isLoading: false,
};

export const savePlace = createAsyncThunk("place/savePlace", async (place, thunkAPI) => {
    try {
        const result = await insertPlace(place.title, place.image);
        const newPlace = new Place(result.insertId, place.title, place.image);
        return newPlace;
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
});

export const getPlaces = createAsyncThunk("place/getPlaces", async (_, thunkAPI) => {
    try {
        const result = await selectPlaces();
        return result?.rows?._array;
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
});

const placeSlice = createSlice({
    name: "place",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(savePlace.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(savePlace.fulfilled, (state, action) => {
                state.isLoading = false;
                state.places.push(action.payload);
            })
            .addCase(savePlace.rejected, (state, action) => {
                state.isLoading = false;
            })
            .addCase(getPlaces.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPlaces.fulfilled, (state, action) => {
                state.isLoading = false;
                state.places = action.payload;
            })
            .addCase(getPlaces.rejected, (state, action) => {
                state.isLoading = false;
            });
    },
});

export default placeSlice.reducer;