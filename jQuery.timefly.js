;(function($) {
	var default_options = {
		text: {
			now: '刚刚',
			ago: '前',
			half: '半',
			minute: '分钟',
			hour: '小时',
			day: '天',
			week: '星期',
			month: '个月',
			year: '年',
			numbers: {
				ONE: '一',
				TWO: '两',
				THREE: '三',
				MANY: '多'
			}
		},
		data: {
			oritext: 'timefly-text',
			timestamp: 'timefly-timestamp',
			flyaway: 'timefly-flyaway'
		}
	};
	
	var ONE_MINUTE = 60 * 1000;
	var ONE_HOUR = 60 * ONE_MINUTE;
	var ONE_DAY = 24 * ONE_HOUR;
	var ONE_MONTH = 30 * ONE_DAY;
	
	function get_int(x) {
		return Math.floor(x);
	}
	
	function get_text(duration, text_settings) {
		var _ = text_settings;
		
		if (duration < ONE_MINUTE) return _.now;
		
		if (duration < ONE_MINUTE * 30) return get_int(duration / ONE_MINUTE) + _.minute + _.ago;
		if (duration < ONE_MINUTE * 31) return _.half + _.hour + _.ago;
		if (duration < ONE_MINUTE * 60) return get_int(duration / ONE_MINUTE) + _.minute + _.ago;
		
		if (duration < ONE_HOUR * 12) return get_int(duration / ONE_HOUR) + _.hour + _.ago;
		if (duration < ONE_HOUR * 13) return _.half + _.day + _.ago;
		if (duration < ONE_HOUR * 24) return get_int(duration / ONE_HOUR) + _.hour + _.ago;
		
		if (duration < ONE_DAY * 7) return get_int(duration / ONE_DAY) + _.day + _.ago;
		if (duration < ONE_DAY * 8) return _.numbers.ONE + _.week + _.ago;
		if (duration < ONE_DAY * 14) return get_int(duration / ONE_DAY) + _.day + _.ago;
		if (duration < ONE_DAY * 15) return _.half + _.month + _.ago;
		if (duration < ONE_DAY * 21) return get_int(duration / ONE_DAY) + _.day + _.ago;
		if (duration < ONE_DAY * 22) return _.numbers.THREE + _.week + _.ago;
		if (duration < ONE_DAY * 31) return get_int(duration / ONE_DAY) + _.day + _.ago;
		
		if (duration < ONE_MONTH * 6) return get_int(duration / ONE_MONTH) + _.month + _.ago;
		if (duration < ONE_MONTH * 7) return _.half + _.year + _.ago;
		if (duration < ONE_DAY * 365) return get_int(duration / ONE_MONTH) + _.month + _.ago;
		if (duration < ONE_DAY * 366) return _.numbers.ONE + _.year + _.ago;
		if (duration < ONE_MONTH * 25) return _.numbers.TWO + _.year + _.ago;
		if (duration < ONE_MONTH * 37) return _.numbers.THREE + _.year + _.ago;
		
		return _.numbers.MANY + _.year + _.ago;
	}
	
	$.fn.timefly = function (user_options) {
		var settings = $.extend(default_options, user_options);
		
		return this.each(function () {
			var text = $(this).text();
			var timestamp = Date.parse(text);
			
			if (!isNaN(timestamp)) {
				$(this)
					.data(settings.data.oritext, text)
					.data(settings.data.timestamp, timestamp)
					.addClass(settings.data.flyaway)
					.attr('title', text)
					.text(get_text(+new Date() - timestamp, settings.text));
			}
		});
	}
}(jQuery));