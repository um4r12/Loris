<?php
/**
 * Get EEG Session Data.
 *
 * This retreives the entire eeg session data
 * for a candidate to be visible on the eeg_session form.
 *
 * PHP Version 7
 *
 * @category Loris
 * @package  EEG_Session
 * @author   Muhammad Khan <muhammad.khan@mcin.ca>
 * @license  Loris license
 * @link     https://github.com/aces/Loris-Trunk
 */

/**
 * User permission verification:
 * Only users that have the eeg view all sites permission OR
 * have the view site permission and belong to candidates session site
 * are able to fetch the eeg session data.
 */

$user =& \User::singleton();
$timePoint =& \TimePoint::singleton($_REQUEST['sessionID']);

if (!$user->hasPermission('electrophysiology_browser_view_allsites')
                && !((in_array(
                    $timePoint->getData('CenterID'),
                    $user->getData('CenterIDs')
                ))
                     && $user->hasPermission('electrophysiology_browser_view_site')
                   )
   ) {
    header('HTTP/1.1 403 Forbidden');
    exit;
}

