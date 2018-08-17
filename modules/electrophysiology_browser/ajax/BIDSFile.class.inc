<?php
/**
 * Contains the BIDSFile class used for electrophysiological browser
 *
 * PHP Version 7
 *
 * @category EEG
 * @package  EEG
 * @author   Loris Team <loris.mni@bic.mni.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
/**
 * This object represents a BIDS file in the physiological_file table.
 *
 * @category EEG
 * @package  EEG
 * @author   Loris Team <loris.mni@bic.mni.mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris/
 */
class BIDSFile
{
    var $fileData   = array();
    var $parameters = array();
    
    /**
     * Construct a BIDSFile and its parameters
     *
     * @param integer $physiologicalFileID The PhysiologicalFileID to be loaded
     */
    function __construct($physiologicalFileID)
    {
        $db     =& Database::singleton();
        $params = array('PFID' => $physiologicalFileID);
        $query = "SELECT * FROM physiological_file WHERE PhysiologicalFileID=:PFID";
        $queryData = $db->pselectRow($query, $params);
        // Stores each property (column) of the file 
        foreach ($queryData AS $fieldName=>$fieldValue) {
            $this->fileData[$fieldName] = $fieldValue;
        }
        $query        = "SELECT Name, Value
            FROM physiological_parameter_file as ppf, parameter_type as pt
            WHERE ppf.ParameterTypeID=pt.ParameterTypeID AND
            PhysiologicalFileID=:PFID";
        // Stores each parameter of the file
        $parameterData = $db->pselect($query, $params);
         
        foreach ($parameterData AS $parameter) {
            $this->parameters[$parameter['Name']] = $parameter['Value'];
        }
    }
    /**
     * Gets a parameter for this file from the appropriate place
     *
     * @param string $parameterName The parameter to be retrieved
     *
     * @return string The value of the parameter
     */
    function getParameter($parameterName)
    {
        // Returns $parameterName if it is part of the BIDSFile properties
        // Otherwise returns $parameterName if it is part of the BIDSFile parameters
        // Otherwise, returns an empty string
        return $this->fileData[$parameterName] ??
            ($this->parameters[$parameterName] ?? '');
       
    }
}
