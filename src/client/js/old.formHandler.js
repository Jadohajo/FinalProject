import {urlTest} from './old.nameChecker.js'

// let selectData = async(data) => {
//     try {
//         const entry = {
//             confidence: data.confidence,
//             irony: data.irony,
//             agreement: data.agreement,
//             model: data.model,
//             scoretag: data.scoretag,
//             subjectivity:  data.subjectivity,  
//         }
//         return entry
//     }
//     catch (err) {
//         console.log(err)
//     }
// }




// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//    // check for if URL if true console log else alert
//     if (urlTest(formText, true) )  {
        

//         console.log("::: Form Submitted :::")
//         fetch('http://localhost:8081/', {method: 'POST', body: JSON.stringify({key: formText}), headers: {'Content-Type': 'application/json'}})
//         .then(res => res.json())
//         .then(data => {
//             let entry = selectData(data);
//             return entry
//             })
//         .then(entry => {
//             var newEl = document.createElement('p');
//             newEl.innerHTML = `<p>${entry.confidence}</p>`;
//             document.getElementById('results').appendChild(newEl);
//             var newEl1 = document.createElement('p');
//             newEl1.innerHTML = `<p>${entry.irony}</p>`;
//             document.getElementById('results').appendChild(newEl1);
//             var newEl2 = document.createElement('p');
//             newEl2.innerHTML = `<p>${entry.agreement}</p>`;
//             document.getElementById('results').appendChild(newEl2);
//             var newEl3 = document.createElement('p');
//             newEl3.innerHTML = `<p>${entry.model}</p>`;
//             document.getElementById('results').appendChild(newEl3);
//             var newEl4 = document.createElement('p');
//             newEl4.innerHTML = `<p>${entry.scoretag}</p>`;
//             document.getElementById('results').appendChild(newEl4);
//             var newEl5 = document.createElement('p');
//             newEl5.innerHTML = `<p>${entry.subjectivity}</p>`;
//             document.getElementById('results').appendChild(newEl5);
    
            
    
//         })
//     }
//     else {
//         alert('Please enter a valid URL')
//     }



    
    
    
// }

//axios get request

// axios.get('http://localhost:8081/')
// .then(function (response) {
//     console.log(response.data);
//     document.getElementById('results').innerHTML = response.data
// })
// .catch(function (error) {
//     console.log(error);
// })

// export { selectData }

// export { handleSubmit }





