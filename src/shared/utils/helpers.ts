export const containsInArray = (where: string[], what: string[]) => {
  if (what.length) {
    for (var i = 0; i < what.length; i++) {
      if (where.includes(what[i])) return true
    }
    return false
  }
  return false
}
