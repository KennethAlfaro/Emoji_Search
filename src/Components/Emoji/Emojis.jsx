export class Emoji {
    constructor (title, symbol, keywords) {
        this.title = title
        this.symbol = symbol
        this.keywords = keywords
    }
    getTitle(){return this.title}
    setTitle(title){this.title = title}
    getSymbol(){return this.symbol}
    setSymbol(symbol){this.symbol = symbol}
    getKeywords(){return this.keywords}
    setKeywords(k){this.keywords = k}
}