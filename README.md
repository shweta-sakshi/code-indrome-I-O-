# <h1>code-indrome-I-O-</h1>

# <h3>Chemical Market Place</h3>

MERN project
hosted project link: https://heroic-kitsune-a6f0c0.netlify.app/

# <h4>PAYMENT STEPS: </h4>

test card for India is: 4000 0035 6000 0008
GOAL:
-different types of payment options
-shipping address
-contact number

-------working--------
![Stripe payment steps](./Frontend/src/assets/StripeCheckout.jpg)

#ngrok allows us to develop and test webhook integrations locally without deploying our application

# FRONTEND WORKFLOW!!

All the product data is stored in the global variable 'Productlistdata' using context.
Cart data is stored in the global variable 'cartdata' using context.
Payment is done using Stripe.

#Google login:
use passport

# <h1>DOCUMENTATION:</h1>

1. Pasword Hasing[0]
   -Earlier days we use encrypt-Decrypt(2-way connection). when ever user want to login his password will be compaired to decrypted password, increases security issue.
   -We uses one way connection: hasing algorithm.
   store hashed password and during login password given by user is also hashed and compare it with the stored hashed password.

   -bcrypt.hash function takes arg as password, round;
   -schema.pre method is use to perform task before saving the docunment. and use compare function uses pass by user and saved pass;

2. Token generation[JWT]
   -defined function to genrate token in schema(schema.method.name = );

   -syntax to generate token: jwt.sign({payload} secerateKey,{ expiresIn:});
   secrete key is of choice of developer.

   QUE How we are validating user from token?
   ANS: we have store user id in payload we will search user with that id in the database and login that user.

3. Cookies/session -https://www.geeksforgeeks.org/understanding-cookies-in-web-browsers/

4. Nodemailer: -https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/
