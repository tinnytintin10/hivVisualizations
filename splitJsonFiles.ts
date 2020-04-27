//author : tinsae.e


const fs = require('fs') // get filesystem module 

//this for-loop will parse through the 3 json files and sperate them out by country, gender(where applicable, look below), year, and treatment (where applicable, look below)

let fileName: string
for (let i: number = 0; i < 3; i++) {
    if (i == 0) {
        fileName = './json_data/hivPrevalencePerCountry.json';
        let path : string = './json_data/hivprevalencepercountry/'
        let obj: JSON = JSON.parse(fs.readFileSync(fileName).toString())
        obj.fact.forEach(element => {
            let newJsonObj = {
                country: element.dims.COUNTRY,
                year: element.dims.YEAR,
                title: element.dims.GHO,
                residence: element.dims.RESIDENCEAREATYPE,
                sex: element.dims.SEX,
                value: element.Value
            }

            //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

            fs.writeFile(path + newJsonObj.country + newJsonObj.residence + newJsonObj.sex + '.json', JSON.stringify(newJsonObj), function (err) {
                if (err) throw err;
            });

        });
        console.log('[+] Hiv Prevalence Per Country Data Outputted here: ' + path )
    }
    else if (i == 1) {
        fileName = "./json_data/suicideRatesPerCountry.json"
        let path : string = './json_data/suicideratespercountry/'
        let obj: JSON = JSON.parse(fs.readFileSync(fileName).toString())
        obj.fact.forEach(element => {
            let newJsonObj = {
                country: element.dims.COUNTRY,
                sex: element.dims.SEX,
                year: element.dims.YEAR,
                title: element.dims.GHO,
                value: element.Value
            }

            //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

            fs.writeFile(path + newJsonObj.country + newJsonObj.sex + newJsonObj.year + '.json', JSON.stringify(newJsonObj), function (err) {
                if (err) throw err;
            });

        });
        console.log('[+] Suicide Per Country Data Outputted here: ' + path)
    }
    else {
        fileName = "./json_data/treatmentAvailabilityPerCountry.json"
        let path : string = './json_data/hivtreatmentavailabilitypercountry/'
        let obj: JSON = JSON.parse(fs.readFileSync(fileName).toString())
        obj.fact.forEach(element => {
            let newJsonObj = {
                country: element.dims.COUNTRY,
                year: element.dims.YEAR,
                title: element.dims.GHO,
                treatment : element.dims.RSUD_HIVHEP_CT,
                value: element.Value
            }

            //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

            fs.writeFile(path + newJsonObj.country + newJsonObj.treatment + newJsonObj.year + '.json', JSON.stringify(newJsonObj), function (err) {
                if (err) throw err;
            });

        });

        console.log('[+] Suicide Per Country Data Outputted here: ' + path)

    }

}
console.log('[+] done')








