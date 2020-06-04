$(function(){
	var slide = $(".main-slider__item");
	var prev_btn = $(".main-slider__nav-left");
	var next_btn = $(".main-slider__nav-right");

	slide.each(function (index) {
		$(this).css( {left: `${index * 100}%`});
	});

	var counter = 0;

	carousel();

	prev_btn.on("click", function () {
		counter--;
		carousel();
	});

	next_btn.on("click", function () {
		counter++;
		carousel();
	});

	function carousel() {

		if (counter > 0) {
			prev_btn.show();
		} else {
			prev_btn.hide();
		}

		if (counter < slide.length - 1) {
			next_btn.show();
		} else {
			next_btn.hide();
		}

		slide.each(function (index) {
			$(this).css({transform : "translateX(-" + counter * 100 + "%)"});
		});
	}

	var chatData = [
		{
			img: "img/i1.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/i1.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/i1.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/i1.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
		{
			img: "img/i1.jpg",
			message: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования",
		},
	];

	function appendDate(data) {
		$(".main-chat__body-conversations").append(`
			<li class="main-chat__conversation">
				<div class="main-chat__conversation-avatar">
					<img class="main-chat__conversation-avatar-img" src="${data.img}" />
				</div>
				<div class="main-chat__conversation-message">
					<p>${data.message}</p>
				</div>
			</li>
		`)
	}

	chatData.forEach(function(item){
		appendDate(item);
	});

	$(".message-form").on("submit", function(e) {
		var message = $(this).serializeArray()[0].value;
		e.preventDefault();
		const messageObj = {
			img: "img/i1.jpg",
			message: message,
		}
		appendDate(messageObj);
		$(this)[0].reset();
		$(".main-chat__body-conversations").each(function() {

			$(this).scrollTop($(this).outerHeight(true) + $(this).height());
		});
	})
	
});