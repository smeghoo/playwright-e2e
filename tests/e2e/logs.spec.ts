import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/Login'
import { LogsPage } from '../../pages/Logs'

//Test Suite
test.describe("Login Setup", () => {
    let loginPage: LoginPage
    let logsPage: LogsPage
    
    //Test Cases
  test("Sign In Flow", async ({page}) => {
    
     loginPage = new LoginPage(page)
     logsPage = new LogsPage(page)
     await loginPage.visit()
     await loginPage.login()
     await logsPage.loadData()
     await logsPage.navQuery()
     const table = page.locator('[data-test-subj="docTable"]')
     const headerRow = table.locator('[data-test-subj="docTableHeader"]')
     const headerField = table.locator('[data-test-subj="docTableHeaderField"]')
     const tableRow = table.locator('[data-test-subj="docTableRow"]')
     const tableRowField = table.locator('[data-test-subj="docTableField"]')

  // console.log(await headerRow.allTextContents())
     console.log(await tableRow.allTextContents())
  // console.log(await tableRowField.allTextContents())
  })
})
