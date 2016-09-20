import { DoxCommonPage } from './app.po';

describe('dox-common App', function() {
  let page: DoxCommonPage;

  beforeEach(() => {
    page = new DoxCommonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
