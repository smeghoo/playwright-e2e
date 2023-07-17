import { test, expect } from "@playwright/test"
import { LoginPage } from "../../pages/Login"
import { LogsPage } from "../../pages/Logs"
import { searchWebLogs } from "../../test-data/helper"

let loginPage: LoginPage
let logsPage : LogsPage

//Test Suite
test.describe("Validate OpenDashboard Logs", () => {
 
  //Test Cases
  test("Query Logs", async ({ page }) => {
    loginPage = new LoginPage(page)
    logsPage = new LogsPage(page)
    await loginPage.visit()
    await loginPage.login()
    await logsPage.loadData()
    await logsPage.navQuery()
    await searchWebLogs(page)
  })
})
