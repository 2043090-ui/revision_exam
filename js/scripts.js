const boutons = document.querySelectorAll(".bouton_modal")
const modal = document.querySelector(".modal")

for (let i = 0; i < boutons.length; i++) {
    const bouton_modal = boutons[i];

    bouton_modal.addEventListener("click", openModal)

}

function openModal() {
    modal.classList.add("visible")

    modal.add

}

modal.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.remove("visible")
}