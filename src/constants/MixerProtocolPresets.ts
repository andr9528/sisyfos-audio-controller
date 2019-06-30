import { ArdourMaster } from './mixerProtocols/ardourMaster';
import { Reaper } from './mixerProtocols/reaper';
import { ReaperMaster } from './mixerProtocols/reaperMaster';
import { BehringerXrMaster } from './mixerProtocols/behringerXrMaster';
import { MidasMaster } from './mixerProtocols/midasMaster';
import { GenericMidi } from './mixerProtocols/genericMidi';
import { LawoClient } from './mixerProtocols/EmberLawo';
import { CasparCGMaster } from './mixerProtocols/casparCGMaster';
import { StuderVistaMaster } from './mixerProtocols/StuderVistaEmber';
// Interface:
import { IMixerProtocolGeneric} from './MixerProtocolInterface'

export const MixerProtocolPresets: { [key: string]: IMixerProtocolGeneric } = Object.assign({
    ardourMaster: ArdourMaster,
    reaper: Reaper,
    reaperMaster: ReaperMaster,
    behringerxrmaster: BehringerXrMaster,
    midasMaster: MidasMaster,
    genericMidi: GenericMidi,
    lawoClient: LawoClient,
    studerVistaMaster: StuderVistaMaster,
}, CasparCGMaster !== undefined ? {
    casparCGMaster: CasparCGMaster
} : {});


export const MixerProtocolList = Object.getOwnPropertyNames(MixerProtocolPresets).map((preset) => {
    return {
        value: preset,
        label: MixerProtocolPresets[preset].label
    };
});
