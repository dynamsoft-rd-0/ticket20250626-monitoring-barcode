import { useRef, useState, useEffect } from 'react';
import AppBarcodeScanner from './assets/AppBarcodeScanner';


function App() {

  const elRef = useRef<HTMLInputElement>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(false);
    AppBarcodeScanner.init(elRef)
      .then(() => {
        AppBarcodeScanner.onScanDone(() => {
          console.log('Scan done');
        });
        setInitialized(true);
      })
      .catch((ex) => {
        setInitialized(false);
        console.error(ex);
      });

    return () => {
      if (
        AppBarcodeScanner.scanner &&
        !AppBarcodeScanner.scanner.isContextDestroyed()
      ) {
        AppBarcodeScanner.scanner.destroyContext();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={elRef} >
      <div
        className="dce-video-container"
      >
        {(!initialized) && (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default App
