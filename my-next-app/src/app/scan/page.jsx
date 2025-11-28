import {QRCodeSVG} from 'qrcode.react';
import { postQueueByUser } from "../services/qr";
   
const ScanPage = () => {

  const waktu= new Date()
  console.log(waktu)
  const tanggal = waktu.getDate()
  console.log("tanggal : ",tanggal)

 return (
    <div className="flex items-center justify-center min-h-screen">
      <QRCodeSVG value="https://reactjs.org/" />,
    </div>
  );
}

export default ScanPage
 

