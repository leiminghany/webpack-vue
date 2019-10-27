export function say() {
  console.log("hello World");
}

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "finished");
  })
}
