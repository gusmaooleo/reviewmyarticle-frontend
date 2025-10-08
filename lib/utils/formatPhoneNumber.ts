export default function formatPhone(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.length > 11) digits = digits.slice(0, 11);

  if (digits.length > 6) {
    return digits.replace(/^(\d{2})(\d{1})(\d{4})(\d{0,4}).*/, "($1) $2$3-$4");
  } else if (digits.length > 2) {
    return digits.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    return digits.replace(/^(\d*)/, "($1");
  }
}
