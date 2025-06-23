import {expect as expectchai} from 'chai';
import { LoginPage } from "../pageobjects/login.page";
import { InventoryPage } from "../pageobjects/inventory.page";
import loginData from "../data/loginData.json";



const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Login Page Suite', ()=>{
    it('Validate valid Login', async()=>{ 
        const {username, password} = loginData.validUser;
        await loginPage.open();
        await loginPage.login(username,password);

        expectchai(await inventoryPage.headerInventory.getText()).to.equal('Swag Labs');
        expect(await inventoryPage.headerInventory.getText()).toEqual('Swag Labs');
    });
});