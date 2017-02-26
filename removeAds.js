console.log("Removing Easybib ads using EasierBib!");

$("#premium_ad").remove();

var removeAds = setInterval(function () {
	$("[data-type=ads-keep-us-free]").parent().parent().parent().each(function removeAds () {
		$(this).remove();
		console.log("Removed ad " + $(this).prop("id"));
	});
}, 200);