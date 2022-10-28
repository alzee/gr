<?php

/**
 * @file
 * Theme settings form for gr theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function gr_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['gr'] = [
    '#type' => 'details',
    '#title' => t('gr'),
    '#open' => TRUE,
  ];

  $form['gr']['font_size'] = [
    '#type' => 'number',
    '#title' => t('Font size'),
    '#min' => 12,
    '#max' => 18,
    '#default_value' => theme_get_setting('font_size'),
  ];

}
