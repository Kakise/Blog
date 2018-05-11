import json
import fileinput

json_data=open("./source/_data/nav.json")
nav = json.load(json_data)
json_data.close()

string = "nav:\n"

for item in nav['nav']:
    string += "  " + item["link"] + ": " + item["url"] + "\n"

for line in fileinput.input("./themes/cactus/_config.yml", inplace=True):
    print (line.replace("NAV_PLACEHOLDER", string),)