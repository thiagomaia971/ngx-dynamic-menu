import { MenuDinamicoPage } from './app.po';

describe('menu-dinamico App', function() {
  let page: MenuDinamicoPage;

  beforeEach(() => {
    page = new MenuDinamicoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
