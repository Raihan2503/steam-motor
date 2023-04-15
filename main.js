const namaPelanggan = document.querySelector('#namaPelanggan');
const namaMotor = document.querySelector('#namaMotor');
const hargaMotor = document.querySelector('#hargaMotor');
const paket = document.querySelector('#paket');
const customers = [];
const formSteamMotor = document.querySelector('#formSteamMotor');

class SteamMotor {
    constructor(namaPelanggan, namaMotor, paket, hargaMotor) {
        this.namaPelanggan = namaPelanggan;
        this.namaMotor = namaMotor;
        this.paket = paket;
        this.hargaMotor = hargaMotor;
}

    printOrderan() {
        let htmlCode = "";
        let number = 1;
        const itemOrder = document.querySelector('#itemOrder');
        for(const customer of customers) {
            htmlCode += `
            <tr>
              <th scope="row">${number++}</th>
              <td>${customer.namaPelanggan}</td>
              <td>${customer.namaMotor}</td>
              <td>${customer.paket}</td>
              <td>Rp. ${customer.hargaMotor}</td>
            </tr>`
        }
        itemOrder.innerHTML = htmlCode;
    }
}

const printAlert = () => {
    if(customers.length > 0) {
        const alert = document.querySelector('.alert');
        alert.style = 'display: block';
        setTimeout(() => {
            alert.style = 'opacity: 0';
        }, 2000)
    }
}

paket.addEventListener('change', () => {
    switch (paket.value) {
        case 'Lengkap': 
            hargaMotor.value = 20000;
            break;
        case 'Regular':
            hargaMotor.value = 15000;
            break;
        default:
            hargaMotor.value = "";
            alert("Silahkan pilih paket terlebih dahulu");
            break;
    }
});

formSteamMotor.addEventListener('submit', (e) => {
    const table = document.querySelector('.table');
    customers.push(new SteamMotor(namaPelanggan.value, namaMotor.value, paket.value, hargaMotor.value));
    table.style = 'display: block;';
    for(const customer of customers) {
        customer.printOrderan();
    }
    
    printAlert();
    e.preventDefault();
})