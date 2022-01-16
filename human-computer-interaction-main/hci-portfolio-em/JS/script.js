$(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
    $("#line-progress").css("width", "38%");
    $("#intro").addClass("active").siblings().removeClass("active");
    document.body.scrollTop = document.documentElement.scrollTop=0;
});

$(".step02").click( function() {
    $("#line-progress").css("width", "38%");
    $("#data").addClass("active").siblings().removeClass("active");
    document.body.scrollTop = document.documentElement.scrollTop=0;
});

$(".step03").click( function() {
    $("#line-progress").css("width", "69%");
    $("#develop").addClass("active").siblings().removeClass("active");
    document.body.scrollTop = document.documentElement.scrollTop=0;
});

$(".step04").click( function() {
    $("#line-progress").css("width", "100%");
    $("#conclusion").addClass("active").siblings().removeClass("active");
    document.body.scrollTop = document.documentElement.scrollTop=0;
});



const progressBar = document.querySelector('#line-progress');
const section = document.querySelector('#content-section');

const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance/ (section.getBoundingClientRect().height - document.documentElement.clientHeight))*100;
    let value = Math.floor(progressWidth)+25;
	
    progressBar.style.width = value + "%";
    if(value<0){
        progressBar.style.width = "0%";
    }
    if (value<25){
		progressBar.style.width = "10%";
	}

	if (value>80){
		progressBar.style.width = "80%";
	}
	if (value>85){
		progressBar.style.width = "85%";
	}

	if (value>100){
		progressBar.style.width = "90%";
	}
	if (value>110){
		progressBar.style.width = "95%";
	}
	
	if (value>120){
		progressBar.style.width = "100%";
	}


}

window.addEventListener('scroll', animateProgressBar);

