import { BarcodeReader, BarcodeScanner, EnumBarcodeFormat, EnumGrayscaleTransformationMode } from "dynamsoft-javascript-barcode";

function setupScanner() {
  BarcodeReader.license =
    'f0068NQAAACVyx6MyCssKs3skHkCCzofQZMqtUVUnUAHStLWGSlgrz1fRlXoCNcVUSXSOL8GiwWHsHsaA5vkihwvSTsqYi8E=';
  BarcodeReader.engineResourcePath =
    'https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode/dist/';
}

setupScanner()

export default class AppBarcodeScanner {
  static scanner: BarcodeScanner | null = null;

  static async init(elRef: React.RefObject<HTMLDivElement>) {
    if (AppBarcodeScanner.scanner) {
      if (!AppBarcodeScanner.scanner.isContextDestroyed()) {
        return;
      }
      this.scanner = null;
    }
    try {
      await BarcodeScanner.loadWasm();

      AppBarcodeScanner.scanner = await BarcodeScanner.createInstance();

      AppBarcodeScanner.scanner.regionMaskStrokeStyle = 'rgba(0, 209, 210, 1)';
      AppBarcodeScanner.scanner.setVideoFit('cover');

      await AppBarcodeScanner.setBarcodeFormats();

      await AppBarcodeScanner.scanner.setUIElement(elRef.current!);
      if (AppBarcodeScanner.scanner.isContextDestroyed()) {
        return;
      }

      AppBarcodeScanner.scanner.onPlayed = async (info) => {
        const sideLen = Math.min(info.width, info.height) * 0.4;
        const precentW = Math.round((sideLen / info.width) * 100);
        const precentH = Math.round((sideLen / info.height) * 100);
        await AppBarcodeScanner.setScanRegion({
          width: precentW,
          height: precentH
        });
      };

      await AppBarcodeScanner.scanner.open();
    } catch (ex: unknown) {
      let errMsg;
      if ((ex as Error).message.includes('network connection error')) {
        errMsg = 'Internet connection needed.';
      } else {
        errMsg = (ex as Error).message || ex;
      }
      logger.error(errMsg);
    }
  }

  static onScanDone(onScanDone: (result: { code: string }) => void) {
    if (AppBarcodeScanner.scanner) {
      AppBarcodeScanner.scanner.onUniqueRead = (txt) => {
        const newValue = CodesHandler.filterCodentifyFrom({ value: txt });
        if (newValue !== '') {
          (AppBarcodeScanner.scanner as BarcodeScanner).destroyContext();
          onScanDone({ code: newValue });
        }
      };
    } else {
      throw new Error('Scanner not initialized');
    }
  }

  private static async setBarcodeFormats(
    barcodeFormatIds: number = EnumBarcodeFormat.BF_DATAMATRIX
  ) {
    const scanner = AppBarcodeScanner.scanner as BarcodeScanner;
    const settings = await scanner.getRuntimeSettings();
    settings.barcodeFormatIds = barcodeFormatIds;
    settings.furtherModes.grayscaleTransformationModes = [
      EnumGrayscaleTransformationMode.GTM_ORIGINAL,
      EnumGrayscaleTransformationMode.GTM_INVERTED
    ];
    await scanner.updateRuntimeSettings(settings);
  }

  private static async setScanRegion({
    width,
    height
  }: {
    width: number;
    height: number;
  }) {
    const rs = await (
      AppBarcodeScanner.scanner as BarcodeScanner
    ).getRuntimeSettings();
    rs.region.regionLeft = (100 - width) / 2;
    rs.region.regionRight = (100 + width) / 2;
    rs.region.regionTop = (100 - height) / 2;
    rs.region.regionBottom = (100 + height) / 2;
    rs.region.regionMeasuredByPercentage = 1;

    await (AppBarcodeScanner.scanner as BarcodeScanner).updateRuntimeSettings(
      rs
    );
  }
}
