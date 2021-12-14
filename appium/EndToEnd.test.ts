const wdio = require('webdriverio');

jest.setTimeout(60000);

const capabilities = {
  platformName: 'android',
  platformVersion: '11',
  deviceName: 'Nexus5',
  automationName: 'UiAutomator2',
  pkg: 'host.exp.exponent',
  intentAction: 'android.intent.action.VIEW',
  activity: 'host.exp.exponent.experience.HomeActivity',
  appWaitForLaunch: true,
};

const options = {
  path: '/wd/hub/',
  port: 4723,
};

async function launchExpoAndroid() {
  const client = await wdio.remote({ ...options, capabilities });
  // await client.closeApp();
  await client.startActivity(capabilities.pkg, capabilities.activity); //Reload to force update
  await client.execute('mobile:deepLink', {
    url: 'exp://localhost:19000',
    package: capabilities.pkg,
  });
  return client;
}

describe('Main features', () => {
  let client;
  const ITEM_TEST = 'Tomate';

  beforeAll(async () => {
    client = await launchExpoAndroid();
  });

  afterAll(async () => {
    if (client) {
      await client.deleteSession();
    }
  });

  it('should add item to the list', async () => {
    const tabLista = await client.$('~tabBarLista');
    await tabLista.waitForExist({ timeout: 10000 });
    expect(tabLista).toBeTruthy();
    await tabLista.click();

    const inputItem = await client.$('~inputItem');
    await inputItem.waitForExist();
    expect(inputItem).toBeTruthy();
    await inputItem.setValue(ITEM_TEST);

    const buttonAddItem = await client.$('~buttonAddItem');
    expect(buttonAddItem).toBeTruthy();
    await buttonAddItem.click();

    const listItem = await client.$(`~listItem${ITEM_TEST}`);
    await listItem.waitForExist();
    expect(listItem).toBeTruthy();
  });

  it('should not add empty item', async () => {
    const inputItem = await client.$('~inputItem');
    await inputItem.setValue('');

    const buttonAddItem = await client.$('~buttonAddItem');
    await buttonAddItem.click();

    const listItem = await client.$$(`~oneListItem`);
    const qtdItems = listItem.length;
    expect(qtdItems).toBe(1);
  });

  it('should not add duplicate items', async () => {
    const inputItem = await client.$('~inputItem');
    await inputItem.setValue(ITEM_TEST);

    const buttonAddItem = await client.$('~buttonAddItem');
    await buttonAddItem.click();

    const listItem = await client.$$(`~oneListItem`);
    const qtdItems = listItem.length;
    expect(qtdItems).toBe(1);
  });

  it('should pick an Item from the list', async () => {
    const tabEscolha = await client.$('~tabBarEscolha');
    await tabEscolha.waitForExist();
    expect(tabEscolha).toBeTruthy();
    await tabEscolha.click();

    const botaoEscolher = await client.$('~buttonChoose');
    await botaoEscolher.waitForExist();
    expect(botaoEscolher).toBeTruthy();
    await botaoEscolher.click();

    const chosenItem = await client.$(`~chosen${ITEM_TEST}`);
    await chosenItem.waitForExist({ timeout: 5000 });
    expect(chosenItem).toBeTruthy();
  });

  it('should delete an Item', async () => {
    const tabLista = await client.$('~tabBarLista');
    await tabLista.click();

    const deleteItem = await client.$(`~iconDelete${ITEM_TEST}`);
    await deleteItem.click();
    await deleteItem.waitForExist({ reverse: true });

    const listItem = await client.$$(`~oneListItem`);
    const qtdItems = listItem.length;
    expect(qtdItems).toBe(0);
  });
});
