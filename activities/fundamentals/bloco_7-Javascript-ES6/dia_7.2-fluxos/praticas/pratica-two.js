const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  //const orderValues = Object.values(order);
  //const ana = Object.values(order['delivery']);
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const nameClient = order.name;
  const tel = order.phoneNumber;
  const endereco = order.address.street;
  const numero = order.address.number;
  const apart = order.address.apartment;
  
  console.log(`Olá, ${deliveryPerson}, entrega para: ${nameClient}, Telefone: ${tel}, R. ${endereco}, Nº: ${numero}, AP: ${apart}.`);
  //"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order.delivery.deliveryPerson = 'Luiz Silva'
  order.payment.total = 50;
  const client = order.order.delivery.deliveryPerson;
  const newValue = order.payment.total;
  console.log(newValue);
  //"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
}

orderModifier(order);