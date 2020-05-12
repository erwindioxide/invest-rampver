//showrecofunds
let key = $("input[name='estimated_return']:checked").data('name');
console.log(key)
const hash_key = "#" + key;
const data_key = "data." + key;

const api = 'https://v2-api.sheety.co/rampverfinancials/mfapi/' + key + "?profilershow=true";

$(document).ready(function () {
	$.getJSON(
		api,
		function (data) {
			var template = Handlebars.compile($('#item-template').html());
			$(hash_key).html(template(eval(data_key)));
		}
	);

	$.ajax("../risk-profiler/item-template.hbs").done(function (fundReco) {
		$("body").append(fundReco);
		Handlebars.registerPartial("fundReco", $("#item-template").html());
	});
});

$(".recoKey").click(function () {
	let key = $("input[name='estimated_return']:checked").data('name');
	const hash_key = "#" + key;
	const data_key = "data." + key;
	const api = 'https://v2-api.sheety.co/rampverfinancials/mfapi/' + key + "?profilershow=true";

	$.getJSON(
		api,
		function (data) {
			var template = Handlebars.compile($('#item-template').html());
			$(hash_key).html(template(eval(data_key)));
		}
	);

	$.ajax("../risk-profiler/item-template.hbs").done(function (fundReco) {
		$("body").append(fundReco);
		Handlebars.registerPartial("fundReco", $("#item-template").html());
	});

});