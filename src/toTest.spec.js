import { expect } from 'chai';

import { toTest, __RewireAPI__ as ToTestRewireAPI } from './toTest';

describe('Testing', () => {
  it("Should return 'a' without rewire.", () => {
    expect(toTest()).to.equal('a');
  });

  it("Should return 'rewired' with rewire.", () => {
    ToTestRewireAPI.__Rewire__('testFunc', () => 'rewired');
    expect(toTest()).to.equal('rewired');
  });
});
