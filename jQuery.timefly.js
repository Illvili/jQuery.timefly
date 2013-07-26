;(function($) {
	var ONE_MINUTE = 60 * 1000;
	var ONE_HOUR = 60 * ONE_MINUTE;
	var ONE_DAY = 24 * ONE_HOUR;
	var ONE_MONTH = 30 * ONE_DAY;
		
	function get_int(x) {
		return Math.floor(x);
	}
	
	function get_text(duration) {
		console.log(duration);
		
		if (duration < ONE_MINUTE) return '刚刚';
		
		if (duration < ONE_MINUTE * 30) return get_int(duration / ONE_MINUTE) + '分钟前';
		if (duration < ONE_MINUTE * 31) return '半小时前';
		if (duration < ONE_MINUTE * 60) return get_int(duration / ONE_MINUTE) + '分钟前';
		
		if (duration < ONE_HOUR * 12) return get_int(duration / ONE_HOUR) + '小时前';
		if (duration < ONE_HOUR * 13) return '半天前';
		if (duration < ONE_HOUR * 24) return get_int(duration / ONE_HOUR) + '小时前';
		
		if (duration < ONE_DAY * 7) return get_int(duration / ONE_DAY) + '天前';
		if (duration < ONE_DAY * 8) return '一星期前';
		if (duration < ONE_DAY * 14) return get_int(duration / ONE_DAY) + '天前';
		if (duration < ONE_DAY * 15) return '半个月前';
		if (duration < ONE_DAY * 21) return get_int(duration / ONE_DAY) + '天前';
		if (duration < ONE_DAY * 22) return '三星期前';
		if (duration < ONE_DAY * 31) return get_int(duration / ONE_DAY) + '天前';
		
		if (duration < ONE_MONTH * 6) return get_int(duration / ONE_MONTH) + '个月前';
		if (duration < ONE_MONTH * 7) return '半年前';
		if (duration < ONE_DAY * 365) return get_int(duration / ONE_MONTH) + '个月前';
		if (duration < ONE_DAY * 366) return '一年前';
		if (duration < ONE_MONTH * 25) return '两年前';
		if (duration < ONE_MONTH * 37) return '三年前';
		
		return '多年前';
	}
	
	$.fn.timefly = function () {
		return this.each(function () {
			var text = $(this).text();
			var timestamp = Date.parse(text);
			
			if (!isNaN(timestamp)) {
				$(this).data('text', text).data('timestamp', timestamp).attr('title', text).text(get_text(+new Date() - timestamp));
			}
		});
	}
}(jQuery));