import { expect } from 'chai';

import { toTest, __RewireAPI__ as ToTestRewireAPI } from './toTest';

describe('Testing', () => {
  it("Should return 'a' without rewire.", () => {
    expect(toTest()).to.equal('abc');
  });

  it("Should return 'rewired' with rewire.", () => {
    ToTestRewireAPI.__Rewire__('testFunction', () => 'rewired');
    expect(toTest()).to.equal('rewired');
  });
});
