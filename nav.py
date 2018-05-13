import json
import yaml
import fileinput
import subprocess

json_data=open("./source/_data/nav.json")
nav = json.load(json_data)
json_data.close()

yml=open("./_config.ejs")
conf = yaml.load(yml)
yml.close()

string = "nav:\n"
string2 = "urls:\n"

for item in nav['nav']:
    string += "  " + item["link"] + ": " + item["url"] + "\n"
    string2 += "      - " + item["url"] + "\n"

text = open("./themes/cactus/_config.yml", "r").read()
text = text.replace("NAV_PLACEHOLDER", string) 
open("./themes/cactus/_config.yml", "w").write(text)

text = open("./_config.yml", "r").read()
text = text.replace("urls: URL_PLACEHOLDER", string2) 
open("./_config.yml", "w").write(text)

text = open("./themes/cactus/layout/index.ejs", "r").read()
text = text.replace("URL_PLACEHOLDER", conf['url']) 
open("./themes/cactus/layout/index.ejs", "w").write(text)
