import nltk


#downloading words corpus
nltk.download("words")

#frequency distribution of given letters
puzzle_letters = nltk.FreqDist('zgnthbiompdauwye')

#reading wordlist corpus
wordlist = nltk.corpus.words.words()

temp = [w for w in wordlist if len(w) >= 3 and nltk.FreqDist(w) <= puzzle_letters]


#filtering b ,i ,p ,d
for word in temp:
  if 'b' in word or 'i' in word or 'p' in word or 'd' in word:
    temp.remove(word)

#removing prurals
for word in temp:
  if word[-1] == "s":
    temp.remove(word)
 
with open("src/list4.js","w") as f:
  f.write("const wordList = [")
  for i in temp:
    f.write(f'"{i}",')
  f.write("];\n\n")
  
  f.write("export default wordList;")