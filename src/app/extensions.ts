import {RCXExtension} from "./rcxextension";

export const EXTENSIONS: RCXExtension[] = [
  {
    id: "MetaRelSubNetVis",
    name: "MetaRelSubNetVis",
    git:"https://github.com/frankkramer-lab/RCX-MetaRelSubNetVis",
    usage:"https://frankkramer-lab.github.io/MetaRelSubNetVis",
    package_name: "RCXMetaRelSubNetVis",
    description:"Aspect used for the MetaRelSubNetVis web-app to interactively compare subnetworks and share the visualized results with a customized link"
  },
  {
    id: "NetworkDifferences",
    name: "NetworkDifferences",
    git:"https://github.com/frankkramer-lab/RCX-NetworkDifferences",
    package_name: "RCXNetworkDifferences",
    description:"Create, document, and visualize differences between two networks"
  },

]
