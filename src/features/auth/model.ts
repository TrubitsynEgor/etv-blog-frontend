
export const writeTokenOnSubmit = (data: any) => {
  if (!data.payload) return alert('Failed auth')
  if ('token' in data.payload) {
    localStorage.setItem('token', data.payload.token)
  }
}
