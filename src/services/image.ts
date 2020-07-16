import axios, { AxiosResponse } from "axios";

export interface ImagePayload {
  dataUrl: string;
  size: number[];
  rotationAngle: number;
  scale: number[];
}

export interface FramedImage {
  id?: string;
  imageUrl: string;
  size: number;
  date: number;
}

export function fetchImages() {
  return axios.get<any, AxiosResponse<{ data: FramedImage[] }>>("/api/image");
}

export function sendImage(imagePayload: ImagePayload) {
  return axios.post<ImagePayload, { data: FramedImage }>("/api/image", {
    imagePayload,
  });
}
