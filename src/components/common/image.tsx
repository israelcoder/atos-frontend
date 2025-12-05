type Props = React.ComponentProps<'img'> & {
  alt: string;
};
export function Image(props: Props) {
  // eslint-disable-next-line
  return <img {...props} />;
}
