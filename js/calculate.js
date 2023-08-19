document.getElementById('btn-calculate').addEventListener('click',function(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseString = triangleBase.value;
    const newTriangleBase = parseFloat(triangleBaseString);
    triangleBase.value = '';

    const triangleHight = document.getElementById('triangle-hight');
    const triangleHightString = triangleHight.value;
    const newTriangleHight = parseFloat(triangleHightString);
    triangleHight.value='';

    const triangleArea = document.getElementById('triangle-area');
    const triangleAreaString = triangleArea.innerText;
     

    const triangleCalculate = 0.5 * newTriangleBase * newTriangleHight;
    triangleArea.innerText  =  triangleCalculate ;
})
// ----------------rectangle-area------------------

function getRectangleArea(){
    const width = getInputValue('rectangle-width')
    console.log(width);
    const length = getInputValue('rectriangle-length')
    console.log(length);
    const area = width * length;
    setElementInnerText('rectriangle-area',area); 
} 

function getEllipsArea(){
    const major = getInputValue('ellipse-major-redious');
    const minor = getInputValue('ellipse-minor-redious');
    const area = 3.1416 * major * minor;
    setElementInnerText("ellipse-area", area);
}

function getInputValue(feildId){
    const inputField = document.getElementById(feildId);
    const inputFieldString = inputField.value;
    const value = parseFloat(inputFieldString);
    inputField.value = '';
    return value;
}
function setElementInnerText(elementId , area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
// --------------elilps-area-----------------

 
// function getInputField(fieldId){
//     const inputField = document.getElementById(fieldId)
//     const inputFieldString = inputField.value;
//     const value = parseFloat(inputFieldString);
//     inputField.value = '';
//     return value;
// }
// function setElementInnerText(element , area){
//     const element = document.getElementById(element);
//     element.innerText = area;
// }
