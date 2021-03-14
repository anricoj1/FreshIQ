import pyodbc
import json
import pandas as pd


with open('./collections/results.json') as responses:
    thisdata = json.load(responses)

    for this in thisdata:
        with open(this['path']) as path:
            thispath = json.load(path)

        df = pd.DataFrame(thispath)


        df.to_csv('./csvs/{}.csv'.format(this['path'][8:len(this['path']) - 5]), index=False)


print('JSON to CSV Complete')

