from perfil import Perfil
from notifs_systems import (
  NotifsMessage, NotifsEmail, NotifsPopup
)


class DealWithNotifs():
    def __init__(self, perfil):
        self.perfil = perfil

    def removeSys(self, system):
        try:
            self.perfil.remove_notifs_system(system)
        except TypeError:
            raise TypeError('deu ruim')

    def addSys(self, system, followers):
        try:
            self.perfil.add_notifs_system(system(self.perfil, followers))
        except TypeError:
            raise TypeError('deu ruim')


if __name__ == '__main__':
    followers_message = ['Ana', 'Bia', 'Carol', 'Dani']
    followers_pop_notify = ['Bia']
    followers_email = ['Carol', 'Dani']

    meuPerfil = Perfil()

    dealing_with_notifs = DealWithNotifs(meuPerfil)

    dealing_with_notifs.addSys(NotifsEmail, followers_email)
    dealing_with_notifs.addSys(NotifsMessage, followers_message)
    dealing_with_notifs.addSys(NotifsPopup, followers_pop_notify)

    meuPerfil.add_post('é nozes')

    dealing_with_notifs.removeSys(NotifsPopup)
    print(meuPerfil.notifs_system)
