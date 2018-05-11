import json
import fileinput

json_data=open("./source/_data/nav.json")
nav = json.load(json_data)
json_data.close()

string = "nav:\n"
string2 = "urls:\n"

for item in nav['nav']:
    string += "  " + item["link"] + ": " + item["url"] + "\n"
    string2 += "      - " + item["url"] + "\n"

for line in fileinput.input("./themes/cactus/_config.yml", inplace=True):
    print (line.replace("NAV_PLACEHOLDER", string))
for line in fileinput.input("./_config.yml", inplace=True):
    print (line.replace("URL_PLACEHOLDER", string2))