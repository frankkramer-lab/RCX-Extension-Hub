import { Extension} from "../interfaces/extension";

export const EXTENSIONS: Extension[] = [
  {
    id: "MetaRelSubNetVis",
    official: true,
    name: "MetaRelSubNetVis aspect",
    git:"https://github.com/frankkramer-lab/RCX-MetaRelSubNetVis",
    install_git: "frankkramer-lab/RCX-MetaRelSubNetVis",
    usage:"https://frankkramer-lab.github.io/MetaRelSubNetVis",
    showcase: "https://www.ndexbio.org/viewer/networks/a420aaee-4be9-11ec-b3be-0ac135e8bacf",
    showcase_uuid: "a420aaee-4be9-11ec-b3be-0ac135e8bacf",
    package_name: "RCXMetaRelSubNetVis",
    aspect_name: "MetaRelSubNetVis",
    aspect_class: "MetaRelSubNetVisAspect",
    aspect_accession: "metaRelSubNetVis",
    description:"Aspect used for the MetaRelSubNetVis web-app to interactively compare subnetworks and share the visualized results with a customized link"
  },
  {
    id: "NetworkDifferences",
    official: true,
    name: "Network differences",
    git:"https://github.com/frankkramer-lab/RCX-NetworkDifferences",
    install_git: "frankkramer-lab/RCX-NetworkDifferences",
    package_name: "RCXNetworkDifferences",
    aspect_name: "NetworkDifferences",
    aspect_class: "NetworkDifferencesAspect",
    aspect_accession: "networkDifferences",
    description:"Create, document, and visualize differences between two networks"
  },

  {
    id: "NetworkProvenance",
    official: true,
    name: "Network provenace",
    git:"https://github.com/frankkramer-lab/RCX-NetworkProvenance",
    install_git: "frankkramer-lab/RCX-NetworkProvenance",
    package_name: "RCXNetworkProvenance",
    aspect_name: "NetworkProvenance",
    aspect_class: "NetworkProvenanceAspect",
    aspect_accession: "networkProvenance",
    description:"Legacy implementation of the deprecated official network provenance aspect"
  },
]
