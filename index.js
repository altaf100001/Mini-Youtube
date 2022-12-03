// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf2&key=[YOUR_API_KEY] HTTP/1.1

// AIzaSyCSqn1Ea7JWSIx9feCAo_LrVAyDLsTqZdA

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY


const API = "AIzaSyCSqn1Ea7JWSIx9feCAo_LrVAyDLsTqZdA"

const searchVideos = async () => {

    try{
       const q = document.getElementById("inp").value

       const res =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)

     const data = await res.json()


     appent(data.items)
    //  console.log(data.items)

    }
    catch(err){
        console.log(err)
    }

};

const appent = (videos) =>{

    let showvideos = document.getElementById("show_video")
    showvideos.innerHTML=""
    videos.forEach(({id:{videoId},snippet:{title}}) => {
        let div = document.createElement("div")
        let iframe = document.createElement("iframe")

        // console.log(thumbnail)
       
        iframe.src =`https://www.youtube.com/embed/${videoId}`
        iframe.width="100%"
        iframe.height="100%"
        iframe.allow ="fullscreen"

        let name = document.createElement("h5")
        name.innerText=title;
        name.style.cursor="pointer"
   
// console.log(name)
        div.append(iframe,name)
        showvideos.append(div)

        let data = {
            title,
            videoId,
        }
        div.onclick = ()=>{
            videopage(data)
        }
    });
}

const  videopage =(x) =>{

    window.location ="video.html" 

    localStorage.setItem("vedio",JSON.stringify(x))
  
    
}