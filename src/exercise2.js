var mapCustomer = function(customer) {
  if (Object.keys(customer).length === 0){
  var customer = {      
      firstname: 'John',
      lastname: 'Doe',
      products: [],
      moneySpent: 0
    };
  }
  else{
    var sum = 0;
    for (var i = 0; i < customer.products.length; i++) {
    customer.products[i].price += sum;
    };
    
    customer.moneySpent = sum;
    ;
  }
return customer;
}

module.exports = {
  title: 'Exercise 2',
  run: mapCustomer
}
