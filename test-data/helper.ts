import { test, expect } from "@playwright/test"

// variables
const helpers = {
  links: {
    baseURL: "https://snm-cloud.site:5601/",
    boardURL: "https://snm-cloud.site:5601/goto/6dfc0472df204ffbca46dc415fe81668?security_tenant=global"
  }, 
}
export default helpers


/*
export async function searchWebLogs(page) {
  const table = page.locator('[data-test-subj="docTable"]')
  const tableRow = table.locator('[data-test-subj="docTableRow"]')
  //For Loops Begins Rows Traversal
  for (let i = 0; i < (await tableRow.count()); i++) {
    const row = tableRow.nth(i)
    const data = row.locator("td")
    // For Loops Begins to at td elements with each row (rowByRow)
    for (let j = 0; j < (await data.count()); j++) {
      //Checking each td(j) element in row (i)
      const conA = (await data.nth(j).textContent()) == 'Yasmine'
      const conB = (await data.nth(j).textContent()) == 'Elyssa'
      if (conA || conB) {
        // td(j) element matches - then starts another check in same row for td(k)
        for (let k = 0; k < (await data.count()); k++) {
          if ((await data.nth(k).textContent()) == "FEMALE") {
            console.log(await row.allTextContents())
          }
        }
      }
    }
  }
}
*/