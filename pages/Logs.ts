import { expect, Locator, Page } from "@playwright/test"
import helpers from '../test-data/helper'
import dotenv from 'dotenv'
dotenv.config();


export class LoginPage {
    //Define Selectors
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly skipButton: Locator
    readonly globalSelect: Locator
    readonly confirmButton: Locator
    readonly addData: Locator
    readonly dataOption: Locator
    readonly viewData: Locator

    //Initialize Selector using constructor
    constructor(page: Page){
        this.page = page
        this.usernameInput = page.locator('[data-test-subj="user-name"]')
        this.passwordInput = page.locator('[data-test-subj="password"]')
        this.submitButton  = page.locator('[data-test-subj="submit"]')
        this.skipButton    = page.locator('[data-test-subj="skipWelcomeScreen"]')
        this.globalSelect  = page.locator('[for="global"]')
        this.confirmButton = page.locator('[data-test-subj="confirm"]')
        this.addData       = page.locator('[data-test-subj="homeSynopsisLinkhome_tutorial_directory"]')
        this.dataOption    = page.locator('[data-test-subj="addSampleDataSetecommerce"]')
        this.viewData      = page.locator('[data-test-subj="launchSampleDataSetecommerce"]')
    }

    /*Define login page methods*/

    //visits sign-in page
    async visit(){
        await this.page.goto(`${helpers.links.baseURL}`)
    }
    //logs into dashboard
    async login(){
        await this.usernameInput.fill(`${process.env.od_username}`)
        await this.passwordInput.fill(`${process.env.od_password}`)
        await this.submitButton.click()
        await this.skipButton.click()
        await this.globalSelect.click()
        await this.confirmButton.click()
    }

    async loadData(){
        await this.addData.click()
        await this.viewData.click()
    }
}
