import React from 'react'
import { QRCodeSVG } from 'qrcode.react';
import Logo from './../Assets/Logo.png'

const QrCode = () => {
    return (
        <div>
            <QRCodeSVG
                value="https://reactjs.org/"
                size={256}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                    src: Logo,
                    x: undefined,
                    y: undefined,
                    height: 70,
                    width: 70,
                    excavate: true,
                }}
            />
        </div>
    )
}

export default QrCode
