import axios from "axios";

export interface ImagePayload {
  dataUrl: string;
  size: number[];
  rotationAngle: number;
  scale: number[];
}

export function fetchImages() {
  return axios.get("/api/image");
}

export function sendImage(imagePayload: ImagePayload) {
  return axios.post("/api/image", {
    imagePayload,
  });
}
