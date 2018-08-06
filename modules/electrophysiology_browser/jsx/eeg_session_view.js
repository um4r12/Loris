/**
 * This is the React class for the eeg_session.
 */

import StaticDataTable from 'jsx/StaticDataTable';
import Panel from "jsx/Panel";

class EEGSessionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: {
        params: {
          sessionID: '',
          outputType: ''
        }
      }

    };

    // Bind component instance to custom methods
    this.fetchData = this.fetchData.bind(this);
    this.collectParams = this.collectParams.bind(this);
  }

  /**
   * Fetch data when component mounts.
   */
  componentDidMount() {
    this.collectParams();
    this.fetchData();
  }

  /**
   * Post-Render when we can access the DOM.
   */
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  /**
   * Retrieve params from the browser URL and save it in state.
   */
  collectParams() {
    const url = new URL(window.location.href);
    const outputType = url.searchParams.get('outputType');
    const params = {
      sessionID: url.searchParams.get('sessionID'),
      outputType: outputType === null ? 'all_types' : outputType
    };
    this.state.url.params = params;
    console.log(JSON.stringify(params));
  }

  /**
   * Retrieve data from the provided URL and save it in state.
   */
  fetchData() {

    $.ajax(loris.BaseURL + '/electrophysiology_browser/ajax/get_eeg_session_data.php', {
      method: 'GET',
      dataType: 'json',
      data: this.state.url.params,
      success: function(data) {
        console.log('ajax (get) - success!');
        data = {
          eeg: {
            patient: {
              info: {
                pscid: 'cbm001',
                dccid: '649990',
                visit_label: 'V01',
                site: 'CBM',
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
                  },
                  manufacturer: {
                    name: '',
                    model_name: ''
                  },
                  cap: {
                    manufacturer: '',
                    model_name: '',
                  },
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
      };
        console.log(data);
      }.bind(this),
      error: function(error) {
        console.log('ajax (get) - error!');
        console.log(JSON.stringify(error));
      }
    });
  }

  /**
   * Render the HTML.
   */
  render() {

    return (
      <div>
        <div id='lorisworkspace'>
          <StaticDataTable
            Headers={['PSCID', 'DCCID', 'Visit Label', 'Site', 'DOB', 'Gender', 'Output Type', 'Subproject']}
            Data={[['AAA0003', '284432', 'V01', 'AAA', '2004-06-03', 'Male', 'native', 'Control Group']]}
            freezeColumn='PSCID'
            Hide={{rowsPerPage:true, downloadCSV:true, defaultColumn:true}}
          />
          <div>
            <Panel id="filename_panel" title="FILENAME">
              <div className={'container-fluid'}>
                <div className={'row'}>
                  <div className={'col-sm-4'} style={{minWidth: '300px', height: '250px', paddingBottom: '10px'}}>
                    ..insert head image here..
                  </div>
                  <div className={'col-sm-4'} style={{minWidth: '300px', paddingBottom: '10px'}}>
                    <table style={{width: '100%', minWidth: '300px'}}>
                      <caption style={{
                        backgroundColor:'#074785',
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 15
                      }}>Task Name: FaceHousCheck</caption>
                      <tr style={{border: '1px solid gray', height: '30px'}}>
                        <th scope="row" style={{color: '#074785', paddingLeft:'5px'}}>Sampling Frequency</th>
                        <td>512</td>
                      </tr>
                      <tr style={{border: '1px solid gray', height: '30px'}}>
                        <th scope="row" style={{color: '#074785', paddingLeft:'5px'}}>EEG Channel Count</th>
                        <td>128</td>
                      </tr>
                      <tr style={{border: '1px solid gray', height: '30px'}}>
                        <th scope="row" style={{color: '#074785', paddingLeft:'5px'}}>EOG Channel Count</th>
                        <td>0</td>
                      </tr>
                      <tr style={{border: '1px solid gray', height: '30px'}}>
                        <th scope="row" style={{color: '#074785', paddingLeft:'5px'}}>ECG Channel Count</th>
                        <td>0</td>
                      </tr>
                      <tr style={{border: '1px solid gray', height: '30px'}}>
                        <th scope="row" style={{color: '#074785', paddingLeft:'5px'}}>EMG Channel Count</th>
                        <td>0</td>
                      </tr>
                      <tr style={{border: '1px solid gray', height: '30px'}}>
                        <th scope="row" style={{color: '#074785', paddingLeft:'5px'}}>EEG Reference</th>
                        <td>Common</td>
                      </tr>
                      <tr style={{border: '1px solid gray', height: '30px'}}>
                        <th scope="row" style={{color: '#074785', paddingLeft:'5px'}}>Powerline Frequency</th>
                        <td>60Hz</td>
                      </tr>
                    </table>
                  </div>
                  <div className={'col-sm-4'} style={{minWidth: '300px', paddingBottom: '10px'}}>
                    <div className={'form-group row flex-v-center'}>
                      <div className={'col-xs-5'} style={{textAlign: 'center', verticalAlign: 'middle', lineHeight: '40px', color: '#074785', fontWeight: 'bold'}}>EEG File</div>
                      <div className={'col-xs-2'}><button className={'button_download_eeg'}>Download</button></div>
                    </div>
                    <div className={'form-group row flex-v-center'}>
                      <div className={'col-xs-5'} style={{textAlign: 'center', verticalAlign: 'middle', lineHeight: '40px', color: '#074785', fontWeight: 'bold'}}>Electrode Info</div>
                      <div className={'col-xs-2'}><button className={'button_download_eeg'}>Download</button></div>
                    </div>
                    <div className={'form-group row flex-v-center'}>
                      <div className={'col-xs-5'} style={{textAlign: 'center', verticalAlign: 'middle', lineHeight: '40px', color: '#074785', fontWeight: 'bold'}}>Channels Info</div>
                      <div className={'col-xs-2'}><button className={'button_download_eeg'}>Download</button></div>
                    </div>
                    <div className={'form-group row flex-v-center'}>
                      <div className={'col-xs-5'} style={{textAlign: 'center', verticalAlign: 'middle', lineHeight: '40px', color: '#074785', fontWeight: 'bold'}}>Events</div>
                      <div className={'col-xs-2'}><button className={'button_download_eeg'}>Download</button></div>
                    </div>
                    <div className={'form-group row flex-v-center'}>
                      <div className={'col-xs-5'} style={{textAlign: 'center', verticalAlign: 'middle', lineHeight: '40px', color: '#074785', fontWeight: 'bold'}}>All Files</div>
                      <div className={'col-xs-2'}><button className={'button_download_eeg'}>Download</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel id="data_panel" title="DATA DETAILS">
              <div className={'container-fluid'}>
                <div className={'row'}>
                  <div className={'col-sm-6'}>
                    <table style={{minWidth: '300px', maxWidth: '100%'}}>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Task Description</th>
                        <td style={{padding:'10px'}}>Visual presentation of oval cropped face and house images both upright and inverted. Rare left or right half oval checkerboards were presented as targets for keypress response.</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Instructions</th>
                        <td style={{padding:'10px'}}></td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>EEG Ground</th>
                        <td style={{padding:'10px'}}></td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Trigger Count</th>
                        <td style={{padding:'10px'}}>0</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>EEG Placement Scheme</th>
                        <td style={{padding:'10px'}}>Custom equidistant 128 channel BioSemi montage established in coordination with Judith Schedden McMaster University</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Record Type</th>
                        <td style={{padding:'10px'}}>Continuous</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>CogAtlas ID</th>
                        <td style={{padding:'10px'}}></td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>CogPOID</th>
                        <td style={{padding:'10px'}}></td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Institution Name</th>
                        <td style={{padding:'10px'}}>Brock University</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Institution Address</th>
                        <td style={{padding:'10px'}}>500 Glenrifge Ave, St.Catharines, Ontario</td>
                      </tr>
                    </table>
                  </div>

                  <div className={'col-sm-6'}>
                    <table style={{minWidth: '300px', maxWidth: '100%'}}>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Device Serial Number</th>
                        <td style={{padding:'10px'}}></td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Misc Channel Count</th>
                        <td style={{padding:'10px'}}>0</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Manufacturer</th>
                        <td style={{padding:'10px'}}>BioSemi</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Manufacturer Model Name</th>
                        <td style={{padding:'10px'}}>Active Two</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Cap Manufacturer</th>
                        <td style={{padding:'10px'}}>Electro Cap International</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Cap Model Name</th>
                        <td style={{padding:'10px'}}></td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Hardware Filters</th>
                        <td style={{padding:'10px'}}>DC to Nyquist 512Hz</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Recording Duration</th>
                        <td style={{padding:'10px'}}>2045</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Epoch Length</th>
                        <td style={{padding:'10px'}}>Inf</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Device Version</th>
                        <td style={{padding:'10px'}}>NI ActiView 532-Lores</td>
                      </tr>
                      <tr style={{border: '1px solid gray', minHeight: '30px'}}>
                        <th scope="row" style={{color: '#074785', padding:'10px'}}>Subject Artifact Description</th>
                        <td style={{padding:'10px'}}></td>
                      </tr>
                    </table>
                  </div>

                </div>
              </div>
            </Panel>

          </div>
        </div>
      </div>
    );
  }
}
EEGSessionView.propTypes = {
  module: React.PropTypes.string.isRequired,
};
EEGSessionView.defaultProps = {
  module: ''
};

/**
 * Render EEGSession on page load.
 */
window.onload = function() {
  const eegSessionView = (
    <EEGSessionView
      module={'eegSessionView'}
    />
  );
  // Create a wrapper div in which react component will be loaded.
  const EEGSessionViewAppDOM = document.createElement('div');
  EEGSessionViewAppDOM.id = 'eegSessionView';

  // Append wrapper div to page content.
  const rootDOM = document.getElementById('lorisworkspace');
  rootDOM.appendChild(EEGSessionViewAppDOM);

  // Render the React Component.
  ReactDOM.render(eegSessionView, document.getElementById('eegSessionView'));
};