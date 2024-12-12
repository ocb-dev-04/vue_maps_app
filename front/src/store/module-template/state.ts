export interface ExampleState {
    prop: boolean;
}

function state(): ExampleState {
    return {
        prop: true,
    }
}

export default state;