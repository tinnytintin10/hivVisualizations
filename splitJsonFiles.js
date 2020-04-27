//author : tinsae.e
var fs = require('fs'); // get filesystem module 
//this for-loop will parse through the 3 json files and sperate them out by country, gender(where applicable, look below), year, and treatment (where applicable, look below)
var fileName;
var _loop_1 = function (i) {
    if (i == 0) {
        fileName = './json_data/hivPrevalencePerCountry.json';
        var path_1 = './json_data/hivprevalencepercountry/';
        var obj = JSON.parse(fs.readFileSync(fileName).toString());
        obj.fact.forEach(function (element) {
            var newJsonObj = {
                country: element.dims.COUNTRY,
                year: element.dims.YEAR,
                title: element.dims.GHO,
                residence: element.dims.RESIDENCEAREATYPE,
                sex: element.dims.SEX,
                value: element.Value
            };
            //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
            fs.writeFile(path_1 + newJsonObj.country + newJsonObj.residence + newJsonObj.sex + '.json', JSON.stringify(newJsonObj), function (err) {
                if (err)
                    throw err;
            });
        });
        console.log('[+] Hiv Prevalence Per Country Data Outputted here: ' + path_1);
    }
    else if (i == 1) {
        fileName = "./json_data/suicideRatesPerCountry.json";
        var path_2 = './json_data/suicideratespercountry/';
        var obj = JSON.parse(fs.readFileSync(fileName).toString());
        obj.fact.forEach(function (element) {
            var newJsonObj = {
                country: element.dims.COUNTRY,
                sex: element.dims.SEX,
                year: element.dims.YEAR,
                title: element.dims.GHO,
                value: element.Value
            };
            //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
            fs.writeFile(path_2 + newJsonObj.country + newJsonObj.sex + newJsonObj.year + '.json', JSON.stringify(newJsonObj), function (err) {
                if (err)
                    throw err;
            });
        });
        console.log('[+] Suicide Per Country Data Outputted here: ' + path_2);
    }
    else {
        fileName = "./json_data/treatmentAvailabilityPerCountry.json";
        var path_3 = './json_data/hivtreatmentavailabilitypercountry/';
        var obj = JSON.parse(fs.readFileSync(fileName).toString());
        obj.fact.forEach(function (element) {
            var newJsonObj = {
                country: element.dims.COUNTRY,
                year: element.dims.YEAR,
                title: element.dims.GHO,
                treatment: element.dims.RSUD_HIVHEP_CT,
                value: element.Value
            };
            //The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
            fs.writeFile(path_3 + newJsonObj.country + newJsonObj.treatment + newJsonObj.year + '.json', JSON.stringify(newJsonObj), function (err) {
                if (err)
                    throw err;
            });
        });
        console.log('[+] Suicide Per Country Data Outputted here: ' + path_3);
    }
};
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
console.log('[+] done');
