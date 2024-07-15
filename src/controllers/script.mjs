import { bst } from "./dependencies.mjs";
import { Contacto } from "../models/contacto.mjs";

let btn_add = document.getElementById("btn_add")
btn_add.addEventListener("click", () => {
    let name = document.getElementById("input_name").value
    let lastName = document.getElementById("input_lastName").value
    let tel = document.getElementById("input_tel").value
    let contacto = new Contacto(name, lastName, tel)

    if ((name.trim() == "") || (lastName.trim() == "") || (tel.trim() == "")) {
        alert("Rellene todos los campos de datos primero")  
    } else {
        if (bst.add(contacto)) {
            alert("Exito")
        } else {
            alert("Ocurrio un problema")
        }
    }

    console.log(bst)
})

let btn_search = document.getElementById("btn_search")
btn_search.addEventListener("click", () => {
    let lastName = document.getElementById("input_search").value
    let node = bst.searchContact(lastName)

    if (node) {
        clearContactDisplay()
        paintContact(node.value)
    } else {
        alert("A contact with the introduced LastName doesnt exist")
    }
})

let btn_max = document.getElementById("btn_max")
btn_max.addEventListener("click", () => {
    let node = bst.searchMax()

    if (node) {
        clearContactDisplay()
        paintContact(node.value)
    } else {
        alert("Theres no contacts yet")
    }
})

let btn_min = document.getElementById("btn_min")
btn_min.addEventListener("click", () => {
    let node = bst.searchMin()

    if (node) {
        clearContactDisplay()
        paintContact(node.value)
    } else {
        alert("Theres no contacts yet")
    }
})

let btn_paint = document.getElementById("btn_paint")
btn_paint.addEventListener("click", () => {
    clearContactDisplay()
    bst.printTree(paintContact)
})

function clearContactDisplay() {
    let div_contactsDisplay = document.getElementById("div_contactsDisplay")
    
    while (div_contactsDisplay.firstChild) {
        div_contactsDisplay.removeChild(div_contactsDisplay.firstChild);
    }
}

export function paintContact(contact) {
    let div_contactsDisplay = document.getElementById("div_contactsDisplay")
    let div_contact = document.createElement("div")
    div_contact.classList.add("div_contact", "column", "box", "is-narrow", "has-background-grey-lighter");
    let ul_contact = document.createElement("ul")
    let li_name = document.createElement("li")
    li_name.classList.add("li_name", "has-text-black", "is-family-code");
    li_name.innerText = ("Name: " + contact.name)
    let li_lastName = document.createElement("li")
    li_lastName.classList.add("li_lastName", "has-text-black", "is-family-code");
    li_lastName.innerText = ("LastName: " + contact.lastName)
    let li_tel = document.createElement("li")
    li_tel.classList.add("li_tel", "has-text-black", "is-family-code");
    li_tel.innerText = ("Telephone: " + contact.tel)

    ul_contact.appendChild(li_name)
    ul_contact.appendChild(li_lastName)
    ul_contact.appendChild(li_tel)
    div_contact.appendChild(ul_contact)
    div_contactsDisplay.appendChild(div_contact)
}

/*

export function paintContact(contact) {
    let div_contactsDisplay = document.getElementById("div_contactsDisplay")
    let div_contact = document.createElement("div")
    div_contact.classList.add("div_contact", "column", "box", "is-narrow", "has-background-grey-lighter");
    let label_lastName = document.createElement("label")
    label_lastName.classList.add("label_lastName", "has-text-black", "is-family-code");
    label_lastName.innerText = ("Name: " + contact.lastName)
    let label_name = document.createElement("label")
    label_name.classList.add("label_name", "has-text-black", "is-family-code");
    label_name.innerText = ("LastName: " + contact.name)
    let label_tel = document.createElement("label")
    label_tel.classList.add("label_tel", "has-text-black", "is-family-code");
    label_tel.innerText = ("Telefono: " + contact.tel)

    div_contact.appendChild(label_lastName)
    div_contact.appendChild(label_name)
    div_contact.appendChild(label_tel)
    div_contactsDisplay.appendChild(div_contact)
}

*/