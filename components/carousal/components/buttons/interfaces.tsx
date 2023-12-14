export interface Props {
  next?: boolean;
  href: string;
}

export interface IProps extends Props {
  children: React.ReactNode;
  parentAction?: () => void;
}
