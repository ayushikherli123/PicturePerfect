var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var SHA256 = require("crypto-js/sha256");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/****** Create SQL Connection **********/
function createConnection() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'picture_perfect'
    });

    connection.connect();
    return connection;
}
 
/***** Test ********/

app.get("/test", function(request, response) {
    response.send({ 'status': 'ok'});
});

/*******  Routes Related to User Query ********/
/* Insert User Query*/
app.post("/query", function(request, response) {
    var connection = createConnection();

    var name = request.body.name,
        email = request.body.email,
        phone = request.body.phone,
        message = request.body.message;
       

    var query = `INSERT INTO user_query(name, email, phone, message) values ('${name}','${email}','${phone}','${message}')`;
    connection.query(query, function(error, result) 
    {
        connection.end();
        if ((error == null) || (error == undefined))
        {
            // success
            response.send({ 'status': 'ok'});
        }
         else 
        {
            // error
            response.send({ 
                'status': 'error',
                'error': error
            });
        }
    });
});

/* Get All Queries*/
app.get("/userqueries", function(request, response) {
    var connection = createConnection();
    connection.query(`SELECT * FROM user_query`, function(error, queries) {
        connection.end();
        response.send(queries);
    });
});

/*******  Routes Related to Feedback ********/
/* Submit Feedback*/
app.post("/feedback", function(request, response) {
    var connection = createConnection();

    var cust_id = request.body.cust_id,
        cust_name = request.body.cust_name,
        p_id = request.body.p_id,
        p_name = request.body.p_name,
        ratings = request.body.ratings,
        feedback = request.body.feedback;
       

    var query = `INSERT INTO feedback(cust_id, cust_name, p_id, p_name, ratings, feedback) values ('${cust_id}','${cust_name}','${p_id}','${p_name}','${ratings}','${feedback}')`;
    connection.query(query, function(error, result) 
    {
        connection.end();
        if ((error == null) || (error == undefined))
        {
            // success
            response.send({ 'status': 'ok'});
        }
         else 
        {
            // error
            response.send({ 
                'status': 'error',
                'error': error
            });
        }
    });
});

/* Get All Feedbacks */
app.get("/feedbacks", function(request, response) {
    var connection = createConnection();
    connection.query(`SELECT * FROM feedback`, function(error, feedback) {
        connection.end();
        response.send(feedback);
    });
});

/* Get Feedbacks by Photographer Id */
app.get("/feedbacks/:p_id", function(request, response) {
    var connection = createConnection();
    var p_id = request.params.p_id;
    connection.query(`SELECT * FROM feedback WHERE p_id = ${p_id}`, function(error, feedback) {
        connection.end();
        response.send(feedback);
    });
});

/******** Routes Related to Customer **********/
/* Registration */
app.post("/register", function(request, response) {
    var connection = createConnection();

    var name = request.body.name;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var password = SHA256(request.body.password);
    var confirm_password = SHA256(request.body.confirm_password);
    var houseno = request.body.houseno;
    var locality = request.body.locality;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;


    var query = `INSERT INTO Customer(name, email, mobile, password, confirm_password, houseno,
    locality, city, state, country, pincode) values ('${name}', '${email}', '${mobile}', '${password}',
    '${confirm_password}','${houseno}', '${locality}', '${city}','${state}','${country}','${pincode}' )`;
    connection.query(query, function(error, result) 
    {
        connection.end();
        if ((error == null) || (error == undefined))
        {
            // success
            response.send({ 'status': 'ok'});
        }
         else 
        {
            // error
            response.send({ 
                'status': 'error',
                'error': error
            });
        }
    });
});

/* Login */
app.post("/login", (request, response) => {
    // email and password
    var email = request.body.email;
    var password = SHA256(request.body.password);

    var connection = createConnection();
    var query = `SELECT * FROM Customer WHERE email ='${email}' AND password = '${password}'`;
    connection.query(query, (error, result) => {
        connection.end();
        if (result.length == 1) {
            var customer = result[0];
            response.send({ 
                result: 'ok',
                customer: {
                    cid: customer.cid,
                    name: customer.name, 
                    email: customer.email
                }
            });
        } 
        else
        {
            response.send({ 'result': 'error' })
        }
    });
});

/* Get All Customers Details */
app.get("/customers", function(request, response) {
    var connection = createConnection();
    connection.query(`SELECT * FROM Customer`, function(error, customers) {
        connection.end();
        response.send(customers);
    });
});

/* Get Customer Profile Details */
app.get("/customers/:id", function(request, response) {
    var connection = createConnection();
    var cid = request.params.id;
    connection.query(`SELECT * FROM Customer WHERE cid = ${cid}`, function(error, customers) {
        connection.end();
        response.send(customers);
    });
});

