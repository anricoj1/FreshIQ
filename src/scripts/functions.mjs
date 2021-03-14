// import filesystem and xml2json
import xml2js from 'xml2js';
import fs from 'fs';
import Product from './Product.mjs';

// create a new Parser
const xml2json = new xml2js.Parser();


// parse xml to file
export const writeResponse = (data, name, fileName) => {
    xml2json.parseString(data, (err, result) => {
        var arr = [];
        var envelope = result['soap:Envelope']['soap:Body'][0].DoEntitySearchResponse[0].DoEntitySearchResult[0].Prices[0].WsPriceInfo;

        for (var i = 0; i < envelope.length; i++) { // array of products
            arr.push(new Product(
                findStoreNumber(name),
                envelope[i].UpcNum.toString(),
                convertDate(envelope[i].RetailPriceEffectiveDate),
                convertDate(envelope[i].RetailPriceExpirationDate),
                envelope[i].UnitRetailPriceValue.toString().substring(0, 4),
                `${name} Price Zone`
            ));
        }

        fs.writeFile(fileName, JSON.stringify(arr), (err) => { //write to file
            err ? console.log(err) : console.log('Successfully Wrote To File')
        });

    });
    return;
}


// find a store number based off name
const findStoreNumber = (name) => {
    if (name === 'Default') return 0;
    if (name === 'Norwalk') return 1;
    if (name === 'Danbury') return 2;
    if (name === 'Yonkers') return 3;
    if (name === 'Farmingdale') return 4;
    if (name === 'Newington') return 5;
    if (name === 'East Meadow') return 6;
    if (name === 'Paramus') return 7;
}


// convert date to yyyy-mm-dd
const convertDate = (date) => {
    return date.toString().substring(0, 10);
}


