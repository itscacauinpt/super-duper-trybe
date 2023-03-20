import sys
from operator import add, sub, pow


# com sys.argv u.u
FUNCS = {
  'soma': add,
  'subtrai': sub,
  'potencia': pow
}


try:
    _, func, n1, n2 = sys.argv
    n1, n2 = int(n1), int(n2)
    result = FUNCS[func](n1, n2)
except ValueError:
    print(
      '''
      argumentos incorretos,
      tente 'python arquivos.py soma 2 2'
      ''',
      file=sys.stderr
    )
except KeyError:
    availalefunc = ', '.join(FUNCS.keys())
    print(f'Função indisponível, tente uma dessas {availalefunc}')
else:
    print(f'Resultado da {func}: {result}')

# na mãozona aqui
opcao = 0
while opcao != 0:
    n1 = int(input('Digite um número: '))
    n2 = int(input('Digite outro número: '))
    opcao = int(
      input(
        '''
        Escolha uma opção:
        1 - soma
        2 - subtração
        0 - sair
        '''
      )
    )

    if opcao == 1:
        print(n1 + n2)
    if opcao == 2:
        print(n1 - n2)
