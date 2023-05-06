

const Mytime = () => {

    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();
    let session = "AM";

    if (hour == 0) {

        hour = 12;
    }

    if (hour > 12) {

        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + minute + ":" + second + " " + session;

    // document.querySelector("#showTime").innerHTML = time;
    document.getElementById("showTime").innerHTML = time;

    setTimeout(Mytime, 1000);


}

Mytime();