//let marque = document.getElementsByName('marque');

// addData
console.log(document.forms[0]);
let form = document.forms[0];
let car = {};
let cars = [];
form.onsubmit = function (e) {
    e.preventDefault();
    console.log(form.elements[0].value);
    car = {
        marque: form.elements[0].value,
        modele: form.elements[1].value,
        pays: form.elements[2].value,
        disponible: form.elements[3].checked
    };
    console.log(car);
    let currentCars = JSON.stringify([...cars, car]);
    console.log(currentCars);
    //localStorage.setItem('carsKey',currentCars);
    console.log(JSON.parse(localStorage.getItem('carsKey')));
    if (localStorage.getItem('carsKey')) {
        let carsNew = [...JSON.parse(localStorage.getItem('carsKey')), car];
        localStorage.setItem('carsKey', JSON.stringify(carsNew));
    } else {
        localStorage.setItem('carsKey', currentCars);
    }
    getCars();
};
/// getData
const getCars = () => {

    let carsData = JSON.parse(localStorage.getItem('carsKey'));
    let items = "";
    if (carsData) {
        for (let i = 0; i < carsData.length; i++) {
            items += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${carsData[i].marque}</td>
                    <td>${carsData[i].modele}</td>
                    <td>${carsData[i].pays}</td>
                    ${carsData[i].disponible ?
                    '<td><i class="fa-solid fa-check bg-success"></i></td>' :
                    '<td><i class="fa-solid fa-ban bg-danger " ></i></td>'
                }
                </tr>
        `;
        }
    } else {
        items += `<tr>
                <td colspan="5" class="text-danger">Données indisponibles.</td>
    </tr>`
    }

    document.querySelector('tbody').innerHTML = items;
}

getCars();