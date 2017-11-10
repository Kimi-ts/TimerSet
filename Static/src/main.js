import ko from 'knockout';

let TimerViewModel = function(){
    this.HelloString = "Kimi Raikkonen";
    this.hours = ko.observable(0);
    this.minutes = ko.observable(0);
    this.seconds = ko.observable(0);
};

ko.applyBindings(new TimerViewModel());