<?php
date_default_timezone_set('Asia/Shanghai');
$test_array = array(
	'now',
	'1 second ago',
	'59 seconds ago',
	'1 min ago',
	'29 min ago',
	'30 min ago',
	'40 min ago',
	'59 min ago',
	'60 min ago',
	'61 min ago',
	'1 hour ago',
	'3 hour ago',
	'11 hour ago',
	'12 hour ago',
	'13 hour ago',
	'23 hour ago',
	'24 hour ago',
	'25 hour ago',
	'1 day ago',
	'2 day ago',
	'6 day ago',
	'7 day ago',
	'8 day ago',
	'14 day ago',
	'15 day ago',
	'16 day ago',
	'20 day ago',
	'21 day ago',
	'22 day ago',
	'30 day ago',
	'31 day ago',
	'32 day ago',
	'1 month ago',
	'5 month ago',
	'6 month ago',
	'7 month ago',
	'11 month ago',
	'12 month ago',
	'13 month ago',
	'1 year ago',
	'2 year ago',
	'4 year ago',
	'5 year ago'
);

?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>jQuery.timefly</title>
</head>
<body>
	<table>
		<?php foreach ($test_array as $test_time) : ?>
			<tr>
				<th><?php echo $test_time ?></th>
				<td><?php echo $test_text = date('Y-m-d H:i:s', strtotime($test_time)) ?></td>
				<td class="timefly"><?php echo $test_text ?></td>
			</tr>
		<?php endforeach; ?>
	</dl>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
	<script src="jQuery.timefly.js"></script>
	<script>$(function () { $('.timefly').timefly(); })</script>
</body>
</html>