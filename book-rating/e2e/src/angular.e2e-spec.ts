import { $, browser } from 'protractor';

describe('Angular Buch', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should be called Angular', () => {

    browser.get('https://www.dpunkt.de/buecher/13231.html');

    const heading = $('.detail_title').getText();

    expect(heading).toContain('Angular');
    expect(heading).not.toContain('AngularJS');

  });

  afterAll(() => browser.waitForAngularEnabled(true));
});
