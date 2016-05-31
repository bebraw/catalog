import React, { PropTypes } from 'react';
import {catalogShape} from '../CatalogPropTypes';
import Radium from 'radium';
import Frame from '../components/Frame/Frame';
import Hint from '../specimens/Hint';
import Specimen from '../components/Specimen/Specimen';
import HighlightedCode from '../components/HighlightedCode/HighlightedCode';
import runscript from '../utils/runscript';

const PADDING = 3;
const SIZE = 20;
const SCREENSIZES = [
  {name: 'small', width: 360, height: 640},
  {name: 'medium', width: 1024, height: 768},
  {name: 'large', width: 1440, height: 900},
  {name: 'xlarge', width: 1920, height: 1080}
];
const INSTRUCTION =
`theme: {
  //...
  devices: [
    {name: 'watch-42mm', width: 312, height: 390}
  ],
  //...
},
`;

const getScreensizes = (customSizes) => [
  ...SCREENSIZES,
  ...customSizes
];

function getStyle(theme) {
  return {
    container: {
      border: '1px solid #eee',
      borderRadius: '2px',
      boxSizing: 'border-box',
      position: 'relative',
      flexBasis: '100%',
      marginTop: '20px'
    },
    toggle: {
      border: PADDING + 'px solid transparent',
      color: theme.lightColor,
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: theme.fontMono,
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      height: SIZE + 'px',
      lineHeight: SIZE + 'px',
      padding: PADDING + 'px',
      position: 'absolute',
      right: -PADDING + 'px',
      top: -(SIZE + 2 * PADDING) + 'px',
      userSelect: 'none',
      ':hover': {
        color: theme.textColor
      }
    },
    source: {
      borderTop: '1px solid #eee',
      boxSizing: 'border-box',
      width: '100%',
      height: 'auto'
    },
    content: {
      background: `url(${theme.checkerboardPatternLight})`,
      boxSizing: 'border-box',
      display: 'block',
      padding: 20,
      position: 'relative',
      width: '100%'
    },
    light: {
      background: `url(${theme.checkerboardPatternLight})`
    },
    dark: {
      background: `url(${theme.checkerboardPatternDark})`
    },
    plain: {
      background: 'transparent',
      padding: 0
    },
    plain_light: {
      background: theme.bgLight,
      padding: '20px'
    },
    plain_dark: {
      background: theme.bgDark,
      padding: '20px'
    },
    device: {
      background: theme.bgLight,
      padding: '15px',
      textAlign: 'center'
    },
    screensizes: {
      display: 'flex',
      fontFamily: theme.fontMono,
      position: 'absolute',
      left: -PADDING + 'px',
      top: -(SIZE + 2 * PADDING) + 'px'
    },
    screensize: {
      margin: '0 20px 0 0',
      cursor: 'pointer',
      userSelect: 'none',
      color: theme.lightColor
    },
    screensizeActive: {
      color: theme.textColor
    }
  };
}

class Html extends React.Component {
  constructor() {
    super();
    this.state = {
      viewSource: false,
      parentWidth: 0,
      screenSize: SCREENSIZES[0]
    };
  }

  componentDidMount() {
    const {runScript, frame, device, catalog: {theme}} = this.props;
    let devices = theme.devices ? getScreensizes( theme.devices ) : SCREENSIZES;
    if (runScript) {
      Array.from(this.refs.specimen.querySelectorAll('script'))
        .forEach(runscript);
    } else if (frame || device) {
      this.getWidth();
      device !== 'select' ? this.setSize( devices.find(sc=>sc.name === device) || SCREENSIZES[0] ) : null;
    }
  }

  getWidth() {
    this.setState({parentWidth: this.refs.specimen.getBoundingClientRect().width});
  }

  toggleSource() {
    this.setState({viewSource: !this.state.viewSource});
  }

  setSize(screenSize) {
    this.setState({screenSize: screenSize});
  }

  render() {
    const {catalog: {theme}, children, frame, ...options} = this.props;
    const {parentWidth, screenSize} = this.state;
    const styles = getStyle(theme);
    let devices = theme.devices ? getScreensizes( theme.devices ) : SCREENSIZES;
    let deviceFoundInList = devices.find(sc=>sc.name === options.device);

    const exampleStyles = {
      ...(options.plain ? styles.plain : null),
      ...(options.light ? styles.light : null),
      ...(options.dark ? styles.dark : null),
      ...(options.plain && options.light ? styles.plain_light : null),
      ...(options.plain && options.dark ? styles.plain_dark : null),
      ...(options.device ? styles.device : null)
    };

    let source = this.state.viewSource
      ? <div style={styles.source} ><HighlightedCode language='markup' code={children} theme={theme} /></div>
      : null;

    let toggle = !options.noSource
      ? <div style={styles.toggle} onClick={this.toggleSource.bind(this)}>&lt;&gt;</div>
      : null;

    let responsive = options.device === 'select' || deviceFoundInList === undefined
      ? <div style={styles.screensizes}>
          { devices.map( (sc, i) => <div
            key={i}
            style={{...styles.screensize, ...(sc.name === screenSize.name ? styles.screensizeActive : null) }}
            onClick={this.setSize.bind(this, sc)}>
              {sc.name}
              {sc.name === screenSize.name
                ? <small>(@{screenSize.width}x{screenSize.height}{(sc.width > parentWidth) && ' scaled'})</small>
                : <small>{(sc.width > parentWidth) && '(scaled)'}</small>
              }
            </div>
          )}
        </div>
      : <div style={styles.screensizes}>
          {
            options.device && screenSize.width > parentWidth
            ? <div>{options.device} <small>(@{screenSize.width}x{screenSize.height}, scaled)</small></div>
            : <div>{options.device} <small>(@{screenSize.width}x{screenSize.height})</small></div>
          }
        </div>;

    const content = <div dangerouslySetInnerHTML={{__html: children}} />;

    return (
      <div ref='specimen' style={styles.container} className='cg-Specimen-Html'>
        {options.device ? responsive : null} {toggle}
        <div style={{...styles.content, ...exampleStyles}}>
          {frame || options.device
            ? <Frame width={options.device ? screenSize.width : parentWidth} parentWidth={parentWidth} height={options.device ? screenSize.height : void 0}>
                {content}
              </Frame>
            : content }
        </div>
        {source}
        { options.device && !deviceFoundInList && options.device !== 'select' &&
          <Hint>
            There was no match for a device called <b>'{options.device}'</b>.
            Please make sure to add custom devices in the catalog configuration like so:
            <pre>{INSTRUCTION}</pre>
          </Hint>
        }
      </div>
    );
  }
}

Html.propTypes = {
  children: PropTypes.string.isRequired,
  catalog: catalogShape.isRequired,
  device: PropTypes.string,
  runScript: PropTypes.bool,
  plain: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  noSource: PropTypes.bool,
  frame: PropTypes.bool
};


export default Specimen(undefined, undefined, {withChildren: true})(Radium(Html));
