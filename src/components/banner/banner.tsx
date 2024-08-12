import './banner.scss';
type propsType = {
  path: string;
};
export function Banner({ path }: propsType) {
  return <img src={path} alt="" className="banner" />;
}
