export default function esCompat(m: any): any {
  return m?.__esModule ? m : { default: m, ...m };
}
