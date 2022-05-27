describe('Learning WebDriverIO aPI', function () {
    it('should input username and password OK', function () {

        const LOGIN_ICON_HOME_SCREEN = '~show_qr_button'
        //const EMAIL_TXT_FIELD = '~input-email'
        //const PASSWORD_TXT_FIELD = '~input-password'
        //const LOGIN_BTN = '~button-LOGIN'

        $(LOGIN_ICON_HOME_SCREEN).click()

        //$(EMAIL_TXT_FIELD).setValue('')

        //$(PASSWORD_TXT_FIELD).setValue('')

        //$(LOGIN_BTN).click()

        browser.pause(5000)

    });


});