import json
import fileinput
import subprocess

json_data=open("./source/_data/nav.json")
nav = json.load(json_data)
json_data.close()

string = "nav:\n"
string2 = "urls:\n"

for item in nav['nav']:
    string += "  " + item["link"] + ": " + item["url"] + "\n"
    string2 += "      - " + item["url"] + "\n"

#for line in fileinput.input("./themes/cactus/_config.yml", inplace=True):
#    print (line.replace("NAV_PLACEHOLDER", string),)
#for line in fileinput.input("./_config.yml", inplace=True):
#    print (line.replace("haha: URL_PLACEHOLDER", string2),)

text = open("./themes/cactus/_config.yml", "r").read()
text = text.replace("NAV_PLACEHOLDER", string) 
open("./themes/cactus/_config.yml", "w").write(text)

text = open("./_config.yml", "r").read()
text = text.replace("urls: URL_PLACEHOLDER", string2) 
open("./_config.yml", "w").write(text)