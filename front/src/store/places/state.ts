import { Feature } from "@/interfaces/places";

export interface PlacesState {
    location?: [number, number];
    places: Feature[];
    
    isLoading: boolean;
    isLoadingPlaces: boolean;
}

function state(): PlacesState {
    return {
        location: undefined,
        places: [],

        isLoading: true,
        isLoadingPlaces: false
    }
}

export default state;