jQuery(document).ready(function ($) {
	/**
	 * Sticky navigation
	 */
	if ($(window).scrollTop() > 30) {
		$("#shopify-section-header").removeClass("on-top");
	} else {
		$("#shopify-section-header").addClass("on-top");
	}
	if ($(".off-canvas--viewport").width() > 767) {
		if ($(window).scrollTop() > 30) {
			$("#shopify-section-header").addClass("sticky");
		} else {
			$("#shopify-section-header").removeClass("sticky");
		}
	}
	if ($(window).scrollTop() > $(".off-canvas--viewport").width() * 0.55 - 100) {
		$("#shopify-section-header").addClass("fixed");
	} else {
		$("#shopify-section-header").removeClass("fixed");
	}

	$(window).scroll(function () {
		if ($(this).scrollTop() > 30) {
			$("#shopify-section-header").removeClass("on-top");
		} else {
			$("#shopify-section-header").addClass("on-top");
		}

		if ($(".off-canvas--viewport").width() > 767 && $(this).scrollTop() > 30) {
			$("#shopify-section-header").addClass("sticky");
		} else {
			$("#shopify-section-header").removeClass("sticky");
		}

		if (
			$(".off-canvas--viewport").width() > 767 &&
			$(this).scrollTop() > $(".off-canvas--viewport").width() * 0.55 - 100
		) {
			$("#shopify-section-header").addClass("fixed");
			// $(
			// 	".shopify-section.framework--text-with-background .row:first-child"
			// ).addClass("no-parallax");
		} else {
			$("#shopify-section-header").removeClass("fixed");
			// $(
			// 	".shopify-section.framework--text-with-background .row:first-child"
			// ).removeClass("no-parallax");
		}

		if ($(this).scrollTop() < $(".off-canvas--viewport").width() * 0.55) {
			background_text =
				"rgba(255,255,255," +
				$(this).scrollTop() /
					($(".off-canvas--viewport").width() * 0.55 - 100) +
				")";
			console.log(background_text);
			$("#shopify-section-header.sticky").css(
				"background-color",
				background_text
			);
		}
	});

	/** */

	/**
	 * Sticky Footer
	 */
	setTimeout(() => {
		if (
			$(this).scrollTop() >
			$(document).height() -
				$(window).height() -
				$("#shopify-section-framework--footer").height()
		) {
			$(".footer--alt").removeClass("sticky-bottom");
		} else {
			$(".footer--alt").addClass("sticky-bottom");
		}
	}, 2000);

	$(window).scroll(function () {
		if (
			$(this).scrollTop() >
			$(document).height() -
				$(this).height() -
				$("#shopify-section-framework--footer").height()
		) {
			$(".footer--alt").removeClass("sticky-bottom");
		} else {
			$(".footer--alt").addClass("sticky-bottom");
		}
	});

	$(".footer--alt-close-btn").click(function () {
		$(".footer--alt").removeClass("sticky-bottom");
		setTimeout(() => {
			$(".footer--alt").hide();
		}, 201);
	});

	/**
	 * Retina
	 */
	if ($(window).width() > 2560) {
		$(".background-image").css("width", "2560px");
		$(".background-image").css("padding-top", "1400px");
	} else {
		$(".background-image").css("width", "100%");
		$(".background-image").css("padding-top", "55%");
	}

	$(window).resize(function () {
		if ($(window).width() > 2560) {
			$(".background-image").css("width", "2560px");
			$(".background-image").css("padding-top", "1400px");
		} else {
			$(".background-image").css("width", "100%");
			$(".background-image").css("padding-top", "55%");
		}
	});
});