/* Get Customers Detail searched via city */
app.get("/customerdata/:city", function(request, response) {
    var connection = createConnection();
    var city = request.params.city;
    connection.query(`SELECT * FROM Customer WHERE city = '${city}'`, function(error, customers) {
        connection.end();
        response.send(customers);
    });
});

/* Update Password */
app.put("/passwordupdate", function(request, response) {
    var email = request.body.email;
    var password = SHA256(request.body.password);
    var confirm_password = SHA256(request.body.confirm_password);
    var query = `update Customer set password = "${password}", confirm_password = "${confirm_password}" WHERE email = '${email}'`;
    var connection = createConnection();
    connection.query(query, function(error, result) {
        connection.end();
        if(error==null)
        {
            response.send(result);
        }
    });
});

/* Update Profile */
app.put("/profileupdate", function(request, response) {
    
    var cid = request.body.cid;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var houseno = request.body.houseno;
    var locality = request.body.locality;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;

    var query = `update Customer set email = "${email}", mobile = "${mobile}", 
                houseno = "${houseno}", locality = "${locality}", city = "${city}", state = "${state}"
                , country = "${country}", pincode = "${pincode}"  WHERE cid = '${cid}'`;
    var connection = createConnection();
    connection.query(query, function(error, result) {
        connection.end();
        if(error==null)
        {
            response.send(result);
        }
    });
});

/*********** Routes Related to Booking ***********/
/* Booking */
app.post("/book", function(request, response) {
    var connection = createConnection();

    var cust_id = request.body.cust_id;
    var cust_name = request.body.cust_name;
    var cust_emailid = request.body.cust_emailid;
    var cust_contact = request.body.cust_contact;
    var cust_address = request.body.cust_address;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;
    var booking_date = request.body.booking_date;
    var theme = request.body.theme;
    var service_amount = request.body.service_amount;
    var p_id = request.body.p_id;
    var p_name = request.body.p_name;

    var query = `INSERT INTO Booking_Detail(cust_id,cust_name,cust_emailid,cust_contact,cust_address,city,state,
               country,pincode,booking_date,theme,service_amount, p_id,p_name) values ('${cust_id}', '${cust_name}', '${cust_emailid}', '${cust_contact}',
    '${cust_address}','${city}', '${state}', '${country}','${pincode}','${booking_date}','${theme}', '${service_amount}', '${p_id}', '${p_name}' )`;
    connection.query(query, function(error, result) 
    {
        connection.end();
        if ((error == null) || (error == undefined))
        {
            // success
            response.send({ 'status': 'ok'});
        }
         else 
        {
            // error
            response.send({ 
                'status': 'error',
            });
        }
    });
});

/* Get Booking Details of customers */
app.get("/bookings/:id", function(request, response) {
    var connection = createConnection();
    var cust_id = request.params.id;
    connection.query(`SELECT * FROM Booking_Detail WHERE cust_id = ${cust_id}`, function(error, bookingsCust) {
        connection.end();
        response.send(bookingsCust);
    });
});

/* Get Booking Details of Photographer */
app.get("/photographerbookings/:id", function(request, response) {
    var connection = createConnection();
    var p_id = request.params.id;
    connection.query(`SELECT * FROM Booking_Detail WHERE p_id = ${p_id}`, function(error, bookingsCust) {
        connection.end();
        response.send(bookingsCust);
    });
});

/* Get All Bookings Details */
app.get("/bookings", function(request, response) {
    var connection = createConnection();
    connection.query(`SELECT * FROM Booking_Detail`, function(error, bookings) {
        connection.end();
        response.send(bookings);
    });
});

/* Check Availability */
app.post("/isavailable", function(request, response) {
    var p_id = request.body.p_id;
    var booking_date = request.body.booking_date;
    var status = request.body.status;
    var connection = createConnection();
    // var id = request.params.id;
    connection.query(`SELECT * FROM Booking_Detail WHERE p_id = ${p_id} and booking_date = '${booking_date}' and status = '${status}'`, (error, result)=>
    {
        connection.end();

        if(result.length >= 1)
        {
            response.send({result: 'booked'});
        }
        else
        {
            response.send({result: 'available'});
        }
    });

});

/* Cancel Booking */
app.put("/bookingcancel/:book_id", function(request, response) {
    var book_id = request.params.book_id;
    var status = request.body.status;
    var query = `update Booking_Detail set status = 'Cancelled' WHERE book_id = ${book_id}`;
    var connection = createConnection();
    connection.query(query, function(error, result) {
        connection.end();
        if(error==null)
        {
            response.send({ 'result': 'Cancelled' });
        }
        else
        {
            response.send({ 'result': 'Error' });            
        }
    });
});

