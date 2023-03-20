import pandas as pd
# http://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html

df = pd.read_csv('test.txt', sep=' ', header=None)
# print(df)

# content = []
# with open('test.txt', mode='r') as file:
#   for line in file:
#     if line != '':

# file.close()
