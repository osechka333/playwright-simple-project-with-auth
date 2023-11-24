export default class BasePage {
    constructor(page, url,  container) {
        this._url = url
        this._container = container
        this._page = page
    }

   async navigate(){
       await this.open()
       await this._container.waitFor();
   }

   async open(){
       await this._page.goto(this._url)
   }
}