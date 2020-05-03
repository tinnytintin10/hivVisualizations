# 248 Group Project: Mental health and its association with HIV


## Purpose 

The purpose of these visualisations was to determine whether there was a relationship between HIV and mental health. We used data provided by the [WHO](https://apps.who.int/gho/data/node.imr#ndx-H) on HIV and Mental Health (specifically suicide rates). 

## Data Analysis 
To analyze this data, we used the [`Elastic Stack`](https://www.elastic.co/elastic-stack), formerly known as the `ELK` stack. The `Elastic Search` and `Kibana` binaries can be downloaded from the link above to replicate this work. In our cluster, we used three indices and three separate index patterns (we can use `hiv_*` to combine the two HIV indices) to organize our data. 

`hiv_prev` - an index containing the data on hiv prevalence 
`hiv_treat` - an index containing the data on HIV treatment availability 
`suicide` - an index containing the data on suicide rates 

If you would like to use the same instance as we are using, you may do so by downloading the binaries from [our S3 bucket](https://hivvisulizations.s3.amazonaws.com/Elastic+Stack/Elastic+Stack.zip). For these binaries, the only thing you'll need to do is launch them `./elasticsearch-7.6.2/bin/elasticsearch`  and  `./kibana-7.6.2-darwin-x86_64 2/bin/kibana`, and they will have these indices loaded and the dashboards pre-built- more detailed instructions are below in the "Explore our Dashboards on your own" section. 

## Data manipulation 

The data we got from the `WHO` was contained in one JSON file. This file had within it one object that had nested within it hundreds and, in the case of suicide data thousands, of objects. 

`jsonC.py` is a script that will parse through these three files we got from WHO:
`hivPrevalencePerCountry.json`
`suicideRatesPerCountry.json`
`treatmentAvailabilityPerCountry.json`

The script will parse through these files and output individual JSON files that contain the prevalence, suicide and treatment data in for every country, gender, etc.. on its own file in the appropriate folder in the `json_data` folder. 

## Data Ingestion 

These individual files are then ingested by `Filebeat` and indexed into the specified index in `Elasticsearch.` Currently unable to specify multiple inputs in the `filebeats.yml` config file with multiple indexing targets.  We have created [this issue](https://github.com/tinnytintin10/hivVisualizations/issues/1) to explore this issue further. The current workaround is to ingest each folder one at a time by updating the config file for that respective folder and desired index name. 

You would like to use our filebeat, we have included it in the `json_data` folder. 

## Issues 

If you run into any issues getting this running on your device - please cut an issue in this repo with the details and we will assist you. 

## Explore our Dashboards on your own  

1. Download our modified `Elasticsearch` and `Kibana` binaries from [here](https://hivvisulizations.s3.amazonaws.com/Elastic+Stack/Elastic+Stack.zip)

2. After decompressing the file you downloaded, open a terminal, and navigate to where you downloaded the above folder. Once in the `Elastic Stack` folder, navigate into the `bin` folder in the `elasticsearch` folder. Once there, you can start elastic search with this command. `./elasticsearch`

3. Open another terminal instance and navigate again to the `Elastic Stack` folder. This time, go into the `bin` folder of the `kibana` folder and start kibana with this command `./kibana` 

4. Make sure to leave these processes running in the background. 

5. Kibana will give you a link to where the server is running (usually on port 5601) `http://localhost:5601` - navigate there with your browser. 

6. Once there you can access the dashboards following the screenshots below 

<img width="1679" alt="Screen Shot 2020-05-03 at 1 50 55 PM" src="https://user-images.githubusercontent.com/53792284/80921616-3c2c0880-8d45-11ea-9c57-7d5ffdce1d9c.png">

Then click on any of the dashboards below to view them:

<img width="1680" alt="Screen Shot 2020-05-03 at 1 52 33 PM" src="https://user-images.githubusercontent.com/53792284/80921643-709fc480-8d45-11ea-9243-7fbd127e79d2.png">

For further help in using and navigating Kibana, please refer to the [Kibana documentation](https://www.elastic.co/guide/en/kibana/7.6/index.html). 


**These binaries are for macOS** 
