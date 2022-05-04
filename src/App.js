import React from 'react'
import { Button, Block, Hero } from './components'

const App = () => {
  return (
    <>
      <h1>Storybook, pirmas pratymas:</h1>
      <p>Sukurti komponentus: button, block ir hero.</p>
      <h2>Hero komponentu realizacija:</h2>
      <>
        <p>Default hero komponentas, parametrai: title="Title" subtitle="subtitle"</p>
        <Hero title="Title" subtitle="subtitle"/>
        <p>Success hero komponentas, parametrai: color="success" title="Success hero" subtitle="Success subtitle"</p>
        <Hero color="success" title="Success hero" subtitle="Success subtitle"/>
        <p>Danger hero komponentas, parametrai: color="danger" title="Danger hero" subtitle="Danger subtitle"</p>
        <Hero color="danger" title="Danger hero" subtitle="Danger subtitle"/>
      </>
      <h2>Block komponentu realizacija:</h2>
      <>
        <p>Default block komponentas.</p>
        <Block>Default</Block>
        <p>Primary block komponentas, parametrai: color="primary"</p>
        <Block color="primary">Primary spalva</Block>
        <p>Success block komponentas, parametrai: color="success"</p>
        <Block color="success">Success spalva</Block>
        <p>Danger block komponentas, parametrai: color="danger"</p>
        <Block color="danger">Danger spalva</Block>
      </>
      <h2>Button komponentu realizacija:</h2>
      <h3>Mygtuko paspaudimas pranesa koks yra nustatytas mytuko tipas</h3>
      <>
        <p>Default button komponentas.</p>
        <Button>Default</Button>
        <h3>Button su primary color variacijos</h3>
        <>
          <p>Button komponentas, parametrai: color="primary" type="button"</p>
          <Button color="primary" type="button">Primary button</Button>
          <p>Button komponentas, parametrai: color="primary" type="submit"</p>
          <Button color="primary" type="submit">Primary submit button</Button>
          <p>Button komponentas, parametrai: color="primary" type="reset"</p>
          <Button color="primary" type="reset">Primary reset button</Button>
        </>
        <h3>Button su success color variacijos</h3>
        <>
          <p>Button komponentas, parametrai: color="success" type="button"</p>
          <Button color="success" type="button">Success button</Button>
          <p>Button komponentas, parametrai: color="success" type="submit"</p>
          <Button color="success" type="submit">Success submit button</Button>
          <p>Button komponentas, parametrai: color="success" type="reset"</p>
          <Button color="success" type="reset">Success reset button</Button>
        </>
        <h3>Button su danger color variacijos</h3>
        <>
          <p>Button komponentas, parametrai: color="danger" type="button"</p>
          <Button color="danger" type="button">Danger button</Button>
          <p>Button komponentas, parametrai: color="danger" type="submit"</p>
          <Button color="danger" type="submit">Danger submit button</Button>
          <p>Button komponentas, parametrai: color="danger" type="reset"</p>
          <Button color="danger" type="reset">Danger reset button</Button>
        </>
      </>
    </>
  )
}

export default App