var btn = document.getElementById('generatePDF');

console.log(btn);

btn.addEventListener('onClick', printDiv('main'),false);

function printDiv(divName) {
    console.log('clicked');
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
// $(document).ready(function(){

// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };
// //margins.left, // x coord   margins.top, { // y coord
// $('.generatePDF').click(function () {
//     console.log('clicked');
//     doc.fromHTML($('.main').html(), 15, 15, {
//         'width': 700,
//         'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample_file.pdf');
// });
// });