/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function(startUrl, htmlParser, res=[]) {
    res.push(startUrl)
    let websites = htmlParser.getUrls(startUrl) // ['website1', 'website2']
    for(let website of websites){
        if(getHostName(startUrl) === getHostName(website) && !res.includes(website)){
            crawl(website, htmlParser, res)
        }
    }
    return res
};

const getHostName = (url) =>{
    let hostname = url.split("/")
    return hostname[2]
}