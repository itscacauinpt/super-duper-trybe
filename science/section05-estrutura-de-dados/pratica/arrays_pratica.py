# a cada hora, retorna o status do software, sendo:
# 1 - OK
# 0 - Instabilidades
valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def max_stable_status(values):
    '''
    verificar o tempo máximo de vezes em que o software permaneceu estável
    '''
    stable_stts = 0
    current_stts = 0

    for value in values:
        if value == 1:
            current_stts += 1
        else:
            current_stts = 0

        if current_stts >= stable_stts:
            stable_stts = current_stts

    return stable_stts


# complexidade O(n), pq eu to passando pelo array todo
# força bruta aqui ó
print(max_stable_status(valores_coletados))
