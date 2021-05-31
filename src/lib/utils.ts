/** Shorthand for setting default props of Load */
export function returnProps(props: any) {
  return !!props.data ? { props: { ...props }, maxage: 90 } : undefined;
}
