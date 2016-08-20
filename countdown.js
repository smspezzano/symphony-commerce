$(document).ready(function () {

    // utilizing moment.js to approximate the timezone
    // see: http://momentjs.com/timezone/docs/#/using-timezones/guessing-user-timezone/
    var localTimezone = moment.tz.guess();

    function getEndDateTime() {
        // helper function to get the correct year to start from
        var year = moment().tz(localTimezone).year();
        return moment([year, 11, 31, 23, 59, 59]).tz(localTimezone);
    }

    // time constants
    var SECOND = 1000;
    var MINUTE = SECOND * 60;
    var HOUR = MINUTE * 60;
    var DAY = HOUR * 24;

    function getTimeRemaining(endTime){
        // helper function to return countdown variables
        // utilizing Math.floor to round down to nearest whole number
        var total = Date.parse(endTime) - Date.parse(moment().tz(localTimezone).format());
        var seconds = Math.floor( (total/SECOND) % 60 );
        var minutes = Math.floor( (total/MINUTE) % 60 );
        var hours = Math.floor( (total/HOUR) % 24 );
        var days = Math.floor( total/DAY);
        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    var endDateTime = getEndDateTime();
    setInterval(function(){
        var remainingTime = getTimeRemaining(endDateTime);
        if (remainingTime.total < 0) {
            //  NYE!
            // show NY gif and reset timer to use a new endDateTime (aka new year)
            $('.nye-gif-wrapper').show();
            endDateTime = getEndDateTime();
            remainingTime = getTimeRemaining(endDateTime);
        }
        // update HTML
        $('.countdown-wrapper__days').text(remainingTime.days);
        $('.countdown-wrapper__hours').text(remainingTime.hours);
        $('.countdown-wrapper__minutes').text(remainingTime.minutes);
        $('.countdown-wrapper__seconds').text(remainingTime.seconds);
    }, SECOND);
});