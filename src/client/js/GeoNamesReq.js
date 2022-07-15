//require axios
const axios = require('axios');

//make h2 element and give id of 'dateTitle'

function setTitle () {
    let getclass = document.getElementsByClassName('tripInformation')[0];
    let createh2 = document.createElement('h2');
    createh2.id = 'dateTitle';
    createh2.innerHTML = 'Trip information';
    getclass.appendChild(createh2);
}

function setSecondTitle () {
    let getSecondClass = document.getElementsByClassName('tripInformation')[0];
    let secondH2 = document.createElement('h2');
    secondH2.id = 'dateTitle2';
    secondH2.innerHTML = 'Weather Information';
    getSecondClass.appendChild(secondH2);
}
   
const dates = async () => { 
  
    const getdate = document.getElementById('dateTitle');
    const ddate = document.getElementById('dated').value;
    const rdate = document.getElementById('dater').value;
    console.log(rdate);
    console.log(ddate)
    
    //find the date difference
    const date1 = new Date(ddate);
    const date2 = new Date(rdate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    
    
    //calculate how long till ddate 
    const date3 = new Date();
    const date4 = new Date(ddate);
    const diffTime2 = Math.abs(date4 - date3);
    const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24));
    console.log(diffDays2);
    
    
    
    let cardDaysText = document.createElement('p');
    cardDaysText.classname = 'days';
    cardDaysText.innerHTML = `${ddate} - ${rdate}`;
    getdate.appendChild(cardDaysText);

    let cardDaysText2 = document.createElement('p');
    cardDaysText2.classname = 'days';
    cardDaysText2.innerHTML = `${diffDays} day trip, ${diffDays2} days to go!`;
    getdate.appendChild(cardDaysText2);
    }





    //put data into weather 
 const getData = async ()  => {
    let username = 'jadohajo';
    let formtext = document.getElementById('name').value;


   

    const firstResp = await axios.get(`http://api.geonames.org/searchJSON?q=${formtext}&maxRows=1&username=${username}`);
    const lat = firstResp.data.geonames[0].lat;
    const lng = firstResp.data.geonames[0].lng;
    const country = firstResp.data.geonames[0].adminName1;
    const apikey = "e48ad41eebb04836bc05dcdbfb2c55b5"

    const secondResp = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apikey}`);
    let response = secondResp.data.data[0].temp;
    console.log(response);


    //use pixaby api to get image
    const pixabykey = "28561871-4477a0402af9cc69664104dbe";
    const pixaby = await axios.get(`https://pixabay.com/api/?key=${pixabykey}&q=${country}&image_type=photo`)
    const image = pixaby.data.hits[0].largeImageURL;
    console.log(image);
    //create img element and append to page
    const img = document.createElement('img');
    img.src = image;
    img.classname = 'image';
    document.getElementsByClassName('dates')[0].appendChild(img);


    //check if formtext is empty
   
    setTitle();
    setSecondTitle();
    //update UI with results 

}




 //end of getData
    


export { getData, dates };
