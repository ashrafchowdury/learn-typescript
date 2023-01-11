type ContinerType = {
    styles: React.CSSProperties
}

export const Container = (porps: ContinerType) => {
  return (
    <div style={porps.styles}>Container</div>
  )
}
