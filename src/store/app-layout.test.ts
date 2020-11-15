import { expect } from "chai";

import reducer, {
    toggleSidebar,
    initialState,
} from './app-layout';

describe('App Layout Reducer', () => {
    describe('Toggle Sidebar Action', () => {
        it('should toggle sidebar', () => {
            expect(reducer(initialState, toggleSidebar())).to.be.equal({
                showSidebar: false,
            });
        });
    })
});
