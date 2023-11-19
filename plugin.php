<?php
/*
Plugin Name: Area Calculator by www.calculator.io
Plugin URI: https://www.calculator.io/area-calculator/
Description: Area calculator to find the surface area of the following shapes - rectangle, triangle, circle, sector, ellipse, trapezoid, and parallelogram.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_area_calculator
*/

if (!defined('ABSPATH')) exit;

if (!function_exists('add_shortcode')) return "No direct call for Area Calculator by Calculator.iO";

function display_ci_area_calculator(){
    $page = 'index.html';
    return '<h2><img src="' . esc_url(plugins_url('assets/images/icon-48.png', __FILE__ )) . '" width="48" height="48">Area Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . esc_url(plugins_url($page, __FILE__ )) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_area_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_area_calculator', 'display_ci_area_calculator' );