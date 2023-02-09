# separe as palavras de acordo com sua letra inicial

def classify_words(text_array):
    screen = {}

    for word in text_array:
      initial_letter = word.upper()[0]
      # initial_letter = word[0]
      # print(initial_letter)
      if initial_letter not in screen:
        screen[initial_letter] = [word]
      else:
        screen[initial_letter].append(word)

    return screen
