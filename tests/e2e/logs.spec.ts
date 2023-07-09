import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/Logs'

//Test Suite
test.describe("Login Setup", () => {
    let loginPage: LoginPage
    
    //Test Cases
  test("Sign In Flow", async ({page}) => {
    
     loginPage = new LoginPage(page)
     await loginPage.visit()
     await loginPage.login()
     await loginPage.loadData()
})
})
