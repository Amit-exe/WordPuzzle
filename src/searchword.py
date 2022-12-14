import nltk

#downloading words corpus
nltk.download("words")

#frequency distribution of given letters
puzzle_letters = nltk.FreqDist('zgnthbiompdauwye')

#reading wordlist corpus
wordlist = nltk.corpus.words.words()

total_words_found = [w for w in wordlist if len(w) >= 3 and nltk.FreqDist(w) <= puzzle_letters]


#filtering b ,i ,p ,d
for word in total_words_found:
  if 'b' in word or 'i' in word or 'p' in word or 'd' in word:
    total_words_found.remove(word)

#removing prurals
for word in total_words_found:
  if word[-1] == "s":
    total_words_found.remove(word)


#removing words which doesn't contain vowels
for word in total_words_found:
  no_vowels = True
  if "a" in word or "e" in word or 'i' in word or 'o' in word or 'u' in word:
    no_vowels =False

  if no_vowels==True:
    total_words_found.remove(word)


#for saving all words in javascript file 

with open("src/list.js","w") as file:
  file.write("const wordList = [")
  for i in total_words_found:
    file.write(f'"{i}",')
  file.write("];\n\n")
  
  file.write("export default wordList;")