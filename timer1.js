let args = process.argv;
args = args.slice(2);

function timer (num) {
    let delay = 0
    if (isNaN(num) || num < 0){
        return 
    }
    for (let i = 0; i < num.length; i ++){
        delay = Number(num[i]);
        setTimeout(() => {console.log(num[i], 'beep')},delay * 1000)
    }
}
console.log(timer(args));
