var btn = document.querySelector('#generatePDF');
var inputIcons = document.querySelector('.input-icons');

btn.addEventListener('click',()=>printDiv('cv_body'),false);

function printDiv(divName) {
    inputIcons.style.display = 'none';
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

window.onafterprint = async(event) => {
    location.reload();
  };