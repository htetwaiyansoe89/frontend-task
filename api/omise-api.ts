import getEncodedAuth from "@/utils/encoder";
import OmiseStore from "@/store/omise-store";

export default async function addCard(data: any) {
  let encodedAuth = getEncodedAuth();

  const bodyRaw = JSON.stringify({
    "card": {
      "name": data.holderName,
      "number": data.cardNumber.replace(/\s/g, ''),
      "expiration_month": data.expiryDate.split('/')[0],
      "expiration_year": data.expiryDate.split('/')[1],
      "security_code": data.cvv,
    }
  });
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${encodedAuth}`
    },
    body: bodyRaw
  };

  const tokenResponse = await fetch('https://vault.omise.co/tokens', requestOptions)
  const token = await tokenResponse.json();
  OmiseStore.addToken(token);

  return token;
}