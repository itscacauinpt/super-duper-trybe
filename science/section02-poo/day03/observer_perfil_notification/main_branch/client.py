from perfil import Perfil
from notificator import (
  NotifsMessage, NotifsEmail, NotifsPopup
)


class DealWithNotifs():
    def __init__(self, perfil):
        self.perfil = perfil

    def removeSys(self, system, followers):
        try:
            # RemoveSystemNotifs(self.perfil, system)
            self.perfil.remove_notifs_system(system(self.perfil, followers))
        except ValueError:
            raise ValueError('deu ruim')

    def addSys(self, system, followers):
        try:
            system(self.perfil, followers)
        except TypeError:
            raise TypeError('deu ruim')


if __name__ == '__main__':
    followers_message = ['Ana', 'Bia', 'Carol', 'Dani']
    followers_pop_notify = ['Bia']
    followers_email = ['Carol', 'Dani']

    meuPerfil = Perfil()

    dealing_with_notifs = DealWithNotifs(meuPerfil)

    print(f'{meuPerfil.notifs_system} vazio')

    dealing_with_notifs.addSys(NotifsEmail, followers_email)
    print(f'{meuPerfil.notifs_system} um só')
    dealing_with_notifs.addSys(NotifsMessage, followers_message)
    print(meuPerfil.notifs_system)
    dealing_with_notifs.addSys(NotifsPopup, followers_pop_notify)
    print(meuPerfil.notifs_system)

    meuPerfil.add_post('Eai')
    print(meuPerfil.notifs_system)

    # meuPerfil.remove_notifs_system(NotifsPopup)

    dealing_with_notifs.removeSys(NotifsPopup, followers_pop_notify)
    print(meuPerfil.notifs_system)

    # NotifsMessage(meuPerfil, followers_message)
    # NotifsPopup(meuPerfil, followers_pop_notify)
    # NotifsEmail(meuPerfil, followers_email)
