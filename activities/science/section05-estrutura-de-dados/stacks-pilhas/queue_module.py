import threading
import queue

# fila = queue.Queue()

# for tarefa in range(1, 6):
#     fila.put(tarefa)

# print(f'fila -> {fila.qsize()}')

# print(f'Vazia? {fila.empty()}')

# elemento_da_lista = fila.get()

# fila.task_done()

# print(f'fila com tamanho de -> {fila.qsize()}')

# for i in range(fila.qsize()):
#     print(fila.get())

fila_2 = queue.Queue()


def worker():
    while True:
        elemento = fila_2.get()
        print(f'trabalhando na tarefa: {elemento}')
        print(f'finalizando a tarefa: {elemento}')
        fila_2.task_done()


threading.Thread(target=worker, daemon=True).start()

for elemento in range(30):
    fila_2.put(elemento)

print('todas as requisições foram enviadas! \n', end='')

fila_2.join()

print('trabalho concluído!')
