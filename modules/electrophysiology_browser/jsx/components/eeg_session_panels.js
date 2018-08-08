/**
 * This file contains React component for Electrophysiology module.
 *
 * @author Alizée Wickenheiser.
 * @version 0.0.1
 *
 */

import Panel from 'jsx/Panel';

class FilePanel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };

  }

  /**
   * Component did mount.
   */
  componentDidMount() {

  }

  /**
   * Post-Render when we can access the DOM.
   */
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  render() {

    const styles = {
      button: {
        download: {
          height: '40px',
          width: '140px',
          outline: 'none',
          color: '#1c4781',
          cursor: 'pointer',
          borderRadius: '40px',
          textDecoration: 'none',
          backgroundColor: '#ffffff',
          border: '1px solid #1c4781'
        }
      },
      div: {
        container: {
          details: {
            height: '250px',
            minWidth: '300px',
            paddingBottom: '10px'
          },
          table: {
            minWidth: '300px',
            paddingBottom: '10px'
          },
          download: {
            minWidth: '300px',
            paddingBottom: '10px'
          }
        },
        element: {
          download_title: {
            color: '#074785',
            fontWeight: 'bold',
            lineHeight: '40px',
            textAlign: 'center',
            verticalAlign: 'middle',
          }
        }
      },
      table: {
        style: {
          width: '100%',
          minWidth: '300px'
        },
        caption: {
          fontSize: 15,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor:'#074785',
        },
        row: {
          height: '30px',
          border: '1px solid gray'
        },
        header: {
          color: '#074785',
          paddingLeft: '5px'
        }
      }
    };

    return(
      <Panel id={this.props.id} title={this.props.title}>
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-sm-4'} style={styles.div.container.details}>
              ..insert head image here..
            </div>
            <div className={'col-sm-4'} style={styles.div.container.table}>
              <table style={styles.table.style}>
                <caption style={styles.table.caption}>Task Name: FaceHousCheck</caption>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Sampling Frequency</th>
                  <td>512</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>EEG Channel Count</th>
                  <td>128</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>EOG Channel Count</th>
                  <td>0</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>ECG Channel Count</th>
                  <td>0</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>EMG Channel Count</th>
                  <td>0</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>EEG Reference</th>
                  <td>Common</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Powerline Frequency</th>
                  <td>60Hz</td>
                </tr>
              </table>
            </div>
            <div className={'col-sm-4'} style={styles.div.container.download}>
              <div className={'form-group row flex-v-center'}>
                <div className={'col-xs-5'} style={styles.div.element.download_title}>EEG File</div>
                <div className={'col-xs-2'}><button style={styles.button.download}>Download</button></div>
              </div>
              <div className={'form-group row flex-v-center'}>
                <div className={'col-xs-5'} style={styles.div.element.download_title}>Electrode Info</div>
                <div className={'col-xs-2'}><button style={styles.button.download}>Download</button></div>
              </div>
              <div className={'form-group row flex-v-center'}>
                <div className={'col-xs-5'} style={styles.div.element.download_title}>Channels Info</div>
                <div className={'col-xs-2'}><button style={styles.button.download}>Download</button></div>
              </div>
              <div className={'form-group row flex-v-center'}>
                <div className={'col-xs-5'} style={styles.div.element.download_title}>Events</div>
                <div className={'col-xs-2'}><button style={styles.button.download}>Download</button></div>
              </div>
              <div className={'form-group row flex-v-center'}>
                <div className={'col-xs-5'} style={styles.div.element.download_title}>All Files</div>
                <div className={'col-xs-2'}><button style={styles.button.download}>Download</button></div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    );
  }
}
FilePanel.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  data: React.PropTypes.object
};
FilePanel.defaultProps = {
  id: 'file_panel',
  title: 'FILENAME',
  data: {}
};

class DetailsPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };

  }

  render() {

    const styles = {
      panel: {
        padding: 0
      },
      container: {
        task: {
          padding: 0
        },
        device: {
          padding: 0
        }
      },
      table: {
        style: {
          maxWidth: '100%',
          minWidth: '300px'
        },
        row: {
          minHeight: '30px',
          border: '1px solid gray'
        },
        header: {
          padding:'10px',
          color: '#074785'
        },
        data: {
          padding:'10px'
        }
      }
    };

    return(
      <Panel id={this.props.id} title={this.props.title} style={styles.panel}>
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-sm-6'} style={styles.container.task}>
              <table style={styles.table.style}>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Task Description</th>
                  <td style={styles.table.data}>Visual presentation of oval cropped face and house images both upright and inverted. Rare left or right half oval checkerboards were presented as targets for keypress response.</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Instructions</th>
                  <td style={styles.table.data}></td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>EEG Ground</th>
                  <td style={styles.table.data}></td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Trigger Count</th>
                  <td style={styles.table.data}>0</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>EEG Placement Scheme</th>
                  <td style={styles.table.data}>Custom equidistant 128 channel BioSemi montage established in coordination with Judith Schedden McMaster University</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Record Type</th>
                  <td style={styles.table.data}>Continuous</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>CogAtlas ID</th>
                  <td style={styles.table.data}></td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>CogPOID</th>
                  <td style={styles.table.data}></td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Institution Name</th>
                  <td style={styles.table.data}>Brock University</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Institution Address</th>
                  <td style={styles.table.data}>500 Glenrifge Ave, St.Catharines, Ontario</td>
                </tr>
              </table>
            </div>

            <div className={'col-sm-6'} style={styles.container.device}>
              <table style={styles.table.style}>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Device Serial Number</th>
                  <td style={styles.table.data}></td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Misc Channel Count</th>
                  <td style={styles.table.data}>0</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Manufacturer</th>
                  <td style={styles.table.data}>BioSemi</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Manufacturer Model Name</th>
                  <td style={styles.table.data}>Active Two</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Cap Manufacturer</th>
                  <td style={styles.table.data}>Electro Cap International</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Cap Model Name</th>
                  <td style={styles.table.data}></td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope="row" style={styles.table.header}>Hardware Filters</th>
                  <td style={styles.table.data}>DC to Nyquist 512Hz</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Recording Duration</th>
                  <td style={styles.table.data}>2045</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Epoch Length</th>
                  <td style={styles.table.data}>Inf</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Device Version</th>
                  <td style={styles.table.data}>NI ActiView 532-Lores</td>
                </tr>
                <tr style={styles.table.row}>
                  <th scope='row' style={styles.table.header}>Subject Artifact Description</th>
                  <td style={styles.table.data}></td>
                </tr>
              </table>
            </div>

          </div>
        </div>
      </Panel>
    );
  }

}
DetailsPanel.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  data: React.PropTypes.object
};
DetailsPanel.defaultProps = {
  id: 'data_panel',
  title: 'DATA DETAILS',
  data: {

  }
};

export {
  FilePanel,
  DetailsPanel
}