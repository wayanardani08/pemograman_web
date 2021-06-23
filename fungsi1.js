var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Namalengkap"] = document.getElementById("Namalengkap").value;
    formData["Npm"] = document.getElementById("Npm").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Alamat"] = document.getElementById("Alamat").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Namalengkap;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Npm;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Alamat;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Namalengkap").value = "";
    document.getElementById("Npm").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Alamat").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Namalengkap").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Npm").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Alamat").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Namalengkap;
    selectedRow.cells[1].innerHTML = formData.Npm;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.Alamat;
}


function onDelete(td) {
    if (confirm('Apakah anda ingin menghapus data ini ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Namalengkap").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}