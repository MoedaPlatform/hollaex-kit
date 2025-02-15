// Comunicator
async function Communicator(){
	const { Builder, By, Key, until } = require('selenium-webdriver');
	const assert = require('assert');
	const path = require('path');
	const logPath = path.join(__dirname, './.log',path.basename(__filename,'.js'));
	const reportPath = path.join(__dirname, './../Report',path.dirname(__filename).replace(path.dirname(__dirname),''),path.basename(__filename,'.js'));
	const util = require ('../Utils/Utils.js');
	const { addConsoleHandler } = require('selenium-webdriver/lib/logging');
	util.makeReportDir(reportPath);
	util.makeReportDir(logPath);
	require('console-stamp')(console, { 
		format: ':date(yyyy/mm/dd HH:MM:ss.l)|' 
	} );
	require('dotenv').config({ path: path.resolve(__dirname, './../.env') });
	let communicator = process.env.COMMUNICATOR;
	let password = process.env.PASSWORD;
	let logInPage = process.env.LOGIN_PAGE;
	let step = util.getStep();
	util.logHolla(logPath)

	describe('communicator', function() {
		this.timeout(3000000);
		let driver;
	
		function sleep(ms) {
			return new Promise((resolve) => {
				setTimeout(resolve, ms);
			});
		}
		beforeEach(async function() {
			driver = await new Builder().forBrowser('chrome').build();
			driver.manage().window().maximize();

		});
		afterEach(async function() {
		//await driver.quit();
		});
		it('communicator', async function() {
			console.log('Communicator can access to website direct editing for content management and communications');
			console.log(' Test name: communicator');
			console.log(' |Step # | name | target | value');
		
		
			console.log(step++,'  | open | /login |');
			await driver.get(logInPage);
			await sleep(5000);
		

			console.log(step++,'  | type | name=email |'+communicator);
			await driver.findElement(By.name('email')).sendKeys(communicator);
		

			console.log(step++,'  | type | name=password | password');
			await driver.findElement(By.name('password')).sendKeys(password);
			await sleep(5000);
		
			console.log(step++,'  | click | css=.holla-button | ');
			await driver.findElement(By.css('.holla-button')).click();
			await sleep(5000);
		
			console.log(step++,'  | click | css=a > .pl-1 | ');
			await driver.findElement(By.css('a > .pl-1')).click();
			await sleep(5000);

			console.log(step++,'  | click | linkText=Users | ');
			await driver.findElement(By.linkText('Users')).click();
			await sleep(5000);
		
			console.log(step++,'  | click | id=rc-tabs-0-tab-userVerification | ');
			await driver.findElement(By.id('rc-tabs-0-tab-userVerification')).click();
			await sleep(5000);
		
			console.log(step++,'  | click | css=.ant-empty-description | ');
			await driver.findElement(By.css('.ant-empty-description')).click();
		
			console.log(step++,'  | assertText | css=.ant-empty-description | No Data');
			assert(await driver.findElement(By.css('.ant-empty-description')).getText() == 'No Data');
		
			console.log(step++,'  | click | id=rc-tabs-0-tab-users | ');
			await driver.findElement(By.id('rc-tabs-0-tab-users')).click();
			await sleep(5000);
		
			console.log(step++,' | assertText | xpath=//*[@id=\'rc-tabs-0-panel-users\']/div/div/div[2]/div/div/div/div/div/table/tbody/tr/td/div/p | No Data');
			assert(await driver.findElement(By.xpath('//*[@id="rc-tabs-0-panel-users"]/div/div/div[2]/div/div/div/div/div/table/tbody/tr/td/div/p')).getText() == 'No Data');
			util.takeHollashot(driver,reportPath,11);

			console.log(step++,'  | click | linkText=Financials | ');
			await driver.findElement(By.linkText('Financials')).click();

			console.log(step++,'  | click | css=.content-wrapper | ');
			await driver.findElement(By.css('.content-wrapper')).click();
			await sleep(5000);

			console.log(step++,'  | assertText | css=p | -Access denied: User is not authorized to access this endpoint-');
			assert(await driver.findElement(By.css('p')).getText() == '-Access denied: User is not authorized to access this endpoint-');
			util.takeHollashot(driver,reportPath,14);

			console.log(step++,'  | click | css=.ant-card-body > .ant-alert | ');
			await driver.findElement(By.css('.ant-card-body > .ant-alert')).click();
			await sleep(5000);
		
			console.log(step++,'  | assertText | css=.ant-card-body .ant-alert-description | Access denied: User is not authorized to access this endpoint');
			assert(await driver.findElement(By.css('.ant-card-body .ant-alert-description')).getText() == 'Access denied: User is not authorized to access this endpoint');
			util.takeHollashot(driver,reportPath,16);

			console.log(step++,'  | click | id=rc-tabs-1-tab-1 | ');
			await driver.findElement(By.id('rc-tabs-1-tab-1')).click();
			await sleep(5000);

			console.log(step++,' | click | xpath=//*[@id="rc-tabs-1-panel-1"]/div/div[1]/button | ');
			await driver.findElement(By.xpath('//*[@id="rc-tabs-1-panel-1"]/div/div[1]/button')).click();
			await sleep(5000);
			{
				console.log(step++,'  | assertText | css=.sub-title | Asset:');
				assert(await driver.findElement(By.css('.sub-title')).getText() == 'Asset:')
			
				console.log(step++,' | click | css=.btn-wrapper > .ant-btn:nth-child(1) |');
				await driver.findElement(By.css('.btn-wrapper > .ant-btn:nth-child(1)')).click();
				await sleep(3000);
			}
			console.log(step++,'  | click | id=rc-tabs-1-tab-2 | ');
			await driver.findElement(By.id('rc-tabs-1-tab-2')).click();
			await sleep(5000);
		
			console.log(step++,'  | click | css=.ant-alert-closable | ');
			await driver.findElement(By.css('.ant-alert-closable')).click();
		
			console.log(step++,'  | assertText | css=.ant-alert-closable > .ant-alert-message | Access denied: User is not authorized to access this endpoint');
			assert(await driver.findElement(By.css('.ant-alert-closable > .ant-alert-message')).getText() == 'Access denied: User is not authorized to access this endpoint');
			util.takeHollashot(driver,reportPath,22);

			console.log(step++,'  | click | id=rc-tabs-1-tab-3 | ');
			await driver.findElement(By.id('rc-tabs-1-tab-3')).click();
			await sleep(5000);
						
			console.log('should be fixed');
			console.log(step++,'  | assertText | xpath = //*[@id="rc-tabs-1-panel-3"]/div/div/div/div[2] | Access denied: User is not authorized to access this endpoint');
			console.log(await driver.findElement(By.xpath('//*[@id="rc-tabs-1-panel-3"]/div/div/div/div[2]')).getText() )
			assert(await driver.findElement(By.xpath('//*[@id="rc-tabs-1-panel-3"]/div/div/div/div[2]')).getText() == 'Access denied: User is not authorized to access this endpoint');
			util.takeHollashot(driver,reportPath,1);

			console.log('This is the EndOfTest');
		});
	});
}
describe('Main Test', function () {
 
	//Communicator();
})
module.exports.Communicator = Communicator;