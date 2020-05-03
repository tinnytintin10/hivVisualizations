import json
import os

# JSON files containg data from WHO
files_To_Parse = ['./json_data/hivPrevalencePerCountry.json',
                  './json_data/suicideRatesPerCountry.json', './json_data/treatmentAvailabilityPerCountry.json']


# for loop to parse the large JSON files and create a json file for every countries respective data

for file in files_To_Parse:
    with open(file, 'r') as document:
        master_JSON_File = json.load(document)
        for element in master_JSON_File['fact']:
            new_JSON_File = element['dims']
            #new_JSON_File['value'] = element['Value']
            if(file == './json_data/hivPrevalencePerCountry.json'):
                # convert string into a float
                new_JSON_File['value'] = float(element['Value'])
                with open(f'./json_data/hivprevalencepercountry/{element["dims"]["COUNTRY"] + element["dims"]["RESIDENCEAREATYPE"] + element["dims"]["SEX"]}.json', 'w') as jfile:
                    json.dump(new_JSON_File, jfile)
                    jfile.write('\n')
                    jfile.close()
            if(file == './json_data/suicideRatesPerCountry.json'):
                # convert string into a float
                new_JSON_File['value'] = float(element['Value'])
                with open(f'./json_data/suicideratespercountry/{element["dims"]["COUNTRY"] + element["dims"]["SEX"] + element["dims"]["YEAR"]}.json', 'w') as jfile:
                    json.dump(new_JSON_File, jfile)
                    jfile.write('\n')
                    jfile.close()
            if(file == './json_data/treatmentAvailabilityPerCountry.json'):
                new_JSON_File['treatment.type'] = new_JSON_File['RSUD_HIVHEP_CT']
                # RSUD_HIVHEP_CT is not a good name for a field so changing that around
                del new_JSON_File['RSUD_HIVHEP_CT']
                new_JSON_File['value'] = element['Value']
                with open(f'./json_data/hivtreatmentavailabilitypercountry/{element["dims"]["COUNTRY"] + element["dims"]["YEAR"] + new_JSON_File["treatment.type"]}.json', 'w') as jfile:
                    json.dump(new_JSON_File, jfile)
                    jfile.write('\n')
                    jfile.close()
        print(f'[+] Parsing done for -> {file}')
        document.close()

print('All Done')
