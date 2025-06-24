export class LoginPage{

    private get userName(){
        return $('#user-name');
    }

    private get password(){
        return $('#password');
    }

    private get loginButton(){
        return $('#login-button');
    }
    public get errorLoginMessage(){
        return $("h3[data-test='error']");
    }



    async open(){
        await browser.url('/');
    }

    async login(username:string, password:string){
        await this.userName.waitForDisplayed();
        await this.userName.setValue(username);

        await this.password.waitForDisplayed();
        await this.password.setValue(password);

        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }
}