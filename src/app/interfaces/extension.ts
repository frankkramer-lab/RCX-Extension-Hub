export interface Extension {
  id: string;
  name: string;
  package_name: string;
  git: string;
  usage?: string;
  description: string;
  showcase?: string;
  official?: boolean;

}
const defaults: Pick<Extension, 'official'> = {
  official: false
}

