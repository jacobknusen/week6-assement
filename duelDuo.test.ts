
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking drawing button displays dibs', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.sleep(500);
    const choices = await driver.findElement(By.id('choices'));
    const displayed = await choices.isDisplayed();
    expect(displayed).toBe(true);
});

test('check that adding jduo displays id play duo ', async() =>{
    await driver.findElement(By.id("draw")).click()
    await driver.sleep(500);
    await driver.findElement(By.xpath('(//button[tesxt()="add to duo"])[1')).click();
  const playerDuo = await driver.findElement(By.id("player-duo"));
  const displayed = await playerDuo.isDisplayed();
  expect(displayed).toBe(true)
})