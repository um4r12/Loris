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

require_once 'BIDSFile.class.inc';

/**
 * User permission verification:
 * Only users that have the eeg view all sites permission OR
 * have the view site permission and belong to candidates session site
 * are able to fetch the eeg session data.
 */
$user =& \User::singleton();
$timePoint =& \TimePoint::singleton($_REQUEST['sessionID']);
if (!$user->hasPermission('electrophysiology_browser_view_allsites')
    && !((in_array($timePoint->getData('CenterID'), $user->getData('CenterIDs')))
        && $user->hasPermission('electrophysiology_browser_view_site')
    )
)
{
    header('HTTP/1.1 403 Forbidden');
    exit;
}


$response = getSessionData($_REQUEST['sessionID']);

echo json_encode($response);

// TODO Query code here to echo JSON data to the user.

//echo json_encode(array('hello'=>'world'));

function getSessionData($sessionID)
{
    //$outputType = $_REQUEST['outputType'];
    $response['patient'] = getSubjectData($sessionID);
    $response['database'] = getFilesData($sessionID);
    return $response;
}



function getSubjectData($sessionID)
{
    $subjectData = array();
    $timePoint =& \TimePoint::singleton($sessionID);
    $candidate =& \Candidate::singleton($timePoint->getCandID());
    $subjectData['pscid'] = $candidate->getPSCID();
    $subjectData['dccid'] = $timePoint->getCandID();
    $subjectData['visitLabel'] = $timePoint->getVisitLabel();
    $subjectData['sessionID'] = $sessionID;
    $subjectData['site'] = $timePoint->getPSC();
    $subjectData['dob'] = $candidate->getCandidateDoB();
    $subjectData['gender'] = $candidate->getCandidateGender();
    $subjectData['subproject'] = $timePoint->getData('SubprojectTitle');
    $subjectData['output_type'] = $_REQUEST['outputType'];
    return $subjectData;
}

