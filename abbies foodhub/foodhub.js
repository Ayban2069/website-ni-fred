const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2')
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');

btn1.onclick = function() {
    item1.style.display = 'block';
}
btn2.onclick = function() {
    item2.style.display = 'block';
}