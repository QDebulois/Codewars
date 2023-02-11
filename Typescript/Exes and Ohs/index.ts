export function xo(str: string): boolean {
  str = str.toLowerCase()
  let o = 0, x = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "o") { o += 1 }
    if (str[i] === "x") { x += 1 }
  }
  return x === o
}