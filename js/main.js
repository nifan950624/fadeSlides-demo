
main();

function main() {
    var images = $('div>ul>li');
    var j = 0;
    var index = 1;


    //初始化opacity
    for (var i = 0; i < images.length; i++) {
        if (i == j) {
            $(images[i]).css({ opacity: '1' })
            continue
        }
        $(images[i]).css({ opacity: '0' });
    };

    //叠加z-index 实现换图片
    function startRoll() {
        j++;
        if (j > images.length - 1) {
            j = 0;
        }
        $(images[j]).css({ 'z-index': + index });
        index++;
        fadeIn(images[j], 1);
    };

    //叠加透明度，生成动画
    function fadeIn(obj, period) {

        var COUNT = 50;
        clearInterval(obj.timer);
         obj.timer = setInterval(() => {
            var opacityValue = Number.parseFloat(obj.style.opacity);
            opacityValue += period / COUNT;
            if (opacityValue < 1) {
                obj.style.opacity = opacityValue;
            } else {
                obj.style.opacity = 1;
                clearInterval(obj.timer);
                for (var i = 0; i < images.length; i++) {
                    if (i == j) {
                        continue
                    }
                    $(images[i]).css({ opacity: '0' });
                }
            }
        }, 1000 / COUNT);
        console.dir(obj)
    };
    var timer = setInterval(startRoll, 2000);
};
