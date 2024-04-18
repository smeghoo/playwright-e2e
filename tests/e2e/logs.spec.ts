import { test } from "@playwright/test";
import { LoginPage } from "../../pages/Login";
import { TableLogs } from "../../pages/Logs";
//import { searchWebLogs } from "../../test-data/helper";

let loginPage: LoginPage;
let table: TableLogs;


//Test Suite
test.describe("Validate OpenDashboard Logs", () => {
  //Test Cases
  test("Query Logs", async ({ page }) => {
    
    loginPage = new LoginPage(page);
    table = new TableLogs(page);

    await loginPage.visit();
    await loginPage.login();
    await table.loadData();
    await table.navQuery();
    //await searchWebLogs(page);
    await table.commerceLogsCheck();
  });
});
