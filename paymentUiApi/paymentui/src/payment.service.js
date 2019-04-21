import {HttpClient} from './httpClient' 

const TODO_API = "http://localhost:5000/api/todos";
const membersUrl = 'http://localhost:5000/api/member'; // URL to web api
  const productsUrl = 'http://localhost:5000/api/product'; // URL to web api

//Read
const getMember = (id) => {
    const url = `${membersUrl}/${id}`;
    return HttpClient.get(url)
}

//Read
const getProductList = () => {
    return HttpClient.get(productsUrl)
}

const makePayment = (payment) => {

    console.log('in makePayment, payment:' + payment);
    
    return new Promise(function (resolve, reject) {
        // /*stuff using username, password*/
        // if ( /* everything turned out fine */ ) {
        //   resolve("Stuff worked!");
        // } else {
        //   reject(Error("It broke"));
        // }
        if (payment === undefined)
            reject(Error("paymeny is undefined"))
            
        if (!payment.expirationDate) {
            payment.isSuccess = false;
            payment.errorMessage = 'expiration date is not valid!';
            resolve(payment);
        }

        payment.errorMessage = '200 OK';
        payment.paymentMessage =
            'Your payment of $' + payment.paymentAmount + ' has been processed!';
        resolve(payment);
    });
}

//Update
const put = todo => {
    return HttpClient.put(TODO_API + '/' + todo.id, todo)
}

//Delete is keyword can't use
const del = todo => {
    return HttpClient.delete(`${TODO_API}/${todo.id}`)
}

//Encapsulating in a JSON object
const PaymentService = {
    getMember,
    getProductList,
    makePayment,
    put,
    delete: del
}

export {PaymentService}