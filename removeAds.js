console.log("Removing Easybib ads using EasierBib!");

var removeAds = setInterval(function () {
	$("iframe").each(function removeFlash () {
		if ($(this).attr("id") != undefined && $(this).attr("id").indexOf("google_ads") > -1) {
			$(this).remove();
			console.log("Removed flash iframe " + $(this).prop("id"));
		}
	});

	// .not("main") prevents the removal of the actual content
	$("[data-type=ads-keep-us-free]").parent().parent().parent().not("main").each(function removeAds () {
		$(this).remove();
		console.log("Removed ad " + $(this).prop("id"));
	});
}, 200);