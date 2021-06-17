```
function calculaPrecoTotal(quantidade) {
  let preco
  if (quantidade < 12){
    preco = 1.3
    return preco * quantidade
  } else if (quantidade >= 12){
    preco = 1
    return preco * quantidade
  }
}
```