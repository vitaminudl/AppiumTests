exports.config = {
    runner: 'local',
    port: 4723,
    host: '127.0.0.1',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    sync: true,
    specs: [
        //'./PlayWithMocha.js'
        "./api/setValue.js"
    ],
    capabilities:[{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "emulator-5554",
        "appPackage": "com.ru.verniy",
        "appActivity": ".MainActivity"
    }]
}