import nightmare from 'nightmare';
import { APP_ROOT } from 'constants/app';

describe('Browser tests', () => {
  it('Home page', async () => {
    let page = nightmare().goto('http:localhost:3000');
    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain("React blog");
  });

  it('About page', async () => {
    let page = nightmare()
      .goto(APP_ROOT)
      .click(`a[href="/about"]`);

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Описание блога');
  });

  it('Contacts page', async () => {
    let page = nightmare()
      .goto(APP_ROOT)
      .click(`a[href="/contacts"]`);

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Обратная связь');
  });

  it('Create-post page', async () => {
    let page = nightmare()
      .goto(APP_ROOT)
      .click(`a[href="/create-post"]`);

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('Создание поста');
  });

  it('Edit post', async () => {
    let page = nightmare()
      .goto(APP_ROOT)
      .click('a[href="/posts/1/edit"]');

    let text = await page.evaluate(() => document.body.textContent).end();

    expect(text).toContain('post 2 (Predators)');
  });
});