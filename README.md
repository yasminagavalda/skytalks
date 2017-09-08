[![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/) [![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/) [![HTML5 and CSS3](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5andcss3.png)](http://www.w3.org/) [![JavaScript](https://github.com/Iggy-Codes/logo-images/blob/master/logos/js.png)](http://www.w3.org/) [![Bootstrap](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/) [![NodeJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/) [![npm](https://github.com/Iggy-Codes/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/) [![ExpressJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/expressjs.png)](http://www.expressjs.com/) [![PugJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/pug.png)](http://www.pugjs.org/) [![jQuery](https://github.com/Iggy-Codes/logo-images/blob/master/logos/jquery.png)](http://jquery.com/)  [![Mongoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)](http://http://mongoosejs.com/) 

## [SKYTALKS]

[SKYTALKS]:https://skytalks.herokuapp.com/#!/

This repo contains full stack project SKYTALKS in which users 
can meet up to do language exchange

### Installation

You need to have installed [NodeJS] with [npm], [bower] and [MongoDB]

[NodeJS]:(https://nodejs.org/en/)
[npm]:(https://www.npmjs.com/)
[bower]:(https://bower.io/)
[MongoDB]:(https://www.mongodb.com/)

**Configuration env file**

You need to create an .env file in the project root with the following environment variables configured:

* Port:

~~~
PORT=3000
~~~

* Mongodb path and database to use:

~~~
DB_URI=mongodb://localhost:27017/NAME_DB
~~~

* Secret word to encrypt users' passwords:

~~~
SECRET=XXXXXXXXXXXXXXXXXXXXXX
~~~

* Cloudinary account

~~~
CLOUD_NAME=YOUR_CLOUDINARY_NAME
CLOUDINARY_API_KEY=CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=CLOUDINARY_API_SECRET
~~~

**To run the server:**

~~~
npm start
~~~

All dependencies will be installed automatically

**To run in dev mode or debugg mode:**

~~~
npm run dev
~~~

### Built with:

* Front-end

    - angular: 1.6.4
        + angular-route: 1.6.6
        + angular-jwt: 0.1.9
    - ng-file-upload: 12.2.13
    - bootstrap: 3.2.0
    - bower: 1.8.0


* Back-end

    - express: 4.15.4
    - express-session: 1.15.5
    - jsonwebtoken: 7.4.3
    - mongoose: 4.11.8
    - passport: 0.4.0
        + passport-jwt: 3.0.0,
        + passport-local: 1.0.0,
        + passport-local-mongoose: 4.2.1
    - pug: 2.0.0-rc.3
    - body-parser: 1.17.2
    - cookie-parser: 1.4.3,
    - cookie-session: 1.3.0,
    - del: 3.0.0,
    - multer: 1.3.0

### Author:

[Yasmina Gavaldà]

[Yasmina Gavaldà]:https://github.com/yasminagavalda

### Acknowledgments:

[SkylabCoders]

[JuanMa Garrido]

[Manuel Barzi]

[SkylabCoders]:https://github.com/SkylabCoders
[JuanMa Garrido]:https://github.com/juanmaguitar
[Manuel Barzi]:https://github.com/manuelbarzi
