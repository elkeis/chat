import type {
    AnyAction,
} from 'redux';

const TOGGLE_SIDEBAR = 'chat/app-layout/TOGGLE_SIDEBAR';

export interface State {
    showSidebar: boolean,
}

export const initialState: State = {
    showSidebar: true,
}

const defaultAction: AnyAction = {
    type: null,
}

export default function reducer(
    state: State = initialState, 
    action: AnyAction = defaultAction,
): State {
    switch (action.type) {
        case (TOGGLE_SIDEBAR): {
            return {
                ...state,
                showSidebar: !state.showSidebar,
            }
        }
        default: return state;
    }
}

export function toggleSidebar(): AnyAction {
    return { type: TOGGLE_SIDEBAR };
}
