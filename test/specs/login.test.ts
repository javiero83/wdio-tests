import {expect as expectchai} from 'chai';
import { LoginPage } from "../pageobjects/login.page";
import { InventoryPage } from "../pageobjects/inventory.page";
import loginData from "../data/loginData.json";
import {
  addEpic,
  addFeature,
  addStory,
  addSeverity,
  addOwner,
  addTag,
  addTestId,
  addIssue,
  addDescription,
  addLink
} from '@wdio/allure-reporter';



const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Login Page Suite', ()=>{
    it('Validate valid Login', async()=>{ 

        addOwner('QA Javier Ortiz');
        addDescription(`### Objective
            Validate user with valid credentials
            
            **Steps**
            1. Open URL
            2. Insert valid credentials
            3. Click Login button
            4. Validate correct header text in landing page`,'markdown');
        addEpic('Login Epic');
        addFeature('Auth');
        addStory('valid login');
        addSeverity('Critical Severity');
        addTestId('TC-001');
        addTag('smoke, regression');
        addIssue('Bug-123');
        addLink('https://url.com',"Login Page","custom");

        const {username, password} = loginData.validUser;
        await loginPage.open();
        await loginPage.login(username,password);

        expectchai(await inventoryPage.headerInventory.getText()).to.equal('Swag Labs');
        expect(await inventoryPage.headerInventory.getText()).toEqual('Swag Labs');
    });

    it('Login with Invalid user', async()=>{

        addOwner('QA Javier Ortiz Arboleya');

        const{username, password} = loginData.invalidUser;
        await loginPage.open();
        await loginPage.login(username, password);
        expect(loginPage.errorLoginMessage).toBeDisplayed();
        expectchai(await loginPage.errorLoginMessage.getText()).to.equal('Epic sadface: Username and password do not match any user in this service');
    })
});