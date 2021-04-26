window.onload = () => {
    let values=['😎','😂','🤐','🥵','😰','😨','🤮','🤢','🤕','💔','❤️','❤️','🥰','🙊','🙈','😤','☹️','😪','🤑','😝','🤪','😴','💀','☠️','💖','💝','💓','💟','❣️','💔','💦','💫','💣'];

    let v1=document.getElementById('value1');
    let v2=document.getElementById('value2');
    let v3=document.getElementById('value3');

    let speedinput=document.getElementById('inputid');

    setInterval(()=>
    {
        v1.innerText=values[Math.floor(Math.random()*(values.length))];
        v2.innerText=values[Math.floor(Math.random()*(values.length))];
        v3.innerText=values[Math.floor(Math.random()*(values.length))];
        // console.log(values[Math.floor(Math.random()*(values.length))]);
    },1000);

    speedinput.onchange = function(ev)
    {
        document.documentElement.style.setProperty('--speed',ev.target.value);
    }
};

