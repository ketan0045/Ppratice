//6 jun morning thursday
// 1
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Button clicked!');
});
// 2
document.getElementById('dblclickBtn').addEventListener('dblclick', () => {
    alert('Button double clicked!');
});
// 3
document.getElementById('hoverDiv').addEventListener('mouseover', () => {
    alert('Mouse over the div!');
});
// 4
document.getElementById('mouseoutDiv').addEventListener('mouseout', () => {
    alert('Mouse out of the div!');
});
// 5
document.getElementById('mousemoveDiv').addEventListener('mousemove', () => {
    console.log('Mouse is moving over the div!');
});
// 6
document.getElementById('mousedownBtn').addEventListener('mousedown', () => {
    console.log('Mouse button is pressed down!');
});
// 7
document.getElementById('mouseupBtn').addEventListener('mouseup', () => {
    console.log('Mouse button is released!');
});
// 8
document.getElementById('keydownInput').addEventListener('keydown', (event) => {
    console.log(`Key down: ${event.key}`);
});
// 9
document.getElementById('keyupInput').addEventListener('keyup', (event) => {
    console.log(`Key up: ${event.key}`);
});
// 10
document.getElementById('keypressInput').addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
});
// 11
document.getElementById('submitForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted!');
});
// 12
document.getElementById('changeSelect').addEventListener('change', (event) => {
    console.log(`Selected: ${event.target.value}`);
});
// 13
document.getElementById('focusInput').addEventListener('focus', () => {
    console.log('Input focused!');
});
// 14
document.getElementById('blurInput').addEventListener('blur', () => {
    console.log('Input lost focus!');
});
// 15
window.addEventListener('load', () => {
    console.log('Page fully loaded!');
});
// 16
window.addEventListener('resize', () => {
    console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
});
// 17
window.addEventListener('scroll', () => {
    console.log(`Scrolled to ${window.scrollY}px`);
});
// 18
document.getElementById('touchstartDiv').addEventListener('touchstart', () => {
    console.log('Touch started on the div!');
});