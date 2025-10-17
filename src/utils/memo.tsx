import React from 'react'

export const memo = React.memo as <P extends object>(
  Component: (props: P) => ReturnType<React.FunctionComponent>,
  propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
) => (props: P) => ReturnType<React.FunctionComponent>
