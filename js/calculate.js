document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
  const kitkatQuantity = getInputValue('kitkat-quantity');
  const kitkatCost = kitkatQuantity * 200;
  setInnerText('chocolate', kitkatCost);
  totalValue();
});

document.getElementById('rose-buy-btn').addEventListener('click', function(){
 const roseQuantity = getInputValue('rose-quantity');
 const roseCost = roseQuantity * 100;
 setInnerText('rose', roseCost);
 totalValue();
});

document.getElementById('diary-buy-btn').addEventListener('click', function(){
  const diaryQuantity = getInputValue('diary-quantity');
  const diaryCost = diaryQuantity * 100;
  setInnerText('diary', diaryCost);
  totalValue();
})
// functional task
function setInnerText(id, value){
  document.getElementById(id).innerText = value;
}
function getInputValue(id){
  const value = document.getElementById(id).value;
  return parseFloat(value);
}
function totalValue(total){
  const chocolate = document.getElementById('chocolate').innerText;
  const rose = document.getElementById('rose').innerText;
  const diary = document.getElementById('diary').innerText;

  const totalSum = parseFloat(chocolate) + parseFloat(rose) + parseFloat(diary);
  setInnerText('total', totalSum);
}
// promo code 
document.getElementById('promo-btn').addEventListener('click', function(){
  const promoCode = getInputValue('promo-code');
  if(promoCode === 101){
    const total = document.getElementById('total').innerText;
    const sum = total - parseFloat(total) * 0.1;
    setInnerText('all-total', sum);
  }else{
    alert ('wrong promo code! try again with valid code');
  }
})