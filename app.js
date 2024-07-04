// pone X al final de cada elemento de lista
var listaRecordatorios = document.getElementsByTagName("LI");
var i;
for (i = 0; i < listaRecordatorios.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listaRecordatorios[i].appendChild(span);
}

// click en X para borrar cualquier lista
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    //coge el 'li' y lo saca, pero no lo elimina
    var linea = this.parentElement;
    linea.style.display = "none";
  };
}

// Poner visto cuando clickas
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// dandole a Add creas un nuevo 'li'
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  //le crea una X a estas también
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  // si clickas en las nuevas x, tambien los cierra
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
