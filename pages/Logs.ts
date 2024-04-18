import { expect, Locator, Page } from "@playwright/test"

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export class TableLogs {
    //Define Selectors
    readonly page: Page
    readonly addData: Locator
    readonly dataOption: Locator
    readonly viewData: Locator
    readonly toggleNav: Locator
    readonly discoverBoard: Locator
    readonly togCategory: Locator
    readonly togFname: Locator
    readonly togleId: Locator
    readonly togMail: Locator
    readonly mainTable: Locator
    readonly tableRow: Locator
    readonly togGender: Locator
    

    //Initialize Selector using constructor
    constructor(page: Page){
        this.page = page
        this.addData       = page.locator('[data-test-subj="homeSynopsisLinkhome_tutorial_directory"]')
        this.dataOption    = page.locator('[data-test-subj="addSampleDataSetecommerce"]')
        this.viewData      = page.locator('[data-test-subj="launchSampleDataSetlogs"]')
        this.toggleNav     = page.locator('[data-test-subj="toggleNavButton"]')
        this.discoverBoard = page.locator('[title="Discover"]')
        this.togCategory   = page.locator('[data-test-subj="fieldToggle-category"]')
        this.togFname      = page.locator('[data-test-subj="fieldToggle-customer_first_name"]')
        this.togleId       = page.locator('[data-test-subj="fieldToggle-_id"]')
        this.togMail       = page.locator('[data-test-subj="fieldToggle-email"]')
        this.mainTable     = page.locator('[data-test-subj="docTable"]')
        this.togGender     = page.locator('[data-test-subj="fieldToggle-customer_gender"]')
        this.tableRow      = page.locator('[data-test-subj="docTableRow"]')
        
    }

    /*Define logs page methods*/

   //Loads a Sample Dashboard Data Collection
    async loadData(){
        await this.addData.click()
    //  await this.dataOption.click()  ---Uncomment line for first time use---
        await this.viewData.click()
    }
   //Navigates to 'Discover' search for querying log tables
    async navQuery(){
        await this.toggleNav.click()
        await this.discoverBoard.waitFor({state: 'visible'})
        await this.discoverBoard.click()
        await this.mainTable.waitFor({state: 'visible'})
        await this.togCategory.click()
        await this.togFname.click()
        await this.togleId.click()
        await this.togMail.click()
        await this.togGender.click()
    }

    async verifyEntries(){
        await this.mainTable.waitFor({state: 'visible'})
        await expect (this.mainTable).toContainText('enterprise')
    }

    async commerceLogsCheck(){
      await this.mainTable.waitFor({state: 'visible'})
            
            for (let i = 0; i < await this.tableRow.count(); i++) {
              const row = this.tableRow.nth(i)
              const data = row.locator("td")
              for (let j = 0; j < await data.count(); j++) {
                const conA = await data.nth(j).textContent() == 'FEMALE'
                const conB = await data.nth(j).textContent() == 'MALE'
                if (conA || conB) {
                  for (let k = 0; k < await data.count(); k++) {
                    const stat1 = await data.nth(k).textContent() == 'yasmine@roberson-family.zzz'
                    const stat2 = await data.nth(k).textContent() == 'thad@padilla-family.zzz'
                    if(stat1){
                      console.log(stat1);
                    }
                    if(stat2){
                      console.log(stat2);
                    }
                      /*
                    if(stat2){
                      await expect(data.nth(k)).not.toContainText('404')
                      }*/
                    }
                    }
                    else{
                      console.log('found nothing')
                    }
                  }
                }
              }
    }
