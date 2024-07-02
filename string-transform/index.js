
const allFields = document.querySelectorAll('.result');

const camelCase = (val) => {
    let arr = val.split(" ");
    if (Array.isArray(arr)) {
        return arr.map((a, index) => {
            if (index !== 0) {
                return a.charAt(0).toUpperCase() + a.slice(1);
            }
            return a;
        }).join("");
    } else {
        return val;
    }
};

const pascalCase = (val) => {
    let arr = val.split(" ");
    return arr.map((a, index) => a.charAt(0).toUpperCase() + a.slice(1)).join("");
};

const snakeCase = (val) => {
    let arr = val.split(" ").join("_");
    return arr;
};


const kebabCase = (val) => {
    let arr = val.split(" ").join("-");
    return arr
};


const trimCase = (val) => {
    return val.split(" ").join("").trim();
};


function tranformString(field, transFormCase, val) {
    switch (transFormCase) {
        case "lowercase":
            field.style.textTransform = "lowercase";
            field.textContent = val;
            break;

        case "uppercase":
            field.style.textTransform = "uppercase";
            field.textContent = val;
            break;

        case "camelcase":
            field.textContent = camelCase(val);
            break;


        case "pascalcase":
            field.textContent = pascalCase(val);
            break;

        case "snakecase":
            field.textContent = snakeCase(val);
            break;

        case "kebabcase":
            field.textContent = kebabCase(val);
            break;

        case "trim":
            field.textContent = trimCase(val);
            break;

    }
}

document.getElementById('text-input').addEventListener('keyup', (e) => {
    allFields.forEach(field => {
        const transFormCase = field.getAttribute('data-value');
        field.style.top = "10px"
        tranformString(field, transFormCase, e.target.value);
    })
})