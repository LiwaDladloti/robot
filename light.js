var Light = function(id, color) {

    //get the target element to render the light into
    var elem = document.getElementById(id);
    elem.classList.add('light-background');
    var lightInterval;

    //append a div into the target element
    var lightElem = document.createElement('div');
    lightElem.classList.add('light');
    lightElem.classList.add(color);
    elem.appendChild(lightElem);
    
    this.on = function(){
        lightElem.classList.add('on');
        status = 'on';
    };
    
    this.blink = function(){
        lightInterval = setInterval(function(){
            goLight.on()
            setTimeout(function(){
                goLight.off();
            }, 1000);
            warningLight.on()
            setTimeout(function(){
                warningLight.off();
            }, 1000);
            stopLight.on()
            setTimeout(function(){
                stopLight.off();
            }, 1000);
        }, 2000);
    }
    
    this.off = function(){
        lightElem.classList.remove('on');
        status = 'off';
        setTimeout(function(){
            clearInterval(lightInterval)
        }, 1000);
    };
}

var onBtn = document.querySelector('.onBtn');
var offBtn = document.querySelector('.offBtn');
var blinkBtn = document.querySelector('.blinkBtn');

var goLight = new Light('light', 'green');
var warningLight = new Light('light', 'orange');
var stopLight = new Light('light', 'red');

onBtn.addEventListener('click', function(){
    goLight.on();
    warningLight.on();
    stopLight.on();
});

offBtn.addEventListener('click', function(){
    goLight.off();
    warningLight.off();
    stopLight.off();
});

blinkBtn.addEventListener('click', function(){
    goLight.blink();
    warningLight.blink();
    stopLight.blink();
});
