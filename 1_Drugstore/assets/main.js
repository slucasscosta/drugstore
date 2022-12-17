var medicamentos = []

function addMed(){
    event.preventDefault()
    let newMed = {
        "medName": document.getElementById('fname').value,
        "medQtd": document.getElementById('fqtd').value,
        "medClass": document.getElementById('fclass').value
    }
    resetForm()
    medicamentos.push(newMed)
    renderTable()
}

function deleteMed(index){
    medicamentos.splice(index, 1);
    renderTable()
}

function renderTable(){
    let table = document.getElementById('dataTable')
    table.innerHTML = 
    `<th>ID</th>
    <th>Medicamentos</th>
    <th>Quantidade</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>`

    for(let i = 0; i < medicamentos.length; i++){
        table.innerHTML = table.innerHTML + 
        `<tr>
            <td>${i}</td>
            <td>${medicamentos[i].medName}</td>
            <td>${medicamentos[i].medQtd}</td>
            <td>${medicamentos[i].medClass}</td>
            <td><img src="assets/img/remove.png" width="25px" height="25px" onclick="deleteMed(${i})"></td>
        </tr>`
    }
}
function resetForm(){
    document.getElementById("fname").value = ""
    document.getElementById("fqtd").value = ""
    document.getElementById("fclass").value = ""
}

renderTable()