import os
from mal import *
anime = AnimeSearch("3d kanojo")
_id = []
counter = 0

folder_path = "C:/Users/Lin/Documents/Projects/AnimeWorld/Images"

# for filename in os.listdir(folder_path):
#     print("current file: " + filename)
#     counter += 1
#     if counter < 10:
#         pass

#     else:
#         if os.path.isfile(os.path.join(folder_path, filename)):
#             name, extension = os.path.splitext(filename + " Season 1")

#             anime = AnimeSearch(name)
            
#             print(anime.results[0].title)
#             print(anime.results[1].title)
            
#             words = name.split('_')
#             new_list = []

#             # check if all the words are in the title
#             word_counter = 0
#             for word in words:
#                 if word in anime.results[0].title.lower():
#                     word_counter += 1
#                     if word_counter == len(words):
#                         new_list.append(anime.results[0].title)
                
#                 if word in anime.results[1].title.lower():
#                     word_counter += 1
#                     if word_counter == len(words):
#                         new_list.append(anime.results[1].title)
                
            
#             if len(new_list) == 0:
            
#                 if len(anime.results[0].title) < len(anime.results[1].title):
#                     new_list.append(anime.results[0].title)
#                 else:
#                     new_list.append(anime.results[1].title)

#             else:

#                 print("new list: " + str(new_list))
             
#             print("new list: " + str(new_list[0]) + '\n')

#             # _id.append(anime.results[0].mal_id)
#             # print(anime.results[0].mal_id)
    

#     if counter == 20:
#         break

def handleSentence(sentence):

    sentence = sentence.replace("'", "\\'")
    sentence = sentence.replace('"', '\\"')
    string = '"' + sentence + '"'
    return string

def getAnimeInfo(id, anime_url, anime_title, anime_score, anime_episodes, anime_genres, anime_synopsis, image, image_name, extension):

    new_description = handleSentence(anime_synopsis)

    with open("C:/Users/Lin/Documents/Projects/AnimeWorld/anime.txt", "a") as f:
        f.write("{" + "\n")
        f.write(    "id: " + str(id) + "," + "\n")
        f.write(    "url: " + "'" + str(anime_url) + "'" + "," + "\n")
        f.write(    "name: " + "'" + str(anime_title) + "'" + "," + "\n")
        f.write(    "link: " + "'" + './images/' + str(image) + "'" + "," + "\n")
        f.write(    "gif: " + "'" + './gifs/' + str(image_name) + '.gif' + "'" + "," + "\n")
        f.write(    "score: " + str(anime_score) + "," + "\n")
        f.write(    "episodes: " + str(anime_episodes) + "," + "\n")
        f.write(    "genres: " + str(anime_genres) + "," + "\n")
        f.write(    "description: " + new_description + "\n")
        f.write("}," + "\n")

# id_list = [36793, 23755, 38735, 41457, 34984, 22199, 41433, 9989, 16498, 9919]
#id_list = [36882, 24833, 37525, 36649, 43814, 18153, 269, 31478, 14345, 44511]
#id_list = [35507, 1818, 1575, 1, 2025, 35849, 1535, 38000, 6467, 235, 6033]
#id_list = [48736, 38691, 226, 48316, 31043, 22043, 28977, 17895, 8425, 37105]
#id_list = [245, 10793, 20583, 263, 11061, 5231, 39017, 37497, 40748, 28623]
#id_list = [42544, 34933, 31798, 11887, 30831, 38080, 11771, 34599, 33487, 8460]
#id_list = [32182, 40911, 39535, 877, 1735, 1210, 18897, 21, 30276, 32729]
#id_list = [26243, 27775, 37779, 38101, 6213, 31414, 1604, 34279, 40839, 40392]
#id_list = [48414, 355, 35790, 2966, 50265, 9253, 47194, 41619, 23283, 22319]
#id_list = [41389, 40221, 32105, 37521, 33352, 35968, 14813, 32281, 250]

id_list = [36793, 23755, 38735, 41457, 34984, 22199, 41433, 9989, 16498, 9919,36882, 24833, 37525, 36649, 43814, 18153, 269, 31478, 14345, 44511,35507, 1818, 1575, 1, 2025, 35849, 1535, 38000, 6467, 235, 6033,48736, 38691, 226, 48316, 31043, 22043, 28977, 17895, 8425, 37105,245, 10793, 20583, 263, 11061, 5231, 39017, 37497, 40748, 28623,42544, 34933, 31798, 11887, 30831, 38080, 11771, 34599, 33487, 8460,32182, 40911, 39535, 877, 1735, 1210, 18897, 21, 30276, 32729,26243, 27775, 37779, 38101, 6213, 31414, 1604, 34279, 40839, 40392,48414, 355, 35790, 2966, 50265, 9253, 47194, 41619, 23283, 22319,41389, 40221, 32105, 37521, 33352, 35968, 14813, 32281, 250]

# inc = 9
key = 0
id = key

for i in id_list:
 
    id += 1
    if (id < 51):
        continue
    else:
        image = os.listdir("C:/Users/Lin/Documents/Projects/AnimeWorld/Images")[id - 1]
        image_name = image.split(".")[0]
        extension = image.split(".")[1]

        anime = Anime(i)
        getAnimeInfo(id, anime._url, anime.title, anime.score, anime.episodes, anime.genres, anime.synopsis, image, image_name ,extension)

    # if (id == key + inc):
    #     break




