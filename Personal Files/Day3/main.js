var inputs = document.querySelectorAll(".controls input");


function handleChange(){
    const units = this.dataset.sizing||'';
    console.log(units);
    document.documentElement.style.setProperty(`--${this.id}`, this.value + units);
}

inputs.forEach(input => input.addEventListener('change',handleChange));
inputs.forEach(input => input.addEventListener('mousemove',handleChange));

