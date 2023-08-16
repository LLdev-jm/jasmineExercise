
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }
  const monthlyPayment = calculateMonthlyPayment(values);
  expect(monthlyPayment).toEqual('130.44');
});

it('should calculate very low monthly rate correctly', function(){
  const values = {
    amount: 100000,
    years: 30,
    rate: 0.1
  }
  expect(monthlyPayment).toEqual('2819.77')
})

