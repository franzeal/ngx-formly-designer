import { NgFormlyDesignerPage } from './app.po';

describe('ng-formly-designer App', () => {
  let page: NgFormlyDesignerPage;

  beforeEach(() => {
    page = new NgFormlyDesignerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
