/**
 * This is the React class for the eeg_session.
 */
class EEGSession extends React.Component {
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
        console.log(JSON.stringify(data));
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
          Hello
        </div>
      </div>
    );
  }
}
EEGSession.propTypes = {
  module: React.PropTypes.string.isRequired,
};
EEGSession.defaultProps = {
  module: ''
};

/**
 * Render EEGSession on page load.
 */
window.onload = function() {
  const eegSession = (
    <EEGSession
      module={'eegSession'}
    />
  );
  // Create a wrapper div in which react component will be loaded.
  const EEGSessionAppDOM = document.createElement('div');
  EEGSessionAppDOM.id = 'eegSession';

  // Append wrapper div to page content.
  const rootDOM = document.getElementById('lorisworkspace');
  rootDOM.appendChild(EEGSessionAppDOM);

  // Render the React Component.
  ReactDOM.render(eegSession, document.getElementById('eegSession'));
};