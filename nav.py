import json
import yaml
import fileinput
import subprocess

json_data=open("./source/_data/nav.json")
nav = json.load(json_data)
json_data.close()

json_data=open("./source/_data/social.json")
nav2 = json.load(json_data)
json_data.close()

string = "nav:\n"
string2 = "urls:\n"
string3 = "social_links:\n"

for item in nav['nav']:
    string += "  " + item["link"] + ": " + item["url"] + "\n"
    string2 += "      - " + item["url"] + "\n"

for item in nav2['nav']:
    string3 += "  " + item["link"] + ": " + item["url"] + "\n"


text = open("./themes/cactus/_config.yml", "r").read()
text = text.replace("nav: NAV_PLACEHOLDER", string) 
open("./themes/cactus/_config.yml", "w").write(text)

text = open("./themes/cactus/_config.yml", "r").read()
text = text.replace("social_links: SOC_PLACEHOLDER", string3) 
open("./themes/cactus/_config.yml", "w").write(text)

text = open("./_config.yml", "r").read()
text = text.replace("urls: URL_PLACEHOLDER", string2) 
open("./_config.yml", "w").write(text)

yml=open("./_config.yml")
conf = yaml.load(yml)
yml.close()

text = open("./themes/cactus/layout/index.ejs", "r").read()
text = text.replace("URL_PLACEHOLDER", conf['url']) 
open("./themes/cactus/layout/index.ejs", "w").write(text)
