import csv


def read_grad(path):
    with open(path) as csv_file:
        # grad_file = csv.reader(csv_file, delimiter=',', quotechar='"')
        # header, *data = grad_file
        grad_file = csv.DictReader(csv_file)
        # print(list(grad_file)[0])
        # return list(grad_file)
        return [grad for grad in grad_file]


# print(read_grad('graduacao_unb.csv')[0])

if __name__ == '__main__':
    read_grad('graduacao_unb.csv')
