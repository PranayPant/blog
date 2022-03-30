export const readFileAsBlobURL = (blob) =>
   new Promise((res) => {
      const fr = new FileReader()
      fr.onload = function () {
         res(fr.result)
      }
      fr.readAsDataURL(blob)
   })
