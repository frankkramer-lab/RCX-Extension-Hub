import { Extension} from "../interfaces/extension";

export const EXTENSIONS: Extension[] = [
  {
    id: "MetaRelSubNetVis",
    official: true,
    name: "MetaRelSubNetVis",
    git:"https://github.com/frankkramer-lab/RCX-MetaRelSubNetVis",
    usage:"https://frankkramer-lab.github.io/MetaRelSubNetVis",
    package_name: "RCXMetaRelSubNetVis",
    description:"Aspect used for the MetaRelSubNetVis web-app to interactively compare subnetworks and share the visualized results with a customized link"
  },
  {
    id: "NetworkDifferences",
    name: "Network differences",
    git:"https://github.com/frankkramer-lab/RCX-NetworkDifferences",
    package_name: "RCXNetworkDifferences",
    description:"Create, document, and visualize differences between two networks"
  },
]
