const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
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
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) =>
  `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
// Adicione abaixo as informações necessárias.

console.log(customerInfo(order));

order.name = 'Luiz Silva'
order.payment.total = 50;
const arrayPizzas = Object.keys(order.order.pizza)

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  console.log(`Olá ${order.name}, o total do seu pedido de ${arrayPizzas[0]}, ${arrayPizzas[1]} e ${order.order.drinks.coke.type} é de R$${order.payment.total},00.`);
};

orderModifier(order);

console.log(order[0]);
