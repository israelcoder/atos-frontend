type Props = React.ComponentProps<'img'> & {
  alt: string;
};
export function Image(props: Props) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} />;
}
