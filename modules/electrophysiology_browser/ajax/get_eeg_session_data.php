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
if (!$user->hasPermission('electrophysiology_browser_view_allsites')) {
    header('HTTP/1.1 403 Forbidden');
    exit;
}

// TODO Query code here to echo JSON data to the user.
$timePoint =& \TimePoint::singleton($_REQUEST['sessionID']);

echo "
{
  eeg: {
    patient: {
      info: {
        pscid: 'cbm001',
        dccid: '649990',
        visit_label: 'V01',
        site: 'CBM'.
        dob: '',
        gender: '',
        output_type: '',
        subproject: ''
      }
    },
    database: [
     {
      file: {
        name: '',
        task: {
          frequency: {
            sampling: 512,
            powerline: '60Hz'
          },
          channel: [
            {
              name: 'EEG Channel Count',
              value: 128
            },
            {
              name: 'EOG Channel Count',
              value: 0
            },
            {
              name: 'EOG Channel Count',
              value: 0
            },
            {
              name: 'ECG Channel Count',
              value: 0
            },
            {
              name: 'EMG Channel Count',
              value: 0
            }
          ],
          reference: 'Common'
        },
      },
      details: {
        task: {
          description: 'Visual presentation of oval cropped face and house images both upright and inverted. Rare left or right half oval checkerboards were presented as targets for keypress response.'
        },
        instructions: '',
        eeg: {
          ground: '',
          placement_scheme: 'Custom equidistant 128 channel BioSemi montage',
        },
        trigger_count: '0',
        record_type: '',
        cog: {
          atlas_id: '',
          poid: '',
        },        
        institution: {
          name: '',
          address: '',
        },
        misc: {
          channel_count: '',
        }
        manufacturer: {
          name: '',
          model_name: ''
        },
        cap: {
          manufacturer: '',
          model_name: '',
        }
        hardware_filters: '',
        recording_duration: '',
        epoch_length: '',
        device: {
          version: '',
          serial_number: '',
        },
        subject_artifact_description: ''
      }
     }
    ]
  }
}";

