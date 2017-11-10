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



    this.countDown = ko.observable();

    this.start = function(){
        let timerFunc = setInterval(function(){
            console.log('called');
            if (self.rest() != 0){
                countDown();
            }
            else{
                clearInterval(timerFunc);
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
    }

    let reset = function(){
        self.hours(0);
        self.minutes(0);
        self.seconds(0);
    }
};

ko.applyBindings(new TimerViewModel());