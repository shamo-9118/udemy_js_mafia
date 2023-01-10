const getText = () => {
    const inputElement = document.getElementById("input_txt");
    const inputElementValue = inputElement.value;
    inputElement.value = "";
    return inputElementValue
};
const addButtonElement = document.getElementById("addButton");
addButtonElement.addEventListener("click", getText);
