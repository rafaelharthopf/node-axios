const axios = require('axios');


//trocando de nome e salario

/*const options = {
    method: 'PUT',
    url: 'https://6126ed07c2e8920017bc0a84.mockapi.io/api/v1/users/2',
    headers: {'Content-Type': 'application/json'},
    data: {
      createdAt: '2021-08-25T03:54:15.427Z',
      name: 'Brandy Corkery II',
      avatar: 'https://cdn.fakercloud.com/avatars/jghyllebert_128.jpg',
      wage: '1500.00',
      id: '2'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });*/



  //usando [...arr]

  const options = {
    method: 'PUT',
    url: 'https://6126ed07c2e8920017bc0a84.mockapi.io/api/v1/users/3',
    headers: {'Content-Type': 'application/json'},
    data: {
      createdAt: '2021-08-25T16:57:33.789Z',
      name1: ['Calvin Brown', 'Rafael Harthopf'],
      'social-name': 'Rafael Harthopf',
      avatar: 'https://cdn.fakercloud.com/avatars/nasirwd_128.jpg',
      wage: '981.00',
      id: '3',
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });











/*axios.put('https://6126ed07c2e8920017bc0a84.mockapi.io/api/v1/users/2').then(function(resposta){
    console.log(resposta.data);
})*/

/*axios.get('https://6126ed07c2e8920017bc0a84.mockapi.io/api/v1/users/3').then(function(response){
    console.log(response.data);
});
*/
/*axios.post('https://6126ed07c2e8920017bc0a84.mockapi.io/api/v1/users/2').then(function(response){
    console.log(response)
})*/


/*axios.patch('https://6126ed07c2e8920017bc0a84.mockapi.io/api/v1/users/2').then(function(data){
    console.log(data)
})*/