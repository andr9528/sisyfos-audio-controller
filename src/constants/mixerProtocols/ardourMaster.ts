import { IMixerProtocol } from '../MixerProtocolInterface';

export const ArdourMaster: IMixerProtocol = {
    protocol: 'OSC',
    label: 'Ardour DAW - Master Mode',
    mode: "master", //master (ignores mixers faderlevel, and use faderlevel as gain preset),
                    //client (use feedback from mixers fader level)
    leadingZeros: false,
    pingCommand: [
        {
            mixerMessage: "/strip/list",
            value: "",
            type: "",
            min: 0,
            max: 1,
            zero: 0.75
        }
    ],
    pingTime: 9500,
    initializeCommands: [
        {
            mixerMessage: "/strip/list",
            value: "",
            type: "",
            min: 0,
            max: 1,
            zero: 0.75
        }
    ],
    channelTypes: [{
        channelTypeName: 'CH',
        channelTypeColor: '#2f2f2f',
        fromMixer: {
            CHANNEL_FADER_LEVEL: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1.5, zero: 1}],
            CHANNEL_OUT_GAIN: [{ mixerMessage: '/strip/fader/{channel}', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            CHANNEL_VU: [{ mixerMessage: '/strip/meter/{channel}', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            CHANNEL_NAME: [{ mixerMessage: '/strip/name/{channel}', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            PFL: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1.5, zero: 1}],
            AUX_SEND: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1.5, zero: 1}],
        },
        toMixer: {
            CHANNEL_FADER_LEVEL: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1.5, zero: 1}],
            CHANNEL_OUT_GAIN: [{ mixerMessage: '/strip/fader/{channel}', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            CHANNEL_NAME: [{ mixerMessage: '/strip/name/{channel}', value: 0, type: 'f', min: 0, max: 1, zero: 0.75}],
            PFL_ON: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1.5, zero: 1}],
            PFL_OFF: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1.5, zero: 1}],
            AUX_SEND: [{ mixerMessage: 'none', value: 0, type: 'f', min: 0, max: 1.5, zero: 1}],
    }
    }],
    fader: {
        min: 0,
        max: 1,
        zero: 0.75,
        step: 0.01,
    },
    meter: {
        min: 0,
        max: 1,
        zero: 0.85,
        test: 0.75,
    },
}
