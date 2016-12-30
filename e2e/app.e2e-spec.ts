import { TeacherPage } from './app.po';

describe('teacher App', function() {
  let page: TeacherPage;

  beforeEach(() => {
    page = new TeacherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
