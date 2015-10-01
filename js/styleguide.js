$(document).ready(function() {
	$('.demo').each(function() {
		var $this = $(this),
			code = $this.html();
		$this.append('<pre class="autocode"></div>');
		$this.find('.autocode').text(code);
	});
});