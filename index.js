let display = document.getElementById('display');

var check = false;

const searchV = async () =>{
    let input = document.getElementById('search').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&key=AIzaSyA9Rv3mXNRYLIRJal8UWhxdKZEpC-X8s4U&maxResults=20&part=snippet`);

    let data = await res.json();

    console.log(data);

    if(check){
        while(display.firstChild){
            display.removeChild(display.firstChild);
        }
        check = false
    }

    for(let {id:{videoId},snippet:{title,channelTitle,description}} of data.items){
        let div = document.createElement('div');
        div.style.width = "100%";
        div.style.height = "184px";
        div.style.border = "1px solid black";
        div.style.display = "flex";

        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.style.width = "320px";
        iframe.style.height = "180px";
        iframe.allowFullscreen = "true";

        let divInfo = document.createElement('div');
        divInfo.style.width = "100%";
        divInfo.style.height = "100%";
        divInfo.style.paddingLeft = "20px";

        let h3 = document.createElement('h3');
        h3.textContent = title;
        h3.setAttribute('class','font-family');

        let h51 = document.createElement('h5');
        h51.textContent = channelTitle;
        h51.setAttribute('class','font-family');

        let h52 = document.createElement('h5');
        h52.textContent = description;
        h52.setAttribute('class','font-family');

        divInfo.append(h3,h51,h52);

        div.append(iframe, divInfo);

        display.append(div);

        console.log(videoId);
    }
    check = true;
}

