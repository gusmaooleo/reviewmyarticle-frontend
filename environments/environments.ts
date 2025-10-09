export const environments = {
  url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  clientID: process.env.CLIENTID || 'myclientid',
  clientSecret: process.env.CLIENTSECRET || 'myclientsecret' 
}