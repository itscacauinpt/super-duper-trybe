from class_methods import ClassA, ClassB
from adapter import BAdapter

# before adpater
ITEMS = [ClassA(), ClassB()]
for item in ITEMS:
    if isinstance(item, ClassB):
        item.method_b()
    else:
        item.method_a()


# after adapter
ITEMS_ADAPTER = [ClassA(), BAdapter()]
for item in ITEMS_ADAPTER:
    item.method_a()
