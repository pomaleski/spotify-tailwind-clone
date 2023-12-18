export function Capitalize(str: string) {
  const strs: string[] = str.split(' ')

  return strs.map((actual) => {
    return actual.charAt(0).toUpperCase().concat(actual.slice(1))
  })
}
