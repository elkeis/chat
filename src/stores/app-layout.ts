import {
    writable
} from 'svelte/store';

const state = {
    showSidebar: true,
}

function createAppLayout () {
    const { subscribe, update } = writable(state);

    return {
        subscribe,
        toggleSidebar: () => update(toggleSidebar),
    }
}

function toggleSidebar(state) {
    return {
        ...state,
        showSidebar: !state.showSidebar,
    }
};

export default createAppLayout();

export const test = {
    state,
    toggleSidebar,
}
