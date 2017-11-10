import ko from 'knockout';

let TimerViewModel = function(){
    var self = this;
    this.HelloString = "Kimi Raikkonen";
    this.hours = ko.observable(0);
    this.minutes = ko.observable(0);
    this.seconds = ko.observable(0);
    this.rest = ko.computed(function(){
        return parseInt(this.hours()) * 3600 + parseInt(this.minutes()) * 60 + parseInt(this.seconds());
    }, this);

    this.timers = ko.observableArray();
    let a = []; for (var i = 0; i < 8; i++){let c = {hours:0, minutes:0, seconds:0}; a.push(c);};
    this.timers(a);
    console.log(this.timers());


    let activeTimerIndex = 0;


    this.countDown = ko.observable();

    //let audio = new Audio("././audio/alarm.wav");
    let audio;

    this.start = function(){
        let timerFunc = setInterval(function(){
            console.log('called');
            if (self.rest() != 0){
                countDown();
            }
            else{
                clearInterval(timerFunc);
                playAudioFile();
                activeTimerIndex++;  
                setActiveTimer();
            }
        }, 1000);

    };

    let countDown = function(){
        decSeconds();
    }

    let decSeconds = function(){
        let seconds = self.seconds();
        if (seconds == 0){
            self.seconds(59);
            decMinutes();
        }
        else{
            seconds--;
            self.seconds(seconds);
        }
    };

    let decMinutes = function(){
        let minutes = self.minutes();
        if (minutes == 0){
            self.minutes(59);
            decHours();
        }
        else{
            minutes--;
            self.minutes(minutes);
        }
    };

    let decHours = function(){
        let hours = self.hours();
        if (hours == 0){
            console.log("invalid hours");
            self.hours(0);
        }
        else{
            hours--;
            self.hours(hours);
        }
    };

    let reset = function(){
        self.hours(0);
        self.minutes(0);
        self.seconds(0);
    };

    let playAudioFile = function(){
        audio = new Audio("../audio/alarm.wav");
        audio.play();
    };

    this.stopAudioFile = function(){
        audio.pause();
    };

    let setActiveTimer = function(){
        let hours = self.timers()[activeTimerIndex].hours;
        self.hours(hours);

        let minutes = self.timers()[activeTimerIndex].minutes;
        self.minutes(minutes);

        let seconds = self.timers()[activeTimerIndex].seconds;
        self.minutes(seconds);
    }
};

ko.applyBindings(new TimerViewModel());