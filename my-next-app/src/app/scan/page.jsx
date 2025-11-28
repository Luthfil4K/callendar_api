import {QRCodeSVG} from 'qrcode.react';


const ScanPage = () => {
 return (
    <div className="flex items-center justify-center min-h-screen">
      <QRCodeSVG value="https://reactjs.org/" />,
    </div>
  );
}

export default ScanPage
 

