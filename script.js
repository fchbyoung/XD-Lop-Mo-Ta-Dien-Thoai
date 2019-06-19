let Mobile = function (battery, isOn) {
    this.battery = battery;
    this.message = [];
    this.received = [];
    this.sented = [];
    this.status = isOn;

    this.isOn = function() {
        if(this.status){
            return true;
        }
        return false;
    };

    this.turnOn = function() {
        this.status = true;
    };

    this.turnOff = function() {
        this.status = false;
    };

    this.changeBattery = function () {
        if(this.battery < 100){
            this.battery++;
        }
        return battery;
    };

    this.composeMessage = function(message) {
        if(this.status){
            this.message.unshift(message);
            this.battery--;
        }
    };

    this.receivedMessage = function(mobile){
        if(this.status){
            this.received.unshift(mobile.message.shift());
            this.battery--;
        }
    };

    this.sentMessage = function(mobile) {
        if(this.status){
            this.received.unshift(mobile.message.shift());
            this.battery--;
        }
    };

    this.receivedInbox = function() {
        document.write("Received Mesage<br>");
        for(let i = 0; i < this.received.length; i++){
            document.write(this.received[i]);
        }
        this.battery--;
    };

    this.sentedInbox = function() {
        document.write("Received Mesage<br>");
        for(let i = 0; i < this.sented.length; i++){
            document.write(this.sented[i]);
        }
        this.battery--;
    };

    this.inbox = function() {
        if(this.status){
            this.receivedInbox();
        }
    };

    this.sent = function() {
        if(this.status){
            this.sentedInbox();
        }
    };

};



