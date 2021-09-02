document.body.style.backgroundColor = "black";

let display = document.getElementById('display');

var check = false;

const searchV = async () =>{
    let input = document.getElementById('search').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&location=28.644800%2C77.216721&locationRadius=1000km&key=AIzaSyA9Rv3mXNRYLIRJal8UWhxdKZEpC-X8s4U&maxResults=20&part=snippet`);

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
        div.setAttribute('id','div');

        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allowFullscreen = "true";
        iframe.setAttribute('id','iframe');

        let divInfo = document.createElement('div');
        divInfo.setAttribute('id','divInfo');

        let h3 = document.createElement('h3');
        h3.textContent = title;
        h3.style.marginTop = "0px";
        h3.style.color = "grey";
        h3.setAttribute('class','font-family');

        let h51 = document.createElement('h5');
        h51.textContent = channelTitle;
        h51.style.color = "grey";
        h51.setAttribute('class','font-family');

        let h52 = document.createElement('h5');
        h52.textContent = description;
        h52.style.color = "grey";
        h52.style.textOverflow = "ellipsis";
        h52.setAttribute('class','font-family');

        divInfo.append(h3,h51,h52);

        div.append(iframe, divInfo);

        display.append(div);

        console.log(videoId);
    }
    check = true;
}

