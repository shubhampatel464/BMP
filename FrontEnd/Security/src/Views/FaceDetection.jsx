import React from 'react';
import Webcam from 'react-webcam';
import { useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';

const WebcamDemo = () => {
  const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
    faceDetectionOptions: {
      model: 'short',
    },
    faceDetection: new FaceDetection.FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    }),
    
    camera: ({ mediaSrc, onFrame, width, height }) =>
      new Camera(mediaSrc, {
        onFrame,
        width,
        height,
      }),
  });

  return (
    <div>

      <div style={{ textAlign: 'center', width: '100%', margin: 'auto', borderRadius: '1rem', background: 'linear-gradient(1deg, #9c27b0d1, #ffe500)', height: '30vh' }}>
        <p style={{ paddingTop: '3rem' }}>{`Loading: ${isLoading}`}</p>
        <p>{`Face Detected: ${detected}`}</p>
        <p>{`Number of faces detected: ${facesDetected}`}</p>
      </div>

      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        {boundingBox.map((box, index) => (
          <div
            key={`${index + 1}`}
            style={{
              border: '4px solid red',
              position: 'absolute',
              top: `${box.yCenter * 100}%`,
              left: `${box.xCenter * 100}%`,
              width: `${box.width * 100}%`,
              height: `${box.height * 100}%`,
              zIndex: 1,
            }}
          />
        ))}
        <Webcam
          ref={webcamRef}
          forceScreenshotSourceSize
          style={{
            height: '100%',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default WebcamDemo;
