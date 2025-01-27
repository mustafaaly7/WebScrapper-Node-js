import axios from "axios";
// import { Cheerio } from "cheerio";
import * as cheerio from 'cheerio';

const url1 ="https://dealsmall.pk/"

let productNames =[]
let productPrices=[]


const fetchUrl =async(url)=>{
const results = await axios.get(url)
// console.log("results", results.te);

return cheerio.load(results.data)
}

const getResults= async()=>{
const $ = await fetchUrl(url1)
// console.log("$",$.text());

$(".grid-product__title").each((index,element)=>{
    productNames.push($(element).text())
    
})
$(".money").each((index,element)=>{
productPrices.push($(element).text())

})
console.log("PRODUCT NAMES => ", productNames);
console.log("Prices =>" , productPrices);


}

export default getResults