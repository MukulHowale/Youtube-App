let display = document.getElementById('display');

var check = false;

const searchV = async () =>{
    let input = document.getElementById('search').value;

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&key=AIzaSyA9Rv3mXNRYLIRJal8UWhxdKZEpC-X8s4U&maxResults=20`);

    let data = await res.json();

    console.log(data);

    if(check){
        while(display.firstChild){
            display.removeChild(display.firstChild);
        }
        check = false
    }

    for(let {id:{videoId}} of data.items){
        let div = document.createElement('div');
        div.style.width = "100%";
        div.style.height = "155px";
        div.style.border = "1px solid black";

        let iframe = document.createElement('iframe');

        iframe.src = `https://www.youtube.com/embed/${videoId}`;

        div.append(iframe);

        display.append(div);

        console.log(videoId);
    }
    check = true;
}

