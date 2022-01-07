const apiKey = "Fsjwyw2INOUUCDVo3rJvECj8IdvJEpks"

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// httpCall.then((response)=>{
//   response.json().then((data)=>{
//     console.log(data);
//   })
// }).catch(console.warn)

httpCall
.then(resp=>resp.json())
.then(({data}) =>{
  const {url} =data.images.original
  console.log(url);
  const img = document.createElement('img')
  img.src = url
  document.body.append(img)
})
.catch(console.warn)