import { newE2EPage } from '@stencil/core/testing';

describe('amplify-radio-button:', () => {
  it('should render a amplify-radio-button', async () => {
    const page = await newE2EPage();
    await page.setContent(`<amplify-radio-button label="TJ"></amplify-radio-button>`);

    const el = await page.find('amplify-radio-button');
    expect(el).not.toBeNull();

    const screenshot = await page.compareScreenshot('amplify-radio-button', { fullPage: true });
    expect(screenshot).toMatchScreenshot({ allowableMismatchedPixels: 10 });
  });
});