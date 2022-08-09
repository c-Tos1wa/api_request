const baseUrl = 'https://thatcopy.pw/catapi/rest/'

const getAll = async () => {
  try{
    const data = await fetch(baseUrl);
    const response = await data.json();
    return response.webpurl;
  } catch(e){
    console.log(e.message)
  }
}

const apiLoad = async () => {
  const catImg = document.getElementById('api-images')
  catImg.src = await getAll();
  apiLoad()
}

const actionOnClick = document.getElementById('btn');
actionOnClick.addEventListener('click', apiLoad);