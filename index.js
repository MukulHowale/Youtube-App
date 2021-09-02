document.body.style.backgroundColor = "black";

let display = document.getElementById('display');

var check = false;

window.onload = async () =>{

    let res = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=AIzaSyBnQVz9LTRr9AVkH94YasmQGP-U4aOUVOE");

    let data = await res.json();

    console.log(data);

    if(check){
        while(display.firstChild){
            display.removeChild(display.firstChild);
        }
        check = false
    }

    for(let {id,snippet:{title,channelTitle,description}} of data.items){
        let div = document.createElement('div');
        div.setAttribute('class','div');

        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${id}`;
        iframe.allowFullscreen = "true";
        iframe.frameBorder = "none";
        iframe.setAttribute('class','iframe');

        let divInfo = document.createElement('div');
        divInfo.setAttribute('id','divInfo');

        let h3 = document.createElement('h3');
        h3.textContent = title;
        h3.style.marginTop = "0px";
        h3.style.color = "white";
        h3.setAttribute('class','font-family');

        let h51 = document.createElement('h5');
        h51.textContent = channelTitle;
        h51.style.color = "grey";
        h51.setAttribute('class','font-family');

        let h52 = document.createElement('h5');
        h52.textContent = description;
        h52.style.color = "grey";
        h52.style.maxHeight = "32px";
        h52.style.overflow = "hidden";
        h52.setAttribute('class','font-family');

        divInfo.append(h3,h51,h52);

        div.append(iframe, divInfo);

        display.append(div);
    }
    check = true;
}

const searchV = async () =>{
    let input = document.getElementById('search').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&key=AIzaSyBnQVz9LTRr9AVkH94YasmQGP-U4aOUVOE&maxResults=20&part=snippet`);

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
        div.setAttribute('class','div');

        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allowFullscreen = "true";
        iframe.frameBorder = "none";
        iframe.setAttribute('class','iframe');

        let divInfo = document.createElement('div');
        divInfo.setAttribute('id','divInfo');

        let h3 = document.createElement('h3');
        h3.textContent = title;
        h3.style.marginTop = "0px";
        h3.style.color = "white";
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
