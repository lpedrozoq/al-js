const data = {
    frontend : "Leonel-FT",
    backend : "Rebeca-FT",
    design: "Angela-FT"
};

console.log('JSON 1 Base >>>>');
console.log(data);

console.log();

const entries = Object.entries(data);
console.log('Object.entries >>>>');
console.log(entries);
console.log();
console.log('entries.length >>>>');
console.log(entries.length);

const dataValues = {
    frontend : "Leonel-BK",
    backend : "Rebeca-BK",
    design: "Angela-BK"
};

console.log();

console.log('JSON 2 Base >>>>');
console.log(dataValues);

const values = Object.values(dataValues);
console.log('Object.values >>>>');
console.log(values);
console.log();
console.log('values.length >>>>');
console.log(values.length);
console.log();
console.log('Object.keys >>>>');
const keys = Object.keys(dataValues);
console.log(keys);
console.log();
console.log('keys.length >>>>');
console.log(keys.length);
