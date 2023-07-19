import { useGLTF } from "@react-three/drei";

self.onmessage = (event) => {
  const modelPath = event.data;
  useGLTF(modelPath).then((earth) => {
    self.postMessage(earth.scene);
  });
};
