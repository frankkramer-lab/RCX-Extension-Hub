export interface Extension {
  id: string;
  name: string;
  package_name: string;
  aspect_name: string;
  aspect_class: string,
  aspect_accession: string,
  git: string;
  install_git?: string;
  usage?: string;
  description: string;
  showcase?: string; // example network
  showcase_uuid?: string;
  official?: boolean;

}
const defaults: Pick<Extension, 'official'> = {
  official: false
}

