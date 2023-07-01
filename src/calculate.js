export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((acc, p) => {
    // eslint-disable-next-line no-param-reassign
    acc += p.count * p.price;
    return acc;
  }, 0);

  if (applyDiscount) {
    return sum * 0.891;
  }

  return sum;
}
