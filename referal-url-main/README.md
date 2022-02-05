## Waitlist application API using NodeJS, ExpressJS, MongoDB..

### Objective of this application

- A User (User-1) can Register with Name, Email, Password (For testing purpose email verification has been temporarily not used).

- When User (User-1) Logs in with her/his credientials, A UNIQUE referal URL will be generated and the user will be able to share it and his POSITION will be 99.

- When Someone (User-2) uses the User-1's referal link to register and login User-2 will be assigned a UNIQUE referal URL and POSITION, which will be "next to the last User (last user now is User-1)". i.e., User-2 will be assigned POSITION 100.

- Since User-2 used User-1's referal URL User-1 will be move up in POSITION 98. (This will happen simultaneously).

- When any User reaches POSITION 1, that User will receive a mail with Coupen Code to buy a Apple Product.

- User can view all the User details and can UPDATE, DELETE only his details.

- Admin can CREATE new User and alse READ, UPDATE, DELETE existing User details.

## Register

   https://joyce-referal-url-server.herokuapp.com/users/register

- User can Register with a "name", "email" "password".

## Login

    https://joyce-referal-url-server.herokuapp.com/users/login

- User can Login with a "name", "email" "password".

## Admin Login Credentials

- Email : `admin@gmail.com`
- Password : `admin`

## Links for Admin's Process

- Link to CREATE a new User : `https://joyce-referal-url-server.herokuapp.com/admin/post`
- Link to UPDATE a User : `https://joyce-referal-url-server.herokuapp.com/admin/update/:id`
- Link to DELETE a User : `https://joyce-referal-url-server.herokuapp.com/admin/delete/:id`
- Link to READ ALL Users : `https://joyce-referal-url-server.herokuapp.com/admin/get/all`
- Link to READ A SINGLE User : `https://joyce-referal-url-server.herokuapp.com/admin/get/:id`

## Links for User's Process

- Link to UPDATE His/Her Details : `https://joyce-referal-url-server.herokuapp.com/users/update/:id`
- Link to DELETE His/Her Account : `https://joyce-referal-url-server.herokuapp.com/users/delete/:id`
- Link to READ ALL Users : `https://joyce-referal-url-server.herokuapp.com/users/get/all`
- Link to READ A SINGLE User : `https://joyce-referal-url-server.herokuapp.com/users/get/:id` 
