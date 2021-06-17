import React from 'react';
import $ from 'jquery';

import '../css/Landing.css';
import TestImage from '../img/testimage.png'
import WebCAM from "./Webcam"
import ScreenGrab from "./Screenshot"
import WebcamCapture from './Screenshot';

const Test = () => {
	$(document).ready(function () {
		/* Check the location of each desired element */
		$('.fade-in').each(async function (i) {
			var top_of_object = $(this).offset().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object) {
				$(this).animate({ opacity: '1' }, 550);
			}
		});
		/* Every time the window is scrolled */
		$(window).scroll(async function () {
			/* Check the location of each desired element */
			$('.fade-in').each(function (i) {
				var top_of_object = $(this).offset().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();

				/* If the object is completely visible in the window, fade it it */
				if (bottom_of_window > top_of_object) {
					$(this).animate({ opacity: '1' }, 350);
				}
			});
		});
	});
	return (
		<div className="landing">
            <div className="landing-top">
                <h1>Workplace Emotion Detector</h1>
                <h2>from Justin Lin, Joshua Lin, Ethan Wu</h2>
            </div>
			<div className="landing-bottom">
				<div className="camera-size">
					<WebcamCapture
					
					/>
				</div>
            </div>
		</div>
	);
};

export default Test;
