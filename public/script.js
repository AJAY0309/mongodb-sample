console.log("helloworld")
const inputText = document.getElementById('text');
const outputElement = document.getElementById('output');
const submitButton = document.getElementById('submitBtn');

const getInfo = async(event) => {
    event.preventDefault();
    let dest = inputText.value;
    try {
        let url = `http://localhost:5000/api/products?place=${dest}`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        console.log(arrData);
        try {
            const plan = data.myData[0].plan;
            outputElement.innerHTML = data.myData[0].plan;
        } catch {
            outputElement.innerHTML = "This is not there in out database";
        }


    } catch (error) {
        console.log(error);

    }
}

// const displayPlan = (place) => {
//     const foundPlace = data.find(item => item.place.toLowerCase() === place.toLowerCase());

//     if (foundPlace) {
//         outputElement.innerHTML = `Plan for ${foundPlace.place}:<br>${foundPlace.plan}`;
//     } else {
//         outputElement.innerHTML = `Plan not found for place: ${place}.`;
//     }
// };

// submitBtn.addEventListener('click', () => {
//     const place = inputText.value;
//     displayPlan(place);
// });

submitBtn.addEventListener('click', getInfo);



// document.addEventListener('DOMContentLoaded', () => {
//     const submitButton = document.getElementById('submitBtn');
//     const outputElement = document.getElementById('output'); // Element to display the entered input

//     submitButton.addEventListener('click', () => {
//         const inputText = document.getElementById('text').value;

//         if (inputText) {
//             outputElement.textContent = `${inputText}`; // Display the entered input
//         } else {
//             outputElement.textContent = 'Please enter something.'; // Display a message if nothing is entered
//         }
//     });
// });






const handleSubmit = async(e) => {


    //fetch data from server -> bot's response

    const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: data.get('prompt')
        })
    })

    if (response.ok) {
        const data = await response.json();
        const parsedData = data.bot.trim();

        console.log({ parsedData })
        outputElement.textContent = `${parsedData}`

    } else {
        const err = await response.text();

        messageDiv.innerHTML = "somthing went wrong";
        console.log(err);
        alert(err);
    }
}