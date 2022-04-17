const input = document.getElementById("small-2");
const input1 = document.getElementById("small-1");

const elem = document.createElement("input");
const label = document.createElement("label");
label.innerText = "Type your ToDo Task here";
label.id = "label";
input.append(label);
elem.type = "text";
elem.value = "";
elem.className = "input1";
input.append(elem);

const area = document.getElementById("box");

const arr = ["Push", "Pop", "Update"];
for (let i = 0; i < arr.length; i++) {
  val = arr[i];
  arr[i] = document.createElement("button");
  arr[i].innerText = val;
  arr[i].id = val;
  arr[i].className = "PPU";
  area.append(arr[0]);
}

const Button1 = document.getElementById("Push");
Button1.addEventListener("click", () => {
  const todo = elem.value;
  console.log(todo);
  const div= document.createElement('div');
  div.className="diviv";
  input1.append(div)

  const p =document.createElement('p');
  p.innerText=todo;
  p.className="ptag"
  div.append(p)

  div.append(arr[1]);
  div.append(arr[2])



});

