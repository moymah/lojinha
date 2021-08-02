export const formatBRL = (value) => {
  const numberValue = Number(value)

  return Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2
  }).format(numberValue / 100)
}
