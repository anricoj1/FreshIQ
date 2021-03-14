import pyodbc
import json
import os
from dotenv import load_dotenv
load_dotenv()


connection = pyodbc.connect( # db connection init
    'Driver={'+ os.environ.get("Driver") +'};'
    'Server='+ os.environ.get("Server")+';'
    'Database=' + os.environ.get("Database")+';'
    'Trusted_Connection=' + os.environ.get("Trusted_Connection")+';'
)



cursor = connection.cursor()


cursor.execute('DELETE FROM freshIQTest')
cursor.commit()

print('Delete From Complete')

with open('./collections/results.json') as responses:
    thisdata = json.load(responses)

    for this in thisdata:
        with open(this['path']) as path:
            thispath = json.load(path)
            print('Working on: ', this['path'])

            for i in thispath:
                store_number = str(i['store_number'])
                item_code = str(i['item_code'])
                effective = str(i['effective_date'])
                expire = str(i['expiration_date'])
                price = str(i['price'])
                zone = str(i['price_zone'])

                insert = "INSERT INTO [freshIQTest] (store_numnber, item_code, effective_date, expiration_date, price, price_zone) VALUES (?, ?, ?, ?, ?, ?)"

                cursor.execute(insert, [store_number, item_code, effective, expire, price[0:len(price) - 2], zone])

                cursor.commit()


print('Ran Query Successfully')


        
        