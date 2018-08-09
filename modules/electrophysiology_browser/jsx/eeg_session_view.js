/**
 * This is the React class for the eeg_session.
 *
 * @author Alizée Wickenheiser.
 * @version 0.0.1
 *
 */

import StaticDataTable from 'jsx/StaticDataTable';
import {FilePanel, DetailsPanel} from './components/eeg_session_panels';

class EEGSessionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: {
        params: {
          sessionID: '',
          outputType: ''
        }
      },
      patient: {
        info: {
          pscid: 'cbm001',
          dccid: '649990',
          visit_label: 'V01',
          site: 'CBM',
          dob: '1990-09-18',
          gender: 'Female',
          output_type: 'native',
          subproject: 'Control Group'
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
            record_type: 'Continuous',
            cog: {
              atlas_id: '',
              poid: '',
            },
            institution: {
              name: 'Brock University',
              address: '500 Glenrifge Ave, St. Catharines, Ontario',
            },
            misc: {
              channel_count: '0',
            },
            manufacturer: {
              name: 'BioSemi',
              model_name: 'Active Two'
            },
            cap: {
              manufacturer: 'Electro Cap International',
              model_name: '',
            },
            hardware_filters: '',
            recording_duration: '2045',
            epoch_length: 'Inf',
            device: {
              version: 'NI ActiView 532-Lores',
              serial_number: '',
            },
            subject_artifact_description: ''
          }
        }
      ]
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

    let database = [];
    for (let i=0; i<10; i++) {
      database.push(
        <div>
          <FilePanel
            id={'filename_panel_' + i}
            title={'FILENAME (' + i + ')'}
            data={this.state.database[0].file}
          />

          <DetailsPanel
            id={'data_panel_' + i}
            title={'DATA DETAILS (' + i + ')'}
            data={this.state.database[0].details}
          />
        </div>
      );
    }

    return (
      <div id='lorisworkspace'>
        <StaticDataTable
          Headers={['PSCID', 'DCCID', 'Visit Label', 'Site', 'DOB', 'Gender', 'Output Type', 'Subproject']}
          Data={[
            [
              this.state.patient.info.pscid,
              this.state.patient.info.dccid,
              this.state.patient.info.visit_label,
              this.state.patient.info.site,
              this.state.patient.info.dob,
              this.state.patient.info.gender,
              this.state.patient.info.output_type,
              this.state.patient.info.subproject
            ]
          ]}
          freezeColumn='PSCID'
          Hide={{rowsPerPage:true, downloadCSV:true, defaultColumn:true}}
        />

        {database}

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