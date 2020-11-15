import { expect } from 'chai';
import {
  test
} from '../app-layout';

describe('App Layout', () => {
    describe('toggleSidebar', () => {
        it('should change sidebar show status', () => {
            expect(test.toggleSidebar(test.state)).to.deep.equal({
              showSidebar: false
            })
        });
    });
});
