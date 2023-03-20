# notificações de um perfil

class Perfil:
    def __init__(self) -> None:
        self.notifs_system = []
        self.__new_post = None

    def add_notifs_system(self, system):
        print(f'{system} adicionado')
        self.notifs_system.append(system)

    def remove_notifs_system(self, system):
        print(f'{system} removido')
        self.notifs_system.remove(system)

    def notify_all(self):
        for system in self.notifs_system:
            system.notify()

    def show_post(self):
        print(f'\nPost: {self.__new_post}\n')

    def add_post(self, post):
        self.__new_post = post
        self.show_post()
        self.notify_all()
