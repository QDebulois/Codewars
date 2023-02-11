fn xo(string: &'static str) -> bool {
    let mut o = 0;
    let mut x = 0;
    for c in string.to_lowercase().chars() {
      if c == 'o' { o += 1 }
      if c == 'x' { x += 1 }
    }
    return x == o
}