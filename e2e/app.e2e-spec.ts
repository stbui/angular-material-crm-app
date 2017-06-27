import { AngularMaterial2CrmAppPage } from './app.po';

describe('angular-material2-crm-app App', () => {
  let page: AngularMaterial2CrmAppPage;

  beforeEach(() => {
    page = new AngularMaterial2CrmAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
