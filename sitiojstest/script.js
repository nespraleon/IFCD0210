console.log = "Hola Mundo";

const divJS = document.getElementById("javascript");

const concatenarStrings = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + " " + cadena2;

  console.log(mensaje.topLowerCase());
};

concatenarStrings("Hola", "Mundo");

const compararNumeros = () => {
  let num1 = parseInt(prompt("Introduce numero1"));
  let num2 = parseInt(prompt("Introduce numero2"));

  if (num1 === num2) {
    alert(`${num1}es igual a ${num2}`);
    alert = "num1" + "" + "num2";
  } else if (num1 > num2) {
    alert(`${num1}es mayor que ${num2}`);
  } else if (num1 < num2) {
    alert(`${num1}es menor que ${num2}`);
  }
  console.log(num1);
  console.log(num2);
};

const deportes = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];

const fragment = document.createDocumentFragment();

for (const deporte of deportes) {
  const itemList = document.createElement("LI");
  itemList.textContent = deporte;
  fragment.appendChild(itemList);
}
const ulEjer4 = document.getElementById("ejerciocio4");
ulEjer4.appendChild(fragment);


// ejecicio 5

const peliculaFav = {
  title: "Ford",
  director: "Mustang",
  year: 1969,
  duration: 145,
  img: ,
genre: "scifi",
};

const parrafoPelicula= document.createElement("P");
