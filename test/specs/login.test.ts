import {expect as expectchai} from 'chai';
import { LoginPage } from "../pageobjects/login.page";
import { InventoryPage } from "../pageobjects/inventory.page";



const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Login Page Suite', ()=>{
    it('Validate valid Login', async()=>{ 
        await loginPage.open();
        await loginPage.login('standard_user','secret_sauce');

        expect(await inventoryPage.headerInventory.getText()).toEqual('Swag Labs');
    });
});