import type { Dict, Lang } from './i18n';
import { STAGES, X } from './i18n';
import investpark from './assets/investpark.jpg';
import iqpark from './assets/iqpark.jpg';
import fabriq from './assets/fabriq.jpg';
import greenCarbon from './assets/green-carbon.jpg';

export const tint = (h: number) => `oklch(0.95 0.035 ${h})`;
export const ink = (h: number) => `oklch(0.5 0.12 ${h})`;

export interface Product {
  num: string;
  name: string;
  url: string;
  icon: string;
  img: string;
  hue: number;
  stage: string;
  sub: string;
  desc: string;
  features: string[];
}

const RAW = [
  { name: 'InvestPark', url: 'investpark.uz', icon: 'ph-duotone ph-map-trifold', img: investpark, hue: 228 },
  { name: 'IQPark', url: 'iqpark.uz', icon: 'ph-duotone ph-buildings', img: iqpark, hue: 280 },
  { name: 'Fabriq', url: 'fabriq.uz', icon: 'ph-duotone ph-factory', img: fabriq, hue: 55 },
  { name: 'Green Carbon', url: 'greencarbon.uz', icon: 'ph-duotone ph-leaf', img: greenCarbon, hue: 155 },
];

export function getProducts(lang: Lang, t: Dict): Product[] {
  const subs = [t.p1_sub, t.p2_sub, t.p3_sub, t.p4_sub];
  const descs = [t.p1_desc, t.p2_desc, t.p3_desc, t.p4_desc];
  return RAW.map((p, i) => ({
    ...p,
    num: '0' + (i + 1),
    stage: STAGES[lang][i],
    sub: subs[i],
    desc: descs[i],
    features: X[lang].feats[i],
  }));
}

export const iconBox = (hue: number, size: 36 | 48) => ({
  width: size,
  height: size,
  flexShrink: 0,
  borderRadius: size === 48 ? 16 : 12,
  background: tint(hue),
  color: ink(hue),
  display: 'grid',
  placeItems: 'center',
  fontSize: size === 48 ? 26 : 20,
});
