export function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((acc, p) => {
    return acc += p.count * p.price;
  }, 0);
  
  if (applyDiscount) {
    return sum * 0.891;
  }

  return sum;
}