function getFilesData($sessionID)
{
    $fileCollection = array();
    $db = \Database::singleton();
    $params['SID'] = $sessionID;
    $physiologicalFiles = $db->pselect("SELECT PhysiologicalFileID from
    physiological_file WHERE SessionID=:SID", $params);
    foreach ($physiologicalFiles as $file) {
        $eeg = array();
        $physiologicalFileID = $file['PhysiologicalFileID'];
        $physiologicalFileObj = new \BIDSFile($physiologicalFileID);
        $fileName = basename($physiologicalFileObj->getParameter('File'));
        $task = getTaskInfo($physiologicalFileObj);
        $details = getFileDetails($physiologicalFileObj);
        $eeg['name'] = $fileName;
        $eeg['task'] = $task;
        $eeg['details'] = $details;
        $fileCollection['files'][] = $eeg;
    }
    return $fileCollection;
}

function getFileDetails($physiologicalFileObj)
{
    $details = array();
    $details['task_description'] = $physiologicalFileObj->getParameter('TaskDescription');
    $details['instructions'] = $physiologicalFileObj->getParameter('Instructions');
    $details['eeg_ground'] = '';
    $details['trigger_count'] = $physiologicalFileObj->getParameter('TriggerChannelCount');
    $details['eeg_placement_scheme'] = $physiologicalFileObj->getParameter('EEGPlacementScheme');
    $details['record_type'] = $physiologicalFileObj->getParameter('Recording_type');
    $details['cog_atlas_id'] = $physiologicalFileObj->getParameter('CogAtlasID');
    $details['cog_poid'] = $physiologicalFileObj->getParameter('CogPOID');
    $details['institution_name'] = $physiologicalFileObj->getParameter('InstitutionName');
    $details['institution_address'] = $physiologicalFileObj->getParameter('InstitutionAddress');
    $details['device_serial_number'] = $physiologicalFileObj->getParameter('DeviceSerialNumber');
    $details['misc_channel_count'] = $physiologicalFileObj->getParameter('MiscChannelCount');
    $details['manufacturer'] = $physiologicalFileObj->getParameter('Manufacturer');
    $details['manufacturer_model_name'] = $physiologicalFileObj->getParameter('ManufacturerModelName');
    $details['cap_manufacturer'] = $physiologicalFileObj->getParameter('ManufacturerCapModelName');
    $details['cap_model_name'] = '';
    $details['hardware_filters'] = $physiologicalFileObj->getParameter('HardwareFilters');
    $details['recording_duration'] = $physiologicalFileObj->getParameter('RecordingDuration');
    $details['epoch_length'] = $physiologicalFileObj->getParameter('EpochLength');
    $details['device_version'] = $physiologicalFileObj->getParameter('DeviceSoftwareVersion');
    $details['subject_artifact_description'] = $physiologicalFileObj->getParameter('SubjectArtifactDescription');
    return $details;
}

function getTaskInfo($physiologicalFileObj){

    $taskInfo = array();
    $taskInfo['sampling_frequency'] =
        $physiologicalFileObj->getParameter('SamplingFrequency');
    $taskInfo['channels']  = getChannels($physiologicalFileObj);
    $taskInfo['reference'] =
        $physiologicalFileObj->getParameter('EEGReference');
    $taskInfo['powerline_frequency'] =
        $physiologicalFileObj->getParameter('PowerLineFrequency');
    return $taskInfo;
}

function getChannels($physiologicalFileObj)
{
    $channels = array();
    $eegChannel['name'] = 'EEGChannelCount';
    $eegChannel['value'] =
        $physiologicalFileObj->getParameter('EEGChannelCount');
    $channels = $eegChannel;
    $eogChannel['name'] = 'EOGChannelCount';
    $eogChannel['value'] =
        $physiologicalFileObj->getParameter('EOGChannelCount');
    $channels[] = $eogChannel;
    $ecgChannel['name'] = 'ECGChannelCount';
    $ecgChannel['value'] =
        $physiologicalFileObj->getParameter('ECGChannelCount');
    $channels[] = $ecgChannel;
    $emgChannel['name'] = 'EMGChannelCount';
    $emgChannel['value'] =
        $physiologicalFileObj->getParameter('EMGChannelCount');
    $channels[]= $emgChannel;
    return $channels;
}



//{
//  eeg: {
//    patient: {
//      info: {
//        pscid: 'cbm001',
//        dccid: '649990',
//        visit_label: 'V01',
//        site: 'CBM'.
//        dob: '',
//        gender: '',
//        output_type: '',
//        subproject: ''
//      }
//    },
//    database: [
//     {
//      file: {
//        name: '',
//        task: {
//          frequency: {
//            sampling: 512,
//            powerline: '60Hz'
//          },
//          channel: [
//            {
//              name: 'EEG Channel Count',
//              value: 128
//            },
//            {
//              name: 'EOG Channel Count',
//              value: 0
//            },
//            {
//              name: 'EOG Channel Count',
//              value: 0
//            },
//            {
//              name: 'ECG Channel Count',
//              value: 0
//            },
//            {
//              name: 'EMG Channel Count',
//              value: 0
//            }
//          ],
//          reference: 'Common'
//        },
//      },
//      details: {
//        task: {
//          description: 'Visual presentation of oval cropped face and house images both upright and inverted. Rare left or right half oval checkerboards were presented as targets for keypress response.'
//        },
//        instructions: '',
//        eeg: {
//          ground: '',
//          placement_scheme: 'Custom equidistant 128 channel BioSemi montage',
//        },
//        trigger_count: '0',
//        record_type: '',
//        cog: {
//          atlas_id: '',
//          poid: '',
//        },
//        institution: {
//          name: '',
//          address: '',
//        },
//        misc: {
//          channel_count: '',
//        }
//        manufacturer: {
//          name: '',
//          model_name: ''
//        },
//        cap: {
//          manufacturer: '',
//          model_name: '',
//        }
//        hardware_filters: '',
//        recording_duration: '',
//        epoch_length: '',
//        device: {
//          version: '',
//          serial_number: '',
//        },
//        subject_artifact_description: ''
//      }
//     }
//    ]
//  }
//}";
//
