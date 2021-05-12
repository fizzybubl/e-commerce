import glob
import os
import numpy as np
import random
import json

images = ["https://images.pexels.com/photos/1866149/pexels-ph…66149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/276583/pexels-pho…76583.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/3757055/pexels-ph…jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/276566/pexels-pho…76566.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/2440471/pexels-ph…jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/1571457/pexels-ph…71457.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/1571460/pexels-ph…71460.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/1743227/pexels-ph…43227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/1457842/pexels-ph…57842.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/276528/pexels-pho…76528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/6492388/pexels-ph…jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/6489121/pexels-ph…jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/1669799/pexels-ph…69799.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/6492396/pexels-ph…92396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/3209045/pexels-ph…09045.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/1918291/pexels-ph…18291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/3637742/pexels-ph…37742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", "https://images.pexels.com/photos/3773570/pexels-ph…3773570.png?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/6316065/pexels-ph…316065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/6207822/pexels-ph…207822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/2029694/pexels-ph…029694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/6438759/pexels-ph…438759.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/6316069/pexels-ph…316069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/6238614/pexels-ph…238614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://images.pexels.com/photos/6438748/pexels-ph…438748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"]

imagesObj = []
categories = ["kitchen","bathroom","office","bedroom","living room"]
companies = ["Mobexpert","Staer","Lems","Jysk","Ikea"]

for (index, image) in enumerate(images):
    currentObj = {"image":image,
    "name":f"item-{index}",
    "price":random.randint(300,3200),
    "id":np.random.random() * 3000000,
    "company":companies[random.randint(0,len(companies) - 1)],
    "category":categories[random.randint(0,len(categories) - 1)],
    "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, vero vitae modi mollitia tempore laudantium fugiat dignissimos voluptate. Enim natus reiciendis repellat officiis labore sint maiores cum dolorem ex voluptate!"}
    imagesObj.append(currentObj)

with open("data.txt",'w') as outfile:
    json.dump(imagesObj,outfile)

