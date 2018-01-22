import React from 'react';
import PropTypes from 'prop-types';

import {
  ColorSettings,
  DisplaySettings,
  HighlightSettings,
  SettingWrapper,
  ReturnButton,
  SaveButton,
  RestoreButton,
  SizeSettings,
} from './components';
import { defaultConfig } from '../../datasets';

class ConfigPage extends React.Component {
  state = {
    ...this.props.config,
  };

  setColor = (id, color) => {
    this.setState(state => ({
      colors: { ...state.colors, [id]: color },
    }));
  };

  setDisplay = display => this.setState({ display });

  setLabel = (id, label) => {
    this.setState(state => ({
      labels: { ...state.labels, [id]: label },
    }));
  };

  setRadius = radius =>
    this.setState(state => ({ animation: { ...state.animation, radius } }));

  setScale = scale => this.setState({ scale });

  setSpeed = speed =>
    this.setState(state => ({ animation: { ...state.animation, speed } }));

  setThreshold = threshold =>
    this.setState(state => ({ animation: { ...state.animation, threshold } }));

  restoreDefault = type => {
    if (!confirm('Are you sure you want to restore default settings?')) {
      return;
    }

    if (type) {
      this.setState({
        [type]: defaultConfig[type],
      });
    } else {
      this.setState({ ...defaultConfig });
    }
    this.props.saveConfig({ ...this.state });
  };

  render() {
    const { toggleConfig, saveConfig, addAnimation } = this.props;
    const config = this.state;

    addAnimation(config.animation.radius);

    return (
      <div>
        <SaveButton save={() => saveConfig({ ...this.state })} />
        <ReturnButton toggleConfig={toggleConfig} />

        <div className="title small-vertical-spacing">Widget Configuration</div>

        <hr />

        <SettingWrapper
          SettingComponent={
            <ColorSettings
              setColor={this.setColor}
              setLabel={this.setLabel}
              config={config}
            />
          }
          title="Colors and Labels"
          restoreDefault={() => this.restoreDefault('colors')}
        />

        <hr style={{ clear: 'both' }} />

        <SettingWrapper
          SettingComponent={
            <DisplaySettings
              setDisplay={this.setDisplay}
              config={config}
            />
          }
          title="Display"
          restoreDefault={() => this.restoreDefault('display')}
        />

        <hr style={{ clear: 'both' }} />

        <SettingWrapper
          SettingComponent={
            <SizeSettings setScale={this.setScale} config={config} />
          }
          title="Size"
          restoreDefault={() => this.restoreDefault('scale')}
        />

        <hr style={{ clear: 'both' }} />

        <SettingWrapper
          SettingComponent={
            <HighlightSettings
              setThreshold={this.setThreshold}
              setSpeed={this.setSpeed}
              setRadius={this.setRadius}
              config={config}
            />
          }
          title="Highlighting and Animation"
          restoreDefault={() => this.restoreDefault('animation')}
        />

        <hr style={{ clear: 'both' }} />

        <SaveButton save={() => saveConfig({ ...this.state })} />
        <ReturnButton toggleConfig={toggleConfig} />
        <RestoreButton
          label="Restore Defaults"
          restoreDefault={() => this.restoreDefault()}
        />
      </div>
    );
  }
}

ConfigPage.propTypes = {
  toggleConfig: PropTypes.func.isRequired,
  saveConfig: PropTypes.func.isRequired,
  config: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  ).isRequired,
  addAnimation: PropTypes.func.isRequired,
};

export default ConfigPage;
