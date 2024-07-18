import {
  BarcodeReader,
} from 'dynamsoft-javascript-barcode';

export async function setupScanner() {
  BarcodeReader.license =
    'f0068NQAAACVyx6MyCssKs3skHkCCzofQZMqtUVUnUAHStLWGSlgrz1fRlXoCNcVUSXSOL8GiwWHsHsaA5vkihwvSTsqYi8E=';
  BarcodeReader.engineResourcePath =
    'https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/';
}

setupScanner()

function App() {

  return (
    <>
    </>
  )
}

export default App
