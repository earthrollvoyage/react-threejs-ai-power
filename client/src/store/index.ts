import { proxy } from "valtio";


const state = proxy({
  intro: true,
  color: 'rgb(250, 70, 22)',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;