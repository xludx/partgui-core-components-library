import { PartguiCoreComponentsLibraryPage } from './app.po';

describe('partgui-core-components-library App', () => {
  let page: PartguiCoreComponentsLibraryPage;

  beforeEach(() => {
    page = new PartguiCoreComponentsLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
