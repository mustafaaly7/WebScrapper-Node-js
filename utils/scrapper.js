import axios from "axios";
// import { Cheerio } from "cheerio";
import * as cheerio from 'cheerio';

const url1 = "https://dealsmall.pk/"

let productNames = []
let productPrices = []


const fetchUrl = async (url) => {
    const results = await axios.get(url)
    // console.log("results", results.te);

    return cheerio.load(results.data)
}

const getResults = async () => {
    const $ = await fetchUrl(url1)
    // console.log("$",$.text());

//defining the .classname and pushing it into our empty array using Jquery 
    $(".grid-product__title").each((index, element) => {
        productNames.push($(element).text())

    })

    //here we targeted with classname and html tag span using Jquery
    $(".price-regular span").each((index, element) => {
        productPrices.push($(element).text())

    })

    let merged = {}
    
    // productNames.forEach((names, i) => merged[names] = productPrices[   i   ])

    const minLength = Math.min(productNames.length, productPrices.length); // to make one condition if we use operator it'll make it a truthy value

    //condtion to iterate both arrays and integrate into the single object with keys 
    for (let i = 0; i <= minLength; i++) {
        merged[`Product${i}`] = productNames[i]
        merged[`Price$${i}`] = productPrices[i]
    }


    console.log("Merged Data =>", merged);

return merged
}

export default getResults