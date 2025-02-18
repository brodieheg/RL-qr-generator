import { toPng} from 'html-to-image';
import download from 'downloadjs';

var downloadFile = () => {toPng(document.getElementById('qr1'))
  .then((dataUrl) => download(dataUrl, 'qr-image.png'));}

const generateQR = () => {
    const url = document.getElementById("urlInput").value.trim();
    console.log(url);
    const qrCode = document.getElementById("qr1");
    qrCode.setAttribute("contents", url);
    const container = document.getElementById("url-container");
    container.innerHTML=""
    const h1 = document.createElement("h1");
    const text = document.createTextNode(`Download QR Code for ${url}`)
    h1.appendChild(text)
    container.appendChild(h1)
}

document.getElementById("generateBtn").addEventListener("click", function() {
    generateQR()
})
document.getElementById("urlInput").addEventListener("keypress", function(e) {
    if(e.key == "Enter") {generateQR()}
})

document.getElementById("downloadBtn").addEventListener("click", function() {
    downloadFile();
})