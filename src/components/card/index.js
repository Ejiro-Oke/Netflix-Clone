import React, { useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureClose,
  FeatureText,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image
} from './styles/card'

const FeatureContext = createContext()

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false)
  const [itemFeature, setItemFeature] = useState(false)

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  )
}

Card.Group = ({ children, ...restProps }) => (
  <Group {...restProps}>{children}</Group>
)

Card.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Card.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
)

Card.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

Card.Entities = ({ children, ...restProps }) => (
  <Entities {...restProps}>{children}</Entities>
)

Card.Meta = ({ children, ...restProps }) => (
  <Meta {...restProps}>{children}</Meta>
)

Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext)

  return (
    <Item
      onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
      }}
      {...restProps}
    >
      {children}
    </Item>
  )
}

Card.Image = ({ ...restProps }) => (
  <Image {...restProps} />
)

Card.Feature = function CardFeature({ children, category, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)

  return showFeature ? (
    <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>

        {children}
      </Content>
    </Feature>
  ) : null
}

Card.propTypes = {
  children: PropTypes.any.isRequired
}

Card.Group.propTypes = {
  children: PropTypes.any.isRequired
}

Card.Title.propTypes = {
  children: PropTypes.string.isRequired
}

Card.SubTitle.propTypes = {
  children: PropTypes.any.isRequired
}

Card.Text.propTypes = {
  children: PropTypes.any.isRequired
}

Card.Entities.propTypes = {
  children: PropTypes.any.isRequired
}

Card.Meta.propTypes = {
  children: PropTypes.any.isRequired
}

Card.Item.propTypes = {
  item: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
}

Card.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

Card.Feature.propTypes = {
  category: PropTypes.string.isRequired,
  children: PropTypes.any
}