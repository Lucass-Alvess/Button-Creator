const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
const btnClear = document.getElementById('clear');
controles.addEventListener('change', handleChange);
btnClear.addEventListener('click', (() => {
  localStorage.clear();
}))

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  showCss()
  saveValue(name, value)
};

function showCss() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
};

function saveValue(name, value) {
  localStorage[name] = value;
};

function setValue() {
  const properties = Object.keys(localStorage);
  properties.forEach((properties) => {
    handleStyle[properties](localStorage[properties])
    controles.elements[properties].value = localStorage[properties]
    showCss();
  })
};

setValue();


