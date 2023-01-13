# NOTIFICADORINATOR hueh
from abc import ABC, abstractmethod


class Notifs(ABC):
    @abstractmethod
    def notify(self):
        ...


class NotifsPopup(Notifs):
    def __init__(self, perfil, followers):
        self.perfil = perfil
        self.followers = followers
        self.perfil.add_notifs_system(self)

    def notify(self):
        print(f'Popup notifications: {self.followers}')


class NotifsMessage(Notifs):
    def __init__(self, perfil, followers):
        self.perfil = perfil
        self.followers = followers
        self.perfil.add_notifs_system(self)

    def notify(self):
        print(f'Notified by Messages: {self.followers}')


class NotifsEmail(Notifs):
    def __init__(self, perfil, followers):
        self.perfil = perfil
        self.followers = followers
        self.perfil.add_notifs_system(self)

    def notify(self):
        print(f'Notified emails to: {self.followers}')


class RemoveSystemNotifs(Notifs):
    def __init__(self, perfil, system):
        self.perfil = perfil
        self.system = system
        self.perfil.remove_notifs_system(self.system)

    def notify(self):
        print(f'{self.system} was removed')