/************ Routes Relates to Photographer **************/
/* Photographer Registration */
app.post("/photographer_register", function(request, response) {
    var connection = createConnection();

    var name = request.body.name;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var password = SHA256(request.body.password);
    var confirm_password = SHA256(request.body.confirm_password);
    var address = request.body.address;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;
    var experience = request.body.experience;

    var query = `INSERT INTO Photographer_Detail(name, email, mobile, password, confirm_password, address,
    city, state, country, pincode, experience) values ('${name}', '${email}', '${mobile}', '${password}',
    '${confirm_password}','${address}','${city}','${state}','${country}','${pincode}','${experience}' )`;
    connection.query(query, function(error, result) 
    {
        connection.end();
        if ((error == null) || (error == undefined))
        {
            // success
            response.send({ 'status': 'ok'});
        }
         else 
        {
            // error
            response.send({ 
                'status': 'error',
                'error': error
            });
        }
    });
});

/* Photographer Login */
app.post("/photographer_login", (request, response) => {
    // email and password
    var email = request.body.email;
    var password = SHA256(request.body.password);

    var connection = createConnection();
    var query = `SELECT * FROM Photographer_Detail WHERE email ='${email}' AND password = '${password}'`;
    connection.query(query, (error, result) => {
        connection.end();
        if (result.length == 1) {
            var photographer = result[0];
            response.send({ 
                result: 'ok',
                photographer: {
                    p_id: photographer.p_id,
                    name: photographer.name, 
                    email: photographer.email
                }
            });
        } 
        else
        {
            response.send({ 'result': 'error' })
        }
    });
});

/* Get Photographers List*/
app.get("/photographer", function(request, response) {
    var connection = createConnection();
    // var id = request.params.id;
    connection.query(`SELECT * FROM Photographer_Detail`, function(error, photographers) {
        connection.end();
        response.send(photographers);
    });
});

/* Get Photographer Profile Details */
app.get("/photographerprofile/:id", function(request, response) {
    var connection = createConnection();
    var p_id = request.params.id;
    connection.query(`SELECT * FROM Photographer_Detail WHERE p_id = ${p_id}`, function(error, photographer) {
        connection.end();
        response.send(photographer);
    });
});

/* Update Photographer Profile */
app.put("/photographerprofileupdate", function(request, response) {
    
    var p_id = request.body.p_id;
    var email = request.body.email;
    var mobile = request.body.mobile;
    var address = request.body.address;
    var city = request.body.city;
    var state = request.body.state;
    var country = request.body.country;
    var pincode = request.body.pincode;
    var experience = request.body.experience;

    var query = `update Photographer_Detail set email = "${email}", mobile = "${mobile}", 
                address = "${address}", city = "${city}", state = "${state}"
                , country = "${country}", pincode = "${pincode}", experience = '${experience}'  WHERE p_id = '${p_id}'`;
    var connection = createConnection();
    connection.query(query, function(error, result) {
        connection.end();
        if(error==null)
        {
            response.send(result);
        }
    });
});

/* Get Photographers List via City*/
app.get("/photographer/:city", function(request, response) {
    var connection = createConnection();
    var city = request.params.city;
    connection.query(`SELECT * FROM Photographer_Detail WHERE city = '${city}'`, function(error, photographers) {
        connection.end();
        response.send(photographers);
    });
});

/* Update Photographer's Password */
app.put("/photographerpasswordupdate", function(request, response) {
    var email = request.body.email;
    var password = SHA256(request.body.password);
    var confirm_password = SHA256(request.body.confirm_password);
    var query = `update Photographer_Detail set password = "${password}", confirm_password = "${confirm_password}" WHERE email = '${email}'`;
    var connection = createConnection();
    connection.query(query, function(error, result) {
        connection.end();
        if(error==null)
        {
            response.send(result);
        }
    });
});

/************ Routes Relates to Themes ***********/
/* Get Theme List*/
app.get("/theme", function(request, response) {
    var connection = createConnection();
    // var id = request.params.id;
    connection.query(`SELECT * FROM Themes`, function(error, themes) {
        connection.end();
        response.send(themes);
    });
});

/************ Routes Relates to Themes Images***********/
// /* Get Theme Images List*/
app.get("/themegallery/:theme_name", function(request, response) {
    var connection = createConnection();
    var theme_name = request.params.theme_name;
    connection.query(`SELECT image_name FROM Themes_images WHERE theme_name = "${theme_name}"`, function(error, themes) {
        connection.end();
        response.send(themes);
    });
});

// Send Mail Code
app.post("/sendemail", function(request, response) 
    {
   var email = request.body.email;
   var msg = request.body.msg;
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'ceopicturep@gmail.com',
    pass: 'picture@perfect'
    }
    });

    var mailOptions = {
  from: 'ceopicturep@gmail.com',
  to: `${email}`,
  subject: 'Picture_Perfect',
  text: `${msg}`
    };

    transporter.sendMail(mailOptions, function(error, info){
  if (error) {
  } else {
    console.log('Email sent: ' + info.response);
  } 
    });
});

app.listen(3000, 'localhost', function() {
    console.log("server started on port 3000");
});